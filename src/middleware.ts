import { NextFunction,Request,Response } from "express"
import jwt from "jsonwebtoken";
import { JWTpassword } from "./config";


export const userMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    const header = req.headers.token;
    const decoded = jwt.verify(header as string, JWTpassword )
    if(decoded){
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message:"You are not logged in",
        })
    }

}