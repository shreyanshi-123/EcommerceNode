const express = require('express');
const router = express.Router();
const GetCategory = require('../CategoryAPI/getCategory');
const AddUser = require('../UsersAPI/Adduser');
const GetUser = require('../UsersAPI/getUser');
const Login = require('../UsersAPI/login');
const UserList = require('../UsersAPI/Userlist');
const DeleteUser = require('../UsersAPI/DeleteUser');
const EditUser = require('../UsersAPI/editUser');
const AddCategory = require('../CategoryAPI/AddCategory');

const updateCategory = require('../CategoryAPI/updateCategory');
const GetSingleCategory = require('../CategoryAPI/GetsingleCategory');
const deleteCategory = require('../CategoryAPI/RemoveCategory');





// category
router.get('/get-category/:id', GetSingleCategory);
router.delete('/delete-category/:id', deleteCategory);
router.post('/addCategory', AddCategory);
router.get('/get-category', GetCategory);
router.post('/update-category/:id', updateCategory);




// users
router.get('/get-user/:id', GetUser);
router.delete('/deleteUser/:id', DeleteUser);
router.get('/user', UserList);
router.post('/editUser/:id', EditUser);
router.post('/register-user', AddUser);

// login
router.post('/login', Login);

// Upload middleware + user registration handler
// app.post('/upload', upload.single('profileImage'), AddUser);




module.exports = router;
