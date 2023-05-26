const os = require("node:os");

const cpus = os.cpus();
const { username, homedir, shell } = os.userInfo();

function getOSData() {
  const data = `
### User Info ####

Architecture = ${os.arch()}
CPU Ccores = ${cpus.length}
Model = ${cpus[0].model}
Total memory = ${os.totalmem()}
Current Free memory = ${Math.floor(os.freemem() / 1e9)} GB
OS = ${Math.floor(os.totalmem() / 1e9)} GB
Hostname = ${os.hostname()}
OS name = ${os.type()}
Platform = ${os.platform()}
Uptime = ${(os.uptime() / 60).toFixed(2)} minutes
Username ${username}
Homedir = ${homedir}
Shell = ${shell}
`;

  return data;
}

module.exports = getOSData;
