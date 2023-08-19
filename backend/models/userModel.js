const mongoose = require('mongoose');
const {Schema} = mongoose;
const JWTToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: 'String',
        require: [true, 'name is required!'],
        minLength: [3,'name must be atleast 3 charachters'],
        maxLength: [40,'name can atmost be 40 charachters'],
        trim: true,
        lowercase: true
    },
    username: {
        type: 'String',
        require: [true,'username is required!'],
        minLength: [3, 'username must be atleast 3 charachters'],
        maxLength: [40,' username can atmost be 40 charachters'],
        lowercase: true,
        unique: true,
        trim: true
        // can add regex for usernames eg. not alloweing symbols like /,(,{,[,],},),etc
    },
    email: {
        type: 'String',
        require: [true, 'email is required!'],
        minLength: [8,'email must be atleast 8 charachters'],
        maxLength: [50,'email can atmost be 50 charachters'],
        lowercase: true,
        unique: true,
        trim: true
        // can add regex also to validate emails
    },
    password: {
        type: 'String',
        require: [true, 'password is required!'],
        minLength: [4,'password must be atleast 4 charachters'],
        select: false        
    },
    bio: {
        type: 'String',
        require: [true,'bio is required!'],
        trim: true
    }
}, {
    timestamps: true
    }
);

userSchema.methods = {

    // storing data in token
    jwtToken() {
        return JWTToken.sign(
            {
                id: this._id,
                username: this.username
            }, 
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '24d'
            }
        )
    }
}
// hash pass
// userSchema.pre('save', async (next) => { arrow functions dont work}
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next()
    }
    let saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    return next();
});


const User = mongoose.model('User',userSchema)
module.exports = { User }

