const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require('../model/studentModel');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, course, age } = req.body;
    if (!name || !email || !password || !course || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({ name, email, password: hashedPassword, course, age });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;