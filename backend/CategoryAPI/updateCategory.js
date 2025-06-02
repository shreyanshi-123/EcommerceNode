const Category = require('../models/category');

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    if (!category || category.trim() === '') {
      return res.status(400).json({ message: 'Category name is required.' });
    }

    const gotcategory = await Category.findById(id);
    if (!gotcategory) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    // Update the fields of the category document
    gotcategory.category = category;

    // Check if image is provided and update it
    if (req.body.image) {
      gotcategory.image = `${req.body.image}`;
    }

    const updated = await gotcategory.save();
    res.status(200).json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = updateCategory;
