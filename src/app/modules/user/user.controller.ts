import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createUser = catchAsync(async (req, res, next) => {
  const payload = req?.body;
  const result = await userServices.createUser(payload);
  sendResponse(res, {
    success: true,
    message: "User Created Done",
    statusCode: 201,
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res, next) => {
  const result = await userServices.getAllUSer();
  sendResponse(res, {
    success: true,
    message: "User Getting Done",
    statusCode: 200,
    data: result,
  });
});
const getAUser = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await userServices.getAUser(id);
  sendResponse(res, {
    success: true,
    message: "User Getting Done",
    statusCode: 200,
    data: result,
  });
});
const updateAUser = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const payload = req?.body;
  const result = await userServices.updateUser(id, payload);
  sendResponse(res, {
    success: true,
    message: "User Updated Done",
    statusCode: 200,
    data: result,
  });
});
const deleteAUser = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await userServices.deleteUser(id);
  sendResponse(res, {
    success: true,
    message: "User Delete Done",
    statusCode: 200,
    data: result,
  });
});

export const userCOntroller = {
  createUser,
  getAUser,
  getAllUser,
  updateAUser,
  deleteAUser,
};
