import { Router } from 'express'
import { userLoginController } from '../controllers/login/userLogin.controller'


const loginRoutes = Router()

loginRoutes.post('',userLoginController)

export default loginRoutes 