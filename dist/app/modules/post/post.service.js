"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postServices = void 0;
const db_1 = require("../../config/db");
const createPost = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.post.create({
        data: payload,
        include: {
            author: {
                select: { name: true, email: true, phone: true, photoUrl: true },
            },
        },
    });
    return result;
});
const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    gender: true,
                    photoUrl: true,
                    phone: true,
                    status: true,
                    isVerified: true,
                },
            },
        },
    });
    return result;
});
const getAPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.post.update({ where: { id }, data: { views: { increment: 1 } } });
        return yield tx.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        photoUrl: true,
                        gender: true,
                        status: true,
                        isVerified: true,
                    },
                },
            },
        });
    }));
});
const updatePost = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.update({ where: { id }, data: payload });
    return result;
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.delete({ where: { id } });
    return result;
});
exports.postServices = {
    createPost,
    getAllPost,
    getAPost,
    updatePost,
    deletePost,
};
