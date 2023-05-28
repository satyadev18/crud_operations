const express = require('express')
const router = express.Router();
const users = require("../models/userSchema")

// data registration backend process
router.post("/register",async(req,res)=>{

    const {name,email,age,mobile,work,address,description} = req.body;

    if(!name || !email || !age || !mobile || !work ||!address || !description){
        res.status(404).send("wrong request");
    }
    try {
        const preuser = await users.findOne({email:email})


        if(preuser){
            res.status(404).json("This user already exist");
        }else{
            const adduser = new users({
                name,email,age,mobile,work,address,description
            })
            await adduser.save();
            res.status(201).json(adduser);


        }

    } catch (error) {

        res.status(404).send(error);

    }
})


// get user data

router.get('/getdata',async (req,res)=>
{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)



    } catch (error) {
        res.status(404).send(error);

    }
})

// get individual user data
router.get('/getuser/:id',async (req,res)=>
{
    try {
        const {id} = req.params;
        const userindividual = await users.findById({_id:id})
        res.status(201).json(userindividual);



    } catch (error) {
        res.status(404).send(error);

    }
})


// update user

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updateduser = await users.
findByIdAndUpdate(id,req.body,{
            new:true
        })

        res.status(201).json(updateduser);

    } catch (error) {
        res.status(404).json(error.message);

    }
})










// delete

router.delete('/deleteuser/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteuser = await users.
findByIdAndDelete({_id:id})

        res.status(201).json(deleteuser);

    } catch (error) {
        res.status(404).json(error.message);

    }
})


module.exports =router