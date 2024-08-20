const {check}=require('express-validator')
const {validationResult}=require("express-validator")



function creation_validation(req,res,next){

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


    ]

    next()

}




module.exports = {creation_validation };
