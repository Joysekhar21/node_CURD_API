const mongoose = require("mongoose")

const connectDb =   async ()=>{
    try {
       const mongoCo = await mongoose.connect(`${process.env.MONGOCONNECTED}`)
       console.log(`\nconnected to the database at host : ${mongoCo.connection.host}`)
    } catch (error) {
        console.log("Mongodb connection error",error)
    }
}       

module.exports = {
    connectDb
}