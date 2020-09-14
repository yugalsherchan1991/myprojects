
// This is an example of function call from Html id tags 

document.getElementById('click').onclick = function() {
    document.getElementById('confirm').innerHTML = 'Order is places please check email';
    document.getElementById('click').style.display = 'none';// button click will disappear after use 
}  

document.getElementById('sure').onclick = function() { 
    document.getElementById('today').innerHTML = 'I would love to Help you today';
    document.getElementById('sure').style.display = 'none';
}

/*

console.log('hello world');

let firstName = 'yugal';
let lastName = 'Sherchan';
console.log(firstName + " " + lastName);
console.log(lastName);

let name = 'yugal'; // sting literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let house;  // undefined
let selectColor = null; //null is used if no value is to be assigned

// This is an example of Objects and how elements of an object can be called :
let person = {
    name:'Yugal',
    age:30
};
// This is Dot notation for calling object
 person.name = 'sara';

 // this is Bracket notation
 person['name'] = 'Raichu';
console.log(person.name);

*/
/*
function greet(name, lastName) {
    console.log('Hello ' +  name + " " + lastName +' how are u today.');
}
greet('Yugal', 'Sherchan');
greet('Sara', 'Mathwes');
greet('John', 'Stuart');
greet('David', 'Doe');
*/


//var userName = prompt();
   // alert(userName);

/*var age = 50;
var newAge = age + 10;
var message = "My age is " + newAge;
console.log(age);
console.log(newAge);
console.log(message);


(function(){
 //IIFE- immediately invoked function expression
 //ths is where we declare local variable 
  
})();

let sliceOfPizza = 10;
sliceOfPizza *= 5 ; // this is an operator used to multiply the same value with new value.
console.log(sliceOfPizza);

let x = 10;
let y = "11";
let yint = Number.parseFloat(10.2);

console.log(y + x);
console.log( x + y);
console.log( x + yint);


// This is the example of how to change decimal into other base using to string method.

var input = Number(prompt("The value of the Decimal number"));

console.log( input + " Decimal value is:", input);
console.log( input + " Binary value is:", input.toString(2));
console.log ( input + " Octal value is:", input.toString(8));
console.log( input + " Hexadecimal value is:", input.toString(16));


// These are the properties that can be used with numbers literals
var Abs = Math.abs(-50);
 console.log(Abs);

var goUp = Math.ceil(1.02);
    console.log(goUp);
var goDown = Math.floor(1.999);
    console.log(goDown);
var powerUp = Math.pow(2, 3);
    console.log(powerUp);
var roundUp = Math.round(4.5);
    console.log(roundUp);
var getInt = Math.trunc(4.999);
    console.log(getInt);

// We can use ${variable name} to concatonate strings 
let myName = "Yugal";
console.log(`Hi My name is ${myName}. happy to meet you`);

    let position = {
     x: 5,
     y:10,
     print: function(){
         console.log(`X: ${this.x}, Y: ${this.y}`);// this.x can be used when using the variable inside a fuction
     }
 }
 let myPosition = position;
 position.x = 120;

 function Print(){
     'use strict'; //makes the variable not appear in windows content
    console.log(this);
 }

 console.log(position);
 console.log(myPosition);
 position.print();
 Print();

 {
     let name = prompt();
     if(name === "yugal"){
        console.log("Hello Yugal welcome to the world");
        }else if (name === "jared"){
            console.log("Hello Jared welcome to the world");
     }else{
         console.log("Your are not welcome to this world. " + name);
 }

}

 let name = prompt();
 let age = prompt();
 if(name === "Yugal"  age <= 30){
    console.log("Almost thirty now have to find a job.");
 }else{
     console.log("Wrong.");
 }
 

 //This is code to get rid of the vowels from a string:

 let myString = "Hey there how is it going with you today";
 for (let i = 0; i < myString.length; i++){
    if( myString[i] === "a" || myString[i] === "e" ||
        myString[i] === "i" || myString[i] === "o" ||
        myString[i] === "u"){
         continue;
     }
     console.log(myString[i]);
 }
 */
/*
 let d = document.getElementById('destination');
    for(let i = 0; i < 10; i++){
        for(let k = i; k >= 0; k--){
            d.append(k + " ");
        }
        var br = document.createElement('br');
            d.appendChild(br); 
    }
*/
/*
let d = document.getElementById('destination');
for(let i = 10; i >= 0; i--){
    for(let k = i; k < 10; k++){
        d.append( k + " ");
    }
    var br = document.createElement("br");
        d.appendChild(br);
}

let a = document.getElementById('destination1');
for(let i = 10; i >= 0; i--){
    for(let k = i; k < 10; k++){
        a.append( k + " ");
    }
    var br = document.createElement("br");
        a.appendChild(br);
}


let circle = {
    radius: 1,
    draw: function(){
        console.log('This is an example of objects');
    }
}
circle.draw();

// Factory Function example

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('This is an example of factory function')
        }
    };
}

const newCircle = createCircle(1);
newCircle.draw();


//This is an example of Constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){//here this points to the new empty object
        console.log('This is an example of constructor function');
    }
}
const newCircle = new Circle(1);//new empty object is created with new keyword
newCircle.draw();
newCircle.radius;

*/

let x = {first: 1 , second: 2};
let y = x;

x.first = 20;
console.log(x);
console.log(y);