let arrayOne = [1, [1, 2, [3, 4]], [2, 4]];
let resultOne = arrayOne.reduce((total, amount) => {
    return total.concat(amount);
}, []);
console.log(`Элементы нового массива: ${resultOne}`);

let arrayTwo = [4, [1, 3, 1, [1, 4, [1]], 5, [7, 4]], 1];
let flatArray = arrayTwo.flat(Infinity);
let sum = flatArray.reduce((acc, current) => acc + current, 0);
console.log(`Сумма элементов массива: ${sum}`);

function filterStudents(students){
    return students.filter(student => student.age > 17).reduce((acc, student) =>{
        if(!acc[student.groupId]){
            acc[student.groupId] = [];
        }
            acc[student.groupId].push(student);
            return acc;
    }, {});
}
let students = [
    {name: "Denis", age: 18, groupId: 10},
    {name: "Kirill", age: 18, groupId: 10},
    {name: "Diana", age: 17, groupId: 6},
    {name: "Daniil", age: 18, groupId: 8}, 
    {name: "Zhenya", age: 19, groupId: 1},
];
let resultThree = filterStudents(students);
console.log(resultThree);

let strASCII = "ABC";
let total1 = "";
for(let i = 0; i < strASCII.length; i++){
    let numbers = strASCII[i].charCodeAt();
    total1 += numbers;
}
let total2 = total1.replace('7', '1');
let different = Math.abs(total1 - total2);
console.log(different);

function assignObjects(first, second){
    return Object.assign(first, second);
}
let first = {a: 1, b: 2};
let second = {c: 3};
let resultOfAssign = assignObjects(first, second);
console.log(resultOfAssign);

function buildTower(steps) {
    let tower = [];
    for (let i = 0; i < steps; i++) {
        let row = ' '.repeat(steps - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(steps - i - 1);
        tower.push(row);
    }
    return tower.join('\n');
}
console.log(buildTower(3));


    


