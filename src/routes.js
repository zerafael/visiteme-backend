import { Router } from "express";

import CompanyController from "./app/controllers/CompanyController";
import StudentController from "./app/controllers/StudentController";
import EventController from "./app/controllers/EventController";
import SubscriptionController from "./app/controllers/SubscriptionController";

const routes = new Router();

// Get companies
routes.get("/companies", CompanyController.index);
// Get specific company
routes.get("/company", CompanyController.getCompany);
// Create company
routes.post("/companies", CompanyController.store);

// Get students
routes.get("/students/:id", StudentController.index);
// Create students
routes.post("/students", StudentController.store);

// Get events
routes.get("/events", EventController.index);
// Get events by company
routes.get("/events/:id", EventController.indexByCompany);
// Create students
routes.post("/events", EventController.store);

// Get subscriptions
routes.get("/subscriptions", SubscriptionController.index);
// Subscribe to a event
routes.get("/subscriptions", SubscriptionController.store);

export default routes;
