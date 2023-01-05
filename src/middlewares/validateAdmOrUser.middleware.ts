import { Request, Response, NextFunction } from "express";

const validateAdmOrUsermiddleware =async (req:Request, res: Response, next: NextFunction) => {

    if(req.body.user.id === req.params.id){
        return next()
    }


    if(req.body.user.isAdm === false){
        return res.status(403).json({
            "message": "missing admin permissions"
          })
    }


    return next()
    
}

export default validateAdmOrUsermiddleware