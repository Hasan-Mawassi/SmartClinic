import { Router } from "express";
import AuthRouter from "./authRoute.js";

const Routes = Router();

Routes.use('/api/v1/auth',AuthRouter);

export default Routes;