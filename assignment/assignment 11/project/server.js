const express = require('express');
const mongoose = require('mongoose');
const teacherRouter = require('./router/teacherRouter');
const studentRouter = require('./router/studentRouter');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
