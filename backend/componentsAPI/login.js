const { default: UserDashboard } = require('../../frontend/src/components/User/UserDashboard');
const { User, validate } = require('../models/user');

const getSingleUser = async (req, res) => {

   

    try {

    //      const name = await User.find(req.params.name);
    // console.log(req.params.name)
    // const email = await User.find(req.params.email);
    // console.log(req.params.email)

    // const password = await User.find(req.params.password);
    //  console.log(req.params.password)

 const user = User.find(u => (name === req.params.name || email === req.params.email) && password === req.params.password);
       

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: `User with email ${req.params.email} name ${req.params.email}  not found` });
        }

        // Return the found user
        res.json(user);
    } catch (err) {
        // Handle unexpected errors
        console.error(err);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = getSingleUser;
