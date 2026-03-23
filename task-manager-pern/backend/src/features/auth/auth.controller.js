// A controller is a function or module that handles incoming HTTP requests,
// interacts with services or models, and sends back the response to the client.
// HTTP request = client asking server to do something
// Main parts: method, URL, headers, body
// Express receives it as req object in the controller

import { ErrorResponse } from "../../utils/error.js";
import { ApiResponse } from "../../utils/response.js";
import { generateAccessToken, passHash, createUser } from "./auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // here now pass hash service call
    const passhashing = await passHash(password);
    if (passhashing) {
      const user = {
        firstName,
        lastName,
        email,
        password: passhashing,
      };

      const newUser = await createUser(user);

      if (!newUser) {
        return res
          .status(409)
          .json(
            new ApiResponse(409, false, "the user is already created", null),
          );
      }

      const accessToken = generateAccessToken({
        id: newUser?.id,
        email: newUser?.email,
      });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000, // one hour
      });

      res.status(200).json(
        new ApiResponse(200, true, "user create successfully", {
          email: newUser?.email,
          id: newUser?.id,
          name: `${newUser?.firstName} ${newUser?.lastName}`,
        }),
      );
    }
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "server error"));
  }
};
