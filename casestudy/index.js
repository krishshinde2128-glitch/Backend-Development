//consider you are working in amazon,once day your manager asked you to build a feature that can actually see te activity of the whole day , 
// that at whole api endpoint req has been made along with timestam of the req, then how you are going to impliment it
const express = require("express");
const fs = require("fs");
const PORT = 8008;
const app = express();

app.use((req, res, next) => {
    const timestamp = new Date();

    const log = `${timestamp} | ${req.method} | ${req.originalUrl}\n`;

    fs.appendFile("activity.log", log, (err) => {
        if (err) {
            console.log("Error writing log:", err);
        }
    });

    next();
});

// API endpoints
app.get("/", (req, res) => {
    res.send("Amazon API Server");
});

app.get("/products", (req, res) => {
    res.json({
        message: "Products fetched successfully"
    });
});

app.get("/orders", (req, res) => {
    res.json({
        message: "Orders fetched successfully"
    });
});

app.post("/login", (req, res) => {
    res.json({
        message: "Login successful"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});