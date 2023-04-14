const express = require('express');


const app = express();
app.use(express.json());


app.get('/home', (req, res)=>{
    res.send({
        person1:{
            id: 1,
            name: "Amrit",
            aim: "developer"
        },
        person2: {
            id: 2,
            name: "harsh",
            aim: "gate"
        }
    })
})

app.post('/add', (req, res)=>{
    res.send((req.body.person3.name));
})

app.listen('3001', ()=>{ 
    console.log("Server is running!!!"); 
}) 

