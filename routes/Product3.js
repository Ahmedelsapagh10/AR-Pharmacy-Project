var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')

var router = express.Router();

const ProductFunction=require('../controller/productController')

//syrups
router.get('/getsyrups',check_auth,ProductFunction.getsyrupsNameOnly)
 router.get('/:productId',check_auth,ProductFunction.getAllsyrupsInfo)

 router.post('/addProductsyrups',check_auth,ProductFunction.addProductsyrups)

 router.delete('/deletesyrups/:id',check_auth,ProductFunction.deletesyrups)

 router.patch('/updatesyrups/:id',check_auth,ProductFunction.updatesyrups)
    





module.exports=router