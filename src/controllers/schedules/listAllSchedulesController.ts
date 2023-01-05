import { Request, Response } from "express";
import listSchedulesService from "../../services/schedules/listAllSchedules";

const listShedeusController = async (req: Request, res: Response) => {
  const propertiesFromCategoryService = await listSchedulesService(req.params.id);
  return res.json(propertiesFromCategoryService);
};

export default listShedeusController;