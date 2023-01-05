import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<any> => {
  const propertieRepository = AppDataSource.getRepository(Properties);
  const properties = await propertieRepository.find();

  return properties;
};

export default listPropertiesService;