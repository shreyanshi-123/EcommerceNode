const { array } = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,

  },
  shortDescription: {
    type: String,
    required: true,
  },
  LongDescription: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be negative'],
  },
  sellingPrice: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
  },
  discountPrice: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: String,
    enum: ['Men', 'Women', 'Bags', 'Shoes', 'Jwellery', 'Glasses']
  },
  additionalInfo: String,
  images: [String],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
