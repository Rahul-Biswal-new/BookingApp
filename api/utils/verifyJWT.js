import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token) return next(createError(401, "you are not authenticated"))

    jwt.verify(
        token, 
        process.env.JWT, 
        (err,user)=>{
        if (err) return next(createError(403, "token is invalid!"))
        // setting new req property to use next
        req.user = user;
        // res.send(token)
        next()
    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken( req,res, next, ()=>{
        // req.user = user;
        // console.log(user);
        if(req.user.id === req.params.id  || req.user.isAdmin ){
            next()
        }else{
            if (err) return next(createError(403, "you are not authorized!"))
        }
    })
}

export const verifyAdmin = (req, res, next)=>{
    verifyToken( req,res, next, ()=>{
        if(req.user.isAdmin ){
            next()
        }else{
            if (err) return next(createError(403, "you are not admin!"))
        }
    })
}