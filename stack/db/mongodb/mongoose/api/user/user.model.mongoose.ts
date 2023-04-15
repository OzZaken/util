import mongoose, { Schema, Document } from 'mongoose'

// Define User interface schema
interface IUser extends Document {
    name: string
    email: string
    password: string
    friends: [String],
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

/**  const User = mongoose.model<IUser>('User', userSchema)
 * mongoose.model: provided by the Mongoose library that creates a new model based on a schema definition.
 * <User>: generic type parameter that specifies the type of the model.
 * 'User': name of the collection in the MongoDB. */
const User = mongoose.model<IUser>('User', userSchema)

export { IUser, User } // interface, model 