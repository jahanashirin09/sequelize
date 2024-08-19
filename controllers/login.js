// const db=require("../config/db")
// var jwt=require("jsonwebtoken");



// function verifyToken(req,res,next){
//     let authHeader=req.headers.authorization;
//     if(authHeader==undefined){
//         res.status(401).send({error:"no token provided"})
//     }
//     let token =authHeader.split(" ")[1]
//     jwt.verify(token,"secret",function(err,decoded){
//         if(err){
//             res.status(500).send(
//                 {
//                     error:"authenticatio failed"
//                 }
//             )
//         }
//         else{
//            next();
//         }
//     })
    
// }

// //LOGIN  

// const login= async(req,res) =>{
//     try {
//         if(req.body.username==undefined || req.body.password==undefined){
//             res.status(500).send({error:"aythentication failed"})
//         }
//         let username=req.body.username;
//         let password=req.body.password;
        
//         const data=await db.query("SELECT * FROM users WHERE username=? and password=?",[username,password]);
//         const db_password=await db.query("SELECT password FROM users WHERE username=? and password=?",[username,password]);
//        // const user_password= db_password[0][0].password;

//         console.log(data[0][0].display_name)
        
      
//         if(password.length==0 ||db_password[0][0] ==undefined){
//             console.log("hii")
//             return res.status(401).send({
//                 success: false,
//                 message: "login failed",
//             });
//         }
//         let resp={
//             id:data[0][0].id,
//             display_name:data[0][0].display_name
//         }
        
//         let token=jwt.sign(resp,"secret",{expiresIn:60})
//         res.status(200).send({
//             success: true,
//             message: "logged successfully",
//             token:token
//         });

        
        
//     } catch (error) {
//         {
//             console.log(error)
//             res.status(500).send({ 
//             success:false,
//             message: "Server Error",
//             error
//             })
//         }
        
//     }
    
// };
// module.exports={login,verifyToken};