const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/session', async function(req, res) {
  try {
    var b = req.body;
    var sid = b.sessionId;
    if (sid) {
      var session = await prisma.session.upsert({
        where:  { sessionId: sid },
        update: {
          ...(b.firstName   && { firstName: b.firstName }),
          ...(b.email       && { email: b.email.toLowerCase().trim() }),
          ...(b.gradesJson  && { gradesJson: b.gradesJson }),
          ...(b.resultsJson && { resultsJson: b.resultsJson }),
          lastSeen: new Date(),
        },
        create: { sessionId: sid, firstName: b.firstName||null, email: b.email||null, gradesJson: b.gradesJson||null, resultsJson: b.resultsJson||null },
      });
      return res.json({ session: { sessionId: session.sessionId } });
    }
    var session = await prisma.session.create({ data: { firstName: b.firstName||null, email: b.email||null, gradesJson: b.gradesJson||null, resultsJson: b.resultsJson||null } });
    res.status(201).json({ session: { sessionId: session.sessionId } });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save session' });
  }
});

router.post('/ai-query', async function(req, res) {
  try {
    var b = req.body;
    if (!b.sessionId || !b.role || !b.content) return res.status(400).json({ error: 'sessionId, role and content required' });
    await prisma.aiMessage.create({ data: { sessionId: b.sessionId, role: b.role, content: b.content } });
    await prisma.session.updateMany({ where: { sessionId: b.sessionId }, data: { aiQueries: { increment: 1 } } });
    res.json({ logged: true });
  } catch(err) {
    res.status(500).json({ error: 'Failed to log AI query' });
  }
});

module.exports = router;
