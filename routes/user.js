const express = require("express");
const router = express.Router();

router.get('/home', (req, res)=>{
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

router.post('/add', (req, res)=>{
    res.send((req.body.person3.name));
})

module.exports = router;