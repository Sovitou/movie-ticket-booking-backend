import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createAccountService = async (email, password, name) => {
  const secretKey = process.env.SECRET_KEY;
  const isUserExist = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });
  if (isUserExist) {
    return {
      message: "user already exist",
      status: 400,
    };
  }
  const hashPassword = bcrypt.hashSync(password, 10);
  const user = await prisma.users.create({
    data: {
      name: name,
      email: email,
      password_hash: hashPassword,
      role: "user",
    },
  });
  const options = { expiresIn: "1h" };
  const payload = { userID: user.id, username: user.email };
  const token = jwt.sign(payload, secretKey, options);
  return {
    message: "account has been created",
    token: token,
    status: 200,
  };
};

export const loginAccountService = async (email, password) => {
  const isExist = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });
  const isPasswordMatch = await bcrypt.compare(password, isExist.password_hash);
  const options = { expiresIn: "1h" };
  const payload = { userID: isExist.id, username: isExist.email };
  const token = jwt.sign(payload, process.env.SECRET_KEY, options);
  if (isPasswordMatch) {
    return {
      message: "successfully login",
      token: token,
      status: 200,
    };
  } else {
    return {
      message: "password or email is incorrect",
      status: 200,
    };
  }
};
