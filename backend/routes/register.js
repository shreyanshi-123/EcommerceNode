const express = require('express');
const router = express.Router();
const GetCategory = require('../componentsAPI/getCategory');
const AddUser = require('../componentsAPI/user');
const GetUser = require('../componentsAPI/getUser');
const Login = require('../componentsAPI/login');

router.get('/get-category', GetCategory);
router.get('/get-user/:id', GetUser);       
router.post('/register-user', AddUser);
router.post('/login', Login);


module.exports = router;
