const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World from the GET route!'
    });
});

app.post('/', (req, res) => {
    const clientData = req.body;
    res.status(201).json({
        message: 'Hello World from the POST route!',
        receivedData: clientData
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});