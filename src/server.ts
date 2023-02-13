import express, { Express } from "express";
const app: Express = express();

import indexRouter from "./routes/index";
app.use(express.json());

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server run at PORT ${PORT}`));
