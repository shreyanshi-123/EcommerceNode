const { array, boolean } = require('joi');
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
  type: mongoose.Schema.Types.Mixed, // or [Number, String] but Mixed is easier
  required: false,
   min: [0, 'Stock cannot be negative']
},

  // stock: {
  //   type: Number,
  //   required: false,
  //   // default: ['in stock'],
  //   min: [0, 'Stock cannot be negative'],
  // },
  sellingPrice: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
  },
  discountPrice: {
    type: Number,
    required: false,
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: String,
    enum: ['Men', 'Women', 'Bags', 'Shoes', 'Jwellery', 'Glasses']
  },
  featuredProduct: {
    type: Boolean,
  },

  additionalInfo: String,
  images: [String],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
