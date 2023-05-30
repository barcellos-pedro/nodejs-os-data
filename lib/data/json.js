import { os, cores, model, totalmemory, username, homedir, shell } from "./os.js";

const info = new Map();

const values = [
  os.arch(),
  cores,
  model,
  totalmemory,
  os.hostname(),
  os.type(),
  os.platform(),
  username,
  homedir,
  shell,
];

const attrs = [
  "arch",
  "cpus",
  "cpuModel",
  "totalMemory",
  "hostname",
  "os",
  "platform",
  "username",
  "homedir",
  "shell",
];

function getJSON(prettify = false) {
  for (const index in values) {
    const key = attrs[index];
    const value = values[index];
    info.set(key, value);
  }
  const data = Object.fromEntries(info);
  return prettify ? JSON.stringify(data, null, 2) : JSON.stringify(data);
}

export default getJSON;
