const express = require("express");
const Product = require("../models/product.models.js")
const {getProduct,getProductById,postProduct,putProduct,deleteProduct} = require("../controller/product.controller.js")
const router = express.Router();

router
.get('/',getProduct)
.get('/:id',getProductById)
.post('/',postProduct)
.put('/:id',putProduct)
.delete('/:id',deleteProduct);

module.exports = router