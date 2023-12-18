import { Router } from 'express';

import authRoute from './api/auth.route';
import userRoute from './api/user.route';

const router = Router();

router.get("/", (req, res) => res.send("Conversify Middleware API"));
router.use("/auth", authRoute);
router.use("/user", userRoute);

export default router;
