import { Request, Response, Router } from "express";
import IRouter from "./RouterInterface.js";

class UserRoutes implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.sendStatus(200);
    });

    this.router.post("/", (req: Request, res: Response) => {
      res.json(req.body);
    });
  }
}

export default new UserRoutes().router;
