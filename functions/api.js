import express, { Router } from 'express';
import serverless from 'serverless-http';
import {dummyData} from './dummy'
const app = express();
const router = Router();

router.get('/', (req, res) => {
  res.send('App is running..');
});

//Get all users
router.get('/getuserdata', (req, res) => {
  res.json(dummyData);
});

app.use('/.netlify/functions/api', router);
export const handler = serverless(app);
