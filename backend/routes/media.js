const express = require('express');
const { profilePhoto } = require( "../controllers/media");

const router = express.Router()

router.post("/", profilePhoto)



module.exports = router;