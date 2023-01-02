import { IUserLogin } from '../../interfaces/users'
import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import 'dotenv/config'


const userLoginService = async ( { email, password }: IUserLogin ): Promise<string> => {

    const repository = AppDataSource.getRepository(User)

    const user = await repository.findOneBy({
        email: email
    })
    
    if(!user){
        throw new AppError('User or password invalid', 403)
    }

    const passwordCompare = await compare(password, user.password)

    if(!passwordCompare){
        throw new AppError('User or password invalid', 403)
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm,
            isActive: user.isActive,
            id: user.id
        },
        process.env.SECRET_KEY,
        {
            subject: String(user.id), 
            expiresIn: '24h'
        }
    )

    return token

}

export default userLoginService