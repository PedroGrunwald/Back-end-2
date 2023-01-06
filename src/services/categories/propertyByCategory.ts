import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listPropByCategoryService = async (CateId: string): Promise<any> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const categoriExist = await categoryRepository.findOneBy({
    id: CateId,
  });

  if (!categoriExist) {
    throw new AppError("category does not exist", 404);
  }

 const properyCategory = await categoryRepository.findOne({
  where: {id: CateId}, relations: {properties: true}
 })




  return properyCategory;
};

export default listPropByCategoryService;