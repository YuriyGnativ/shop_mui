import { Router } from "express";
import ProductRouter from "./product.routes";
import UserRouter from "./user.routes";
import AdminRouter from "./admin.routes";

const router = Router();

router.use("/product", ProductRouter);
router.use("/user", UserRouter);
router.use("/admin", AdminRouter);

export default router;
