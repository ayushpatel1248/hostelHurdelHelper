const Admin = require("../model/AdminVit")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const AdminService = {};

const saltRounds = 10;
const secretKey = "hahaha"
// ---------------------------------------------------------------------------------------------------------------------

AdminService.register = async (registrationNumber, password, email,contactPhoneNumber) => {
    try {
        
        const adminFound = await Admin.findOne({
            $or: [
                { registrationNumber },
                { email },
            ],
        });
        console.log("this is admin =", adminFound )

        if (!adminFound) {
            const hashPassword = bcrypt.hashSync(password, saltRounds);
            const singleAdminData = { registrationNumber, password: hashPassword, email, contactPhoneNumber };
            console.log("single admin data = ", singleAdminData)
            const registeredAdmin = await Admin.create(singleAdminData)
            console.log("registered admin = ", registeredAdmin)
            var authorization = jwt.sign({ adminId: registeredAdmin._id }, secretKey)
            delete registeredAdmin._doc.password    //in mongodb prop stored in doc 
            console.log("here")
            return {
                status: "OK",
                msg: "admin registered successfully",
                data: { authorization, registeredAdmin }
            }

        }
        else {
            return {
                status: "err",
                msg: "admin already resgiterd with this email or registrationNumber try entering different registrationNumber or email",
                data: null
            }
        }
    }
    catch (err) {
        return {
            status: "err",
            msg: "server error,err", 
            data: err
        }
    }

}

AdminService.login = async (email, password) => {
    try {
        const adminFound = await Admin.findOne({ email });
        if (adminFound) {
            const passwordCheck = bcrypt.compareSync(password, adminFound.password);
            delete adminFound._doc.password

            if (passwordCheck) {
                var authorization = jwt.sign({ adminId: adminFound._id }, secretKey)
                return {
                    status: "OK",
                    msg: "user logined successfully",
                    data: { authorization, adminFound }
                }
            }
            else {
                return {
                    status: "err",
                    msg: "password is incorrect",
                    data: null
                }
            }

        }
        else {
            return {
                status: "err",
                msg: "no admin found with this email",
                data: null
            }
        }
    }
    catch (err) {
        return {
            status: "err",
            msg: "server error",
            data: null
        }
    }

}


module.exports = AdminService