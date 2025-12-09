import { Request, Response } from "express";
import { authService } from "./auth.service";

const signUpUser = async(req:Request, res: Response) => {
   try {
     const result = await authService.signUpUser(req.body);
     res.status(201).json({
        success: true,
        message: "User registered successfully",
       data: result.rows[0]
   })} catch (error: any) {
     res.status(500).json({
        success: false,
        message: error.message
     })
   }
}
const loginUser = async(req: Request, res: Response) => {
   try{
    const {email, password} = req.body;
     const result = await authService.loginUser(email, password);
     res.status(201).json({
        success: true,
        message: "Login successful",
        data: result
     })
     

   }catch (error: any) {
     res.status(500).json({
        success: false,
        message: error.message
     })
     console.log({error});
   }
}
export const authController = {
    signUpUser,
    loginUser
}