const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.get('/', newsController.index)

router.get('/add',      newsController.add)
router.post('/store',    newsController.store)
router.get('/:slug',    newsController.view)

module.exports = router
