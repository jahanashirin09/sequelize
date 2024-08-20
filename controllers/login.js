const { where } = require("sequelize");
const db=require("../config/db")
var jwt=require("jsonwebtoken");
const { UserModel } = require("../model/usermodel");
const bcrypt = require('bcrypt'); 




function verifyToken(req,res,next){
    let authHeader=req.headers.authorization;
    if(authHeader==undefined){
        res.status(401).send({error:"no token provided"})
    }
    let token =authHeader.split(" ")[1]
    jwt.verify(token,"secret",function(err,decoded){
        if(err){
            res.status(500).send(
                {
                    error:"authenticatio failed"
                }
            )
        }
        else{
           next();
        }   
    })
    
}

//LOGIN  

const login= async(req,res) =>{
    try {
        const { username, password } = req.body;
        const user = await  UserModel.findOne({
            where: {username}
        });
        if (!user) {
            return res.status(404).json('username  not found');
        }


        // Verify password
        const saltRounds = 10;
       
     const hashed_password=await bcrypt.hash(user.password, saltRounds)
   
      console.log(hashed_password);
      const passwordValid=await bcrypt.compare(password,hashed_password)
      console.log(passwordValid);
        
        if (!passwordValid) {
            console.log(password);
            console.log(hashed_password);
            return res.status(404).json('Incorrect username and password combination');
        }


        // Authenticate user with jwt
        const token = jwt.sign({ id: user.id }, "secret", {
            expiresIn: 3600
        });
   
        res.status(200).send({
            id: user.id,
            name: user.username,

            accessToken: token,
        });
    } catch (err) {
        return res.status(500).send('Sign in error');
    }
}
module.exports={login,verifyToken};