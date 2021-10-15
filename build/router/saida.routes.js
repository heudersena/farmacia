"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saidaRouter = void 0;
const express_1 = __importDefault(require("express"));
const SaidaController_1 = __importDefault(require("../controllers/SaidaController"));
const auth_1 = require("../middleware/auth");
const saidaRouter = express_1.default.Router();
exports.saidaRouter = saidaRouter;
saidaRouter.get('/', SaidaController_1.default.index);
saidaRouter.get('/:id', auth_1.Auth, SaidaController_1.default.getById);
saidaRouter.post('/store', auth_1.Auth, SaidaController_1.default.store);
saidaRouter.put('/update/:id', auth_1.Auth, SaidaController_1.default.update);
saidaRouter.delete('/delete/:id', auth_1.Auth, SaidaController_1.default.delete);
