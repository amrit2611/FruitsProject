const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv/config.js')


const app = express();
app.use(express.json());
const url = process.env.DB;


const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(url)
        console.log(`DB connected: ${conn.connection.host}`);
    }
    catch (error){
        console.log(error.message);
    }
}
connectDB()

const userRoutes = require("./routes/user.js");  


// The /api/ is the prefix we have added to our url

app.use("/api/", userRoutes)

app.listen('3000', ()=>{
    console.log("Server is running!!!");
}) 