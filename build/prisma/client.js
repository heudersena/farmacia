"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({}); // { log: ["query", "info", "error", "warn"] }
exports.prisma = prisma;
prisma.$disconnect();
