"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prohibitedRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProhibitedController_1 = __importDefault(require("../controllers/ProhibitedController"));
const auth_1 = require("../middleware/auth");
const prohibitedRouter = express_1.default.Router();
exports.prohibitedRouter = prohibitedRouter;
prohibitedRouter.get("/", ProhibitedController_1.default.index);
prohibitedRouter.get("/:id", auth_1.Auth, ProhibitedController_1.default.getById);
prohibitedRouter.post("/store", auth_1.Auth, ProhibitedController_1.default.store);
prohibitedRouter.put("/update/:id", auth_1.Auth, ProhibitedController_1.default.update);
prohibitedRouter.delete("/delete/:id", auth_1.Auth, ProhibitedController_1.default.delete);
