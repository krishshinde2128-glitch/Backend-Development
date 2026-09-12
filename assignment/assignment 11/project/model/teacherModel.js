const mongoose = require('mongoose');
const teacherSchema = require('../schema/teacherSchema');

module.exports = mongoose.model('Teacher', teacherSchema);