import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

// Router
import UserRoutes from "./routes/UserRoutes.js";
import productRouter from "./routes/Products.js";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("express class ni boss");
    });

    this.app.use("/users", UserRoutes);
    this.app.use("/products", productRouter);
  }
}

const app = new App().app;
app.listen(3000, () => console.log("server run at port 3000"));
