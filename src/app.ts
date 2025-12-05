import express, { Request, Response } from "express";
import init from "./config/db";
import route from "./routers/router";

const app = express();

app.use(express.json());
init();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Hey Baby Programer",
    time: new Date().toISOString(),
  });
});

app.use(route);
export default app;
