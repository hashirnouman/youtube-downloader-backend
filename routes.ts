import express from "express";
import ytdl, { videoInfo } from "ytdl-core";

import * as AdminController from "./controller/AdminController";
const route = express.Router();
route.post("/post", AdminController.create);
route.get("/download", async (req, res) => {
  let link: any = req.query.url;
  res.header("Content-Disposition", 'attachment; filename="video.mp4');
  const str: any = "mp4";
  const id = ytdl.getVideoID(link);
  console.log(id);
  ytdl(`https://youtu.be/${id}`, {
    format: str,
    filter: "videoandaudio",
  }).pipe(res);
});
export default route;
