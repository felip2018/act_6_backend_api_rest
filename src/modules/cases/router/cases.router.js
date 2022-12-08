import { Router } from "express";
import { saveController, getController } from '../controller/cases.controller.js';

const casesRouter = Router();

casesRouter.post('/save', saveController);
casesRouter.get('/get', getController);

export {
    casesRouter
}