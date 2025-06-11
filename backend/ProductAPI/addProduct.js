const  Product  = require('../models/product');

const addProduct = async (req, res) => {
   

  try {
    const { title, shortDescription, LongDescription, stock, sellingPrice, discountPrice, category, image, additionalInfo } = req.body;
// console.log(req.body.image)
    if (!title || !shortDescription || !LongDescription || stock == null || sellingPrice == null )  {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!additionalInfo) {
      return res.status(400).json({ msg: 'No additional info ' });
    }
    //  if (!req.files || req.files.length ) {
    //   return res.status(400).json({ msg: 'Upload image of product' });
    // }

  if (req.body.sellingPrice < req.body.discountPrice ) {
      return res.status(400).json({ error: 'Discounted price cannot be more than selling price' });
    }
    const images = req.files.map(file => `/ProductFolder/${file.filename}`);
console.log(additionalInfo)

    
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
  console.log(product)
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
