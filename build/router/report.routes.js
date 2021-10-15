"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const express_1 = __importDefault(require("express"));
const ReportController_1 = __importDefault(require("../controllers/ReportController"));
const auth_1 = require("../middleware/auth");
const reportRouter = express_1.default.Router();
exports.reportRouter = reportRouter;
reportRouter.get("/", auth_1.Auth, ReportController_1.default.index);
reportRouter.get("/:id", auth_1.Auth, ReportController_1.default.getById);
reportRouter.post("/store", auth_1.Auth, ReportController_1.default.store);
reportRouter.put("/update/:id", auth_1.Auth, ReportController_1.default.update);
reportRouter.delete("/delete/:id", auth_1.Auth, ReportController_1.default.delete);
