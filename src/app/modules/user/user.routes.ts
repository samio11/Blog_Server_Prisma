import { Router } from "express";
import { userCOntroller } from "./user.controller";

const router = Router();

router.post("/create", userCOntroller.createUser);
router.get("/", userCOntroller.getAllUser);
router.get("/:id", userCOntroller.getAllUser);
router.patch("/update/:id", userCOntroller.updateAUser);
router.delete("/delete/:id", userCOntroller.deleteAUser);

export const userRoutes = router;
