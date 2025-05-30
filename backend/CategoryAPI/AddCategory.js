const category = require('../models/category');

const allcategories = async (req, res) => {
    console.log("addcate");

    try {
        const { categories } = req.body;

        // Basic validation
        if (!categories || categories.trim() === '') {
            return res.status(400).send('categories name is required.');
        }

        // Check if categories already exists by name
        let existingcategories = await category.findOne({ categories });
        if (existingcategories) {
            return res.status(400).send('categories with this name already exists.');
        }

        // Get image from uploaded file or from body (if URL or base64)
        let image = null;
        if (req.file && req.file.filename) {
            image = req.file.filename;  // multer uploaded filename
        } else if (req.body.image) {
            image = req.body.image;
        }

        // Create new categories document
        const newcategories = new categories({
            categories,
            image,
        });

        // Save categories to DB
        await newcategories.save();

        // Respond with new categories
        res.status(201).json(newcategories);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server error, please try again later.');
    }
};

module.exports = allcategories;
