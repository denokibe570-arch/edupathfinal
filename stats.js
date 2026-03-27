const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  try {
    var results = await Promise.all([
      prisma.course.count(),
      prisma.university.count(),
      prisma.session.count(),
      prisma.aiMessage.count({ where: { role: 'user' } }),
      prisma.course.count({ where: { demand: 'high' } }),
      prisma.paidUser.count(),
    ]);
    res.json({
      courses: results[0], universities: results[1], sessions: results[2],
      aiQueries: results[3], highDemand: results[4], paidUsers: results[5],
    });
  } catch(err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
