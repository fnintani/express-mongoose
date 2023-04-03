const router = require('express').Router()
const {createProduct, getProducts, getOneProduct, updateProduct, deleteProduct} = require('../controller/productController')

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.post('/product', createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router;