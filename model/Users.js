const mongoose = require("mongoose")

const { Schema } = mongoose;

const UsersSchema = new Schema({


    "registrationNumber": {
        "type": String,
        required: true
    },
   


    "mobileNumber": {
        "type": String,
        required: true
    },


    "email": {
        "type": String,
        required: true
    },

  
    
    "role": {
        "type": String,
        enum: ['user', 'admin']
    },

    "password": {
        "type": String,
        required: true
    }
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = Users