"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entradaProdutoRouter = void 0;
const express_1 = __importDefault(require("express"));
const EntradaProdutoController_1 = __importDefault(require("../controllers/EntradaProdutoController"));
const auth_1 = require("../middleware/auth");
const entradaProdutoRouter = express_1.default.Router();
exports.entradaProdutoRouter = entradaProdutoRouter;
entradaProdutoRouter.get("/", auth_1.Auth, EntradaProdutoController_1.default.index);
entradaProdutoRouter.get("/:id", auth_1.Auth, EntradaProdutoController_1.default.getById);
entradaProdutoRouter.post("/store", auth_1.Auth, EntradaProdutoController_1.default.store);
entradaProdutoRouter.put("/update/:id", auth_1.Auth, EntradaProdutoController_1.default.update);
entradaProdutoRouter.delete("/delete/:id", auth_1.Auth, EntradaProdutoController_1.default.delete);
