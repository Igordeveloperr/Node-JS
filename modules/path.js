// подключаю библиотеку(встроеннный модуль NodeJS)
const path = require("path");

// имя файла
console.log("File name: ", path.basename(__filename));
// имя папки
console.log("Directory name: ", path.dirname(__dirname));
// расширение файла
console.log("Expansion of file: ", path.extname(__filename));
// объект с параметрами данного файла
console.log("parse: ", path.parse(__filename));
// формирую путь
// console.log(path.join(__dirname, "server", "index.html"));
