import express from 'express';
import { jwtMiddleware } from '../config/jwtMiddleware';
import { patchNickname, deleteUser, getUserInfo } from './userController';

const userRouter = express.Router();

userRouter.patch('/nickname/:userId', patchNickname);
userRouter.delete('/:userId', deleteUser);
userRouter.get('/:userId', getUserInfo);

export default userRouter;
