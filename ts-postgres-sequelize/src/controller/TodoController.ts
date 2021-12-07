import { NextFunction, Request, Response } from "express";
import Todo from "../model/Todo";

class TodoController {
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const records = await Todo.findAll({ where: {} });
            return res.json(records);
        } catch (error) {
            return res.json({ message: "fail to read", status: 500 });
        }
    }

    async one(req: Request, res: Response, next: NextFunction) {
        try {
            const record = await Todo.findByPk(req.params.id);
            return res.json(record);
        } catch (error) {
            return res.json({ message: "fail to read", status: 500 });
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const record = await Todo.create({ ...req.body });
            return res.json({ record, message: "Successfully create todo!", status: 200 });
        } catch (error) {
            return res.json({ message: "Fail to create!", status: 500, error: error });
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const record = await Todo.findByPk(req.params.id);
            await record?.destroy();
            return res.json({message: "Successfully deleted!", status: 200})
        } catch (error) {
            return res.json({ message: "Fail to delete!", status: 500});
        }
    }
}

export default new TodoController();