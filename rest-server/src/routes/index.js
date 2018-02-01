import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/user/userRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;
