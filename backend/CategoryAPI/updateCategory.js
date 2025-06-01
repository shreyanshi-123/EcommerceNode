const Category = require('../models/category');

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Category name is required.' });
    }

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    category.name = name;

    // Update image if a file is uploaded
    if (req.file) {
      category.image = `/uploads/${req.file.filename}`;
    }

    const updated = await category.save();
    res.status(200).json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = updateCategory;
