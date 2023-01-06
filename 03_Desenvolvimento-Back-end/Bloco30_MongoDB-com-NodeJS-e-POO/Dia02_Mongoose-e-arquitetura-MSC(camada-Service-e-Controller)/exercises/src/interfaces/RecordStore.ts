import { z } from 'zod';

const recordStoreSchema = z.object({
  title: z.string(),
  artist: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean()});

type RecordStore = z.infer<typeof recordStoreSchema>;

export default RecordStore;
export { recordStoreSchema };