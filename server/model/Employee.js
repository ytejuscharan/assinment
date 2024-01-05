const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    studentname: String,
    email: String,
    Gender: String,
    Fathername: String,
    Mothername: String,
    Mobile: Number,
    whatsapp: Number,
    GurdianNumber: Number,
    Adress: String,
    SSLCBoard: String,
    SchoolAddress: String,
    Schoolname: String,
    Course: String,
    Comb: String,
    Res_Day: String,
    D_O_E: String,
    password: String,
    otp: String,
    phoneNumber: String

})

const StudentModel = mongoose.model('stu_virat',StudentSchema)
module.exports = StudentModel




