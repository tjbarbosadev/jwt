import { Request, Response } from 'express';

class SessionsController {
  async create(request: Request, response: Response) {
    return response.json({
      message: 'Session created',
      user: process.env.USER_NAME,
      email: process.env.USER_EMAIL,
    });
  }
}

export { SessionsController };
