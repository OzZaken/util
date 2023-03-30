import { Request, Response, NextFunction } from 'express'
import { userService } from '../services/user.service'

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const loggedinUser = userService.validateToken(req.cookies.loginToken)
  if (!loggedinUser) return res.status(401).send('Login first')
  next()
}