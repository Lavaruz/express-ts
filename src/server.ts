import express, { Application, Request, Response } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  routes(): void {
    this.app.get("/", (req, res) => {
      res.send("express class ni boss");
    });
  }
}

const app = new App().app;
app.listen(3000, () => console.log("server run at port 3000"));
