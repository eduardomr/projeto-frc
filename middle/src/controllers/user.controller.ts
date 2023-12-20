import { RequestHandler } from 'express';
import HttpError from 'http-errors';

import databaseClient from '../databaseClient';
import authService from '../services/auth.service';

const create: RequestHandler = async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  const users = await databaseClient.user.create({
    data: {
      username,
      password,
    },
    select: {
      username: true,
    },
  });
  return res.json(users);
};

const list: RequestHandler = async (req, res) => {
  const users = await databaseClient.user.findMany({
    select: {
      username: true,
    },
  });
  return res.json(users);
};

const retrieve: RequestHandler = async (req, res) => {
  const { token } = req.body;
  console.log(req.body);

  let user = null;
  try {
    user = await authService.getUserByToken(token);
  } catch (Error) {
    throw new HttpError.Unauthorized();
  }

  if (user === null) {
    throw new HttpError.Unauthorized();
  }

  return res.json(user);
};

const destroy: RequestHandler = async (req, res) => {
  const { username } = req.params;
  const user = await databaseClient.user.delete({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });
  return res.json(user);
};

export default {
  create,
  list,
  retrieve,
  destroy,
};
