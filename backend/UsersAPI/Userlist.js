const { User } = require('../models/user');  // Assuming you have a User model

const GetCategory = async (req, res) => {
  try {
    // Fetch users from the database (or any other data source)
    const users = await User.find();
    res.status(200).json(users);  // Respond with the fetched users
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Unable to fetch users' });
  }
};

module.exports = GetCategory;
