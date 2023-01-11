const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/products')
.then(()=>{
    console.log("Database connected successfully!")
})
.catch((e)=>{
    console.log(e)
})