import express from 'express';
import authGuard from '../../middleware/auth';
import { userController } from './users.controller';

const router = express.Router();

router.get('/',authGuard('admin'),userController.getUsers);
router.put("/:userId",authGuard(),userController.updateUser );

export const userRoute = router;