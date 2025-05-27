const express = require('express');
const router = express.Router();
const GetCategory = require('../componentsAPI/getCategory');
const AddUser = require('../componentsAPI/user');
const GetUser = require('../componentsAPI/getUser');
const Login = require('../componentsAPI/login');


// Product
const addProduct = require('../ProductAPI/addProduct');
const getProduct = require('../ProductAPI/getProduct');
const updateProduct = require('../ProductAPI/updateProduct');
const deleteProduct = require('../ProductAPI/DeleteProduct');
const getAllProducts = require('../ProductAPI/getAllProduct');



router.post('/product', addProduct);
router.get('/product', getAllProducts); 
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


router.get('/get-category', GetCategory);
router.get('/get-user/:id', GetUser);       
router.post('/register-user', AddUser);
router.post('/login', Login);


module.exports = router;
