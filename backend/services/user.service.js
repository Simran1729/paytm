const JWT_SECRET = require('../config/jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const Account = require('../models/account.model');


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

    //give the user a random balance on signup : 100 >= balance >= 1
    const balance = (Math.random()*100).toFixed(0);
    const createdAccount = await Account.create({user : newUser._id, balance});

    const payload = {
        id : newUser._id,
        userName,
    }

    const token = jwt.sign(payload, JWT_SECRET);

    return {newUser, token,createdAccount};
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

const fetchBulkUsers = async(id, filter) => {
        let query = { _id : {$ne : id} };
        if(filter){
            query.$or = [
                { firstName : { $regex : filter, $options : "i"}},
                { lastName : { $regex : filter, $options : "i"}}
            ]
        }

    const users = await User.find(query).select("_id userName firstName lastName");
    return users;
}

const getMe = async(id) =>{
    const user = await User.$ne.findOne({_id : id}).select("-password");
    if(!user){
        throw new Error("User not found");
    }

    return user;
}

module.exports = {createUser, LoginUser, updateUser,fetchBulkUsers,getMe};