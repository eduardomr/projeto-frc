import { Router } from 'express';

import authRoute from './api/authRoute';

const router = Router();

router.get("/", (req, res) => res.send("Conversify Middleware API"));
router.use("/auth", authRoute);

export default router;
