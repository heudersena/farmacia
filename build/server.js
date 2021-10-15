"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env");
const http_1 = require("./http");
require("./websocket");
http_1.serverHttp.listen(3333, () => console.log('server running'));
