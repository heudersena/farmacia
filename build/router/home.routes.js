"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const HomeController_1 = __importDefault(require("../controllers/HomeController"));
const auth_1 = require("../middleware/auth");
const homeRouter = express_1.default.Router();
exports.homeRouter = homeRouter;
homeRouter.get("/", auth_1.Auth, HomeController_1.default.index);
