"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = __importDefault(require("express"));
const SessionController_1 = __importDefault(require("../controllers/SessionController"));
const sessionRouter = express_1.default.Router();
exports.sessionRouter = sessionRouter;
sessionRouter.post("/signin", SessionController_1.default.signin);
sessionRouter.post("/signup", SessionController_1.default.signup);
