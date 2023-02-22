/* 1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const users = [
    {name : 'zahid', age : 20},
    {name : 'toma', age : 15},
    {name : 'kala', age : 22}
];
let sum = 0; 

for ( user of users){
    sum = sum + user.age;
    // console.log(sum);
}

// console.log(sum);

let sumOfArray = users.reduce((previous, latest) => previous + latest.age,0);
console.log(sumOfArray);