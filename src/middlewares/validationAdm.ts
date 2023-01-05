import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";



const validationAdm = async(req: Request, res: Response, next: NextFunction) => {

    if(req.body.user.isAdm === true){
      next()
    }
    else{
     throw new AppError('User is not an Administrator', 403)
    }
 
 }

export default validationAdm