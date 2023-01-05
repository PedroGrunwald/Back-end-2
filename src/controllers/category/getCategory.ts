import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listAllCategory";

const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesService();
  return res.json(categories);
};

export default listCategoriesController;