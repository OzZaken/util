import mongoose, { Schema, Document } from 'mongoose'
/**
 * Defines an IOrder interface that extends Document from Mongoose,
 * represents the schema for an order in your MongoDB database.
 * Defines three fields: service, customer, and price.
 */
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