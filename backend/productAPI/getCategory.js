const Category = require('../models/category');  // Assuming you have a Category model

const GetCategory = async (req, res) => {
  try {
    // Fetch categories from the database (or any other data source)
    const categories = await Category.find();
    res.status(200).json(categories);  // Respond with the fetched categories
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Unable to fetch categories' });
  }
};

module.exports = GetCategory;
