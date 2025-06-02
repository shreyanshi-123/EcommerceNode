const Category = require('../models/category');

const addCategory = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category || category.trim() === '') {
      return res.status(400).json({ message: 'Category name is required.' });
    }

    const trimmedCategory = category.trim();

    // Check if category already exists
    const existing = await Category.findOne({ category: trimmedCategory });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists.' });
    }

    let image = '';
    if (req.body && req.body.image) {
      image = `${req.body.image}`;
    }

    const newCategory = new Category({
      category: trimmedCategory,
      image: image,
    });

    console.log(newCategory);

    // Save category
    await newCategory.save();

    res.status(201).json({ message: 'Category added successfully', category: newCategory });
  } catch (err) {
    console.error('Add Category Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = addCategory;
