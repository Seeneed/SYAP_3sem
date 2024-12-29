class Task{
    constructor(id, nameTask, status){
        this.id = id;
        this.nameTask = nameTask;
        this.status = status;
    }
    changeNameTask(newName){
        this.nameTask = newName;
    }
    changeStatus(newStatus){
        this.status = newStatus;
    }
}
class Todolist{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.tasks = [];
    }
    changeName(newNameTask){
        this.name = newNameTask;
    }
    addNewTask(item){
        this.tasks.push(item);
    }
    filterByStatus(status){
        return this.tasks.filter(task => task.status === status);
    }
}
let task1 = new Task(1, "СЯП", false);
let task2 = new Task(2, "ООП", true);
let task3 = new Task(3, "КПО", false);
task1.changeNameTask("Математический анализ");
let list = new Todolist(1, "Учебные дисциплины");
list.addNewTask(task1);
list.addNewTask(task2);
list.addNewTask(task3);
let completeTasks = list.filterByStatus(true);
console.log(`Список задач: `, list);
console.log(`Выполненные задачи: `, completeTasks);