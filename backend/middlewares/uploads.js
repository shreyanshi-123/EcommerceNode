// const multer = require('multer');
// const path = require('path');

// const uploadDir = path.join(__dirname, '..', 'CategoryFolder')
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir)
// }

// // Define storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Ensure this folder exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// // Optional: file type filter
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png|gif/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);
//   if (mimetype && extname) return cb(null, true);
//   cb(new Error('Only image files are allowed!'));
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB
// });

// module.exports = upload;
