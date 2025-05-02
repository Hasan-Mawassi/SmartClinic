import { Router } from "express";
import * as authController from "../Controllers/authController.js";

const AuthRouter = Router();

AuthRouter.post("/register", authController.register);






export default AuthRouter;