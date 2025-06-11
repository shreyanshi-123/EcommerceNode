const Product = require('../models/product');

const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = { ...req.body };  // clone req.body to avoid mutations
    const sellingPrice = Number(product.sellingPrice);
    const discountPrice = Number(product.discountPrice);
    if (isNaN(sellingPrice) || isNaN(discountPrice)) {
      return res.status(400).json({ error: 'Invalid price values' });
    }
    if (sellingPrice < discountPrice) {
      return res.status(400).json({ error: 'Discounted price cannot be more than selling price' });
    }

    // multer puts files in req.files if any
    if (req.files && req.files.length > 0) {
      const images = req.files.map(
        (file) => `http://localhost:5000/ProductFolder/${file.filename}`
      );
      product.images = images; // update product.images with uploaded files URLs
    }

    // additionalInfo usually comes as JSON string, so parse it if needed
    if (product.additionalInfo && typeof product.additionalInfo === 'string') {
      try {
        product.additionalInfo = JSON.parse(product.additionalInfo);
      } catch (err) {
        // if parsing fails, keep it as string or handle error
        console.warn('Failed to parse additionalInfo JSON:', err);
      }
    }

    // if you want to store it as string, stringify it here (based on your schema)
    if (Array.isArray(product.additionalInfo)) {
      product.additionalInfo = JSON.stringify(product.additionalInfo);
    }

    // Now update the product document in DB
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = updateproduct;
