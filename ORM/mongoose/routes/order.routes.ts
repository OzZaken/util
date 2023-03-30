import express from 'express'
import {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/order.controller'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const order = await createOrder(req.body)
        res.status(201).send(order)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const order = await readOrder(req.params.id)
        if (!order) {
            res.sendStatus(404)
        } else {
            res.send(order)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const order = await updateOrder(req.params.id, req.body)
        if (!order) {
            res.sendStatus(404)
        } else {
            res.send(order)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await deleteOrder(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router