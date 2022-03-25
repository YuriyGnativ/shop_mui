import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();

router.get("/:id", UserController.getUser);
router.post("/create", UserController.createUser);
router.post("/update", UserController.updateUser);
router.post("/delete", UserController.deleteUser);

export default router;
