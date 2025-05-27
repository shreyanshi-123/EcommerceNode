const Product = require('../models/product');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = updateProduct;
