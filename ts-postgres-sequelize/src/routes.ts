import { Router } from "express";
import TodoController from "./controller/TodoController";
import TodoValidator from "./validator/index";
import Middleware from "./middleware/index";

// Todo-route
const todoRouter = Router();
todoRouter.get('', TodoController.all);
todoRouter.post('', TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.create);

const baseRouter = Router();
baseRouter.use('/todos', todoRouter);

export default baseRouter;