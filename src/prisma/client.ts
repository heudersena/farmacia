import { PrismaClient } from "@prisma/client"
const client = new PrismaClient({ log: ["query", "info", "error", "warn"] })
export { client }

client.$disconnect();