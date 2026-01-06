const express = require('express');
const userRouter = express.Router();
const {signUpController,signInController} = require('../controllers/user.controller')

userRouter.get('/', (req, res) => {
    res.status(200).json({
        "message" : "User route working successfully"
    })
})


userRouter.post('/signup', signUpController);
userRouter.post('/signin', signInController)

module.exports = userRouter;