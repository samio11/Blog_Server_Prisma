import { Router } from "express";
import { postController } from "./post.controller";

const router = Router();

router.post("/create", postController.createPost);
router.get("/", postController.getAllPost);
router.get("/:id", postController.getAPost);
router.patch("/:id", postController.updateAPost);
router.delete("/:id", postController.deleteAPost);

export const postRoutes = router;
