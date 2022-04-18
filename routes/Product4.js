var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')

var router = express.Router();

const ProductFunction=require('../controller/productController')

//syrups
router.get('/geteyedrop',check_auth,ProductFunction.geteyedropNameOnly)
 router.get('/:productId',check_auth,ProductFunction.getAlleyedropInfo)

 router.post('/addProducteyedrop',check_auth,ProductFunction.addProducteyedrop)

 router.delete('/deleteeyedrop/:id',check_auth,ProductFunction.deleteeyedrop)

 router.patch('/updateeyedrop/:id',check_auth,ProductFunction.updateeyedrop)
    





module.exports=router