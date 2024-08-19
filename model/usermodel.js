const{DataTypes}=require("sequelize");
const{sequelize}=require("../config/db");

const UserModel=sequelize.define('details',
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        username:DataTypes.STRING,
        password:DataTypes.STRING,  
        display_name:DataTypes.STRING,
        


    }
)
module.exports={UserModel}