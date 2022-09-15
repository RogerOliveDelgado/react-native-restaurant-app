import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const restaurantRoutes = require("./routes/restaurant-routes")

const app: Express = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use(restaurantRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default app
