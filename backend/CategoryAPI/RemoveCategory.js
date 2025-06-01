const Category = require('../models/category');
const fs = require('fs');
const path = require('path');

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    // Optional: Delete the image file from the server
    if (category.image) {
      const imagePath = path.join(__dirname, '..', 'uploads', path.basename(category.image));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Delete category from DB
    await Category.findByIdAndDelete(id);

    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = deleteCategory;
