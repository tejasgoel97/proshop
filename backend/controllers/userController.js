import express from 'express'
import asyncHandler from 'express-async-handler'
import UserModel from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js';
import User from '../models/UserModel.js';
import chalk from 'chalk'

export const authUser = asyncHandler(async (req, res, next) => {
    console.log(chalk.magenta.inverse("/api/users/login"))
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email })
    if (user && await user.matchPassword(password)) {
        console.log("PASSWORD MATCH KAR GYA")
        res.json({
            id: user._id,
            email: email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401);
        throw new Error("Invalid UserName or Password")
    }
})
//CREATE NEW USER
export const registerUser = asyncHandler(async (req, res, next) => {
    const { name, password, email } = req.body;
    console.log(chalk.yellowBright.inverse(name, password, email))
    const userExists = await UserModel.find({ email });

    if (userExists.length) {
        console.log(chalk.yellow.inverse('USER EXISTS'))
        console.log(userExists)
        res.status(401)
        throw new Error("User Already exists");

    }
    const user = await UserModel.create({ email, password, name })
    if (user) {
        res.status(201).json({
            status: "new UserCreated",
            email: email,
            id: user._id
        })
    } else {
        throw new Error("new User cannot be created,,,,, Please try again")
    }
})
//GETTING THE USER PROFILE
export const getUserProfile = asyncHandler(async (req, res, next) => {
    const user = await UserModel.findById(req.user._id);

    if (user) {
        res.json(user)
    }
    else {
        res.status(404)
        throw new Error('not authorised. Invalid UserName and Password')
    }
})