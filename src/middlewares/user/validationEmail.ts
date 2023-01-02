import { Request, Response, NextFunction } from 'express';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { User } from '../../entities/user.entity';


const validationEmailUsed = async (req: Request, res: Response, next: NextFunction) => {

    const emailInUse = AppDataSource.getRepository(User)

    const user = await emailInUse.findBy({
        email: req.body.email
    })
    
    if(user.length > 0) {        
        throw new AppError('Email already in use', 400)
    }

    next()
}

export default validationEmailUsed