function add(a,b = 0){
    const c = a + b;
    return c;
}
let arrowAdding = (a,b) =>{
    const c = a + b;
    return c;
}
const number = arrowAdding(10,20);

// console.log(number);


// three dot (spread operator ) use

const a = [12,15,12,14,2111,54,12541,1023];

console.log(Math.max(...a));


// object er property variable rakhar easy sollution / destructuring
const fish = {
    name : 'hilsha',
    price : 4000,
    place : 'swapno shopping',
}

const {place} = fish;
console.log(place);

// array destructuring 