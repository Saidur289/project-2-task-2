import { NextFunction, Request, Response } from "express";
import config from "../config";
import jwt, { JwtPayload }  from "jsonwebtoken";
const auth = (...roles: string[])=> {
    return (req: Request, res: Response, next: NextFunction) => {
         try {
        const authHeader = req.headers['authorization']
     const token = authHeader && authHeader.split(" ")[1]
     if(!token) res.status(401).json({message: "Unauthorized"})
        console.log("token:",{token});
     const decoded = jwt.verify(token as any, config.jwt_secret as string) as JwtPayload
     console.log(decoded);
     req.user = decoded
     if(roles.length && !roles.includes(decoded.role)){
        res.status(401).json({message: "Unauthorized"})
     }
     next()
    } catch (error: any) {
     res.status(500).json({
        success: false,
        message: error.message
     })
   }
    }
   
}
export default auth