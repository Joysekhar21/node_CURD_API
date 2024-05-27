const express = require("express");
const mongoose  = require("mongoose");
const {connectDb} = require("./db/index.js")
const app = express();
const Product = require("./models/product.models.js")
const productRoute = require("./routes/product.route.js")
const dotenv = require("dotenv")
dotenv.config({
    path: './.env'
})


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products",productRoute)


app.get('/',(req,res)=>{
    return res.send("Hello this about page");
});


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Hello from PORT ${process.env.PORT}`)
    });
})
.catch((err)=>{
    console.log("Mongodb connection failed!!!",err)
})




