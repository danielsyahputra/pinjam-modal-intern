import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import { port } from "./config";
import db from "./config/database.config";
import BaseRouter from "./routes";
    
db.authenticate();

db.sync().then(async () => {
    console.log("Connect to db");
})

const app = express();

app.use(bodyParser.json());

app.use('/api', BaseRouter);

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});