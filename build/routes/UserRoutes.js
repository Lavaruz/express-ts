import { Router } from "express";
import UserController from "../controllers/UserController.js";
class UserRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/", UserController.index);
        this.router.get("/:id", UserController.show);
        this.router.post("/", UserController.create);
        this.router.delete("/:id", UserController.delete);
        this.router.put("/:id", UserController.update);
    }
}
export default new UserRoutes().router;
