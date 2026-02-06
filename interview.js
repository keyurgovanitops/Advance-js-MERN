// truthy value = number: 0 and NaN sivay na badha number, string,array,empty-array, object, empty-obj  | 
// falsy value = 0,NaN, empty string, undefined
// == :- only checks value
// === :- checks both value and data-type,
// let a;
// a = 0, b = 0, a+b
// NaN = special type of number
// the difference between null and undefined? 
// -> undefined is a mistake by developer, when they forget to assign value to variable
// -> null is not a mistake it is an intentional void.



if(null===undefined){
    console.log(true);
}else{
    console.log(false);
}