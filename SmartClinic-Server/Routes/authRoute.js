import { Router } from "express";
import * as authController from "../Controllers/authController.js";
import { registerValidator } from "../Requests/authvalidator/registerValidator.js";
import doctorRegisterValidator from "../Requests/authvalidator/doctorRegisterValidator.js";
import { validate } from "../Middleware/validate.js";
const AuthRouter = Router();

AuthRouter.post("/patient/register", registerValidator, validate, authController.register);
AuthRouter.post("/doctor/register",doctorRegisterValidator,validate,  authController.doctorRegister);
AuthRouter.post("/doctor/login",  authController.loginDoctor);






export default AuthRouter;