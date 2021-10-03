import express from 'express';
import CTRL from '@controllers/SaidaController';

import { Auth } from '@middleware/auth';

const saidaRouter = express.Router();

saidaRouter.get('/', CTRL.index);
saidaRouter.get('/:id', Auth, CTRL.getById);
saidaRouter.post('/store', Auth, CTRL.store);
saidaRouter.put('/update/:id', Auth, CTRL.update);
saidaRouter.delete('/delete/:id', Auth, CTRL.delete);

export { saidaRouter };
