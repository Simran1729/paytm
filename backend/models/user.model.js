const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        lowercase : true, 
        trim : true,
        minLength : 3,
        maxLength : 30
    }, 
    firstName : {
        type : String,
        required : true,
        lowercase : true, 
        trim : true,
        maxLength : 30
    },
    lastName : {
        type : String,
        lowercase : true, 
        trim : true,
        maxLength : 30
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    }
})

module.exports = mongoose.model('User', userSchema);