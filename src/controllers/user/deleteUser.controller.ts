
import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const active = req.body.user.isActive
  const paramsId = parseInt(req.params.id)
  const deleteUser = await deleteUserService(paramsId, active)
  return res.status(204).json(deleteUser)
}
export default deleteUserController