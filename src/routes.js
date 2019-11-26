import { Router } from "express";

import CompanyController from "./app/controllers/CompanyController";
import StudentController from "./app/controllers/StudentController";
import EventController from "./app/controllers/EventController";
import SubscriptionStudentController from "./app/controllers/SubscriptionStudentController";
import SubscriptionCompanyController from "./app/controllers/SubscriptionCompanyController";

const routes = new Router();

// Get companies
routes.get("/companies", CompanyController.index);
// Get specific company
routes.get("/company", CompanyController.indexOne);
// Create company
routes.post("/companies", CompanyController.store);

// Get students
routes.get("/students", StudentController.index);
// Get student info
routes.get("/student", StudentController.indexOne);
// Create student
routes.post("/students", StudentController.store);

// Get events
routes.get("/events", EventController.index);
// Get events by company
routes.get("/events/:id", EventController.indexByCompany);
// Create students
routes.post("/events", EventController.store);

// Get subscriptions that the student is subscribed
routes.get("/subscriptions/:id", SubscriptionStudentController.index);
// Subscribe to a event
routes.get("/subscriptions", SubscriptionStudentController.store);

// Get subscriptions from event
routes.get("/subscriptions/event/:id", SubscriptionCompanyController.index);

// Get subscription to event

export default routes;
