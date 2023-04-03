const Product = require('../model/ProductModel')

//get all products
const getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//get single product
const getOneProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

//create a new product
const createProduct = async (req, res) => {
    const {name, price, stock, status} = req.body;

    if(!name || !price || !stock) {
        return res.status(400).json({error: "nama, harga, dan stok harus diisi"})
    }

    try {
        const product = await Product.create({name, price, stock, status})
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

//delete a workout
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.deleteOne({_id: req.params.id})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//update a workout
const updateProduct = async (req, res) => {
    try {
        const product = await Product.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createProduct,
    getProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}

