import express from 'express'
import { createUser, readUser, updateUser, deleteUser } from '../controllers/user.controller'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await readUser(req.params.id)
        if (!user) {
            res.sendStatus(404)
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body)
        if (!user) {
            res.sendStatus(404)
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router