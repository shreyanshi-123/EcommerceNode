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

// Product
// const addProduct = require('../ProductAPI/addProduct');
// const getProduct = require('../ProductAPI/getProduct');
// const updateProduct = require('../ProductAPI/updateProduct');
// const deleteProduct = require('../ProductAPI/DeleteProduct');
// const getAllProducts = require('../ProductAPI/getAllProduct');



// router.post('/product', addProduct);
// router.get('/product', getAllProducts); 
// router.get('/product/:id', getProduct);
// router.put('/product/:id', updateProduct);
// router.delete('/product/:id', deleteProduct);


router.get('/get-category', GetCategory);
router.get('/get-user/:id', GetUser);       
router.post('/addCategory' , AddCategory);
router.delete('/deleteUser/:id', DeleteUser); 
router.post('/login', Login);
router.get('/user' , UserList);

// Upload middleware + user registration handler
// app.post('/upload', upload.single('profileImage'), AddUser);
router.put('/editUser/:id' , EditUser);
router.post('/register-user', AddUser);



module.exports = router;
