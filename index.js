// подключение пакета(модуля)
const chalk = require("chalk");
console.log(chalk.bgBlue("hello module chalk"));

// получаю константу
const txt = require("./data");
console.log(chalk.bgCyan(txt));

// получаю название католога, в котором я нахожусь
console.log(chalk.bgGreen(__dirname));

// получаю название файла, в котором я нахожусь
console.log(chalk.bgGreenBright(__filename));