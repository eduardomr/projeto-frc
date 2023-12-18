import { Router } from 'express';
import HttpError from 'http-errors';

import authService from '../../services/auth.service';

const router = Router();

router.post("/login", async (req, res) => {
  const userBody = req.body;
  const { username, password } = userBody;
  try {
    const token = await authService.login(username, password);
    const user = await authService.getUserByToken(token);
    return res.json({ token, user });
  } catch (error) {
    throw new HttpError.Unauthorized();
  }
});

router.post("/isAuth", async (req, res) => {
  const { userID } = req.body;

  try {
    const user = await authService.getUserByToken(userID);
    return res.json(user);
  } catch (error) {
    throw new HttpError.Unauthorized();
  }
});

export default router;
