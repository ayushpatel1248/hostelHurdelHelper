const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminSchema = new Schema({
    registrationNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    contactPhoneNumber: {
        type: String,
    }
    
})


const AdminVit = mongoose.model("AdminVit", AdminSchema)

module.exports = AdminVit