import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})



connectDB()







/*
Normal approach
import express from "express";

const app = express()

( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })

        const port = process.env.PORT || 5000;
        
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT} 🔥`);
        })
    }
    catch (error){
        console.error("ERROR: ",error)
        throw error
    }

})()

*/