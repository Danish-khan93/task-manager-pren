import { prisma } from "../../prisma.js";
import { ErrorResponse } from "../../utils/error.js";
import { ApiResponse } from "../../utils/response.js";

export const getAllboards = async (req, res) => {
  try {
    const user = req.user;
    console.log(user?.id);

    const allBoards = await prisma.board.findMany({
      where: { userId: user?.id },
    });
    console.log(allBoards);
    return res
      .status(200)
      .json(
        new ApiResponse(200, true, "Boards retrieved successfully", allBoards),
      );
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
  }
};
export const getBoardById = (req, res) => {
  try {
  } catch (error) {}
};

// create board

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

    console.log(createBoard);
    if (!createBoard) {
      return res
        .status(500)
        .json(new ErrorResponse(500, "Failed to create board"));
    }

    const basicLists = [
      { title: "Todo", cards: [] },
      { title: "In Progress", cards: [] },
      { title: "Done", cards: [] },
    ];

    for (let list of basicLists) {
      await prisma.list.create({
        data: {
          title: list.title,
          boardId: createBoard?.id,
        },
      });
    }

    const getBoardDetail = await prisma.board.findUnique({
      where: { id: createBoard?.id },
      include: { list: true },
    });
    console.log(getBoardDetail);

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          true,
          "Board created successfully",
          getBoardDetail,
        ),
      );
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
  }
};
export const updateBoard = (req, res) => {
  try {
  } catch (error) {}
};
