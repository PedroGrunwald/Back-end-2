import { NextFunction, Request, Response } from "express"
import { AppError } from "../../errors/appError"


const cantUpdateDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const user = req.body

    if(user.id !== undefined || user.isActive !== undefined || user.isAdm !== undefined) {
        
        throw new AppError('Modify Id or isActive or isAdm is forbidden', 401)
    }

    return next()
}

export default cantUpdateDataMiddleware