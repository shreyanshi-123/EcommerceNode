const Product = require('../models/product');

const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;

    if (!product ) {
      return res.status(400).json({ message: 'product is required.' });
    }

    const gotproduct = await Product.findById(id);
    if (!gotproduct) {
      return res.status(404).json({ message: 'product not found.' });
    }

    // Update the fields of the product document
    gotproduct.product = product;

    // Check if image is provided and update it
    if (req.body.image) {
      gotproduct.images = `${req.body.image}`;
    } 
    console.log(gotproduct)

    const updated = await gotproduct.save();

   
    res.status(200).json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = updateproduct;
