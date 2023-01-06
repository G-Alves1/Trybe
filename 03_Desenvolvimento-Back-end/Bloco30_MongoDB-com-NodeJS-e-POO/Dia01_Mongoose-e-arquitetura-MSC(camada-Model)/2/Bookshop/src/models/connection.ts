import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:/model_example') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;