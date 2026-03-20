// A controller is a function or module that handles incoming HTTP requests,
// interacts with services or models, and sends back the response to the client.
// HTTP request = client asking server to do something
// Main parts: method, URL, headers, body
// Express receives it as req object in the controller

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
          .send({ message: "the user is already created " });
      }

      const accessToken = generateAccessToken({
        id: newUser?.id,
        email: newUser?.email,
      });
      console.log(accessToken, "accessToken");
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000, // one hour
      });

      res.status(200).send({
        message: "the server error in catch block ",
        data: {
          email: newUser?.email,
          id: newUser?.id,
          name: `${newUser?.firstName} ${newUser?.lastName}`,
        },
      });
    }
  } catch (error) {
    res.status(500).send({ message: "the server error in catch block " });
  }
};
