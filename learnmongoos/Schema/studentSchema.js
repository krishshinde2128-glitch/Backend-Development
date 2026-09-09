const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    age:{type:Number}
})

const UserModel = mongoose.model('student', userSchema);

module.exports = UserModel;