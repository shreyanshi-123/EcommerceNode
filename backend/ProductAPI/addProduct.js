const  Product  = require('../models/product');

const addProduct = async (req, res) => {
   

  try {
    const { title, shortDescription, LongDescription, stock, sellingPrice, discountPrice, category, image, additionalInfo,featuredProduct } = req.body;

    if (!title || !shortDescription || !LongDescription || stock == null  || sellingPrice == null )  {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!additionalInfo) {
      return res.status(400).json({ error: 'No additional info ' });
    }
    

  if (req.body.discountPrice && req.body.sellingPrice < req.body.discountPrice ) {
      return res.status(400).json({ error: 'Discounted price cannot be more than selling price' });
    }
    const images = req.files.map(file => `/ProductFolder/${file.filename}`);
// console.log(additionalInfo)
// console.log(images)
    if (!images || images.length === 0) {
  return res.status(400).json({ error: 'Upload image of product' });
}

    const product = new Product({
      title,
      shortDescription,
      LongDescription,
      stock,
      sellingPrice,
      discountPrice,
      category,
      images:images,
      additionalInfo:additionalInfo
    });
  // console.log(product)
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
