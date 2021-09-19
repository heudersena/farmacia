import { Router } from "express";

import { homeRouter } from "./home.routes"
import { sessionRouter } from "./session.routes"

const router = Router();

router.use("/home", homeRouter);
router.use("/session", sessionRouter);



export default router;