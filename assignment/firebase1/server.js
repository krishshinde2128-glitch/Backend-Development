const express = require('express');
const app = express();
const userRouter = require('./router/userRouter');

app.use(express.json());

app.use('/api', userRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});