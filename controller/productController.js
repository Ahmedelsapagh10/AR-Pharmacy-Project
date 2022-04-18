const injectionModel = require('../models/ProductSchema')
const ointmentModel = require('../models/ProductSchema2')
const syrupsModel=require('../models/ProductSchema3')
const EyedropModel=require('../models/ProductSchema4')
const tabletsModel=require('../models/ProductSchema5')
const capsulsModel=require('../models/ProductSchema6')

const mongoose=require('mongoose')
//injection
const addProductInjection = (req, res, next) => {

    //add to injection Section
    const inj = new injectionModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    inj.save().then(
        data => {
            res.status(200).json({
                massage: "InJection is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}

const getinjectionNameOnly = (req, res, next) => {
    injectionModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                          
                            name: products.name,
                            price: products.price,
                            image:products.image,                            
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const getAllinjectionInfo = (req, res, next) => {
    injectionModel.find({_id:req.params.productID}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deleteinjection = (req, res, next) => {
    injectionModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}

const updateinjection = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    injectionModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}

//ointment

const getointmentNameOnly = (req, res, next) => {
    ointmentModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                            name: products.name,
                            price: products.price,
                            image:products.image,   
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products2/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}
const addProductointment = (req, res, next) => {

   
    const ointment = new ointmentModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    ointment.save().then(
        data => {
            res.status(200).json({
                massage: "ointment is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const getAllointmentInfo = (req, res, next) => {
    ointmentModel.find({_id:req.params.productId}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deleteointment= (req, res, next) => {
    ointmentModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const updateointment = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    ointmentModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}
//syrups
const getsyrupsNameOnly = (req, res, next) => {
    syrupsModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                            name: products.name,
                            image:products.image,   
                            price: products.price,
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products3/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}
const addProductsyrups = (req, res, next) => {

   
    const syrups = new syrupsModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    syrups.save().then(
        data => {
            res.status(200).json({
                massage: "syrups is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const getAllsyrupsInfo = (req, res, next) => {
    syrupsModel.find({_id:req.params.productId}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deletesyrups= (req, res, next) => {
    syrupsModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const updatesyrups = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    syrupsModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}

//eyeDrop
const geteyedropNameOnly = (req, res, next) => {
    EyedropModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                            name: products.name,
                            price: products.price,
                            image:products.image,   
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products4/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}
const addProducteyedrop = (req, res, next) => {

    
    const eyedrop = new EyedropModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    eyedrop.save().then(
        data => {
            res.status(200).json({
                massage: "EyeDrop is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const getAlleyedropInfo = (req, res, next) => {
    EyedropModel.find({_id:req.params.productId}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deleteeyedrop=(req, res, next) => {
    EyedropModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const updateeyedrop = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    EyedropModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}


//tables
const gettablesNameOnly = (req, res, next) => {
    tabletsModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                            name: products.name,
                            price: products.price,
                            image:products.image,   
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products5/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}
const addProducttables = (req, res, next) => {

   
    const tables = new tabletsModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    tables.save().then(
        data => {
            res.status(200).json({
                massage: "Tables is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const getAlltablesInfo = (req, res, next) => {
    tabletsModel.find({_id:req.params.productId}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deletetables=(req, res, next) => {
    tabletsModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const updatetables = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    tabletsModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}



//capsuls
const getcapsulsNameOnly = (req, res, next) => {
    capsulsModel.find().select('_id name image').
        then(
            products => {
                const Response = {
                    products: products.map(products => {
                        return {
                            name: products.name,
                            price: products.price,
                            image:products.image,   
                            Composition:req.body.Composition,
                            effectiveMaterial: products.effectiveMaterial,
                            alternative: products.alternative,
                            indication: products.indication,
                            _id:products._id,
                            url: {
                                type: 'GET',
                                url: 'localhost:3000/products6/' + products._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    products: Response
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}
const addProductcapsuls = (req, res, next) => {

   
    const capsuls = new capsulsModel({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        image:req.body.image,
        price: req.body.price,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
    })
    capsuls.save().then(
        data => {
            res.status(200).json({
                massage: "Capsuls is added",
                TheProduct:data
            })
            console.log(data)
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const getAllcapsulsInfo = (req, res, next) => {
    capsulsModel.find({_id:req.params.productId}).
        then(products => {
                res.status(200).json({
                    products: products
                })
            }
        ).catch(
            err => {
                res.status(404).json({
                    massage: err
                })
            }
        )

}

const deletecapsuls=(req, res, next) => {
    capsulsModel.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            if (product) {
                res.status(200).json({
                    massage: "Product is deleted"
                })
            } else {
                res.status(404).json({
                    massage: "Product is Already Deleted.."
                })
            }

        }
    ).catch(
        err => {
            res.status(404).json({
                massage: err
            })
        }
    )

}
const updatecapsuls = (req, res, next) => {

    const NewProduct = {
    
        name: req.body.name,
        price: req.body.price,
        image:req.file.path,
        Composition:req.body.Composition,
        effectiveMaterial: req.body.effectiveMaterial,
        alternative: req.body.alternative,
        indication: req.body.indication,
        
    };

    capsulsModel.findOneAndUpdate({ _id: req.params.id }, { $set: NewProduct }).then(
        product => {
            if (product) {
                res.status(202).json({
                    massage: "Product is Updated."
                })
            } else {
                res.status(404).json({
                    massage: "Product is not Found in database"
                })
            }
        }

    ).catch(
        err => {
            res.status(404).json({
                massage: err,
                m:"no"
            })
        }
    )

}




module.exports = {
    //injection
    addProductInjection: addProductInjection,
    getinjectionNameOnly: getinjectionNameOnly,
    deleteinjection: deleteinjection,
    updateinjection: updateinjection,
    getAllinjectionInfo: getAllinjectionInfo,
    //ointment
    getointmentNameOnly:getointmentNameOnly,
    addProductointment:addProductointment,
    getAllointmentInfo:getAllointmentInfo,
    deleteointment:deleteointment,
    updateointment:updateointment,
    //syrups
    getsyrupsNameOnly:getsyrupsNameOnly,
    addProductsyrups:addProductsyrups,
    getAllsyrupsInfo:getAllsyrupsInfo,
    deletesyrups:deletesyrups,
    updatesyrups:updatesyrups,
    //eyedrop
    geteyedropNameOnly:geteyedropNameOnly,
    addProducteyedrop:addProducteyedrop,
    getAlleyedropInfo:getAlleyedropInfo,
    deleteeyedrop:deleteeyedrop,
    updateeyedrop:updateeyedrop,
    //tables
    gettablesNameOnly:gettablesNameOnly,
    addProducttables:addProducttables,
    getAlltablesInfo:getAlltablesInfo,
    deletetables:deletetables,
    updatetables:updatetables,
    //capsuls
    getcapsulsNameOnly:getcapsulsNameOnly,
    addProductcapsuls:addProductcapsuls,
    getAllcapsulsInfo:getAllcapsulsInfo,
    deletecapsuls:deletecapsuls,
    updatecapsuls:updatecapsuls
}