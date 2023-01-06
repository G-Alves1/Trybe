import RecordStoreController from './controllers/RecordStore';
import RecordStore from './interfaces/RecordStore';
import CustomRouter from './routes/Router';
import App from './server';

const server = new App();

const recordStoreController = new RecordStoreController();

const recordStoreRouter = new CustomRouter<RecordStore>();
recordStoreRouter.addRoute(recordStoreController);

server.addRouter(recordStoreRouter.router);

server.startServer();