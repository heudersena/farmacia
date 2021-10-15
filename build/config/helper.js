"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarLote = void 0;
const uuid_1 = require("uuid");
const gerarLote = () => (0, uuid_1.v1)().split("-")[0].toLocaleUpperCase();
exports.gerarLote = gerarLote;
