const express=require("express");
const { getStudents } = require("../controllers/getStudentDetails");
const { getStudentsByID } = require("../controllers/getStudentById");
const { createStudent } = require("../controllers/createStudent");
const { updateStudent } = require("../controllers/updateStudentDetails");
const { deleteStudent } = require("../controllers/deleteStudentDetails");
const {login}=require("../controllers/login")
const {verifyToken}=require("../controllers/login")
const{creation_validation}=require("../validation/validation");
const {check}=require('express-validator');



const mysqlPool =require("../config/db");


const router=express.Router()

router.post("/login", login);


//GET ALL STUDENT LIST
router.get('/getall',verifyToken,getStudents);



//GET STUDENT BY ID
router.get('/get/:id',
    [check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only numbers")],
    verifyToken,getStudentsByID);


//CREAT STUDENT||POST

router.post('/create',

    [
        check('id') .isInt({ gt: 0 }).withMessage('ID must be a positive integer'),

        check('username').isString().withMessage('Username must be a string')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
        .notEmpty().withMessage('Username is required'),

        check('password').isString().withMessage('Password must be a string')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('Password is required'),
        check('display_name') .isString().withMessage('Display name must be a string')
        .isLength({ min: 1 }).withMessage('Display name is required')
        .notEmpty().withMessage('Display name is required'),


    ],

    verifyToken,createStudent);


//UPDATE STUDENT

router.put('/update/:id',[check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only numbers")],
verifyToken,updateStudent);

//DELETE STUDENT

router.delete('/delete/:id',
    [check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only numbers")],
    verifyToken,deleteStudent);

module.exports=router;