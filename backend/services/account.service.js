const Account = require("../models/account.model");
const mongoose = require("mongoose");

const getBalance = async (id) => {
    const account = await Account.findOne({user : id});
    if(!account){
        throw new Error("Account doesn't exist");
    }
    return account?.balance;
}

const transferAmount = async (fromId, {id, amount}) => {

    const session = await mongoose.startSession();

    try{
        await session.withTransaction(async()=>{
            const fromAccount = await Account.findOne({user : fromId}).session(session);
            const toAccount = await Account.findOne({user : id}).session(session);
            if(!fromAccount || !toAccount){
                throw new Error("One or both accounts don't exist");
            }

            if(fromAccount.balance < amount){
                throw new Error("Insufficient Balance in account");
            }

            if (fromId === id) {
            throw new Error("Sender and receiver cannot be the same");
            }

            if(amount <= 0){
                throw new Error("Amount can't be less than equal to zero");
            }

            const updatedFromAccount = await Account.updateOne(
                {user : fromId, balance : {$gte : amount}},
                {$inc : {balance : -amount}},
                {session}
            );

            if(updatedFromAccount.modifiedCount === 0){
                throw new Error("Insufficient Balance");
            }

            await Account.updateOne(
                {user : id},
                {$inc : {balance : amount}},
                {session}
            );
        })
    } finally {
        await session.endSession();
    }
}



module.exports = {getBalance, transferAmount};