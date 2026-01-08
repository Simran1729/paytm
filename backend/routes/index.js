const express = require('express');
const userRouter = require('./user.routes');
const accountRouter = require('./account.routes');
const mainRouter = express.Router();

mainRouter.get('/test', (req, res) => {
    res.status(200).json({
        "message" : "Test route working fine"
    })
})

mainRouter.use('/user', userRouter);
mainRouter.use('/account', accountRouter);

module.exports = mainRouter;