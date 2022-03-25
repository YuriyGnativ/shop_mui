import { Router } from "express";
import { ProductController } from "../controllers";

const router = Router();

router.get("/:id", ProductController.getProduct);
router.post("/create", ProductController.createProduct);

export default router;
