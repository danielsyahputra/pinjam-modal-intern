import { Router } from "express";
import TodoController from "./controller/TodoController";
import UserController from "./controller/UserController";
import TodoValidator from "./validator/TodoValidator";
import Middleware from "./middleware/index";

// Todo-route
const todoRouter = Router();
todoRouter.get('', TodoController.all);
todoRouter.get('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError ,TodoController.one);
todoRouter.post('', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.create);
todoRouter.put('/:id', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.update);
todoRouter.delete('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError, TodoController.delete);

const userRouter = Router();
userRouter.get('', UserController.all);
userRouter.get('/:id', UserController.one);
userRouter.post('', UserController.create);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);

const baseRouter = Router();
baseRouter.use('/todos', todoRouter);
baseRouter.use('/users', userRouter);

export default baseRouter;