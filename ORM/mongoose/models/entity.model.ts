import mongoose, { Schema, Document } from 'mongoose'

// Define IEntity schema
interface IEntity extends Document {
    name: string
    category: string
    price: number
}

const entitySchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Entity = mongoose.model<IEntity>('Entity', entitySchema)

// CRUD operations for Entity schema
const createEntity = async (entity: IEntity): Promise<IEntity> => {
    const newEntity = new Entity(entity)
    return await newEntity.save()
}

const readEntity = async (id: string): Promise<IEntity | null> => {
    return await Entity.findById(id).exec()
}

const updateEntity = async (id: string, entity: Partial<IEntity>): Promise<IEntity | null> => {
    return await Entity.findByIdAndUpdate(id, entity, { new: true }).exec()
}

const deleteEntity = async (id: string): Promise<void> => {
    await Entity.findByIdAndDelete(id).exec()
}

export {
    IEntity,
    createEntity,
    readEntity,
    updateEntity,
    deleteEntity,
}