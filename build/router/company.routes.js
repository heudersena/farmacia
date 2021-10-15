"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const CompanyController_1 = __importDefault(require("../controllers/CompanyController"));
const companyRouter = express_1.default.Router();
exports.companyRouter = companyRouter;
companyRouter.get('/', CompanyController_1.default.index);
companyRouter.get('/:id', CompanyController_1.default.getById);
companyRouter.post('/store', auth_1.Auth, CompanyController_1.default.store);
companyRouter.put('/update/:id', auth_1.Auth, CompanyController_1.default.update);
companyRouter.delete('/delete/:id', auth_1.Auth, CompanyController_1.default.delete);
