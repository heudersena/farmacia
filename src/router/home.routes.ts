import express from 'express';
import HomeController from '../controllers/HomeController';
import { Auth } from '../middleware/auth';

const homeRouter = express.Router();

homeRouter.get('/', HomeController.index);

export { homeRouter };
