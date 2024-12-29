let  user = {
    name: 'Masha',
    age: 21
};
let copyUser = {...user};
console.log(copyUser);


let numbers = [1, 2, 3];
let copyNumbers = [...numbers];
console.log(copyNumbers);


let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let user1Copy = {...user1};
console.log(user1Copy);


let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let user2Copy = {...user2};
console.log(user2Copy);


const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
const copyArray = [...array];
console.log(copyArray);


let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let user4Copy = {...user4};
console.log(user4Copy);


let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};
let user5Copy = {};
for(let key in user5){
    user5Copy[key] = user5[key];
}
user5Copy.studies.department.group = 12;
user5Copy.studies.exams[1].mark = 10;
console.log(user5Copy);


let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};
let user6Copy = {};
for(let key in user6){
    user6Copy[key] = user6[key];
}
user6Copy.studies.exams[0].professor.name = 'Ivan Petrov';
user6Copy.studies.exams[1].professor.name = 'Petr Ivanov';
console.log(user6Copy);


let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
             },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
             },
        ]
    }
};
let user7Copy = {};
for(let key in user7){
    user7Copy[key] = user7[key];
}
user7Copy.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(user7Copy);


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
let storeCopy = {};
for(let key in store){
    storeCopy[key] = store[key];
}
storeCopy.state.profilePage.posts.forEach(post=>{
    post.message = 'Hello';
});
storeCopy.state.dialogsPage.messages.forEach(message=>{
    message.message = 'Hello';
})
console.log(storeCopy);


