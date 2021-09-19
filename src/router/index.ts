import { Router } from "express";

import { homeRouter } from "./home.routes"
import { sessionRouter } from "./session.routes"
import { companyRouter } from "./company.routes"
import { typeProductRouter } from "./typeproduct.routes"

const router = Router();

router.use("/home", homeRouter);
router.use("/session", sessionRouter);
router.use("/company", companyRouter);
router.use("/typeproduct", typeProductRouter);



export default router;