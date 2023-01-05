import { Router } from "express";
import { createCategoriController } from "../controllers/category/createCategory";
import validationToken from "../middlewares/validateToken.middleware";
import validationIsAdmin from "../middlewares/validationAdm";
import listCategoriesController from "../controllers/category/getCategory";
import listPropByCategoryController from "../controllers/category/listOneCategory";

const categoriesRoutes = Router();
categoriesRoutes.post(
  "",
  validationToken,
  validationIsAdmin,
  createCategoriController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropByCategoryController);

export default categoriesRoutes;