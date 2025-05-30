const { isEmpty } = require('validator');
const { User } = require('../models/user');

const UpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, role, image, password } = req.body;

        // Validate required fields
        if (!name || !email || !role) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Prepare the update object
        const updateData = { name, email, role };

        if (password) {
            updateData.password = password;
        }

        // Only add image if it exists and is not empty
        if (image && !isEmpty(image)) {
            updateData.image = image;
        }

        // Find the user and update it
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Respond with updated user
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = UpdateUser;
