// Angular 2 Course Javascript
// ECMA 6 
//  
// Truthy and Falsy
// This refers to boolean operations on non boolean objects.
// eg new Boolean(false) -> is true.
//
// No implicit any
//
"NoImplicitAny";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
