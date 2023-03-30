import mongoose, { Schema, Document } from 'mongoose'

// Define User interface schema
interface IUser extends Document {
    name: string
    email: string
    password: string
}

const userSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model<IUser>('User', userSchema)

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
    IUser,
    createUser,
    readUser,
    updateUser,
    deleteUser
}