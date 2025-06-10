const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

var corsOptions = {
    origin: '*',
};
  
app.use(cors(corsOptions));
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/CategoryFolder', express.static(path.join(__dirname, 'CategoryFolder')))
app.use('/ProductFolder', express.static(path.join(__dirname, 'ProductFolder')))

const categoryUpload = require('./middlewares/categoryauth.js');
const uploadRoutes = require('./routes/upload.js')
const Routes = require('./routes/register.js');



app.use('/api/CategoryImage', categoryUpload)
app.use('/api/upload', uploadRoutes)
app.use('/api', Routes);


module.exports = app;