const express = require('express')
const router = express.Router();
const productController = require('../app/controllers/ProductController')

router.get('/',                 productController.index)

router.get('/add',              productController.add)
router.post('/add',             productController.add)

router.get('/:id/edit',         productController.edit)
router.put('/:id',              productController.edit)

router.delete('/:id',          productController.delete)

router.get('/:slug',            productController.view)


module.exports = router
