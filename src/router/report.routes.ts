import express from "express";
import ReportController from "../controllers/ReportController";
import { Auth } from "../middleware/auth";

const reportRouter = express.Router();

reportRouter.get("/", Auth, ReportController.index);
reportRouter.get("/:id", Auth, ReportController.getById);
reportRouter.post("/store", Auth, ReportController.store);
reportRouter.put("/update/:id", Auth, ReportController.update);
reportRouter.delete("/delete/:id", Auth, ReportController.delete);

export { reportRouter };
