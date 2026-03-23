import { Router } from 'express';
import { ProductsController } from '@/controllers/products-controller';
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/', ensureAuthenticated, productsController.index);
productsRoutes.post('/', productsController.create);

export { productsRoutes };
