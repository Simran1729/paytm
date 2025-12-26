const express = require('express');
const userRouter = require('./user');
const mainRouter = express.Router();

mainRouter.get('/test', (req, res) => {
    res.status(200).json({
        "message" : "Test route working fine"
    })
})

mainRouter.use('/user', userRouter);

module.exports = mainRouter;