"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = require("express");
const user_routes_1 = require("../modules/user/user.routes");
const post_routes_1 = require("../modules/post/post.routes");
exports.rootRouter = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        element: user_routes_1.userRoutes,
    },
    {
        path: "/post",
        element: post_routes_1.postRoutes,
    },
];
moduleRoutes.forEach((x) => exports.rootRouter.use(x.path, x.element));
