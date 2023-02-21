/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

const newArray = [ 1, 9, 17, 22 ];
// let sum = 0; 
// for (num of newArray){
//     sum = sum + num;
//     // console.log(sum);
// }

// const total = newArray.reduce((old,new) => old + new, 0);

// console.log(total);
//console log age
const student = {
    name : 'zahid',
    age : '28'
};
console.log(student.age);

// console.log city 
let data = {
    location : [{
        latitude : '36.5 , 28.6',
        longitude : '48.9, 44.6',
        city : 'dhaka',
        cuntry : 'Bangladesh'
    }  
    ]
};

console.log(data.location[0].city);