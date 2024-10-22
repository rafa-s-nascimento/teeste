const path = require("path");

// console.log(path.sep);

// o join constroi um caminho com base nos argumentos e usa o separador padrão do sistema
const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

// o resolve sempre constroi o cainho com base nos argumentos até a raiz
const abs = path.resolve("content", "subfolder", "test.txt");

console.log(abs);
