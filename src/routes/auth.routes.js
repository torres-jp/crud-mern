import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validatorMiddlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
