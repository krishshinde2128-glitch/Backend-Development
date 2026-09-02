var express = require('express')
var morgan = require('morgan')
const PORT = 3000
var app = express()

app.use(morgan('tiny'))

app.get('/', function (req, res) {
  res.send('hello, world!')
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
