import express from 'express';

import { Auth } from '@middleware/auth';
import CTR from '@controllers/CompanyController';
const companyRouter = express.Router();

companyRouter.get('/', CTR.index);
companyRouter.get('/:id', CTR.getById);
companyRouter.post('/store', Auth, CTR.store);
companyRouter.put('/update/:id', Auth, CTR.update);
companyRouter.delete('/delete/:id', Auth, CTR.delete);

export { companyRouter };
