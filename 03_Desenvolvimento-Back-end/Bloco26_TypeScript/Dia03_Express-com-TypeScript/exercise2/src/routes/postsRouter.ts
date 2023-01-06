import { Router } from 'express';
import * as postControllers from '../controllers/postController';
import postMiddleware from '../middlewares/postMiddleware';

const postsRouter = Router();

postsRouter.get('/search', postControllers.getAllBySearchTerm);
postsRouter.get('/', postControllers.getAll);
postsRouter.get('/:id', postControllers.getById);
postsRouter.delete('/:id', postControllers.remove);

postsRouter.use(postMiddleware);

postsRouter.post('/', postControllers.create);
postsRouter.put('/:id', postControllers.update);

export default postsRouter;
