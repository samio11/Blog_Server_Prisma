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
exports.userServices = void 0;
const db_1 = require("../../config/db");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.create({ data: payload });
    return result;
});
const getAllUSer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findMany({
        include: {
            posts: {
                select: {
                    id: true,
                    title: true,
                    content: true,
                    thumbnail: true,
                    views: true,
                    tags: true,
                },
                orderBy: { createdAt: "desc" },
            },
        },
    });
    return result;
});
const getAUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findFirst({
        where: { id },
        include: { posts: true },
    });
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.update({ where: { id }, data: payload });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.delete({ where: { id } });
    return result;
});
exports.userServices = {
    createUser,
    getAllUSer,
    getAUser,
    updateUser,
    deleteUser,
};
