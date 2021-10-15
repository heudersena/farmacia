"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("../prisma/client");
const message_1 = require("../config/message");
class SessionController {
    async signin(request, response) {
        const { username, password } = request.body;
        if (!username || !password)
            response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_USER_PASSWORD)() });
        try {
            const user = await client_1.prisma.user.findFirst({ where: { username }, select: { username: true, password: true, role: true, id: true } });
            if (user == null)
                response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_USER_PASSWORD)() });
            if (!bcryptjs_1.default.compareSync(password, user.password))
                response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_USER_PASSWORD)() });
            const token = jsonwebtoken_1.default.sign({ data: { id: user.id, username: user.username, role: user.role } }, process.env.JWT, { expiresIn: '8h' });
            response.json({ err: false, data: { token, username: user.username, role: user.role, id: user.id }, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
    async signup(request, response) {
        try {
            const { username, email, password } = request.body;
            const salt = bcryptjs_1.default.genSaltSync(10);
            const password_hash = bcryptjs_1.default.hashSync(password, salt);
            const user = await client_1.prisma.user.create({
                data: {
                    username,
                    email,
                    password: password_hash
                }
            });
            response.json({ err: false, data: user, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
}
exports.default = new SessionController();
