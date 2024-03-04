const { decrypt } = require("dotenv");
const AdminService = require("../services/AdminService")
const joi = require('joi');
const jwt = require('jsonwebtoken')

const secretKey = "hahaha"  //key for decrypting admin side auth 


// this is schema for validatiing the data came from admin side at the time of registering 
const schema = joi.object({
    registrationNumber: joi.string().min(4).max(40).required(),
    email: joi.string().email().required(),
    contactPhoneNumber: joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }).required(),
    password: joi.string().min(4).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).messages({ "string.pattern.base": "min 8 char 1 upper case 1 lower case and one special character" }).required(),
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
})



const adminController = {};

adminController.register = async (req, res) => {
    const { registrationNumber, email, contactPhoneNumber, password } = req.body;
    try {
        await schema.validateAsync({ registrationNumber, email, contactPhoneNumber, password })
        const result = await AdminService.register(registrationNumber,  email, contactPhoneNumber,password);
        res.send(result)
    }
    catch (err) {
        res.send({
            status: "err",
            msg: "error occured",
            data: err.details[0]
        })
    }
}

adminController.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        await loginSchema.validateAsync({ email, password })
        const result = await AdminService.login(email, password);
        res.send(result)
    }
    catch (err) {
        res.send({
            status: "err",
            msg: "error occured",
            data: err
        })
    }

}




module.exports = adminController