import { authConfig } from '@/configs/auth';
import { AppError } from '@/utils/AppError';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

class SessionsController {
  async create(request: Request, response: Response) {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
      role: 'customer',
    };

    if (
      mockUser.email !== request.body.email ||
      mockUser.password !== request.body.password
    ) {
      throw new AppError('Invalid email or password', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: mockUser.role }, secret, {
      subject: String(mockUser.id),
      expiresIn: expiresIn,
    });

    return response.json({ token });
  }
}

export { SessionsController };
