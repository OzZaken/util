import mongoose from 'mongoose'

// Define a schema for the product model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ['electronics', 'books', 'clothing', 'food']
  }
})

// Create a model for the product schema
export const ProductModel = mongoose.model('Product', productSchema)
