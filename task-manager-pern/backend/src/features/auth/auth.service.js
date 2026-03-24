// this file contain business logic like pass hash
// jwt access and refresh token
// create user and if its alreasy created send error or if not create successfully
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../config/configForenv.js";
import { prisma } from "../../prisma.js";

export const passHash = async (password) => {
  const hashing = await hash(password, 8);
  return hashing;
};

export const comparePass = async (password, hashPassword) => {
  const isMatch = await compare(password, hashPassword);
  return isMatch;
};

export const generateAccessToken = (user) => {
  const accessToken = jwt.sign(user, config?.accessTokenSecret);
  return accessToken;
};

export const createUser = async (user) => {
  const { firstName, lastName, email, password } = user;

  const existingUser = await prisma.user.findUnique({
    where: { email: user?.email },
  });

  if (!existingUser) {
    const createUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    return createUser;
  }
  return false;
};

export const checkUserAlready = async (email) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  return existingUser;
};

// check token is valif or not

export const checkTokenvalid = (token) => {
  const decoded = jwt.verify(token, config?.accessTokenSecret);
  console.log(decoded);
};
