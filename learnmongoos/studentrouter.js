const express = require('express');
const app = express();
const router = express.Router();
const UserModel = require('../Schema/studentSchema');
const bcrypt = require('bcrypt');

userrouter.post('/send', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const hashedPass = await bcrypt.hash(password, 5);
        const val = await UserModel.create({ name, email, age, password: hashedPass})
        await val.save();
        res.send(val);
    } catch (err) {
        res.send({ msg: err.message });
    }
});
        
