import User from '../models/User.js';
import bcrypt from "bcryptjs";
import { createError } from '../utils/error.js';

export const register = async (req,res,next) => {
    try{
        const salt = bcrypt.genSaltSync(10) 
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save();
        res.status(200).json(newUser);
    }catch(err){
        next(err);
    }
}

export const login = async (req,res,next) => {
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;
    try{
        // const user = {username, email, password}
        const user = await User.findOne({username: req.body.username})
        if(!user)  return res.status(404).json({"message":"user not found"})
        const correctPassword = await bcrypt.compare(req.body.password, user.password)
        if(!correctPassword) return res.status(404).json({"message":"wrong password or username"})

        const {password, isAdmin, ...otherDetails} = user;
        res.status(200).json(user)
    }catch(err){
        next(err);
    }
} 