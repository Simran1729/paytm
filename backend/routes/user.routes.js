const express = require('express');
const userRouter = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const {signUpController,signInController,updateUserController,bulkUsersController,meController} = require('../controllers/user.controller')

userRouter.get('/', (req, res) => {
    res.status(200).json({
        "message" : "User route working successfully"
    })
})


userRouter.post('/signup', signUpController);
userRouter.post('/signin', signInController);
userRouter.post('/udpateUser', authMiddleware, updateUserController);
userRouter.get('/bulk', authMiddleware, bulkUsersController);
userRouter.get('/me', authMiddleware, meController )

module.exports = userRouter;