const express = require('express')
const mongoose = require('mongoose')
//product schema

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        lowercase : true,
        unique : true
    },
    description: String,
    price : {
        type : Number,
        required : true,
        default : 0.0
    },
    discount : Number,
    categary : {
        major : {
            type : String,
            required : true
        },
        minor : {
            type : String
        }
    }, 
    brand : {
        type : String,
        required : true 
    }
})


const product = new mongoose.model('Product', productSchema)

module.exports = product
