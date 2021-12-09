import { NextFunction, Request, Response, } from "express";
import Todo from "../model/Todo";
import User from "../model/User";

class UserController {
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.findAll({ where: {}, include: Todo });
            return res.json(users);
        } catch (error) {
            return res.json({message: "Fail to read!", status: 500})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = await User.create({ ...req.body });
            return res.json({ user, message: "Successfully created!" });
        } catch (error) {
            return res.json({ message: "Fail to create!", status: 500 });
        }
    }
}

export default new UserController();