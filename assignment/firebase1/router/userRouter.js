// router/userRouter.js
const express = require('express');
const router = express.Router();
const db = require('../config/firebase');
const userSchema = require('../schema/userSchema');

router.post('/users', async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body);
        
        if (error) {
            return res.status(400).json({ error: error.details[0].message }); 
        }

        const docRef = await db.collection('users').add(value); 

        res.status(201).json({ 
            message: "User successfully added", 
            id: docRef.id 
        }); 

    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;