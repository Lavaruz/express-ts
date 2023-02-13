import { Router } from "express";
class UserRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.sendStatus(200);
        });
        this.router.post("/", (req, res) => {
            res.json(req.body);
        });
    }
}
export default new UserRoutes().router;
