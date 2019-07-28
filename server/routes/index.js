const router = require('express').Router()
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const cartRoutes = require('../routes/cartRoutes')

router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/carts', cartRoutes)


module.exports = router