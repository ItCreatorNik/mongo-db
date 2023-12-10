import { MongoClient, ServerApiVersion } from 'mongodb';
import { config } from 'dotenv';
config();

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connect = async () => {
  try {
    await client.connect();
    console.log('Successfully connected!');

    return client.db(process.env.DB_NAME);
  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
  }
}

const close = async () => {
  try {
    await client.close();

    console.log('Connection closed!');
  } catch (err) {
    console.error('Connection closed error: ', err);
  }
}

export {
  connect,
  close,
}
