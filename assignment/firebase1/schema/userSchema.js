const Joi = require('joi');

const userSchema = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().email().required(),
    Age: Joi.number().integer().min(1).max(120).required(),
    Course: Joi.string().required()
});

module.exports = userSchema;