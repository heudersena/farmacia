"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const message_1 = require("../config/message");
const Auth = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader)
        return response.json({ err: true, jwt: true, message: (0, message_1.ERROR_JWT)() });
    const [, token] = authHeader.split(' ');
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT);
        request.userId = Number(sub);
        console.log(sub);
        return next();
    }
    catch (error) {
        return response.json({ err: true, jwt: true, message: (0, message_1.ERROR_JWT)() });
    }
};
exports.Auth = Auth;
