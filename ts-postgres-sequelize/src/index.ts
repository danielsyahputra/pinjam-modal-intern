import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import { port } from "./config";
import db from "./config/database.config";
import Todo from "./model/Todo";

db.authenticate();

db.sync().then(async () => {
    console.log("Connect to db");
})

const app = express();

app.use(bodyParser.json());

app.post("/todos", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const record = await Todo.create({ ...req.body })
        return res.json({ record, message: "Successfully create todo!", status: 200 });
    } catch (error) {
        return res.json({ message: "Fail to create!", status: 500 });
    }
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});