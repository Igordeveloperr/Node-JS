// подключаю модуль file system
const fs = require("fs"),
      path = require("path");  

// создание папок
// fs.mkdir(path.join(__dirname, "new folder"), (err) =>{
//     if(err){throw err;}
//     console.log("dir is creating");
// });

// создание новых файлов
const filePath = path.join(__dirname, "new folder", "text.txt"); // генерирую путь до файла
fs.writeFile(filePath, "hello node js again", err => {
    if(err){throw err;}
    console.log("file is creating");
}); // вызываю метод для создания файлов

// добавление контента в уже существующий файл
fs.appendFile(filePath, "\nkavo i sho node js", err => {
    if(err){throw err;}
    console.log("file is creating");
});

// чтение файлов
fs.readFile(filePath, "utf-8" ,(err, content) => {
    if(err){throw err;}
    console.log(content);
});