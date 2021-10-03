import { Router } from 'express';

import { homeRouter } from '@routes/home.routes';
import { sessionRouter } from '@routes/session.routes';
import { companyRouter } from '@routes/company.routes';
import { typeProductRouter } from '@routes/typeproduct.routes';
import { reportRouter } from '@routes/report.routes';
import { entradaProdutoRouter } from '@routes/entradaproduto.routes';
import { dispatchRouter } from '@routes/dispatch.routes';
import { prohibitedRouter } from '@routes/prohibited.routes';
import { saidaRouter } from '@routes/saida.routes';

const router = Router();

router.use('/home', homeRouter);
router.use('/session', sessionRouter);
router.use('/company', companyRouter);
router.use('/typeproduct', typeProductRouter);
router.use('/report', reportRouter);
router.use('/product', entradaProdutoRouter);
router.use('/dispatch', dispatchRouter);
router.use('/prohibited', prohibitedRouter);
router.use('/saida', saidaRouter);

export default router;
