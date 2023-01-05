import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";



const validationAdmDelete = async(req: Request, res: Response, next: NextFunction) => {

    if(req.body.user.isAdm === true){
      next()
    }
    else{
     throw new AppError('User is not an Administrator', 401)
    }
 
 }

export default validationAdmDelete