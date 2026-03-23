import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';

function verifyUserAuthorization(role: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new AppError('User not authenticated', 401);
    }

    if (!role.includes(req.user.role)) {
      throw new AppError('User not authorized', 403);
    }

    return next();
  };
}

export { verifyUserAuthorization };
