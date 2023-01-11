const express = require('express')
const Product = require('../models/product')
const router = express.Router();

//for getting all products
router.get('/products', async (req, res)=>{
    try {
        const products = await Product.find({}, {_id : 0, __v : 0}).sort({price : 1})
        res.send(products)
    } catch (error) {
        res.status(501).send("Something bad happens internally!")
        console.log(error)
    }
})
//for getting the specific product
router.get('/products/:id', async (req, res)=>{
    try {
        const _id = req.params.id
        const products = await Product.findOne({_id}, {_id : 0, __v : 0})
        res.send(products)
    } catch (error) {
        res.status(501).send("Something bad happens internally!")
        console.log(error)
    }
})
// for creating a product
router.post('/products/create', async (req, res)=>{
    try {
        const product  = new Product(req.body)
        const pushingProduct = await product.save()
        res.status(200).send(pushingProduct)
    } catch (error) {
        console.log(error)
    }

})

//to delete a product
router.delete('/products/delete/:id', async (req, res)=>{
    try {
        const _id = req.params.id
        const deleteProduct = await Product.deleteOne({_id})
        res.status(200).send("Product delete successfullt!")
    } catch (error) {
        console.log(error)
    }
})


//to update a product details
router.put('/products/update/:id', async (req, res)=>{
    try {
        const _id = req.params.id
        const updateProduct = await Product.updateOne({_id}, {$set : req.body})
        const product = await Product.find({_id}, {_id : 0, __v : 0})
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router