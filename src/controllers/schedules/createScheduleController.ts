import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import shedeusCreateService from "../../services/schedules/createSchedules";

const createShedelController = async (req: Request, res: Response) => {
  const userData: IScheduleRequest = req.body;
  const userId = parseInt(req.body.user.id);
  const [status, schedel] = await shedeusCreateService(userData, userId);
  return res.status(status as number).json(schedel);
};

export { createShedelController };