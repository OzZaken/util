import mongoose, { Schema, Document } from 'mongoose'

// Define IOrder interface
interface IOrder extends Document {
    service: string;
    customer: string;
    price: number;
}

// Define Order schema
const orderSchema = new Schema<IOrder>({
    service: {
        type: String,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const Order = mongoose.model<IOrder>('Order', orderSchema)

export { IOrder, Order }