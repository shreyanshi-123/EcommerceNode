const Category = require('../models/category'); 

const GetSingleCategory = async (req, res) => {
    // console.log('getSinglecategory')
    try {
        
        

        // Find category by ID
        const findSingleCategory = await Category.findById(req.params.id);

        // Check if category exists
        if (!findSingleCategory) {
            return res.status(404).json({ message: `Category with ID ${req.params.id} not found` });
        }
// console.log(findSingleCategory)
        // Return the found category
        res.json(findSingleCategory);
    } catch (err) {
        // Handle unexpected errors
        console.error(err);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = GetSingleCategory;
