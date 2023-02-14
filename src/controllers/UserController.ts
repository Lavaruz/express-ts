import { Request, Response } from "express";
import IController from "./ControllerInterface.js";

const datas = [
  {
    id: 1,
    name: "Assami Muzkai",
    role: "owner",
  },
  {
    id: 2,
    name: "Brodi",
    role: "admin",
  },
  {
    id: 3,
    name: "Brolens",
    role: "owner",
  },
  {
    id: 4,
    name: "R7",
    role: "admin",
  },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.json(datas);
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    const user = datas.filter((data) => data.id.toString() == id);
    return res.json(user);
  }
  create(req: Request, res: Response): Response {
    const { name, role } = req.body;
    const newData = {
      id: datas.length + 1,
      name,
      role,
    };
    datas.push(newData);
    return res.json({
      status: "new collumn added",
      newData,
    });
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    const newDatas = datas.filter((data) => data.id.toString() != id);
    return res.json({
      status: `data ${id} success deleted`,
      newDatas,
    });
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;
    datas.map((data) => {
      if (data.id.toString() == id) {
        data.name = name;
      }
    });
    return res.json(datas);
  }
}

export default new UserController();
