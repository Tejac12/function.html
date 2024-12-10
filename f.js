// function a1() {
//     var a = 20;
//     var b = 30;
//     var c = a + b;
//     console.log(c)
// }

// a1()


function studentName(firstName) {
    return `hello,${firstName} ! welcome to the event.`;
}

function anotherfunction(surname) {
    return `Thanking you for coming,Mr ${surname}.`;
}


const firstName = studentName("nicols");

const surname = anotherfunction("oorja");


console.log(firstName);
console.log(surname)

// Function Calls:

// When studentName("Phani") is called, JavaScript pushes this function call onto the call stack.
// Similarly, when anotherFunction("Panchabatla") is called, this function call is also pushed onto the call stack.

// Call Stack:

// The call stack is a data structure that keeps track of function calls in JavaScript. It follows a Last In, First Out (LIFO) order.

// Step 1: Call studentName("Phani")

// The stack now contains:
// [studentName]
// Step 2: Execute studentName function

// The function runs, returning the string "Hello, Phani! Welcome to the event.".
// The stack then pops the studentName function off, returning control back to the main execution context.
// Step 3: Call anotherFunction("Panchabatla")

// The stack now contains:
// [anotherFunction]
// Step 4: Execute anotherFunction

// The function runs, returning the string "Thank you for coming, Mr. Phachabatla.".
// The stack pops the anotherFunction off, completing the call.