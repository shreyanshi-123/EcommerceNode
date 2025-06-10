const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');



// POST /api/admin/users with image upload
const allUser = async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User with this email already exists.');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Get uploaded file filename (if any)
        const image =  req.body.image;

        // console.log(image)
        // Create new user object
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            date: Date.now(),
            role: req.body.role,
            image: image,
        });

        // Save user
        await user.save();

        // Respond (exclude password)
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).send(userResponse);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error, please try again later.');
    }
};

module.exports = allUser;
