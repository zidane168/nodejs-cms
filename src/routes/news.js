const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.get('/',                 newsController.index)

router.get('/add',              newsController.add)
router.post('/add',             newsController.add)

router.get('/:id/edit',         newsController.edit)
router.put('/:id',              newsController.edit)

router.delete('/:id',          newsController.delete)

router.get('/:slug',            newsController.view)


module.exports = router
