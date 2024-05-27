const Product = require("../models/product.models")

const getProduct = async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProductById = async (req,res)=>{
    try {
        const id = req.params.id
        const productId = await Product.findById(id)
        res.status(200).json(productId)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const postProduct = async (req,res)=>{
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const putProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: "Product Not found"})
        }
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const deleteProduct =  async(req,res)=>{
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product Not found"})
        }
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProduct,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
}