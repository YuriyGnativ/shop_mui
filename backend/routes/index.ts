import { Router } from "express";
import ProductRouter from "./product.routes";
import UserRouter from "./user.routes";

const router = Router();

router.use("/product", ProductRouter);
router.use("/user", UserRouter);

export default router;
