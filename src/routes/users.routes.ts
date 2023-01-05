import { Router } from "express"
import { createUserController } from "../controllers/user/createUser.controller"
import deleteUserController from "../controllers/user/deleteUser.controller"
import { listUserController } from "../controllers/user/listAllUser.controller"
import updateUserController from "../controllers/user/updateUser.controller"
import validationEmailUsed from "../middlewares/validationEmailUsed"
import validationIfNotUpdate from "../middlewares/validationIfNotUpdate"
import validationToken from "../middlewares/validateToken.middleware"
import validationUserExist from "../middlewares/validationUserExist"
import validationAdm from "../middlewares/validationAdm"
import validationId from "../middlewares/validationId"
import validationAdmDelete from "../middlewares/validationAdmDelete"



const usersRoute = Router()

usersRoute.post('', createUserController)
usersRoute.get('',validationToken,validationAdm, listUserController)
usersRoute.patch('/:id', validationToken, validationAdmDelete,validationIfNotUpdate,validationEmailUsed,validationId, updateUserController)
usersRoute.delete('/:id', validationUserExist, validationToken,validationAdm,deleteUserController)

export default usersRoute
