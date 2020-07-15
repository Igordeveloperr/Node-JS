// подключаю модуль
const EventEmitter = require("events");

// добавляю прослушку события
const emmiter = new EventEmitter();
emmiter.on("anything", data => {
    console.log("ON anything: ", data);
});
// пишу инструкцию для события, если оно произошло
emmiter.emit("anything", {a:1})
setTimeout(() => emmiter.emit("anything", {b : 4-2}), 1500);

// от класса EventEmitter можно наследоваться
class Dispatcher extends EventEmitter{
    subscribe(eventName, callback){
        console.log("sub!");
        this.on(eventName, callback)
    }
    dispatch(eventName, data){
        console.log("dispatch!");
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();
dis.subscribe("aa", data => {
    console.log("ON aa: " + data);
});

dis.dispatch("aa", [1,3,4,5]);