const express=require("express");
const dotenv =require("dotenv");
 const {connect,sequelize}=require("./config/db");
const studentRoutes=require('./routes/studentRoutes');
const {UserModel}=require("./model/usermodel")



dotenv.config();

const app=express();

app.use(express.json());
app.use("/api/v1/users",studentRoutes);

UserModel.sync({})

app.get("/test",(req,res)=>{
    res.status(200).send("<h1>test</h1>");

});


 connect()

app.listen(process.env.PORT, ()=>{
    console.log("server running")
   
 });


// mysqlPool
// .query("SELECT * FROM users")
// .then(()=>{
//     console.log("Database Connected");

    

// })
// .catch((error)=>{
//     console.error(error);
// });
