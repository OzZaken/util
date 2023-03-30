import express, { Request, Response } from 'express'
import {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller'

const router = express.Router()

// Create a new product
router.post('/', async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Read a product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await readProduct(req.params.id)
    if (!product) {
      res.sendStatus(404)
    } else {
      res.json(product)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update a product by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const product = await updateProduct(req.params.id, req.body)
    if (!product) {
      res.sendStatus(404)
    } else {
      res.json(product)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete a product by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await deleteProduct(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router