
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userID = parseInt(req.params.id);
  const updatedUser = await updateUserService(userData, userID);
  return res.json(updatedUser);
};

export default updateUserController;