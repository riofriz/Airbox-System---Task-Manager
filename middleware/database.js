import nextConnect from 'next-connect';
import { MongoClient } from 'mongodb';
import { env } from 'process';

const client = new MongoClient(env.DB_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async (req, res, next) => {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('MockData');
  return next();
};

const middleware = nextConnect();
middleware.use(database);

export default middleware;
