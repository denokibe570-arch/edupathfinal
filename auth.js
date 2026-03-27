const jwt = require('jsonwebtoken');
function requireAdmin(req, res, next) {
  var header = req.headers.authorization || '';
  var token  = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
    next();
  } catch(err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
module.exports = { requireAdmin };
