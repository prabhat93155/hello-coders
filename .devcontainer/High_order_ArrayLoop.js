//for of 

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// for of with array of objects
const greeting = "Hello";
for (const greet of greeting) {
    console.log(`Greet is: ${greet}`);
}

//map
const myarray = ["ironman", "spiderman", "batman", "superman"];
myarray.map((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});



const myobj = {
    'game1': 'ironman',
    'game2': 'spiderman',
}
for (const key in myobj) {
    console.log(`Key: ${key}, Value: ${myobj[key]}`);
}

const myzobj = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    c: 'c++',
}
for (const key in myzobj) {
    console.log(`Key: ${key}, Value: ${myzobj[key]}`);
}

const programmingLanguages = ["js", "py", "rb", "c"];
for (const lang of programmingLanguages) {
    console.log(`Programming Language: ${lang}`);
}

// forEach
const numbers = ["js", "py", "rb", "c"];
numbers.forEach((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});

const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function (item) {
    console.log(`Item: ${item}`);
})

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js",
    },
    {
        languagename: "python",
        languagefilename: "py",
    },
    {
        languagename: "ruby",
        languagefilename: "rb",
    },
    {
        languagename: "c++",
        languagefilename: "c",
    },
]

mycoding.forEach((item, index) => {
    console.log(`Item at index ${index} is: ${item.languagename} with filename ${item.languagefilename}`);
});