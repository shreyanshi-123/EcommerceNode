const Product = require('../models/product');

const addProduct = async (req, res) => {
  try {
    const { name, image, category, stock, sellingPrice, review } = req.body;

    // if (!name || !image || !category || stock == null || sellingPrice == null) {
    //   return res.status(400).json({ error: 'All fields except review are required' });
    // }

    const product = new Product({
      name,
      image,
      category,
      stock,
      sellingPrice,
      review: Array.isArray(review) ? review : [],
    });

    await product.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = addProduct;
