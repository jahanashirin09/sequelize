const db=require("../config/db")
const {validationResult}=require("express-validator");
const { UserModel } = require("../model/usermodel");

//DELETE STUDENT


const deleteStudent=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors.array())
        }
        else{
       
        const user=await UserModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error:'user not found'})
        await user.destroy();
        return res.status(200).json({msg:'user deleted'})
}
       } catch (error) {
        console.error(error);
        return res.status(500).json({error:error.message})
       }
    
}


module.exports={deleteStudent};