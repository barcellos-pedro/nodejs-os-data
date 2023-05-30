import { os, cores, model, totalmemory, username, homedir, shell } from "./os.js";

function getCSV() {
  const columns = "Architecture, CPU Cores+Threads, CPU Model, Total memory, Hostname, OS, Platform, Username, Homedir, Shell";
  const values = `${os.arch()}, ${cores}, ${model}, ${totalmemory} GB, ${os.hostname()}, ${os.type()}, ${os.platform()}, ${username}, ${homedir}, ${shell}`;
  return columns + "\n" + values;
}

export default getCSV;
