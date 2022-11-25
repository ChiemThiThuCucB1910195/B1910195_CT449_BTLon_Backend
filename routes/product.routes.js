const express = require('express');
const router = express.Router();
const API = require("../controllers/product.api");
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb){
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});
let upload = multer({
  storage: storage,
}).single("image");

router.get('/', API.getAllProduct);
router.get('/:id', API.getProductByID);
router.post('/', upload,   API.createProduct);
router.patch('/:id', upload,  API.updateProduct);
router.delete('/:id', API.deleteProduct);
module.exports = router;