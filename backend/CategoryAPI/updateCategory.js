const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { categories, image } = req.body;

    // Basic validation
    if (!categories || categories.trim() === '') {
      return res.status(400).send('Category name is required.');
    }

    // Find and update the category
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { categories, image },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).send('Category not found');
    }

    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error, please try again later.');
  }
};
