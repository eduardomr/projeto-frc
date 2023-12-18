import jwt from 'jsonwebtoken';

import prisma from '../databaseClient';
import env from '../utils/env-util';

interface Payload {
  userID: string; // Username
}

function encode(payload: Payload) {
  return jwt.sign(payload, env.PRIVATE_KEY, {
    expiresIn: "2 days",
  });
}

function verify(token: string) {
  return jwt.verify(token, env.PRIVATE_KEY);
}

async function login(username: string, pass: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      password: true,
    },
  });

  if (user === null || user.password !== pass) {
    throw new Error("Usuário não encontrado ou senha inválida");
  }

  // Retorna um cookie com o token HttpOnly e Secure
  return encode({ userID: username });
}

async function getUserByToken(token: string) {
  const payload = verify(token) as Payload;

  const user = await prisma.user.findUnique({
    where: {
      username: payload.userID,
    },
    select: {
      username: true,
    },
  });

  return user;
}

export default {
  encode,
  verify,
  login,
  getUserByToken,
};
