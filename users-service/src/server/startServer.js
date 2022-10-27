import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import setupRoutes from './routes';
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

setupRoutes(app);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(port, '0.0.0.0', () => {
  console.info(`users service is listening on port ${port}`);
});
