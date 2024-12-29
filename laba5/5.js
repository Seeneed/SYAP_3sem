/*function makeCounter(){
    let currentCount = 1;
    return function(){
        return currentCount++;
    };
}
let counter = makeCounter();
alert(counter());
alert(counter());
alert(counter());
let counter2 = makeCounter();
alert(counter2());*/


/*let currentCount = 1;
function makeCounter(){
    return function(){
        return currentCount++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert(counter());
alert(counter());
alert(counter2());
alert(counter2());*/


function volume(l){
    return (w, h) => {
        return l * w * h;
    }
}
const V = volume(70);
console.log(V(80, 90));
console.log(V(50, 60));
console.log(V(50, 90));


function* coordsGenerator(){
    x = 0;
    y = 0;
    let command = yield;
    while(command != "Выход"){
        switch (command){
            case "up" :{
                y += 10;
                command = yield "" + x + "." + y;
                break;
            }
            case "down": {
                y -= 10;
                command = yield "" + x + "." + y;
                break;
            }
            case "right": {
                x += 10;
                command = yield "" + x + "." + y;
                break;
            }
            case "left": {
                x -= 10;
                command = yield "" + x + "." + y;
                break;
            }
            default: {
                command = yield "Некорректный ввод";
                break;
            }
        }
    }
    return "Выход";
}
let generator = coordsGenerator();
generator.next();
let coords;
while(true){
    coords = generator.next(prompt("Введите направление")).value;
    if(coords == "Выход"){
        break;
    }
    alert(coords);
}


var a = 10;
function func(){
    return "Hello, world!";
}
console.log(window.a);
console.log(window.func());
window.a = 20;
console.log(window.a);
window.func = function(){
    return "Home";
}
console.log(window.func());

