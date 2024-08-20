const db=require("../config/db")
const { UserModel } = require("../model/usermodel");
const {validationResult}=require("express-validator");


//GET ALL STUDENT LIST
const getStudents=async(req,res)=>{
  
    try {
       
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors.array())
        }
        else{
        const users=await UserModel.findAll();
      
        return res.status(200).json(users)
      
        }
       } catch (error) {
        console.error(error);
        return res.status(500).json({error:error.message})
       }
        
};
module.exports={getStudents};