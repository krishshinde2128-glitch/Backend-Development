const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/student') {
        res.setHeader('Content-Type', 'application/json');
        const student = {
            "id": 101,
            "name": "John",
            "course": "BCA",
            "semester": 4,
            "city": "Mumbai"
        };
        res.end(JSON.stringify(student));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});