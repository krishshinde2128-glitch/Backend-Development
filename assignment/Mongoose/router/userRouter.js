const express = require('express');
const mongoose = require('mongoose'); 
const User = require('../model/userModel');
const router = express.Router();

// PART 1 ROUTES 

router.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ 
            message: "User added successfully", 
            user: newUser 
        });
    } catch (error) {
        res.status(400).json({ message: "Error adding user", error: error.message });
    }
});

router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
});

// PART 2 ROUTES 
router.patch('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid MongoDB ID" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });

    } catch (error) {
        res.status(500).json({ message: "Database error", error: error.message });
    }
});

router.delete('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid MongoDB ID" });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Database error", error: error.message });
    }
});

module.exports = router;