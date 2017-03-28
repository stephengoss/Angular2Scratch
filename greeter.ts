// Angular 2 Course Javascript
// ECMA 6 
//  
// Truthy and Falsy
// This refers to boolean operations on non boolean objects.
// eg new Boolean(false) -> is true.

//
// No implicit any
//

"NoImplicitAny"

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);