import jwt from "jsonwebtoken";
const secretKey = 'yourSecretKey';
import bcrypt from "bcrypt"
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
export const createUserAccount = async (email,password,name)=>{
    const isUserExist = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if(isUserExist){
        return {
            message:"user already exist",
            status: 400
        }
    }
    const hashPassword = bcrypt.hashSync(password,10)
    const user =await prisma.user.create({
        data:{
            name: name,
            email:email,
            password:hashPassword,
        }
    })
    const options = { expiresIn: '1h' };
    const payload = { userId: user.id, username: user.email};
    const token = jwt.sign(payload, secretKey, options);
    return {
        message:"account has been created",
        token: token,
        status:200,
    }
}