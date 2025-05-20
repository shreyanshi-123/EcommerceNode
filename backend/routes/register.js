const express = require('express');
const router = express.Router();
const GetCategory = require('../productAPI/getCategory');  // Import controller

// Define a route to GET categories
router.get('/get-category', GetCategory);

module.exports = router;
