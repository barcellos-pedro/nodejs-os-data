const os = require("node:os");
const cpus = os.cpus();
const cores = cpus.length;
const [{ model }] = cpus;
const { username, homedir, shell } = os.userInfo();
const totalmemory = (os.totalmem() / 1e9).toFixed(0);

module.exports = {
  os,
  cpus,
  cores,
  model,
  username,
  homedir,
  shell,
  totalmemory,
};
