import { Router } from "express";
import TodoController from "./controller/TodoController";
import UserController from "./controller/UserController";
import HobiController from "./controller/HobiController";
import TodoValidator from "./validator/TodoValidator";
import Middleware from "./middleware/index";

// Todo-route
const todoRouter = Router();
todoRouter.get('', TodoController.all);
todoRouter.get('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError ,TodoController.one);
todoRouter.post('', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.create);
todoRouter.put('/:id', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.update);
todoRouter.delete('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError, TodoController.delete);

// User Router
const userRouter = Router();
userRouter.get('', UserController.all);
userRouter.get('/:id', UserController.one);
userRouter.post('', UserController.create);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);

// Hobi Router
const hobiRouter = Router();
hobiRouter.get('', HobiController.all);
hobiRouter.post('', HobiController.create);
hobiRouter.delete('/:id', HobiController.delete);

const baseRouter = Router();
baseRouter.use('/todos', todoRouter);
baseRouter.use('/users', userRouter);
baseRouter.use('/hobbies', hobiRouter);

export default baseRouter;