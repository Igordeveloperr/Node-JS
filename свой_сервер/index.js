const http = require("http"),
      path = require("path"),
      fs = require("fs");  

// создание сервера
const server = http.createServer((request, respons) => {
    // получаю url
    console.log(request.url);
    // подключаю pages/index.html если url == /
    if(request.url === "/"){
        // читаю html файл для последущего выводы
        fs.readFile(path.join(__dirname, "pages", "index.html"), (err, data)=>{
            if(err){throw err;}
            // указываю хедер
            respons.writeHead(200, {
                "Content-Type" : "text/html"
            });
            // ответ от сервера(вывод страницы)
            respons.end(data);
        });
    }
    else if(request.url === "/contact"){
        // читаю html файл для последущего выводы
        fs.readFile(path.join(__dirname, "pages", "contact.html"), (err, data)=>{
            if(err){throw err;}
            // указываю хедер
            respons.writeHead(200, {
                "Content-Type" : "text/html"
            });
            // ответ от сервера(вывод страницы)
            respons.end(data);
        });
    }
});

// добавляю прослушку порта и уведомление о том, что сервер запущен
// перехожу на localhost:8000
server.listen(8000, () => console.log("Server has been started..."));