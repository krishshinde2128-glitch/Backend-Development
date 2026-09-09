const express = require('express');
  
const app = express();
const PORT = 3003;

const connectDB =  async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017')
        console.log('MongoDB connected')
    }catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
module.exports = connectDB; 