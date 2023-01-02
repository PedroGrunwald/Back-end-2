import { Request, Response } from "express";
import {IUserRequest } from "../../interfaces/users/index";
import createUserService from "../../services/user/createUser.service"


const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body;
    const [status, newUser] = await createUserService(userData);
    return res.status(status as number).json(newUser);
  };

export { createUserController };