import { authConfig } from '@/configs/auth';
import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  sub: string;
  role: string;
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  const { sub: user_id, role } = verify(
    token,
    authConfig.jwt.secret,
  ) as TokenPayload;

  req.user = { id: user_id, role };

  next();
}

export { ensureAuthenticated };
