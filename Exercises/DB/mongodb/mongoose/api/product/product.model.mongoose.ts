import mongoose, { Schema, Document } from 'mongoose'

interface IProduct extends Document {
    name: string
    description: string
    price: number
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const Product = mongoose.model<IProduct>('Product', productSchema)

export { IProduct, Product }
