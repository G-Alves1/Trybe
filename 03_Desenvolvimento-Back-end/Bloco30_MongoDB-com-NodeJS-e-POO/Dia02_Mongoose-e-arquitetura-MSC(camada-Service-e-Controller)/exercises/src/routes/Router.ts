import { Router } from 'express';
import Controller from '../controllers';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.post(route, controller.create);
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.put(route, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}

export default CustomRouter;