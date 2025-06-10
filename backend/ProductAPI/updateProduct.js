const Product = require('../models/product');

const updateProduct = async (req, res) => {
  try {
     const { id } = req.params;
    const { product } = req.body;
console.log('product',product)
    const updatedProduct = await Product.findById(id);


    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
updatedProduct = product

console.log('updatedProduct',updatedProduct)
    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = updateProduct;
