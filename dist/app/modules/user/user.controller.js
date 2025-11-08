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
exports.userCOntroller = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req === null || req === void 0 ? void 0 : req.body;
    const result = yield user_service_1.userServices.createUser(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User Created Done",
        statusCode: 201,
        data: result,
    });
}));
const getAllUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userServices.getAllUSer();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User Getting Done",
        statusCode: 200,
        data: result,
    });
}));
const getAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield user_service_1.userServices.getAUser(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User Getting Done",
        statusCode: 200,
        data: result,
    });
}));
const updateAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const payload = req === null || req === void 0 ? void 0 : req.body;
    const result = yield user_service_1.userServices.updateUser(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User Updated Done",
        statusCode: 200,
        data: result,
    });
}));
const deleteAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield user_service_1.userServices.deleteUser(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User Delete Done",
        statusCode: 200,
        data: result,
    });
}));
exports.userCOntroller = {
    createUser,
    getAUser,
    getAllUser,
    updateAUser,
    deleteAUser,
};
