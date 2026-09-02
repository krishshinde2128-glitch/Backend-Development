const fs = require('fs');
const middleware = (req, res, next) => {
    const data = `Request Method: ${req.method}, Request URL: ${req.originalUrl}, Timestamp: ${new Date().toISOString()}\n`;
    fs.appendFile('amazon.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
    });
    next();
};

module.exports = middleware;   

