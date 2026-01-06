const {z} = require('zod');
const {createUser, LoginUser} = require('../services/user')


const SignUpSchema = z.object({
    userName : z.string().trim(),
    firstName : z.string().trim(),
    lastName : z.string().trim().optional(),
    password : z.string().trim().min(6, {error : "Password must be atleast 6 characters"})
})

const signUpController = async (req, res, next) => {
    try{
        const body = req.body;
        const validationResult = SignUpSchema.safeParse(body);
        if(validationResult.success){
            const {newUser, token} = await createUser(body);
            res.status(201).json({
                success : true,
                message : "User created successfully",
                user : {
                    id : newUser._id,
                    userName : newUser.userName,
                    firstName : newUser.firstName,
                    lastName : newUser.lastName
                },
                token
            })
        }else{
              return res.status(400).json({
                success: false,
                errors: validationResult.error.errors
            });
        }
    } catch(err){
        next(err);
    }
}


const SignInSchema = z.object({
    userName : z.string().trim(),
    password : z.string().trim().min(6, {error : "Minimum 6 characters required for password"})
    
})
const signInController = async (req, res, next) => {
    try{
        const body = req.body;
        const validationResult = SignInSchema.safeParse(body);
        if(validationResult.success){
            const token = await LoginUser(body);
            res.status(200).json({
                success : true,
                token
            })
        }else{
             return res.status(400).json({
                success: false,
                errors: validationResult.error.errors
            });
        }
    } catch(err){
        next(err);
    }
}

module.exports = {signUpController,signInController};