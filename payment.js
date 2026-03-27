const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/payment/verify
router.post('/verify', async function(req, res) {
  var reference = req.body.reference;
  var email     = req.body.email;
  var sessionId = req.body.sessionId || null;

  if (!reference || !email) {
    return res.status(400).json({ success: false, error: 'reference and email are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address' });
  }

  email = email.toLowerCase().trim();

  // Idempotency: already verified?
  var alreadyPaid = await prisma.paidUser.findUnique({ where: { reference: reference } });
  if (alreadyPaid) {
    return res.json({ success: true, message: 'Payment already verified', alreadyPaid: true });
  }

  var SECRET = process.env.PAYSTACK_SECRET_KEY;

  // Test mode: no secret key set
  if (!SECRET) {
    if (reference.startsWith('TEST_')) {
      await prisma.paidUser.create({ data: { email: email, reference: reference, amount: 5000, sessionId: sessionId } });
      if (sessionId) await prisma.session.updateMany({ where: { sessionId: sessionId }, data: { email: email } });
      console.log('TEST payment approved:', email, reference);
      return res.json({ success: true, message: 'Test payment verified - full access granted' });
    }
    return res.status(500).json({ success: false, error: 'Payment service not configured. Set PAYSTACK_SECRET_KEY.' });
  }

  try {
    var paystackRes = await fetch(
      'https://api.paystack.co/transaction/verify/' + encodeURIComponent(reference),
      { headers: { Authorization: 'Bearer ' + SECRET, 'Content-Type': 'application/json' } }
    );
    var data = await paystackRes.json();

    // Log attempt
    await prisma.paymentAttempt.upsert({
      where:  { reference: reference },
      update: { status: (data.data && data.data.status) || 'failed' },
      create: { reference: reference, email: email, status: (data.data && data.data.status) || 'failed', amount: (data.data && data.data.amount) || 0 },
    });

    if (!data.data || data.data.status !== 'success') {
      return res.json({
        success: false,
        error:   'Payment was not successful. Status: ' + (data.data && data.data.status || 'unknown'),
      });
    }

    // Amount check (default 5000 kobo = KES 50)
    var expected = parseInt(process.env.PAYSTACK_AMOUNT_KOBO || '5000');
    if (data.data.amount < expected) {
      return res.json({ success: false, error: 'Payment amount does not match. Please contact support.' });
    }

    // Save paid user
    await prisma.paidUser.create({
      data: {
        email:     email,
        reference: reference,
        amount:    data.data.amount,
        currency:  data.data.currency || 'KES',
        sessionId: sessionId,
      },
    });

    // Link session to email
    if (sessionId) {
      await prisma.session.updateMany({ where: { sessionId: sessionId }, data: { email: email } });
    }

    console.log('Payment verified:', email, reference, data.data.amount);
    return res.json({ success: true, message: 'Payment verified. Full access unlocked!' });

  } catch(err) {
    console.error('Paystack verification error:', err);
    return res.status(500).json({ success: false, error: 'Could not verify payment. Please try again or contact support.' });
  }
});

// GET /api/payment/check-access?email=...
router.get('/check-access', async function(req, res) {
  var email = req.query.email;
  if (!email) return res.json({ paid: false });
  try {
    var paid = await prisma.paidUser.findUnique({
      where:  { email: email.toLowerCase().trim() },
      select: { paidAt: true },
    });
    res.json({ paid: !!paid, paidAt: paid ? paid.paidAt : null });
  } catch(err) {
    res.json({ paid: false });
  }
});

// GET /api/payment/stats
router.get('/stats', async function(req, res) {
  try {
    var total = await prisma.paidUser.count();
    var today = await prisma.paidUser.count({
      where: { paidAt: { gte: new Date(new Date().setHours(0,0,0,0)) } },
    });
    res.json({ totalPaid: total, paidToday: today });
  } catch(err) {
    res.json({ totalPaid: 0, paidToday: 0 });
  }
});

module.exports = router;
