const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
    const { name, course } = req.query;

    // Check if the query object is empty
    if (Object.keys(req.query).length === 0) {
        res.send('No search data provided.');
    } else {
        // Using <br> to format the output on separate lines in the browser
        res.send(`Name: ${name}<br>Course: ${course}`);
    }
});

app.listen(PORT, () => {
    console.log(`Assignment 2 server running on http://localhost:${PORT}`);
});