const JWT = require('jsonwebtoken');


exports.authenticateUser = async (req,res,next) => {


    const token = req.cookies?.token
    // const {token} = req.cookies

    if(!token) {
        return res.status(400).json({
            success: false,
            message: 'user authentication failed, please try again'
        })
    }
    try {

        const payload = await JWT.verify(token, process.env.JWT_SECRET_KEY)

        req.user = { _id: payload.id, username: payload.username  }
        // req.user = payload;
        next();

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })   
    }

}
