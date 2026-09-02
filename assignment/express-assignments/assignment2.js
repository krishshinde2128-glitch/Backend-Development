const express = require('express');
const app = express();

// Global middleware
const logger = (req, res, next) => {
  const currentDateTime = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(req.method + ' ' + req.url + ' ' + currentDateTime);
  next();
};

// Use middleware for all routes
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Information');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});