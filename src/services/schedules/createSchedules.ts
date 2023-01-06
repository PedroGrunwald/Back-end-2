import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules_user_properties } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (
  { date, hour, propertyId }: IScheduleRequest,
  userId: number
) => {
  const userRepository = AppDataSource.getRepository(User);
  const schedelRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );
  const propertiesRepository = AppDataSource.getRepository(Properties);


  const userExist = await userRepository.findOneBy({
    id: userId,
  });

  if (!userExist) {
    throw new AppError("user does not exist", 401);
  }
  const propertiExist = await propertiesRepository.findOneBy({
    id: propertyId,
  });
  if (!propertiExist) {
    throw new AppError("property does not exist", 404);
  }
  const schAlreadyExist = await schedelRepository.findOneBy({
    hour,
    date
  })

  if (schAlreadyExist) {
    throw new AppError("Schedule already exists", 409)
  }
  const badHour = hour.split(":");

  if (parseInt(badHour[0]) <= 8) {
    throw new AppError("bad hour", 400);
  }

  if (parseInt(badHour[0]) >= 18) {
    throw new AppError("bad hour", 400);
  }

  const diaAgendamento = new Date(date).getDay();

  if (diaAgendamento == 6 || diaAgendamento == 0) {
    throw new AppError("invalid date", 400);
  }
  const schedel = schedelRepository.create({
    date,
    hour,
    properties: propertiExist,
    user: userExist,
  });
  await schedelRepository.save(schedel);


  return [201, { message: "scheduled appointment" }];

};

export default createScheduleService;