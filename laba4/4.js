let products = new Set();
function addProduct(product){
    products.add(product);
    console.log(`${product} добавлен в список`);
}
addProduct("Виноград");
addProduct("Яблоко");
function deleteProduct(product){
    if(products.delete(product)){
        console.log(`${product} удален из списка`);
    }
    else{
        console.log(`${product} не найден в списке`);
    }
}
deleteProduct("Яблоко");
function hasProduct(product){
    if(products.has(product)){
        console.log(`${product} есть в списке`);
    }
    else{
        console.log(`${product} в списке нет`);
    }
}
hasProduct("Слива");
function countProduct(product){
    console.log(`Количество товара в списке: ${products.size}`)
}
countProduct("Яблоко");


let studentsList = new Set();
function addStudent(student) {
    studentsList.add(student);
}
function removeStudent(gradeNumber) {
    for (let student of studentsList) {
        if (student.gradeNumber === gradeNumber) {
            studentsList.delete(student);
            break;
        }
    }
}
function filterByGroup(set) {
    let arr = Array.from(set);
    set.clear();
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j].group > arr[j+1].group){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    arr.forEach(element => {
        set.add(element);
    });
}
function sortByGradeNumber(set) {
    let arr = Array.from(set);
    set.clear();
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j].gradeNumber > arr[j+1].gradeNumber){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    arr.forEach(element => {
        set.add(element);
    })
}
function printStudents(set) {
    for (let student of set) {
        console.log(`Зачетка: ${student.gradeNumber}, Группа: ${student.group}, ФИО: ${student.fio}`);
    }
}
addStudent({ gradeNumber: 1, group: 10, fio: "Student1" });
addStudent({ gradeNumber: 5, group: 9, fio: "Student2" });
addStudent({ gradeNumber: 3, group: 8, fio: "Student3" });
addStudent({ gradeNumber: 4, group: 7, fio: "Student4" });
console.log("Сортировка по группе:");
filterByGroup(studentsList);
printStudents(studentsList); 
console.log("Сортировка по номеру зачетки:");
sortByGradeNumber(studentsList);
printStudents(studentsList); 
console.log("После удаления студента с номером зачетки 1:");
removeStudent(1);
printStudents(studentsList); 


let cart = new Map();
function addProducts(id, name, quantity, price) {
    cart.set(id, { name: name, quantity: quantity, price: price });
}
function deleteProductsById(id) {
    if (cart.has(id)) {
        cart.delete(id); 
    } else {
        console.log(`Товар с id ${id} не найден`);
    }
}
function deleteProductsByName(name) {
    for (let [id, product] of cart) {
        if (product.name === name) {
            cart.delete(id);
        }
    }
}
function changeQuantity(id, newQuantity) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.quantity = newQuantity;
        cart.set(id, product); 
    } else {
        console.log("Товар не найден");
    }
}
function changePrice(id, newPrice) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.price = newPrice;
        cart.set(id, product); 
    } else {
        console.log("Товар не найден");
    }
}
function valuesOfCart() {
    let numberPositions = 0;
    for (let product of cart.values()) {
        numberPositions += product.quantity;
    }
    return numberPositions;
}
function totalPriceOfCart() {
    let totalCost = 0;
    for (let product of cart.values()) {
        totalCost += product.quantity * product.price;
    }
    return totalCost;
}
function getNumberOfPositions() {
    return cart.size; 
}
addProducts(1, "Виноград", 3, 8);
addProducts(3, "Бананы", 2, 5);
addProducts(4, "Мандарины", 9, 10);
addProducts(2, "Груша", 3, 1);
addProducts(5, "Бананы", 5, 1);
console.log("Корзина после добавления продуктов:", cart);
deleteProductsById(2);
console.log("Корзина после удаления товара по id:", cart);
deleteProductsByName("Бананы");
console.log("Корзина после удаления товара по наименованию 'Бананы':", cart);
changeQuantity(1, 7);
console.log("Корзина после изменения количества товара с id 1:", cart);
changePrice(4, 12);
console.log("Корзина после изменения цены товара с id 4:", cart);
console.log("Количество позиций в корзине:", getNumberOfPositions());
console.log("Общее число товаров:", valuesOfCart());
console.log("Общая стоимость всех товаров:", totalPriceOfCart());


let cache = new WeakMap();
function process(obj) {
    if (!cache.has(obj)) {
        let result = obj.value * 5;
        cache.set(obj, result); 
    } 
    return cache.get(obj);
}
let result1 = { value: 10 };
let result2 = { value: 20 };
console.log(process(result1)); 
console.log(process(result1));
console.log(process(result2)); 
