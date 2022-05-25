import { Router } from "express";
import * as UserController from "../../controllers/users.controller";
const userRouter= Router();

userRouter.get('/', UserController.list)

userRouter.post('/', UserController.store)

userRouter.get('/:username', UserController.show)

userRouter.get('/:username/todos', UserController.userTodo)

export default userRouter;