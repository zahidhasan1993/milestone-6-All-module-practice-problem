// Practice Problem map(), filter(), find()


/* 1)You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */


const oddNumber = [1, 3, 5, 7, 9];

// using for loop 
for(number of oddNumber){
    number++;
    // console.log(number);
}

const evenNumber = oddNumber.map(num => num + 1);
// console.log(evenNumber);


/* 2)You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

const randomArray = [33, 50, 79, 78, 90, 101, 30 ];

// const newArray = randomArray.filter(num => num % 10 == 0);
// console.log(newArray);

/* 3)Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */


const newArray = randomArray.find(num => num % 10 == 0);
console.log(newArray);
