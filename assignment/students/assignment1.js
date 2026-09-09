const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    res.send(`Student ID: ${studentId}`);
});

app.listen(PORT, () => {
    console.log(`Assignment 1 server running on http://localhost:${PORT}`);
});