const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  image: { type: String }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
