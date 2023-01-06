import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'


const deleteUserService = async (userId: number, isActive: Boolean) => {
    const userRepository = AppDataSource.getRepository(User)

    const searchUser = await userRepository.findOneBy({
        id: userId
    })
  
    if (!searchUser) {
        throw new AppError('id not found', 404)
    }
    if (!searchUser.isActive) {
        throw new AppError('User does not exist', 400)
    }


    // searchUser.isActive = false
    await userRepository.update(userId,{
        isActive:false
    })
  

};
export default deleteUserService
