import express from "express";
import ejs from "ejs";
import path from "path";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { costumErrorHandeler } from "./errors/errorHandler.js";
import routes from './modules/routes.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 9090;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
app.use("/assets", express.static(path.join(process.cwd(), "src", "assets")));

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser())
app.use(routes)

app.use("*", (_, __, next) =>
  next(new costumErrorHandeler("path not found", 404))
);
app.use(costumErrorHandeler);

app.listen(PORT, console.log(PORT));
