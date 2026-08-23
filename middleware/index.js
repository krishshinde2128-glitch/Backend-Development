const express = require('express');
const middleware = require('./middlewear.js');
const app = express();
const PORT = 3000;

// const express = require('express')
// const app = express();
// const PORT = 8000;

// app.post('/sendData', (req,res)=>{
//     req.send(req.body)
//     console.log(req.body)
// })

// app.listen(PORT,()=>{
//     console.log(⁠ server is running on port ⁠+' '+PORT);


app.use(middleware);

app.get('/contact', (req, res) => {
    res.send('this is a contact page');
    console.log(' this is contact page ');
});

app.get('/about', (req, res) => {
    res.send('this is a about page');
    console.log(' this is about page ');
});

app.get('/home', (req, res) => {
    res.send('this is a home page');
    console.log(' this is home page ');
});
