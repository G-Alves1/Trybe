import { connect } from 'mongoose';

const connection = (uri: string) => {
  try {
    connect(uri);
    console.log(`Conectado ao mongodb em: ${uri}`);
  } catch (error) {
    console.log(error);
  }
};

export default connection;