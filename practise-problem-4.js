/*  
Write an arrow function where it will do the following:

a)It will take two array inputs

b)Combine the two arrays and assign them in a new array

c)Find the maximum number from the new array and return the
result



Print the result.
*/


let arrayOne = [1,2,3,4];
let arrayTwo = [5,6,7,8];

const maxArray = (a,b) => {
    //marging two arrays
    let c = [...a,...b];
    let heighst = Math.max(...c);
    return heighst;
}


console.log(maxArray(arrayOne,arrayTwo));