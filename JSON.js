// JSON - javascript object notation

let a = {
    key : 'value',
    key1 : 'value2'
}

let b = JSON.stringify(a); // converts the object into string
// JSON.parse('{"key":"value","key1":"value2"}'); // converts the string into object
let c = JSON.parse(b);

console.log({a});
console.log({b});
console.log({c});
// {
    // 'key' : 'value',
    // 'key1' : 'value2'
// }

// es 6 
// {
//  key,
// }

