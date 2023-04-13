import express from 'express'
import {
    createPost,
    readPost,
    updatePost,
    deletePost,
} from '../controllers/post.controller'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const post = await createPost(req.body)
        res.status(201).send(post)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await readPost(req.params.id)
        if (!post) {
            res.sendStatus(404)
        } else {
            res.send(post)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await updatePost(req.params.id, req.body)
        if (!post) {
            res.sendStatus(404)
        } else {
            res.send(post)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await deletePost(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router
