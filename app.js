const express = require('express');

const app = express();

app.get("/home", ()=>{
    console.log("This is home");
})

app.listen('3000', ()=>{
    console.log("Server is running!!!");
}) 

