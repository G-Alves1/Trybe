import { Router } from 'express';

import * as productController from '../controllers/productController';
import productMiddleware from '../middlewares/productMiddleware';

const router = Router();

router.get('/price', productController.getAllByPriceRange);
router.get('/n-expired', productController.getAllNotExpired);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.delete('/:id', productController.remove);

router.use(productMiddleware);

router.post('/', productController.create);
router.put('/:id', productController.update);

export default router;