import express from "express";
import path from 'path';
import compression from "compression";
import ssr from "./routes";

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(compression());
app.use(express.static("public"));

app.use("/", ssr);

export default app;