import express from "express";
import CompanyController from "../controllers/CompanyController";

const companyRouter = express.Router();


companyRouter.get("/", CompanyController.index);
companyRouter.get("/:id", CompanyController.getById);
companyRouter.post("/store", CompanyController.store);
companyRouter.put("/update/:id", CompanyController.update);
companyRouter.delete("/delete/:id", CompanyController.delete);



export { companyRouter }