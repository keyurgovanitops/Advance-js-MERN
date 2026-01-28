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


// 0,1,

// console.log(arr4); // 11,12,13,14,15
// foreach :- only used for iteration, does not return new array, it does change the original array

// let u1 = arr4.forEach((value, index)=>{
//     if(index === 1){
//         arr4[index] = 5;
//     }
// })



// map :-  it does return new array, it doest not change the original array
// console.log(arr4); // 15

// let u2 = arr4.map((value,index)=>{
//     return value*2;// jo ki mujhe mere naye array ke andar chahiye
// })

// console.log(u2);
// console.log(arr4); // 0-11 

 

//  filter :-  it does return new array, it doest not change the original array, used for filtering the data in array, it checks the condition on all the elements 

// let u3 = arr4.filter(value=> value > 13);
// let u3 = arr4.filter(value=>{
//     return value > 13;
// })
// function ab(value){
//     return value> 13
// }
// let u3 = arr4.filter(ab);

// let arr4 = [11,12,13,16,14,15,16,11];

// console.log('this is arr4', arr4); 

//  find :-  it does return new array, it doest not change the original array, used for finding a single instance in element.

// let u4 = arr4.find((value)=>{
//     return value===22;
// })


// reduce:- it returns a value, it doest not change the original array, used for finding a single value of an array,
// example :- average of array, 

// let arr4 = [1,1,1,1,35];

// function addition(total, current){
//     console.log('total: ' + total, 'current: ' + current);
//     return total + current;
// }
// let u5 = arr4.reduce(addition);

// console.log(u5);
// console.log('this is arr4', arr4);

// shift: 

let arr5 = [1,2,3,4];
// arr5.shift();
// arr5.unshift(20);
// arr5.push(25);
// arr5.pop();

console.log(arr5);















