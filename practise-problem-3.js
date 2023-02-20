/*
 Write an arrow function where it will do the following:

a)Square each array element

b)Calculate the sum of the squared elements

c)Return the average of the sum of the squared elements

Print the result.
*/

const numbers = [2,3,4,5];

const square = a => {
    let b = [];
    for (let i = 0; i < a.length; i++){
        let c = a[i];
        let d = c * c;
        b.push(d); 

    }
    let sum = 0;
    for(let i = 0; i < b.length; i++){
        sum += b[i];
    }
    let avg = 0;
    return avg = sum / b.length;
}

console.log(square(numbers));


