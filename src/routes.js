import { Router } from "express";

import CompanyController from "./app/controllers/CompanyController";

const routes = new Router();

// Get companies
routes.get("/company", CompanyController.index);

// Create company
routes.post("/company", CompanyController.store);

export default routes;
