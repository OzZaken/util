import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.routes'
import orderRoutes from './routes/order.routes'
import postRoutes from './routes/post.routes'
import productRoutes from './routes/product.routes'

const app: Application = express()
const port = process.env.PORT || 3000

// Set up middleware
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Define routes
app.use('/users', userRoutes)
app.use('/orders', orderRoutes)
app.use('/posts', postRoutes)
app.use('/products', productRoutes)

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})