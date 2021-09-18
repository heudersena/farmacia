import express from "express";
import cors from "cors";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import router from "./router";

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } });

app.use("/public", express.static(path.join(__dirname, "..", "src", "tmp")));
app.use(express.json())
app.use(cors())
app.use(router)
export { serverHttp, io };