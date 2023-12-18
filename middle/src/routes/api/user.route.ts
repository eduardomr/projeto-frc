import { Router } from 'express';

import userController from '../../controllers/user.controller';

const router = Router();

router.put("/add", userController.create);

export default router;
