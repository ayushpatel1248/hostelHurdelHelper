const express = require("express")
var bodyParser = require('body-parser')
var cors = require("cors");

//-------------------------------------------------------
const app = express()
app.use(cors())

require("./db/db")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const UserRegistrationRoute = require("./routes/UserRegistrationRoute")
app.use("/",UserRegistrationRoute)



app.listen(9999, ()=>{
  console.log("server is running on port : ", 9999)
});