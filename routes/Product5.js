var express = require('express');
const mongoose = require('mongoose')
const check_auth = require('../middleWare/check_auth')


var router = express.Router();

const ProductFunction = require('../controller/productController')

//syrups
router.get('/gettables', check_auth, ProductFunction.gettablesNameOnly)
router.get('/:productId', check_auth, ProductFunction.getAlltablesInfo)

router.post('/addProducttables', check_auth, ProductFunction.addProducttables)

router.delete('/deletetables/:id', check_auth, ProductFunction.deletetables)

router.patch('/updatetables/:id', check_auth, ProductFunction.updatetables)

module.exports = router