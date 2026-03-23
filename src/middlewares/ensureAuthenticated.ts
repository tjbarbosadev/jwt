import { authConfig } from '@/configs/auth';
import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  const { sub: user_id } = verify(token, authConfig.jwt.secret) as {
    sub: string;
  };

  req.user = { id: user_id };

  next();
}

export { ensureAuthenticated };
