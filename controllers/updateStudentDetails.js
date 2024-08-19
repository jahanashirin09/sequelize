const db=require("../config/db");
const { UserModel } = require("../model/usermodel");


//UPDATE STUDENT


const updateStudent= async(req,res) =>{
 
    try {
        const user=await UserModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error:'user not found'});
        await user.update(req.body);
        return res.status(200).json({msg:'user updated'})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:error.message});
        
    }
};
module.exports={updateStudent};

