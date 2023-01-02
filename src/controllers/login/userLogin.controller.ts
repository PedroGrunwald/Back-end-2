import { Request, Response } from 'express'
import { IUserLogin } from '../../interfaces/users'
import userLoginService from '../../services/login/userLogin.service'

const userLoginController = async(req: Request, res: Response) => {

    const sessionData: IUserLogin = req.body
    const token = await userLoginService(sessionData)
    return res.json({token})

}

export { userLoginController }