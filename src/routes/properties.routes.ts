import { Router } from "express";
import { createPropertiesController } from "../controllers/properties/createPropertieController";
import listPropertiesController from "../controllers/properties/listAllPropertieController";
import ensureDataValidMiddleware from "../middlewares/validateDataMiddleware";
import validationIsAdmin from "../middlewares/validationAdm";
import validationToken from "../middlewares/validateToken.middleware";
import { propertiSerializer } from "../schema/properties.schema";

const propertiesRoutes = Router();
propertiesRoutes.post(
  "",
  ensureDataValidMiddleware(propertiSerializer),
  validationToken,
  validationIsAdmin,
  createPropertiesController
);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;