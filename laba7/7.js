let person = {
    user: "Денис",
    age: 18,
    years: 20,
    greet(){
        alert(`Привет,  ${this.user}`);
    },
    ageAfterYears(){
        return this.age + this.years;
    }
}
person.greet();
console.log(person.ageAfterYears());


let car = {
    model: "Audi R8",
    year: 2024,
    getInfo(){
        console.log(`Модель машины: ${car.model}`);
        console.log(`Год выпуска автомобиля: ${car.year}`);
    }
}
car.getInfo();


function Book(title_, author_){
    this.title = title_;
    this.author = author_;
    this.getTitle = function(){
        console.log(`Название книги: ${this.title}`);
    }
    this.getAuthor = function(){
        console.log(`Автор книги: ${this.author}`);
    }
}
let book = new Book("Война и мир", "Лев Толстой");
book.getTitle();
book.getAuthor();


let team = {
    players: [
        {name: "Phil Foden", age: 24},
        {name: "Erling Halland", age: 24},
        {name: "Rico Lewis", age: 19}
    ],
    getInfoAboutPlayers(){
        for(let i = 0; i < team.players.length; i++){
            console.log(`Имя игрока: ${this.players[i].name}`);
            console.log(`Возраст игрока: ${this.players[i].age}`);
        }
    }
}
team.getInfoAboutPlayers();


const counter = (function () {
    let obj = {
        count: 0,
        increment() {
            return ++this.count;
        },
        decrement() {
            return --this.count;
        },
        getCount() {
            return this.count;
        }
    };
    return obj;
})();
console.log(counter.increment()); 
console.log(counter.increment());
console.log(counter.decrement()); 
console.log(counter.getCount());


let item = {
    price: 45
};
let descriptor = Object.getOwnPropertyDescriptor(item, "price");
console.log(descriptor);
Object.defineProperty(item, "price", {
    writable: false,
    configurable: false
});
descriptor = Object.getOwnPropertyDescriptor(item, "price");
console.log(descriptor);


let circle = {
    radius: 5,
    pi: 3.14,
    get Square() {
        return this.pi * this.radius * this.radius;
    },
    set Square(value){
        this.radius = value;
    }
};
console.log(`Площадь круга: ${circle.Square}`); 
circle.Square = 6;
console.log(`Новый радиус: ${circle.radius}`);
console.log(`Новая площадь: ${circle.Square}`);


let car_ = {
    make: "Germany",
    model: "Audi RS6",
    year: 2022,
};
let descriptor1 = Object.getOwnPropertyDescriptor(car_, "make");
console.log(descriptor1);
let descriptor2 = Object.getOwnPropertyDescriptor(car_, "model");
console.log(descriptor2);
let descriptor3 = Object.getOwnPropertyDescriptor(car_, "year");
console.log(descriptor3);
Object.defineProperty(car_, "make" , {
    writable: false,
    configurable: false
});
descriptor1 = Object.getOwnPropertyDescriptor(car_, "make");
console.log(descriptor1);
Object.defineProperty(car_, "model" , {
    writable: false,
    configurable: false
});
descriptor2 = Object.getOwnPropertyDescriptor(car_, "model");
console.log(descriptor2);
Object.defineProperty(car_, "year" , {
    writable: false,
    configurable: false
});
descriptor3 = Object.getOwnPropertyDescriptor(car_, "year");
console.log(descriptor3);


let array = [1, 2, 3];
Object.defineProperty(array, "sum", {
    get(){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i];
        }
        return sum;
    },
    configurable: false,
    enumerable: false
})
let descriptor4 = Object.getOwnPropertyDescriptor(array, "sum");
console.log(descriptor4);
console.log(`Сумма элементов массива: ${array.sum}`);


let rectangle = {
    width: 10,
    height: 20,
    get Square_(){
        return this.width * this.height;
    },
    set Square_(value1){
        this.width = value1;
    },
    set Square_(value2){
        this.height = value2;
    }
};
console.log(`Площадь прямоугольника: ${rectangle.Square_}`);
rectangle.width = 15;
rectangle.height = 40;
console.log(`Новая площадь прямоугольника: ${rectangle.Square_}`);


let user_ = {
    firstName: "Денис",
    lastName: "Мамонько",
    get () {
        return `${this.firstName} ${this.lastName}`;
    },
    set (value3) {
        this.firstName = value3;
    }
};
console.log(`Полное имя: ${user_.get()}`);
user_.set("Александр");
console.log(`Измененное полное имя: ${user_.get()}`);
