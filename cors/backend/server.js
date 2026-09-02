const express = require("express");
const cors = require("cors");
const fs = require("fs");
const PORT = 5000
const app = express();

app.use(cors());

app.get("/home", (req, res) => {
    const data = fs.readFileSync("data.json", "utf-8");
    res.json(JSON.parse(data));
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});