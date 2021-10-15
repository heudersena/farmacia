import express from "express";
import TypeProductController from "../controllers/TypeProductController";
import { Auth } from "../middleware/auth";

const typeProductRouter = express.Router();

typeProductRouter.get("/", Auth, TypeProductController.index);
typeProductRouter.get("/:id", TypeProductController.getById);
typeProductRouter.post("/store", TypeProductController.store);
typeProductRouter.put("/update/:id", TypeProductController.update);
typeProductRouter.delete("/delete/:id", TypeProductController.delete);

export { typeProductRouter };
