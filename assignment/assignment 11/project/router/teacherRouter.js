const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Teacher = require('../model/teacherModel');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, subject } = req.body;
    if (!name || !email || !password || !subject) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newTeacher = new Teacher({ name, email, password: hashedPassword, subject });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;