"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../config/helper");
class HomeController {
    index(request, response) {
        // throw new Error("Error")
        const unique = (0, helper_1.gerarLote)();
        response.json({ message: 'Home', unique });
    }
}
// async index(request: Request, response: Response) { }
// async getById(request: Request, response: Response) { }
// async store(request: Request, response: Response) { }
// async update(request: Request, response: Response) { }
// async delete(request: Request, response: Response) { }
exports.default = new HomeController();
