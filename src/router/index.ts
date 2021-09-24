import { Router } from "express";

import { homeRouter } from "./home.routes";
import { sessionRouter } from "./session.routes";
import { companyRouter } from "./company.routes";
import { typeProductRouter } from "./typeproduct.routes";
import { reportRouter } from "./report.routes";
import { entradaProdutoRouter } from "./entradaproduto.routes";
import { dispatchRouter } from "./dispatch.routes";

const router = Router();

router.use("/home", homeRouter);
router.use("/session", sessionRouter);
router.use("/company", companyRouter);
router.use("/typeproduct", typeProductRouter);
router.use("/report", reportRouter);
router.use("/product", entradaProdutoRouter);
router.use("/dispatch", dispatchRouter);

export default router;
