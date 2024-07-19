// backend/routes/upload.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinaryConfig');
const authenticateToken = require('../middleware/authenticateToken');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'MSC_admin',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const upload = multer({ storage: storage });

router.post('/', authenticateToken, upload.single('file'), (req, res) => {
  if (req.file && req.file.path) {
    res.json({ url: req.file.path });
  } else {
    res.status(400).json({ message: 'Failed to upload image' });
  }
});

module.exports = router;
