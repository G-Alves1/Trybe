import RecordStore, { recordStoreSchema } from '../interfaces/RecordStore';
import Service, { ServiceError } from '.';
import RecordStoreModel from '../models/RecordStore';

class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }

  create = async (
    obj: RecordStore,
  ): Promise<RecordStore | ServiceError | null> => {
    const parsed = recordStoreSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default RecordStoreService;