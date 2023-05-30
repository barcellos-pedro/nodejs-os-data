import { os, cores, model, totalmemory, username, homedir, shell } from "./os.js";

function getString() {
  return `
Architecture: ${os.arch()}
CPU Cores + Threads: ${cores}
CPU Model: ${model}
Total memory: ${totalmemory} GB
Hostname: ${os.hostname()}
OS: ${os.type()}
Platform: ${os.platform()}
Username ${username}
Homedir: ${homedir}
Shell: ${shell}`;
}

export default getString;
