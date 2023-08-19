

exports.signupDataValidate = (req,res,next) => {

    const {name,email,username,password,bio} = req.body;

    if(!name || !username || !email || !password || !bio) {
        res.status(400).json({
            success: false,
            message: "All fields are required!"
        });
    }

    else {
        next();
    }
}


// module.exports = signupDataValidate
