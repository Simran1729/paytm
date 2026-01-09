const {z} = require('zod');
const {getBalance,transferAmount} = require("../services/account.service")

const getBalanceController = async(req, res, next) => {
    const userId = req.userId;
    if(!userId){
        throw new Error("No user Id found in req object")
    }

    try{
        const balance = await getBalance(userId);
        res.status(200).json({
            success : true,
            balance
        })
    } catch(err){
        next(err);
    }
}

const TransferSchema = z.object({
    id : z.string().trim(),
    amount : z.number()
})

const transferController = async (req, res, next) => {
    const body = req.body;
    const fromId = req.userId;
    
    try{
        const validationResult = TransferSchema.safeParse(body);
    
        if(!validationResult.success){
            res.status(400).json({
                success : false,
                message : validationResult
            })
        }

        await transferAmount(fromId, body);
        res.status(200).json({
            success : true,
            message : "Amount Transfer Successful"
        })
    }catch(err){
        next(err);
    }

}

module.exports = {getBalanceController,transferController};