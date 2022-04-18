var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')
var router = express.Router();

const ProductFunction=require('../controller/productController')
//ointment

router.get('/getointment',check_auth,ProductFunction.getointmentNameOnly)
router.get('/:productId',check_auth,ProductFunction.getAllointmentInfo)

router.post('/addProductointment',check_auth,ProductFunction.addProductointment)

router.delete('/deleteointment/:id',check_auth,ProductFunction.deleteointment)

router.patch('/updateointment/:id',check_auth,ProductFunction.updateointment)
    
//

module.exports=router