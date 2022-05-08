const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.get('/', newsController.index)
router.get('/test', newsController.test)

module.exports = router
