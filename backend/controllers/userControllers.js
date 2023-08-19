const { User }= require('../model/userModel.js');
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")
const e = require("express");


const signUp = async (req,res) => {
    
    try {
            
            const {name, username, email} = req.body;
        
        const userExists = await User.findOne(
            {
                $or: [{email}, {username}]
            }
            ) 
            
            if(userExists) {
                //   throw new Error("User with the provided email or username already exists");
                return res.status(400).json({
                    success: false,
                    message: 'user already exists'
                })
            }
            console.log(name);
            const newUser = User(req.body)
            const result = await newUser.save()
            console.log(newUser);
            res.status(200).json({
                success: true,
                message: 'SignUp Success',
                result
            })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

    }

const logIn = async (req,res) => {
    const {username, password} = req.body;
    
    try {
        
        const userInfo = await User.findOne({username}).select('+password');
        if(userInfo && userInfo.username) {
            // await bcrypt.compare(password, this.password) -- wrong[Error]
            const matchPass = await bcrypt.compare(password, userInfo.password)

            if(!matchPass) {
                return res.status(404).json({
                    success: false,
                    message: 'password did not match, please try again'
                })
            }

            const token = await userInfo.jwtToken();
            userInfo.password = undefined;

            const cookieOptions = {
                maxAge: 24*60*60*1000, // 1d or 24hr
                httpOnly: true // cookie cant be modified at client side
            }
            res.cookie("token", token , cookieOptions);
            res.status(200).json({
                success: true,
                message: 'User logged In successfully',
                data: userInfo
            })

        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }



};
const getUserDetails = async (req,res) => {

    const { _id } = req.user;
    try {
        const getUserData = await User.findOne({ _id });
        res.status(200).json({
            success:true,
            data: getUserData
        })


    } catch (error) {
        console.log(error);
        res.status(200).json({
            success:false,
            message: 'User not found'
        })
    } 

};
module.exports = {
    signUp,
    logIn,
    getUserDetails
}
