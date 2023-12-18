import { RequestHandler } from 'express';
import HttpError from 'http-errors';

import authService from '../services/auth.service';

const isAuthenticated: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader === undefined) {
    throw new HttpError.Unauthorized();
  }

  const authHeaderArray = authHeader.split(" ");

  // Token ex: "Bearer TOKEN"
  if (authHeaderArray.length !== 2 || authHeaderArray[0] !== "Bearer") {
    throw new HttpError.Unauthorized();
  }

  const token = authHeaderArray[1];

  let user = null;
  try {
    user = await authService.getUserByToken(token);
  } catch (Error) {
    throw new HttpError.Unauthorized();
  }

  if (user === null) {
    throw new HttpError.Unauthorized();
  }

  req.user = user;

  return next();
};

export { isAuthenticated };
