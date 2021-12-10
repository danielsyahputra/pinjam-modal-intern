import { NextFunction, Request, Response } from "express";
import Hobi from "../model/Hobi";
import User from "../model/User";

class HobiController {
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const hobbies = await Hobi.findAll({ where: {}, include: User });
            return res.json({ result: hobbies });
        } catch (error) {
            return res.json({message: "Fail to read!", status: 500});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const hobi = await Hobi.create({ ...req.body });
            const user = await User.findByPk(1);
            return res.json({ result: hobi, message: "Successfully created!" });
        } catch (error) {
            return res.json({ message: "Fail to read!", status: 500 });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const hobi = await Hobi.findByPk(req.params.id);
            await hobi?.destroy();
            return res.json({ message: "Succesfully deleted!" });
        } catch (error) {
            return res.json({message: "Fail to delete!",  status: 500})
        }
    }
}

export default new HobiController();