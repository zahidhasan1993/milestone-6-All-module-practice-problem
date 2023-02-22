/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */


const newArray = [ 1, 9, 17, 22 ];

let sum = 0;

for(number of newArray){
    sum = sum + number;
};

// console.log(sum);

const sumOfArray = newArray.reduce((previous, current) => previous + current, 0);

console.log(sumOfArray);