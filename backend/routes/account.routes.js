const express = require('express');
const accountRouter = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');

const {getBalanceController,transferController} = require("../controllers/account.controller")

accountRouter.get("/balance", authMiddleware, getBalanceController);
accountRouter.post("/transfer", authMiddleware, transferController);

module.exports = accountRouter;