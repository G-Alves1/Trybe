import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import RecordStoreService from '../services/RecordStore';
import RecordStore from '../interfaces/RecordStore';

class RecordStoreController extends Controller<RecordStore> {
  private _route: string;

  constructor(
    service = new RecordStoreService(),
    route = '/store',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<RecordStore>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const recordStore = await this.service.create(body);
      if (!recordStore) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in recordStore) {
        return res.status(400).json(recordStore);
      }
      return res.status(201).json(recordStore);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const recordStore = await this.service.readOne(id);
      return recordStore
        ? res.json(recordStore)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request,
    res: Response<RecordStore[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const recordStore = await this.service.update();
      if (!recordStore) {
        return res.status(404)
          .json({ error: this.errors.notFound });
      }
      return res.json(recordStore);
    } catch (err) {
      return res.status(500)
        .json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const recordStore = await this.service.delete(id);
      return recordStore
        ? res.json(recordStore)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default RecordStoreController;