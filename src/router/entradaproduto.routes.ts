import express from "express";
import EntradaProdutoController from "../controllers/EntradaProdutoController";
import { Auth } from "../middleware/auth";

const entradaProdutoRouter = express.Router();

entradaProdutoRouter.get("/", Auth, EntradaProdutoController.index);
entradaProdutoRouter.get("/:id", Auth, EntradaProdutoController.getById);
entradaProdutoRouter.post("/store", Auth, EntradaProdutoController.store);
entradaProdutoRouter.put("/update/:id", Auth, EntradaProdutoController.update);
entradaProdutoRouter.delete("/delete/:id", Auth, EntradaProdutoController.delete);

export { entradaProdutoRouter };
