const express = require('express');
const router = express.Router();
const API = require("../controllers/category.api");
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({});
let upload = multer({
  storage: storage,
}).single("image");

router.get('/', API.getAllCategory);
router.get('/:id', API.getCategoryByID);
router.post('/', upload,   API.createCategory);
router.patch('/:id', upload,  API.updateCategory);
router.delete('/:id', API.deleteCategory);
module.exports = router;
