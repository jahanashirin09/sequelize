const db=require("../config/db")
const { UserModel } = require("../model/usermodel");
const {validationResult}=require("express-validator");


//CREATE STUDENT

const createStudent=async(req,res)=>{

    try {

   //CREATE USER IN THE DATABASE
   const errors=validationResult(req);
   if(!errors.isEmpty()){
       res.json(errors.array())
   }
   else{
   const users=await UserModel.create(req.body);
   return res.status(200).json(users)
   }
        
    } catch (error) {
        console.error(error);
        res.status(400).json({error:error.message})
        
    }
   
}
module.exports={createStudent};

