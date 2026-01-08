const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId, 
        ref : 'User',
        required: true,
        unique : true
    },
    balance : {
        type : Number, 
        default : 0,
        required : true
    }
})

module.exports = mongoose.model("Account", accountSchema);