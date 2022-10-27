import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import accessEnv from '#root/helpers/accessEnv';
import setupRoutes from './routes';
const port = accessEnv('PORT', 7100);
console.log('PORT', port);

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

setupRoutes(app);

app.listen(port, '0.0.0.0', () => {
  console.info(`Listings service is listening on port ${port}`);
});
