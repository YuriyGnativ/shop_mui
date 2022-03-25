import { Router } from "express";
import { AdminController } from "../controllers";

const router = Router();

router.get("/", AdminController.index);

export default router;
