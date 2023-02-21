const data = {
    count : 5000,
    data : [
        {id : 1, name : 'katar', population : '14cr',},
        {id : 2, name : 'batar', population : '1cr',}

    ]
};


// console.log(data.data[1].name);

//map er uses

// const a = [1,2,3,4];

// const b = a.map(c => c * 5);
// // console.log(b);

// const names = ['naim khan', 'mourin toma', 'love'];

// const firstLatters = names.map(a => a.length);
// console.log(firstLatters)


// const newArrayOne = [1,2,3,4,5];
// const newArrayTwo = [6,7,8,9,10];

// const arrayDoubleMax = (a,b) => {
//     //marging Two Array into One
//     const c = [...a,...b];
//     //using array.map() to double the array value
//     const d = c.map(e => e * 2);
//     //using math method to find the max value
//     const f = Math.max(...d);
//     return f;
// }
// // console.log( arrayDoubleMax(newArrayOne,newArrayTwo));

// const a = newArrayOne.forEach(num => console.log(num));
// // console.log(a);

// //filter er use

// const filter = newArrayOne.filter(arr => arr > 3);
// console.log(filter);



//object 

// const products = [
//     {id : 1, name : 'mango', price : 80 },
//     {id : 2, name : 'banana', price : 30},
//     {id : 3, name : 'coconut', price : 70}
// ];

// const price = products.map(product => product.name);
// console.log(price);


//class intro

class Business {
    name;
    age;
    constructor(a,b){
        this.name = a;
        this.age = b;

    }
    startBusiness(name){
        console.log(`start Business : ${name}`);

    }

}

const zahid = new Business('naim',28);
zahid.startBusiness('Car Modify')

console.log(zahid);


const x = a => a*a*a;

console.log(x(2));
const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);