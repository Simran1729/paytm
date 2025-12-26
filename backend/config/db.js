const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

async function connectDb(){
    try{
        await mongoose.connect(DB_URL);
        console.log("Db connected successfully");
    } catch(err){
        console.error("Error connection failed with : ", err);
        process.exit(1);
    }
}

module.exports = connectDb;