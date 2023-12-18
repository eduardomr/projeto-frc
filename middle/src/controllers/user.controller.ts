import { RequestHandler } from 'express';

import databaseClient from '../databaseClient';

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
  const { username } = req.params;
  const user = await databaseClient.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });
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
