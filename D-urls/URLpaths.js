const express = require("express")
const router = express.Router();
const fs = require('fs');
const accurls = require('./account.js')

router.use(accurls)
module.exports = router;