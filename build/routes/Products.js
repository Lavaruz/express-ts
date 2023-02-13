import { Router } from "express";
const productRouter = Router();
productRouter.get("/", (req, res) => {
    res.json({
        nama: "patung",
        harga: 999,
    });
});
export default productRouter;
