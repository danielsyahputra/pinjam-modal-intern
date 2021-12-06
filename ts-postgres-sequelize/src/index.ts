import express, { NextFunction, Request, Response } from "express";
import { port } from "./config";
import db from "./config/database.config";

db.authenticate();

db.sync().then(async () => {
    console.log("Connect to db");
})

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send("Hello world!");
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});