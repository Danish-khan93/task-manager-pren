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
  const accessToken = jwt.sign(user, config?.accessTokenSecret, {
    expiresIn: "15mins",
  });
  return accessToken;
};
export const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, config?.refreshTokenSecret, {
    expiresIn: "5days",
  });

  return refreshToken;
};

// save refresh token in database

export const saveRefreshToken = async (userId, refreshToken) => {
  console.log(userId);
  console.log(refreshToken);

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { refreshToken: refreshToken },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to save refresh token");
  }
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

// check token is valid or not

export const checkTokenvalid = async (token) => {
  try {
    const decoded = jwt.verify(token, config?.accessTokenSecret);
    const findUser = await prisma.user.findUnique({
      where: { id: decoded?.id },
    });

    return decoded;
  } catch (error) {
    throw error;
  }
};
