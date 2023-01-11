const express = require('express')
require('./db/connection') // connecting mongoDB database
const router = require('./controllors/product')
const app = express()
const port = process.env.PORT || 3000 // for local host

app.use(express.json())
app.use(router) // Routers

app.listen(port, ()=>{
    console.log("Server successfully connected!")
})