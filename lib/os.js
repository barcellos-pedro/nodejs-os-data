const os = require("node:os");

const cpus = os.cpus();
const { username, homedir, shell } = os.userInfo();

function getOSData() {
  return `### OS Data ####
  
Architecture = ${os.arch()}
CPU Cores + Threads = ${cpus.length}
CPU Model = ${cpus[0].model}
Total memory = ${os.totalmem()}
OS = ${Math.floor(os.totalmem() / 1e9)} GB
Hostname = ${os.hostname()}
OS name = ${os.type()}
Platform = ${os.platform()}
Username ${username}
Homedir = ${homedir}
Shell = ${shell}
  `;
}

module.exports = getOSData;
