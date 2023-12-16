import { Router } from 'express';
import HttpError from 'http-errors';

import authService from '../../services/authService';

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

export default router;
