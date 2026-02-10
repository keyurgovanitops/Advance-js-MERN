let carA = {
    wheels : "four",
    engine : "v8",
    roof : "open"
}
let truckA = {
    wheels : "six",
    engine : "h8",
    roof: "closed",
    isCarTransport : function iscarTransport(){
        return true;
    }
}
// typescript
// prototype chaining; 
// js inheritence - prototypical inheritence - prototype chaining

class Animal{
    livesInGroup;
    constructor(a){
        this.livesInGroup = a;
    }
    canSpeak = true;
    canEat = true;
    canWalk = true;
    canReproduce = true;

    isSocial(){
        if(this.livesInGroup){
            console.log("social animal");
        }else{
            console.log("not social animal");
        }
    }
}

class Cat extends Animal {
    constructor(a){
        super(a);
    }
    domesticAnimal = true;
    canBite = true;

    canMeow(){
        console.log("Meowwwwwwww...........")
    }
}

let a = new Cat(true);

console.log(a.isSocial);

// class -> this, super = this-> current class super -> parent
// carA.__proto__ = truckA;
// console.log(carA.isCarTransport());
// REPL - read, evaluate, print, loop

// console.log(truckA);

// inheritence - class animal { } => class cat extends animal

// prototype - property - js - Object

// console.log(a.name); // Output: John
// console.log(a.age); // Output: 30
// console.log(a.city); // Output: New York

// console.log(a);

// console.log(a["name"]); // Output: John