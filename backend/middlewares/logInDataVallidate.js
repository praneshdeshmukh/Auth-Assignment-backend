const loginDataValidate = (req,res,next) => {

    const {username, password} = req.body;
    
    if(req.body && username && password) {
        next();
    }
    else {
        res.status(400).json({
            success: false,
            message: "All fields are required!"
        });
    }

}

module.exports = loginDataValidate;


