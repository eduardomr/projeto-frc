import { Router } from 'express';

import userController from '../../controllers/user.controller';

const router = Router();

router.put("/add", userController.create);
router.post("/retrieve", userController.retrieve);

export default router;
