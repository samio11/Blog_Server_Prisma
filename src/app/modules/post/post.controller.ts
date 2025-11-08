import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { postServices } from "./post.service";

const createPost = catchAsync(async (req, res, next) => {
  const payload = req?.body;
  const result = await postServices.createPost(payload);
  sendResponse(res, {
    success: true,
    message: "POST Created Done",
    statusCode: 201,
    data: result,
  });
});
const getAllPost = catchAsync(async (req, res, next) => {
  const result = await postServices.getAllPost();
  sendResponse(res, {
    success: true,
    message: "POST Getting Done",
    statusCode: 200,
    data: result,
  });
});
const getAPost = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await postServices.getAPost(id);
  sendResponse(res, {
    success: true,
    message: "POST Getting Done",
    statusCode: 200,
    data: result,
  });
});

export const postController = { createPost, getAllPost, getAPost };
