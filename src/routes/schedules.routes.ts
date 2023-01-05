import { Router } from "express";
import { createShedelController } from "../controllers/schedules/createScheduleController";
import listShedeusController from "../controllers/schedules/listAllSchedulesController";
import validationIsAdmin from "../middlewares/validationAdm";
import validationToken from "../middlewares/validateToken.middleware";

const shedeulesRoute = Router();
shedeulesRoute.post("", validationToken, createShedelController);
shedeulesRoute.get("/properties/:id", validationToken,validationIsAdmin, listShedeusController);

export default shedeulesRoute;