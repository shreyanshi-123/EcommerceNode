const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getAllProducts;
