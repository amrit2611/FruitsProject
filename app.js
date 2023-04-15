const express = require('express');


const app = express();
app.use(express.json());

const userRoutes = require("./routes/user.js");


// The /api/ is the prefix we have added to our url

app.use("/api/", userRoutes)

app.listen('3000', ()=>{
    console.log("Server is running!!!"); 
}) 

