import express from "express";
import ProhibitedController from "../controllers/ProhibitedController";
import { Auth } from "../middleware/auth";

const prohibitedRouter = express.Router();

prohibitedRouter.get("/", Auth, ProhibitedController.index);
prohibitedRouter.get("/:id", Auth, ProhibitedController.getById);
prohibitedRouter.post("/store", Auth, ProhibitedController.store);
prohibitedRouter.put("/update/:id", Auth, ProhibitedController.update);
prohibitedRouter.delete("/delete/:id", Auth, ProhibitedController.delete);

export { prohibitedRouter };
