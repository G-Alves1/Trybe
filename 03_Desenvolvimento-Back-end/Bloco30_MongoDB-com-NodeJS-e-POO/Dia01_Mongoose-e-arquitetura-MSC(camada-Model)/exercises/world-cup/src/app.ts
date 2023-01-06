import express from 'express';
import connection from './models/connection';
import router from './routes';

class App {
  public express: express.Express;

  public connection: void;

  constructor() {
    this.express = express();
    this.middlewares();
    this.router();
    this.connection = connection('mongodb://localhost:27017/world_cups');
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private router() {
    this.express.use(router);
  }
}

export default App;