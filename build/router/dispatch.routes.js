"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchRouter = void 0;
const express_1 = __importDefault(require("express"));
const DispatchController_1 = __importDefault(require("../controllers/DispatchController"));
const auth_1 = require("../middleware/auth");
const dispatchRouter = express_1.default.Router();
exports.dispatchRouter = dispatchRouter;
dispatchRouter.get("/", auth_1.Auth, DispatchController_1.default.index);
dispatchRouter.get("/:id", auth_1.Auth, DispatchController_1.default.getById);
dispatchRouter.post("/store", auth_1.Auth, DispatchController_1.default.store);
dispatchRouter.put("/update/:id", auth_1.Auth, DispatchController_1.default.update);
dispatchRouter.delete("/delete/:id", auth_1.Auth, DispatchController_1.default.delete);
