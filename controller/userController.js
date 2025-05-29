import {createUserAccount  } from "../service/userService.js"
export const createAccount = async (req,res)=>{
    try {
        const {email,password,name} = req.body
        const response  = await createUserAccount(email,password,name);
        c
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