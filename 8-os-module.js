const os = require("os");

// informação sobre o usuário

const user = os.userInfo();
console.log(user);

// retorna quanto tempo o sistema está rodando
console.log(os.uptime());

const curretOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(curretOS);
