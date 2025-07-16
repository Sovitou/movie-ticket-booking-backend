import {createAccountService,loginAccountService } from "../service/userService.js"
export const createAccount = async (req,res)=>{
    try {
        const {email,password,name} = req.body
        const response  = await createAccountService (email,password,name);
        console.log(response.message)
        res.status(response.status).json({
            data: {
                message: response.message,
                token: response.token
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const loginUserAccount = async (req,res)=>{
    try {
        const {email,password} = req.body 
        const response = await loginAccountService(email,password)
        res.status(response.status).json({
            data: {
                message: response.message,
                token: response.token
            }
        })
    } catch (error) {
        console.log(error)
    }
}