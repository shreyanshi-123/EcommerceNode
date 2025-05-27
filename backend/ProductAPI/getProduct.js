const Product = require('../models/product');

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getProduct;
