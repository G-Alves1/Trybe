import { Router } from 'express';

import * as restaurantController from '../controllers/restaurantController';
import restaurantMiddleware from '../middlewares/restaurantMiddleware';

const router = Router();

router.get('/open', restaurantController.getAllOpen);
router.get('/:id', restaurantController.getById);
router.get('/', restaurantController.getAll);
router.delete('/:id', restaurantController.remove);

router.use(restaurantMiddleware);

router.post('', restaurantController.create);
router.put('/:id', restaurantController.update);

export default router;