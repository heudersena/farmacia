"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
http_1.io.on('connection', (socket) => {
    console.log('user connected: ', socket.id);
    socket.on('disconnect', () => console.log('user desconect socketIo'));
});
