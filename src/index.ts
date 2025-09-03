import express from "express";
import jwt from "jsonwebtoken";
import mongoose = require("mongoose");
import { UserModel } from "./db";

const app = express();

app.post("api/v1/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    //zod validaion and hash the password
    await UserModel.create({
        username:username,
        password:password,

    })
})

app.post("api/v1/signin",(req,res)=>{

})

app.post("api/v1/content",(req,res)=>{

})

app.get("api/v1/content",(req,res)=>{

})

app.delete("api/v1/content",(req,res)=>{
    
})

app.post("api/v1/brain/share",(req,res)=>{

})

app.get("api/v1/brain:shareLink",(req,res)=>{

})