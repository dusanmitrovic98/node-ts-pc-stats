import express, { Request, Response } from "express";
import { Systeminformation } from "systeminformation";

import getSystemInfo from "./modules/pc-stats.js";

const app = express();
const port = 3000;

