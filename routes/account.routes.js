const express = require("express");
const router = express.Router();
const API = require("../controllers/account.api");
const multer = require("multer");

// multer middleware
let storage = multer.diskStorage({});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", API.getAllAccount);
router.get("/:id", API.getAccountByID);
router.post("/", upload, API.createAccount);
router.patch("/:id", upload, API.updateAccount);
router.delete("/:id", API.deleteAccount);
module.exports = router;
