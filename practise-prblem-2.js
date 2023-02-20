/* Write an arrow function where it will do the following:

a)It will take an array where the array elements will be the
name of your friends

b)Check if the length of each element is even, push elements
with even length to a new array and return the result

Print the result. */

const friendsName = ['helal','tanvir','tonmoy','dipu','reza','salman','belal','dhamal'];

let evenNames = a => {
    let b = [];
    for (let i = 0; i < a.length ; i++){
        if(a[i].length % 2 == 0){
            b.push(a[i]);
        }
    }
    return b;
}

console.log(evenNames(friendsName));