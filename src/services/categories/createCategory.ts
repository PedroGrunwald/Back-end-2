import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (data: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryExisting = await categoryRepository.findOneBy({
    name: data.name,
  });

  if (categoryExisting) {
    throw new AppError("categoria ja existe", 409);
  }

  const categoryData = categoryRepository.create(data);
  await categoryRepository.save(categoryData);

  return [201, categoryData];
};

export default createCategoryService;