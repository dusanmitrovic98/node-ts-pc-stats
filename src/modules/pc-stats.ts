import si, { Systeminformation } from "systeminformation";

async function getSystemInfo(): Promise<Systeminformation.SystemData> {
  return await si.get({
    system: "manufacturer, model, version",
    bios: "vendor, version, releaseDate",
    baseboard: "manufacturer, model",
