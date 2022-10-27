import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import accessEnv from '#root/helpers/accessEnv';

const port = accessEnv('PORT', 7101);
console.log('PORT', port);

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

app.listen(port, '0.0.0.0', () => {
  console.info(`users service is listening on port ${port}`);
});
