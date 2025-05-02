import { Router } from "express";
import AuthRouter from "./authRoute.js";

const Routes = Router();

Routes.use(AuthRouter);

export default Routes;