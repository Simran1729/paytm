const JWT_SECRET = require('../config/jwt');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({
            success : false,
            message : "Authorization Header required"
        })
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        res.status(401).json({
            success : false,
            message : 'Invalid Authorization format. Expected "Bearer <token>".'
        })
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    }catch(err){
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }
}


module.exports = authMiddleware;