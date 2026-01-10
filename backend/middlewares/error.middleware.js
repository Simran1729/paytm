const errorMiddleware = (err, req, res, next) =>{
    console.error(err);

    return res.status(500).json({
        success : false,
        err : err.message || 'Internal server error'
    })
}

module.exports = errorMiddleware;