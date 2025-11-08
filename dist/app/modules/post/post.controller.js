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
exports.postController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const post_service_1 = require("./post.service");
const createPost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req === null || req === void 0 ? void 0 : req.body;
    const result = yield post_service_1.postServices.createPost(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "POST Created Done",
        statusCode: 201,
        data: result,
    });
}));
const getAllPost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_service_1.postServices.getAllPost();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "POST Getting Done",
        statusCode: 200,
        data: result,
    });
}));
const getAPost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield post_service_1.postServices.getAPost(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "POST Getting Done",
        statusCode: 200,
        data: result,
    });
}));
const updateAPost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const payload = req === null || req === void 0 ? void 0 : req.body;
    const result = yield post_service_1.postServices.updatePost(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "POST Updated Done",
        statusCode: 200,
        data: result,
    });
}));
const deleteAPost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield post_service_1.postServices.deletePost(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "POST Delete Done",
        statusCode: 200,
        data: result,
    });
}));
exports.postController = {
    createPost,
    getAllPost,
    getAPost,
    updateAPost,
    deleteAPost,
};
