import si, { Systeminformation } from "systeminformation";

async function getSystemInfo(): Promise<Systeminformation.SystemData> {
  return await si.get({
    system: "manufacturer, model, version",
    bios: "vendor, version, releaseDate",
    baseboard: "manufacturer, model",
    chassis: "manufacturer, type",
    cpu: "manufacturer, brand, speed, cores, physicalCores, processors",
    battery:
      "manufacturer, type, currentCapacity, designedCapacity, isCharging",
    graphics: "controllers",
    memLayout: "banks",
    mem: "total, free, used, active, available, buffcache, swaptotal, swapused, swapfree",
