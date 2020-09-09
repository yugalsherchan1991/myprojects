<!-- This is the way to write the script function inside the body tag-->

       // this is to show the windows alert msg :
     alert( "this web page is not working");

    function myColor() {
        document.getElementById('yug').style.color = 'blue';
    }
    
    function myFunction() {
        document.getElementById("first").innerHTML = "Hello this is changed";
    }
    
    
    function myGroup() {
        document.getElementById('group1').innerHTML = 'hi there how are you';
        document.getElementById('group2').innerHTML = 'hi there again ';
    }
    
    // here we add two numbers together:
    document.getElementById('math').innerHTML = (5+56)/2;
    
    //here  we called the id names and add two strings together:
    document.getElementById('names').innerHTML = 'yugal' + ' ' + 'sherchan';

    var x, y;
    x = 10 + 10;
    y = x * 2;
    document.getElementById('math1').innerHTML= y;
    
    // this is an example of varibales where i've used 4 varibale:
    var a, b, c, d;
    a = 2;
    b = a + 2;
    c = (b + 2) * a;
    d = c + 1;
    document.getElementById('math2').innerHTML = d;

    // this is the example of concanetation of the varibales:
    var carName = "Mercedes", person = "yugal sherchan", address = "Butwal";
    document.getElementById('variable').innerHTML = carName + '<br>' + person + '<br>' + address;
    
    var x = a;
    x++;
    var z = x;
    document.getElementById('Increment').innerHTML = z;

    var y = 6;
    y--;
    var a = y;
    document.getElementById('Decrement').innerHTML = a;

    // This is the use of Math.pow  for exponentiating variables:
    var x = 10;
    document.getElementById('math3').innerHTML = Math.pow ( x, 3);    

    var x = 123e5;
    var y = 123e-5;
    document.getElementById( 'math4').innerHTML = x + '<br>' + y;

    // This is an example of Boolean data type:
    var x = 10;
    var y = 11;
    var z = 10;
    document.getElementById('math4').innerHTML = (x==y) + '<br>' + (x==z);

    // This is the example of JS Array:
    var cars= [ 'volvo', 'BMW', 'Mercedes']; // arrays are written inside a [] and can have value
    document.getElementById('cars').innerHTML = cars[1];// here the value is 1 so it will show BMW

// This is an example to fuction used as varibale values:
    var x = toCelcius(77)
    function toCelcius(f) {
        return (5/9) * (f - 32);
    }
    document.getElementById('celcius').innerHTML = "The Temperature today is" + " " + toCelcius(77) + " " + "digree Celcius"
  
    var y = myMulti(4, 5);
    function myMulti( a, b) {
        return a + b;
    }
    document.getElementById('multi').innerHTML = y;


  // Just a normal function can use Return to invoke result:
    function calCulator(a, b){
        return a * b;
    }
    document.getElementById('calc').innerHTML = calCulator(2 ,2);

    // this is object method examples:

    var x = "Find out where this text is where located";
    var pos = x.slice(9, 15);    // we can use locate , indexOf (), lastIndexOf(), search(), slice(two parameters)
    document.getElementById('demo').innerHTML = pos;

    let f = 5;
    document.getElementById('demo1').innerHTML = isNaN(f);

    var myNumber = 2;
    var text1 = "";
    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        text1 = text1 + myNumber + "<br>";
    }
    document.getElementById('demo2').innerHTML = text1;


  


    

   



