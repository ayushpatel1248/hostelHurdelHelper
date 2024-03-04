const mongoose = require('mongoose');

const { Schema } = mongoose;

const sellerSchema = new Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    contactPhoneNumber: {
        type: String,
        required: true
    }
})


const Admin = mongoose.model("Admin", sellerSchema)

module.exports = Admin