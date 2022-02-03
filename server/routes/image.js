const express = require('express');
const router = express.Router();
const { getImage, postImage } = require('../controllers/image.controller');
const {upload} = require('../helper/image-uploader');

router.get(`/`, getImage);
router.post(`/upload`, upload.single('file'),postImage);

module.exports = router;