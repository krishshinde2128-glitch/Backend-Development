const express = require('express');
const app = express();

// Response time middleware
const responseTimeLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(req.method + ' ' + req.url + ' - ' + duration + ' ms');
  });

  next();
};

app.use(responseTimeLogger);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/products', (req, res) => {
  res.send('Product List');
});

app.get('/users', (req, res) => {
  res.send('User List');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});