import express from "express";
import SessionController from "../controllers/SessionController";

const sessionRouter = express.Router();


sessionRouter.post("/signin", SessionController.signin);
sessionRouter.post("/signup", SessionController.signup);



export { sessionRouter }