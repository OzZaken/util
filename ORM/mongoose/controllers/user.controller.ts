
import mongoose, { Schema, Document } from 'mongoose'
import { IUser, User } from '../models/user.model'

// CRUD operations for User schema
const createUser = async (user: IUser): Promise<IUser> => {
  const newUser = new User(user)
  return await newUser.save()
}

const readUser = async (id: string): Promise<IUser | null> => {
  return await User.findById(id).exec()
}

const updateUser = async (id: string, user: Partial<IUser>): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user, { new: true }).exec()
}

const deleteUser = async (id: string): Promise<void> => {
  await User.findByIdAndDelete(id).exec()
}

export {
  createUser,
  readUser,
  updateUser,
  deleteUser
}