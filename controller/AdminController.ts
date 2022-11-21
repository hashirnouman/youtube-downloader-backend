import { AdminModel } from "../models/AdminModel";
import { Request, Response } from "express";
export function create(req: Request, res: Response) {
  if (!req.body) {
    res.status(400).send({ message: "Empty" });
    return;
  }
  const admin: any = new AdminModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  admin.save((err: Error, user: Request) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    } else
      res.status(200).send({
        message: "User Inserted to database!!",
      });
  });
}
