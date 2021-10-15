"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const TypeProductController_1 = __importDefault(require("../controllers/TypeProductController"));
const auth_1 = require("../middleware/auth");
const typeProductRouter = express_1.default.Router();
exports.typeProductRouter = typeProductRouter;
typeProductRouter.get("/", auth_1.Auth, TypeProductController_1.default.index);
typeProductRouter.get("/:id", TypeProductController_1.default.getById);
typeProductRouter.post("/store", TypeProductController_1.default.store);
typeProductRouter.put("/update/:id", TypeProductController_1.default.update);
typeProductRouter.delete("/delete/:id", TypeProductController_1.default.delete);
