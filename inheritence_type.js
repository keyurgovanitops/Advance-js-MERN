// what is inheritence in OOPs?
// inheritence is when a subclass/childclass can reuse the parent class's properties and methods.

// inheritence is a fundamental concept in object-oriented programming (OOP) that allows a new class (called a child or subclass) to inherit properties and behaviors (attributes and methods) from an existing class (called a parent or superclass). This promotes code reusability and establishes a natural hierarchical relationship between classes.

// how many types of inheritence are there in general? 
// 1. single inheritence - one parent and one child
// 2. multilevel inheritence - one parent and one child and one grandchild
// 3. hierarchical inheritence - one parent and multiple children
// 4. multiple inheritence - multiple parents and one child
// 5. hybrid inheritence - combination of any two inheritence
// single inheritence example
// class a {

// }
// class b extends a {

// }
// multilevel inheritence 
// class a {

// }
// class b extends a{

// }
// class c extends b{

// }
// hierarchical inheritence
// class a {

// }
// class b extends a {
// }
// class c extends a {
// }
// multiple inheritence - not supported in js
// class a {

// }
// class b{

// }
// class c extends a,b{

// }
// hybrid inheritence 
// class a  {

// }
// class b extends a {

// }
// class c extends b {

// }
// class d extends c{

// }

// class BMW extends car{
//     constructor(a,b,c,d){
//         super(a,b,c,d);
//     }
//     roof = true;
    
// } 

// declare a class called car 
// wheels, engine, gear, isAutomatic which will retun true or flas
// and that will be specified at the time of creation of the object.


class car{
    automaticOrNot;
    wheels;
    engine;
    gear;
    constructor(automaticOrNot,wheels,engine,gear){
        this.automaticOrNot = automaticOrNot;
        this.wheels = wheels; ;
        this.engine = engine;
        this.gear = gear;
    }

    isAutomatic(){
        return this.automaticOrNot;
    }
}


const bmw = new car(false,4,"v8",4);
if(bmw.isAutomatic() == true){
    console.log("yes is automatic");
}else{
    console.log("no is not automatic")
}

// bmw has {variable} wheels.
// bmw has the strongest {variable} engine.
// bmw {is automatic} // {is not automatic} and it has {variable} gears.

console.log(bmw.wheels,"");





