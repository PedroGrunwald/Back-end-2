import { Request, Response } from "express";
import listPropByCategoryService from "../../services/categories/propertyByCategory";

const listPropByCategoryController = async (req: Request, res: Response) => {
  const propertiesFromCategoryService = await listPropByCategoryService(req.params.id);
  return res.json(propertiesFromCategoryService);
};

export default listPropByCategoryController;