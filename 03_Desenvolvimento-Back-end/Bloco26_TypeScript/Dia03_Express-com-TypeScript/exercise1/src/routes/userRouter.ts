import { Router } from 'express';

import * as userControllers from '../controllers/userController';
import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

router.post('/login', userControllers.login);
router.get('/', userControllers.getAll);
router.get('/:id', userControllers.getById);
router.delete('/:id', userControllers.remove);

router.use(userMiddleware);

router.post('/', userControllers.create);
router.put('/:id', userControllers.update);

export default router;