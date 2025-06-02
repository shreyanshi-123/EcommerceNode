const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const uploadDir = path.join(__dirname, '..', 'CategoryFolder')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

const storage = multer.diskStorage({

  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

// POST /api/upload - upload profile image
router.post('/', upload.single('image'), (req, res) => {
  // console.log('api hit')
  if (!req.file) return res.status(400).json({ msg: 'No file uploaded' })
  res.json({ filePath: `/CategoryFolder/${req.file.filename}` })
})

module.exports = router
