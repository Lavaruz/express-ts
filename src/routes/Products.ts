import { Router, Request, Response } from "express";

const productRouter = Router();

productRouter.get("/", (req: Request, res: Response) => {
  res.json({
    nama: "patung",
    harga: 999,
  });
});

export default productRouter;
