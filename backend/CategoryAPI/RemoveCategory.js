const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).send('Category not found');
    }

    res.status(200).send('Category deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error, please try again later.');
  }
};
