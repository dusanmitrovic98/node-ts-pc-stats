import express, { Request, Response } from "express";
import { Systeminformation } from "systeminformation";

import getSystemInfo from "./modules/pc-stats.js";

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const data: Systeminformation.SystemData = await getSystemInfo();

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

