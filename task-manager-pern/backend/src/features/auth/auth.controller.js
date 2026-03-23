// A controller is a function or module that handles incoming HTTP requests,
// interacts with services or models, and sends back the response to the client.
// HTTP request = client asking server to do something
// Main parts: method, URL, headers, body
// Express receives it as req object in the controller

import { ErrorResponse } from "../../utils/error.js";
import { ApiResponse } from "../../utils/response.js";
import {
  generateAccessToken,
  passHash,
  createUser,
  comparePass,
  checkUserAlready,
} from "./auth.service.js";

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
          .json(new ApiResponse(409, false, "User already exists", null));
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

      res.status(201).json(
        new ApiResponse(201, true, "User registered successfully", {
          email: newUser?.email,
          id: newUser?.id,
          name: `${newUser?.firstName} ${newUser?.lastName}`,
        }),
      );
    }
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
  }
};

// login route
// 1- check emial find user available or not if not then error if not
// 2- check passwrod and compare
// 3 - generate token
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const alreadyUser = await checkUserAlready(email);

    if (!alreadyUser) {
      return res
        .status(404)
        .json(new ApiResponse(404, false, "Incorrect credentials", null));
    }

    const passwordCheck = await comparePass(password, alreadyUser?.password);
    if (!passwordCheck) {
      return res
        .status(404)
        .json(new ApiResponse(404, false, "Incorrect credentials", null));
    }

    const accessToken = generateAccessToken({
      id: alreadyUser?.id,
      email: alreadyUser?.email,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // one hour
    });

    res.status(200).json(
      new ApiResponse(200, true, "Login successful", {
        email: alreadyUser?.email,
        id: alreadyUser?.id,
        name: `${alreadyUser?.firstName} ${alreadyUser?.lastName}`,
      }),
    );
  } catch (error) {
    res.status(500).json(new ErrorResponse(500, "Internal server error"));
  }
};
