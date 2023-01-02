import { IUser, IUserUpdate } from '../../interfaces/users/index'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { userTotal } from '../../schema/user.schema'


const updateUserService = async (userData: IUserUpdate, userId: number): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const updatedUser = userRepository.create({
        ...findUser,
        ...userData
    })
    await userRepository.save(updatedUser)

    const updatedUserWithoutPassword = await userTotal.validate(updatedUser, {
        stripUnknown: true
    })

    return updatedUserWithoutPassword

}


export default updateUserService
