import express from "express";
import DispatchController from "../controllers/DispatchController";
import { Auth } from "../middleware/auth";

const dispatchRouter = express.Router();

dispatchRouter.get("/", Auth, DispatchController.index);
dispatchRouter.get("/:id", Auth, DispatchController.getById);
dispatchRouter.post("/store", Auth, DispatchController.store);
dispatchRouter.put("/update/:id", Auth, DispatchController.update);
dispatchRouter.delete("/delete/:id", Auth, DispatchController.delete);

export { dispatchRouter };
