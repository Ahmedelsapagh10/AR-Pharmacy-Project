var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')
var router = express.Router();

const ProductFunction=require('../controller/productController')

//syrups
 router.get('/getcapsuls',check_auth,ProductFunction.getcapsulsNameOnly)
  router.get('/:productId',check_auth,ProductFunction.getAllcapsulsInfo)

  router.post('/addProductcapsuls',check_auth,ProductFunction.addProductcapsuls)

  router.delete('/deletecapsuls/:id',check_auth,ProductFunction.deletecapsuls)

  router.patch('/updatecapsuls/:id',check_auth,ProductFunction.updatecapsuls)
 
module.exports=router