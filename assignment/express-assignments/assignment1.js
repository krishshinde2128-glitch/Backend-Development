const express = require('express');
const app = express();
const router = express.Router();

// Middleware inside the router
const routerLogger = (req, res, next) => {
  const currentDateTime = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(req.method + ' ' + req.originalUrl + ' ' + currentDateTime);
  next();
};

// Attach middleware to router
router.use(routerLogger);

// Routes
router.get('/students', (req, res) => {
  res.send('Students List');
});

router.get('/courses', (req, res) => {
  res.send('Courses List');
});

router.get('/faculty', (req, res) => {
  res.send('Faculty List');
});

// Mount router on /api
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});