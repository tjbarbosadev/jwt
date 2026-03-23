import { Request, Response } from 'express';

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({ message: 'Products list' });
  }

  async create(request: Request, response: Response) {
    return response.json({
      message: 'Product created',
      user: { id: request.user?.id },
    });
  }
}

export { ProductsController };
