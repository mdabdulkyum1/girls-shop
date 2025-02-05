"use server"

import dbConnect, { collectionNameObj } from "@/lib/mongodb"
import bcrypt from "bcrypt"

export const loginUser = async (payload)=> {
    
    const { email, password } = payload;

    const userCollection = dbConnect(collectionNameObj.userCollection);
    const user = await userCollection.findOne({email});
    if(!user) return null;

    const isPasswordOk = bcrypt.compare(user.password, password);
    if(!isPasswordOk) return null;

    return user;
    
    
}