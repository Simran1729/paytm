const JWT_SECRET = require('../config/jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');


const createUser = async({userName, firstName, lastName, password}) => {
    const existingUser = await User.findOne({userName});
    if(existingUser){
        throw new Error('User already exists')
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({userName, firstName, lastName, password : hashedPassword});
    if(!newUser){
        throw new Error("Error creating new user");
    }

    const payload = {
        id : newUser._id,
        userName,
    }

    const token = jwt.sign(payload, JWT_SECRET);

    return {newUser, token};
}

const LoginUser = async({userName, password}) => {
    const userExist = await User.findOne({userName});
    if(!userExist){
        throw new Error("User doesn't exist");
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);

    if(!passwordMatch){
        throw new Error("Invalid credentials");
    }

    //password matched and user found, create token and return it
    const payload = {
        id : userExist._id,
        userName,
    }

    const token = jwt.sign(payload, JWT_SECRET);

    return token;
}

const updateUser = async(body, id) => {
    await User.findOneAndUpdate({_id : id}, req.body);
}

module.exports = {createUser, LoginUser, updateUser};