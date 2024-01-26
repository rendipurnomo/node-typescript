import UserType from '../types/user.type'
import userModel from '../models/user.model'

export const createUserDB = async (payload: UserType) => {
  try {
    const createdUser = await userModel.create(payload)
    return createdUser
  } catch (error) {
    console.log(error)
  }
}

export const getUserByEmailDB = async (email: string) => {
  try {
    return await userModel.findOne({ email })
  } catch (error) {
    console.log('Error get user by email', error)
  }
}
