//for loop
for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 5) {
        console.log("Element is 5");
        break; // Breaks the loop when element is 6
    }
    console.log(element);
}


// Nested for loop with break
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j <= 5; j++) {
//         if (i === 2 && j === 3) {
//             console.log("Breaking inner loop when i is 2 and j is 3");
//             break; // Breaks the inner loop when i is 2 and j is 3
//         }
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }



// Nested for loop with continue
for (let i = 0; i <= 5; i++) {

    console.log(`Outer loop i: ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`  Inner loop j: ${j}`);
    }
}

//table 
// for (let i = 1; i <= 10; i++) {
//     let table = "";
//     for (let j = 1; j <= 10; j++) {
//         table += `${i} * ${j} = ${i * j}\n`;
//     }
//     console.log(table);
// }


for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('------------------');
}

//array
let myarray = ["ironman", "spiderman", "batman", "superman"];
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);

}


//break  
let n=10;
for (let i = 0; i < n; i++) {
    const element = i;
    if (element === 5) {
        console.log("break 5");
        break; // Skips the rest of the loop when element is 5
    }
    console.log(element);
} 

//continue
for (let i = 0; i < n; i++) {
    const element = i;
    if (element === 5) {
        console.log("Skipping 5");
        continue; // Skips the current iteration when element is 5
    }
    console.log(element);
}