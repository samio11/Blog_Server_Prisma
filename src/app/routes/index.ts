import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { postRoutes } from "../modules/post/post.routes";

export const rootRouter = Router();

const moduleRoutes = [
  {
    path: "/user",
    element: userRoutes,
  },
  {
    path: "/post",
    element: postRoutes,
  },
];

moduleRoutes.forEach((x) => rootRouter.use(x.path, x.element));
