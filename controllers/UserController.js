const UserService = require("../services/UserService")
const verifyAuth = require("../reUseAbleFunctions/decryptAuth")
const Joi = require('joi');


const UserController = {}

// --------------------- for user profile information update ------------------------------


UserController.getUserData = async (req , res) => {
    const { authorization } = req.headers;
    const _id = verifyAuth(authorization)
    const result = await UserService.getUserData(_id);
    res.send(result)
}



module.exports = UserController