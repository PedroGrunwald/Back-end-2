import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules_user_properties } from "../../entities/schedules.entity";
import { AppError } from "../../errors/appError";

const listSchedulesService = async (Sechid: string): Promise<any> => {
  const shedelRepository = AppDataSource.getRepository(Schedules_user_properties);
  const propertyeRepository = AppDataSource.getRepository(Properties);


  const propertyExisting = await propertyeRepository.findOneBy({
    id: Sechid,
  });

  if (!propertyExisting) {
    throw new AppError("Schedule não existe", 404);
  }

 const schedules = await propertyeRepository.findOne(
    {relations: { schedules: true}, where: {id: Sechid}}
 )

  return schedules;
};

export default listSchedulesService;