import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
// Router
import UserRoutes from "./routes/UserRoutes.js";
class App {
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("express class ni boss");
        });
        this.app.use("/users", UserRoutes);
    }
}
const app = new App().app;
app.listen(3000, () => console.log("server run at port 3000"));
