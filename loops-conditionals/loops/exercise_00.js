/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/


//ex1
for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//ex2
for (let i = 10; i <= 40; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
