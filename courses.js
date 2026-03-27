const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  try {
    var q = req.query;
    var where = {};
    if (q.field)   where.field   = q.field;
    if (q.demand)  where.demand  = q.demand;
    if (q.cluster) where.cluster = q.cluster;
    if (q.uni)     where.uni     = q.uni;
    if (q.q) where.OR = [
      { name: { contains: q.q, mode: 'insensitive' } },
      { uni:  { contains: q.q, mode: 'insensitive' } },
      { code: { contains: q.q, mode: 'insensitive' } },
    ];
    var courses = await prisma.course.findMany({ where: where, orderBy: { cutoff2024: 'desc' } });
    res.json({ courses: courses, total: courses.length });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

router.get('/:code', async function(req, res) {
  try {
    var course = await prisma.course.findUnique({ where: { code: req.params.code } });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json({ course: course });
  } catch(err) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

module.exports = router;
