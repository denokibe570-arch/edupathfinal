require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const helmet    = require('helmet');
const morgan    = require('morgan');
const rateLimit = require('express-rate-limit');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(helmet({ crossOriginEmbedderPolicy: false, contentSecurityPolicy: false }));

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5500',
  'http://127.0.0.1:5500', 'null',
];
app.use(cors({
  origin: function(origin, cb) {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('CORS blocked: ' + origin));
  },
  credentials: true,
}));

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'test') app.use(morgan('[:method] :url :status :response-time ms'));

app.use(rateLimit({ windowMs: 15*60*1000, max: 500, standardHeaders: true, legacyHeaders: false }));
const payLimit = rateLimit({ windowMs: 15*60*1000, max: 20 });

app.get('/health', function(req, res) {
  res.json({ status: 'ok', version: '2.0.0', paystack: !!process.env.PAYSTACK_SECRET_KEY });
});

app.use('/api/courses',  require('./routes/courses'));
app.use('/api/students', require('./routes/students'));
app.use('/api/payment',  payLimit, require('./routes/payment'));
app.use('/api/stats',    require('./routes/stats'));

app.use(function(req, res) { res.status(404).json({ error: 'Not found: ' + req.method + ' ' + req.path }); });
app.use(function(err, req, res, _next) {
  if (process.env.NODE_ENV !== 'production') console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

app.listen(PORT, function() {
  console.log('\n EduPath AI Backend -> http://localhost:' + PORT);
  console.log('   Paystack: ' + (process.env.PAYSTACK_SECRET_KEY ? 'configured' : 'MISSING - set PAYSTACK_SECRET_KEY'));
  console.log('   DB:       ' + (process.env.DATABASE_URL ? 'configured' : 'MISSING - set DATABASE_URL') + '\n');
});

module.exports = app;
