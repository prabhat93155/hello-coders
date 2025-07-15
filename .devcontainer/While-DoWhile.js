//while

let index=0;
while (index <= 5) {
    console.log(`Index is: ${index}`);
    index++;
}


let myarray = ["ironman", "spiderman", "batman", "superman"];
let arr=0;
while (arr <= myarray.length) {
    const element = myarray[arr];
    console.log(element);
    arr++;
}

let myarray1 = ["ironman", "spiderman", "batman", "superman"];
let arr1 = 0;
while (arr1 < myarray1.length) {
    console.log(`my array1 is:${myarray1[arr1]}`);
    arr1++;
}

//do while
let index1 = 0;
do {
    console.log(`Index is: ${index1}`);
    index1++;
} while (index1 <= 5);  