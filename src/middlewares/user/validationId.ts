import { Request,Response,NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";



const validationId = async(req: Request, res: Response, next: NextFunction) => {

    const userIdValid =parseInt(req.params.id);
    const userRepo = AppDataSource.getRepository(User)
    const verifyIdUser = await userRepo.findOneBy({id: userIdValid})
    if(!verifyIdUser){
        throw new AppError("Id invalid", 404)
    }
    next()
    
}

export default validationId