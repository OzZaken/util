import express, { Request, Response } from 'express'
import path from 'path'
import authRoutes from './routes/authRoutes'
import reviewRoutes from './routes/reviewRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

// Route Splitting
app.use('/api/auth', authRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/user', userRoutes)

// Last fallback
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
