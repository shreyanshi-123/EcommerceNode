const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        // required: true,
        min: 8,
        max: 100

    },
    date: {
        type: Date,
        // required: true,
        default: Date.now
    },
    // car: {
    //     type: [String],
    //     required: true
    // },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    image: { type: String }

})

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).required().max(100),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(100).required(),
        car: Joi.array().items(Joi.string()),
        role: Joi.string().valid('admin', 'user').optional(),
        date: Joi.date().optional(),
       
         image: Joi.optional()
    })
    return schema.validate(user)
}
const User = mongoose.model('User', userSchema)
module.exports.validate = validateUser
module.exports.User = User