const db=require("../config/db");
const { UserModel } = require("../model/usermodel");
const {validationResult}=require("express-validator");

//GET STUDENT BY ID

const getStudentsByID =async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors.array())
        }
        else{
       
        const users=await UserModel.findByPk(req.params.id);
      
        return res.status(200).json(users)
        }
       } catch (error) {
        console.error(error);
        return res.status(500).json({error:error.message})
       }
        
  
};
module.exports={getStudentsByID};