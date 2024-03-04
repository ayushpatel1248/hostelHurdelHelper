const User = require("../model/Users")

const UserService = {}

//----------------------------profile information-------------------------


UserService.getUserData = async (_id) => {
    const result = await User.findOne({ _id });
    try {
        if (result) {
            delete result._doc.password
            return {
                status: "ok",
                msg: "user data send successfully",
                data: result
            }
        }
        else {
            return {
                status: "err",
                msg: "authentication error occured",
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

module.exports = UserService