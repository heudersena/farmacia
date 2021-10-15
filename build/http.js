"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.serverHttp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
require("express-async-errors");
const socket_io_1 = require("socket.io");
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const serverHttp = http_1.default.createServer(app);
exports.serverHttp = serverHttp;
const io = new socket_io_1.Server(serverHttp, { cors: { origin: '*' } });
exports.io = io;
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '..', 'src', 'tmp')));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.default);
app.get('*', (request, response, next) => {
    throw new Error('NotFound');
});
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: 'Error',
        message: 'Internal Server Error',
    });
    next();
});
