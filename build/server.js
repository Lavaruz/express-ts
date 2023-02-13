import express from "express";
class App {
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("express class ni boss");
        });
    }
}
const app = new App().app;
app.listen(3000, () => console.log("server run at port 3000"));
