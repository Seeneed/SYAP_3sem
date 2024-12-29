let arr = [1, 2, 3];
let [y, x, z] = arr;
alert(y);
alert(x);
alert(z);


let user = {
    name: "Денис",
    age: 18,
}
let admin = {
    experience: 5,
    ...user,
}
console.log(admin);


let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}
let { state: { profilePage: { posts }}} = store;
let likesCount = posts.map(post => post.likesCount);
console.log(likesCount);
let { state: { dialogsPage: { dialogs}}} = store;
let id = dialogs.filter(dialog => dialog.id % 2 == 0);
console.log(id);
let { state: { dialogsPage: {messages}}} = store;
let message = messages.map(mess => mess.message.replaceAll('hi', 'Hello user'));
console.log(message);


let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false }
];
let task = [ { id: 6, title: "C++", isDone: true } ];
let combinedTasks = [...tasks, ...task];
console.log(combinedTasks);


function sumValues(x, y, z){
    return x + y + z;
}
let array = [1, 2, 3];
console.log(sumValues(...array));