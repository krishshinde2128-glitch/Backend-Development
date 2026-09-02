const express = require('express');
const app = express();
const PORT = 3000;

// Task 5: Middleware to log method and URL for every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Task 1: Basic Routes
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});

// Task 2: Route Parameter (Dynamic Route)
app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

// Task 3: Multiple Route Parameters
app.get('/product/:id/:category', (req, res) => {
  const { id, category } = req.params;
  res.send(`Product ID: ${id}, Category: ${category}`);
});

// Task 4: Query Parameters
app.get('/search', (req, res) => {
  const name = req.query.name;
  const role = req.query.role;
  res.send(`Name: ${name}, Role: ${role}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});