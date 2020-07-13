// подключаю модуль оперативной системы
const os = require("os");

// операционная система
console.log("Operative system: ", os.platform());
// информация о архитектуре процессора
console.log("Processor architecture: ", os.arch());
// подробная информация по процессорам
console.log("Processor info: ", os.cpus());
// информация о свободной памяти на компе
console.log("Disc space: ", os.freemem());
// всего памяти
console.log("all space: ", os.totalmem());
// домашняя деректория
console.log("home directory: ", os.homedir());
// сколько времени включена система в секундах
console.log("system work-time is seconds: ", os.uptime());