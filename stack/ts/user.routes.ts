import express, { Router } from 'express'

import { getUser, getUsers, deleteUser, updateUser } from './user.controller'

const router: Router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router