// array :- an data type that stores the same type of value

let arr = [
    'kishan',
    {
        name : 'kuch bhi',
        rollno : 107
    },
    277,
    [1,2,3,4]
]

let arr2 = new Array(1);

let arr1 = new Array(3);
arr1[0] = 1,
arr1[1] = 2;
arr1[2] = 3;
// out of bound


// console.log(arr1.length);

// new - to assign a memory.

// class abc {
//     let num1, num2;
//     // function
//     // class consists of variables and functions
//     // method :- functions in class
//     add(a,b){
//         return a+b;
//     }
// }

// let b = new abc(); // initilization
// b.num1 = 4;
// b.num2 = 5;

// methods of arrays 
// foreach
// map
// filter
// find
// reduce
// shift
// unshift
// push
// pop
// length

let arr4 = [11,12,13,14,15];
// 0,1,

// console.log(arr4); // 11,12,13,14,15
// foreach :- only used for iteration, does not return new array, it does change the original array

// let u1 = arr4.forEach((value, index)=>{
//     if(index === 1){
//         arr4[index] = 5;
//     }
// })



// map :-  it does return new array, it doest not change the original array
console.log(arr4); // 15

let u2 = arr4.map((value,index)=>{
    return value*2;// jo ki mujhe mere naye array ke andar chahiye
})

console.log(u2);
console.log(arr4); // 0-11 










