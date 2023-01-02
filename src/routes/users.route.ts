import { Router } from "express"
import { createUserController } from "../controllers/user/createUser.controller"
import deleteUserController from "../controllers/user/deleteUser.controller"
import { listUserController } from "../controllers/user/listAllUser.controller"
import updateUserController from "../controllers/user/updateUser.controller"
import validationEmailUsed from "../middlewares/user/validationEmail"
import cantUpdateDataMiddleware from "../middlewares/user/validationIfNotUpdate"
import validationToken from "../middlewares/user/validationToken"
import validationUserExist from "../middlewares/user/validationUserExist"
import validationAdm from "../middlewares/user/validationAdm"
import validationId from "../middlewares/user/validationId"
import validationAdmDelete from "../middlewares/user/validationAdmDelete"



const usersRoute = Router()

usersRoute.post('', createUserController)
usersRoute.get('',validationToken,validationAdm, listUserController)
usersRoute.patch('/:id', validationToken, validationAdmDelete,cantUpdateDataMiddleware,validationEmailUsed,validationId, updateUserController)
usersRoute.delete('/:id', validationUserExist, validationToken,validationAdm,deleteUserController)

export default usersRoute
