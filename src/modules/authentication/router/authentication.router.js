import { Router } from "express";
import { loginController, registerController } from '../controller/autentication.controller.js';
const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.post('/register', registerController);

export {
    authRouter
}