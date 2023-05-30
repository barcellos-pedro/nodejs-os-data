import OS from "node:os";

export const os = OS;
export const cpus = os.cpus();
export const cores = cpus.length;
export const [{ model }] = cpus;
export const { username, homedir, shell } = os.userInfo();
export const totalmemory = (os.totalmem() / 1e9).toFixed(0);
