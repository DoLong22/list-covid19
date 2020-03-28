const express = require('express');
const Controller = require('../controller/api.controller')
const router = express.Router()

router.get('/',Controller.search);
router.get('/',Controller.home)

module.exports = router