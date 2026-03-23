import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  console.log('Authorization header:', token);
  next();
}

export { ensureAuthenticated };
