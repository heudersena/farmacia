import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query", "info", "error", "warn"] }) // { log: ["query", "info", "error", "warn"] }

export { prisma }

prisma.$disconnect();