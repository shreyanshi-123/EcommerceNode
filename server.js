const path = require('path');
const express = require('express');
const cloudinary = require('cloudinary');
const app = require('./backend/app');
const connectDatabase = require('./backend/config/database');
const PORT = process.env.PORT || 5000;
const http = require('http');

// // UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

connectDatabase();

// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // deployment
__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '/frontend/build')))
    // app.get('*', (req, res) => {
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });

    // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

} else {

    app.get('/', (req, res) => {
        res.send('Server is Running! ');
    });
}

// // const server = app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`)
// // });

const server = http.createServer(app).listen(PORT);

// // Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {

    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});


// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads'); // Destination folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//   },
// });

// const upload = multer({ storage: storage });
// app.use(express.json());
// app.use(express.static('public')); // Serve static files

// app.post('/upload', upload.single('image'), (req, res) => {
//   res.send({ message: 'Image uploaded successfully', filePath: `/uploads/${req.file.filename}` });
// });

app.listen(5000, () => console.log('Server listening on port 5000'));