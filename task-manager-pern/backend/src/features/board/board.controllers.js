import { prisma } from "../../prisma.js";
import { ErrorResponse } from "../../utils/error.js";
import { ApiResponse } from "../../utils/response.js";

export const getAllboards = (req, res) => {
  try {
  } catch (error) {}
};
export const getBoardById = (req, res) => {
  try {
  } catch (error) {}
};
export const createBoard = async (req, res) => {
  try {
    const { title, color } = req.body;
    const user = req.user;
    console.log(user, "user");
    const createBoard = await prisma.board.create({
      data: {
        title,
        color,
        userId: user?.id,
      },
    });
    return res
      .status(201)
      .json(
        new ApiResponse(201, true, "Board created successfully", createBoard),
      );
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
  }
};
export const updateBoard = (req, res) => {
  try {
  } catch (error) {}
};
