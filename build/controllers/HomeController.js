"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../config/helper");
class HomeController {
    index(request, response) {
        const unique = (0, helper_1.gerarLote)();
        response.json({ message: "Home", unique });
    }
}
exports.default = new HomeController();
