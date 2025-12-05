import express from "express";
import init from "./config/db";

const app = express();

app.use(express.json());
init();

export default app;
