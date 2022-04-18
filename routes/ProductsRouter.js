var express = require('express');
const mongoose = require('mongoose')
const check_auth=require('../middleWare/check_auth')

var router = express.Router();

const ProductFunction=require('../controller/productController')
//injection
router.get('/getinjection',check_auth,ProductFunction.getinjectionNameOnly)

router.get('/:productID',check_auth,ProductFunction.getAllinjectionInfo)
router.post('/addProductInjection',check_auth,ProductFunction.addProductInjection)

router.delete('/deleteinjection/:id',check_auth,ProductFunction.deleteinjection)
router.patch('/updateinjection/:id',check_auth,ProductFunction.updateinjection)
    


module.exports=router