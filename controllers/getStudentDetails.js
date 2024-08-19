const db=require("../config/db")
const { UserModel } = require("../model/usermodel");


//GET ALL STUDENT LIST
const getStudents=async(req,res)=>{
  
    try {
       
        const users=await UserModel.findAll();
      
        return res.status(200).json(users)
      
        
       } catch (error) {
        console.error(error);
        return res.status(500).json({error:error.message})
       }
        
};
module.exports={getStudents};