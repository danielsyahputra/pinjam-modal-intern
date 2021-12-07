import { Router } from "express";
import TodoController from "./controller/TodoController";
import TodoValidator from "./validator/index";
import Middleware from "./middleware/index";

// Todo-route
const todoRouter = Router();
todoRouter.get('', TodoController.all);
todoRouter.get('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError ,TodoController.one);
todoRouter.post('', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.create);
todoRouter.delete('/:id', TodoValidator.checkFindAndDeleteTodo(), Middleware.handleValidationError, TodoController.delete);

const baseRouter = Router();
baseRouter.use('/todos', todoRouter);

export default baseRouter;