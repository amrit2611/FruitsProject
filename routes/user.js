const express = require("express");
const router = express.Router();
const UserModel = require('../models/User')

router.get('/home', (req, res) => {
    res.send({
        person1: {
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


// route to add data to mongodb
router.post('/add', (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.send(user);
    user.save()
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {

        })
})


// route to retrieve all data from mongodb
router.get('/all', async (req, res) => {
    const users = await UserModel.find();
    try {
        res.send(users);
    } catch (err) {
        res.send(err);
    }
})

// route to retrieve data only for a particular id
router.get('/user/:id', async (req,res)=>{
    const id = req.params.id
    const user = await UserModel.findById(id)
    try{
        res.send(user)
    }catch(err){
        res.send(err)
    }
})

// route to delete data from database
router.delete('/user/:id', async (req,res)=>{
    const id = req.params.id
    const deletedUser = await UserModel.deleteOne({
        _id:id
    })
    try{
        res.send(deletedUser)
    }catch(err){
        res.send(err)
    }
})

module.exports = router