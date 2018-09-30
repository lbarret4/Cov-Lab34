import { Router } from 'express';
import blogsRouter from './blogs';
import authorsRouter from "./authors";
import tagsRouter from "./tags";
import authRouter from './auth';
import usersRouter from './users';
import {tokenMiddleware, isLoggedIn} from '../middleware/auth.mw';

let router = Router();


router.use('/auth',authRouter);
router.use(tokenMiddleware);
router.use(isLoggedIn);

router.use(usersRouter);

router.use('/blogs', blogsRouter);
router.use('/authors',authorsRouter);
router.use('/tags',tagsRouter);


export default router;