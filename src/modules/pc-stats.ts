import si, { Systeminformation } from "systeminformation";

async function getSystemInfo(): Promise<Systeminformation.SystemData> {
  return await si.get({
    system: "manufacturer, model, version",
