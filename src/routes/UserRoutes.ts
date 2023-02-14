import { Request, Response, Router } from "express";
import IRouter from "./RouterInterface.js";
import UserController from "../controllers/UserController.js";

class UserRoutes implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get("/", UserController.index);
    this.router.get("/:id", UserController.show);
    this.router.post("/", UserController.create);
    this.router.delete("/:id", UserController.delete);
    this.router.put("/:id", UserController.update);
  }
}

export default new UserRoutes().router;
