import { Schema, model as createModel, Document } from 'mongoose';
import RecordStore from '../interfaces/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document { }

const recordStoreSchema = new Schema<RecordStoreDocument>({
  title: String,
  artist: String,
  format: String,
  yearPublished: Number,
  new: Boolean});

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(
    model = createModel('RecordStore', recordStoreSchema, 'RecordStore'),
  ) {
    super(model);
  }
}

export default RecordStoreModel;