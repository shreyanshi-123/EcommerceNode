const Category = require('../models/category');

const addCategory = async (req, res) => {
  try {
    const { categories } = req.body;

    if (!categories || categories.trim() === '') {
      return res.status(400).json({ message: 'Category name is required.' });
    }

    // Check if category already exists
    const existing = await Category.findOne({ categories });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists.' });
    }

    let image = '';
    if (req.file && req.file.filename) {
      image = `/uploads/${req.file.filename}`; // match your frontend usage
    }

    const newCategory = new Category({
      categories,
      image,
    });

    await newCategory.save();
    res.status(201).json({ message: 'Category added successfully', category: newCategory });
  } catch (err) {
    console.error('Add Category Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = addCategory;
