import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import db from "./config/database.config";
import BaseRouter from "./routes";
    
db.authenticate();

db.sync().then(async () => {
    console.log("Connect to db");
})

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use('/api', BaseRouter);

export default app;