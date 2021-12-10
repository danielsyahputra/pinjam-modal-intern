import { NextFunction, Request, Response, } from "express";
import Todo from "../model/Todo";
import User from "../model/User";
import Hobi from "../model/Hobi";

class UserController {
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.findAll({ where: {}, include: [Todo, Hobi] });
            return res.json({result: users});
        } catch (error) {
            return res.json({message: "Fail to read!", status: 500})
        }
    }

    async one(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findByPk(req.params.id, {include: [Todo, Hobi]});
            return res.json({result: user});
        } catch (error) {
            return res.json({ message: "Fail to read!", status: 500 });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = await User.create({ ...req.body });
            return res.json({ result: user, message: "Successfully created!" });
        } catch (error) {
            return res.json({ message: "Fail to create!", status: 500 });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const user = await User.findByPk(req.params.id);
            user?.set({ ...req.body });
            user?.save();
            return res.json({ result: user, message: "Successfully update!" });
        } catch (error) {
            return res.json({ message: "Fail to update!", status: 500 });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const user = await Todo.findByPk(req.params.id);
            await user?.destroy();
            return res.json({ message: "Successfully deleted!" });
        } catch (error) {
            return res.json({ message: "Fail to delete!", status: 500 });
        }
    }
}

export default new UserController();