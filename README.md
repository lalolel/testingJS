# JavaScript Basics - Complete Guide

A comprehensive guide to JavaScript fundamentals and advanced techniques for beginners and intermediate developers.

## Table of Contents

1. [Introduction](#introduction)
2. [Variables and Data Types](#variables-and-data-types)
3. [Operators](#operators)
4. [Control Structures](#control-structures)
5. [Functions](#functions)
6. [Objects and Arrays](#objects-and-arrays)
7. [DOM Manipulation](#dom-manipulation)
8. [Error Handling](#error-handling)
9. [Asynchronous JavaScript](#asynchronous-javascript)
10. [ES6+ Features](#es6-features)
11. [Advanced Techniques](#advanced-techniques)
12. [Best Practices](#best-practices)

## Introduction

JavaScript is a dynamic, interpreted programming language that's primarily used for web development. It runs in browsers, on servers (Node.js), and in various other environments.

### Key Characteristics
- **Dynamic typing**: Variables don't need explicit type declarations
- **Interpreted**: No compilation step required
- **Prototype-based**: Objects can inherit directly from other objects
- **First-class functions**: Functions are treated as values

## Variables and Data Types

### Variable Declarations

```javascript
// var (function-scoped, hoisted)
var name = "John";

// let (block-scoped, not hoisted)
let age = 25;

// const (block-scoped, immutable binding)
const PI = 3.14159;
```

### Primitive Data Types

```javascript
// String
let firstName = "Alice";
let lastName = 'Smith';
let fullName = `${firstName} ${lastName}`; // Template literal

// Number
let integer = 42;
let float = 3.14;
let scientific = 2.5e10;

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let undefinedVar;
console.log(undefinedVar); // undefined

// Null
let emptyValue = null;

// Symbol (ES6)
let uniqueId = Symbol('id');

// BigInt (ES2020)
let bigNumber = 123456789012345678901234567890n;
```

### Type Checking and Conversion

```javascript
// Type checking
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (known quirk)

// Type conversion
let str = "123";
let num = Number(str); // 123
let bool = Boolean(str); // true

// Implicit conversion
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (numeric subtraction)
console.log(+"123"); // 123 (unary plus operator)
```

## Operators

### Arithmetic Operators

```javascript
let a = 10, b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (modulus)
console.log(a ** b); // 1000 (exponentiation)

// Increment/Decrement
let x = 5;
console.log(++x); // 6 (pre-increment)
console.log(x++); // 6 (post-increment, x becomes 7)
console.log(--x); // 6 (pre-decrement)
console.log(x--); // 6 (post-decrement, x becomes 5)
```

### Comparison Operators

```javascript
// Equality
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)

// Relational
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
```

### Logical Operators

```javascript
let t = true, f = false;

console.log(t && f); // false (AND)
console.log(t || f); // true (OR)
console.log(!t); // false (NOT)

// Short-circuit evaluation
let result = null || "default"; // "default"
let value = "hello" && "world"; // "world"
```

### Assignment Operators

```javascript
let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // x = x * 2 → 24
x /= 4; // x = x / 4 → 6
x %= 4; // x = x % 4 → 2
x **= 3; // x = x ** 3 → 8
```

## Control Structures

### Conditional Statements

```javascript
// if...else
let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Below C grade");
}

// Ternary operator
let status = score >= 60 ? "Pass" : "Fail";

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}
```

### Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// while loop
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

// for...in (iterates over object properties)
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for...of (iterates over iterable values)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// Loop control
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip iteration
    if (i === 7) break; // Exit loop
    console.log(i);
}
```

## Functions

### Function Declarations and Expressions

```javascript
// Function declaration (hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// Arrow functions (ES6)
const add = (a, b) => a + b;
const square = x => x * x;
const logMessage = () => console.log("Hello!");

// Arrow function with block body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

### Function Parameters and Arguments

```javascript
// Default parameters
function createUser(name, age = 18, role = "user") {
    return { name, age, role };
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring parameters
function processUser({ name, age, email }) {
    console.log(`${name} (${age}) - ${email}`);
}

// Arguments object (traditional functions only)
function oldStyleSum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
```

### Higher-Order Functions

```javascript
// Functions as arguments
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);

// Functions returning functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## Objects and Arrays

### Objects

```javascript
// Object creation
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    
    // Method
    introduce: function() {
        return `Hi, I'm ${this.name}`;
    },
    
    // ES6 method shorthand
    greet() {
        return `Hello from ${this.name}`;
    }
};

// Property access
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Dynamic property access
let prop = "city";
console.log(person[prop]);

// Adding/modifying properties
person.email = "alice@example.com";
person.age = 31;

// Deleting properties
delete person.city;

// Object methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

// Object destructuring
let { name, age, email } = person;
```

### Arrays

```javascript
// Array creation
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3, 4, 5);
let mixed = [1, "hello", true, { name: "Alice" }];

// Array access and modification
console.log(fruits[0]); // "apple"
fruits[1] = "grape";
fruits.push("kiwi"); // Add to end
fruits.unshift("mango"); // Add to beginning
let lastFruit = fruits.pop(); // Remove and return last
let firstFruit = fruits.shift(); // Remove and return first

// Array methods
let nums = [1, 2, 3, 4, 5];

// Iteration methods
nums.forEach(num => console.log(num));
let doubled = nums.map(num => num * 2);
let evens = nums.filter(num => num % 2 === 0);
let sum = nums.reduce((total, num) => total + num, 0);

// Search methods
let index = nums.indexOf(3); // 2
let found = nums.find(num => num > 3); // 4
let exists = nums.includes(4); // true

// Transformation methods
let joined = nums.join("-"); // "1-2-3-4-5"
let sliced = nums.slice(1, 4); // [2, 3, 4]
let spliced = nums.splice(2, 2, 10, 11); // Removes [3, 4], adds [10, 11]

// Array destructuring
let [first, second, ...rest] = nums;
```

## DOM Manipulation

### Selecting Elements

```javascript
// Single element selection
let elementById = document.getElementById("myId");
let elementByQuery = document.querySelector(".myClass");
let elementByTag = document.getElementsByTagName("div")[0];

// Multiple element selection
let elementsByClass = document.getElementsByClassName("myClass");
let elementsByQuery = document.querySelectorAll("p");

// Element creation
let newDiv = document.createElement("div");
let textNode = document.createTextNode("Hello World");
```

### Modifying Elements

```javascript
// Content manipulation
element.innerHTML = "<strong>Bold text</strong>";
element.textContent = "Plain text";
element.innerText = "Visible text only";

// Attribute manipulation
element.setAttribute("class", "newClass");
element.getAttribute("id");
element.removeAttribute("data-old");

// Style manipulation
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");

// DOM tree manipulation
parent.appendChild(newElement);
parent.insertBefore(newElement, referenceElement);
parent.removeChild(childElement);
element.remove(); // ES6 method
```

### Event Handling

```javascript
// Event listeners
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    event.preventDefault(); // Prevent default behavior
});

// Arrow function event handler
button.addEventListener("click", (e) => {
    console.log("Arrow function handler");
});

// Event delegation
document.addEventListener("click", function(e) {
    if (e.target.matches(".button")) {
        console.log("Delegated click handler");
    }
});

// Remove event listener
function handleClick() {
    console.log("Click handled");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

## Error Handling

### Try-Catch-Finally

```javascript
try {
    // Code that might throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that always runs
    console.log("Cleanup operations");
}

// Specific error handling
try {
    JSON.parse("invalid json");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("JSON syntax error");
    } else {
        console.log("Other error:", error);
    }
}
```

### Throwing Custom Errors

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError("Age must be between 0 and 150");
    }
}
```

## Asynchronous JavaScript

### Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});
```

### Promises

```javascript
// Creating a promise
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: `User ${id}` });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// Using promises
fetchUserData(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserData(2);
    })
    .then(user => {
        console.log("Second user:", user);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Promise chain completed");
    });

// Promise utilities
Promise.all([fetchUserData(1), fetchUserData(2)])
    .then(users => console.log("All users:", users));

Promise.race([fetchUserData(1), fetchUserData(2)])
    .then(user => console.log("First user:", user));
```

### Async/Await

```javascript
async function getUserData() {
    try {
        const user1 = await fetchUserData(1);
        const user2 = await fetchUserData(2);
        console.log("Users:", user1, user2);
        return [user1, user2];
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

// Using async function
getUserData()
    .then(users => console.log("Retrieved users:", users))
    .catch(error => console.error("Failed to get users:", error));

// Parallel execution with async/await
async function getMultipleUsers() {
    const userPromises = [fetchUserData(1), fetchUserData(2), fetchUserData(3)];
    const users = await Promise.all(userPromises);
    return users;
}
```

## ES6+ Features

### Destructuring

```javascript
// Array destructuring
const colors = ["red", "green", "blue"];
const [primary, secondary, tertiary] = colors;
const [first, , third] = colors; // Skip middle element
const [head, ...tail] = colors; // Rest elements

// Object destructuring
const person = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = person;
const { name: fullName, age: years } = person; // Renaming
const { name, country = "USA" } = person; // Default value

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "Alice",
        settings: {
            theme: "dark"
        }
    }
};
const { profile: { name, settings: { theme } } } = user;
```

### Template Literals

```javascript
const name = "Alice";
const age = 30;

// Multi-line strings
const message = `
    Hello, ${name}!
    You are ${age} years old.
    Welcome to our application.
`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old!`;
```

### Spread and Rest Operators

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Function calls
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Rest operator
function collect(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
collect(1, 2, 3, 4, 5); // First: 1, Rest: [2, 3, 4, 5]
```

### Classes

```javascript
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
    
    // Static method
    static getSpeciesCount() {
        return Animal.count || 0;
    }
    
    // Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Setter
    set nickname(value) {
        this._nickname = value;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog");
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks`);
    }
    
    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks"
dog.fetch(); // "Buddy fetches the ball"
```

### Modules

```javascript
// math.js - Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// utils.js - Default export
export default function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// main.js - Importing
import formatDate from './utils.js'; // Default import
import { add, subtract, PI } from './math.js'; // Named imports
import * as mathUtils from './math.js'; // Namespace import

console.log(add(5, 3)); // 8
console.log(mathUtils.PI); // 3.14159
console.log(formatDate(new Date())); // "2023-12-01"
```

## Advanced Techniques

### Closures

```javascript
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2

// Private variables with closures
function BankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance() {
            return balance;
        }
    };
}
```

### Prototypes and Inheritance

```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

// Inheritance with prototypes
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    return `${this.name} is studying ${this.major}`;
};

const student = new Student("Alice", 20, "Computer Science");
console.log(student.greet()); // "Hello, I'm Alice"
console.log(student.study()); // "Alice is studying Computer Science"
```

### Function Methods (call, apply, bind)

```javascript
const person = {
    name: "Alice",
    greet: function(greeting, punctuation) {
        return `${greeting}, I'm ${this.name}${punctuation}`;
    }
};

const anotherPerson = { name: "Bob" };

// call - invoke function with specific 'this' context
console.log(person.greet.call(anotherPerson, "Hi", "!")); // "Hi, I'm Bob!"

// apply - like call, but arguments as array
console.log(person.greet.apply(anotherPerson, ["Hello", "."])); // "Hello, I'm Bob."

// bind - create new function with bound context
const boundGreet = person.greet.bind(anotherPerson, "Hey");
console.log(boundGreet("?")); // "Hey, I'm Bob?"
```

### Design Patterns

```javascript
// Singleton Pattern
const Singleton = (function() {
    let instance;
    
    function createInstance() {
        return {
            data: "I am the singleton instance",
            method: function() {
                return this.data;
            }
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Module Pattern
const Calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        },
        clear: function() {
            result = 0;
            return this;
        }
    };
})();

// Usage: Calculator.add(5).multiply(2).subtract(3).getResult(); // 7

// Observer Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}
```

### Regular Expressions

```javascript
// Basic regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/; // (123) 456-7890
const urlRegex = /^https?:\/\/[^\s]+$/;

// Testing patterns
console.log(emailRegex.test("user@example.com")); // true
console.log(phoneRegex.test("(123) 456-7890")); // true

// String methods with regex
const text = "The quick brown fox jumps over the lazy dog";
const words = text.match(/\b\w+\b/g); // Extract all words
const replaced = text.replace(/\b\w{4}\b/g, "****"); // Replace 4-letter words

// Named capture groups
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = "2023-12-25".match(dateRegex);
console.log(match.groups); // { year: "2023", month: "12", day: "25" }
```

### Memory Management and Performance

```javascript
// Avoiding memory leaks
function createHandler() {
    const element = document.getElementById("button");
    const data = new Array(1000000).fill("data");
    
    // Potential memory leak - circular reference
    element.onclick = function() {
        console.log(data.length);
    };
    
    // Better approach - remove reference when done
    return function cleanup() {
        element.onclick = null;
    };
}

// Debouncing and throttling
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage
const debouncedSearch = debounce(searchFunction, 300);
const throttledScroll = throttle(handleScroll, 100);
```

## Best Practices

### Code Organization

```javascript
// Use meaningful variable names
const userAccountBalance = 1500; // Good
const x = 1500; // Bad

// Use constants for magic numbers
const MAX_RETRY_ATTEMPTS = 3;
const DEFAULT_TIMEOUT = 5000;

// Group related functionality
const UserService = {
    create(userData) { /* ... */ },
    update(id, userData) { /* ... */ },
    delete(id) { /* ... */ },
    findById(id) { /* ... */ }
};

// Use pure functions when possible
function calculateTax(amount, rate) {
    return amount * rate;
}
```

### Error Handling Best Practices

```javascript
// Always handle errors appropriately
async function fetchUserData(id) {
    try {
        const response = await fetch(`/api/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error; // Re-throw if caller needs to handle
    }
}

// Validate inputs
function calculateArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new TypeError('Width and height must be numbers');
    }
    
    if (width < 0 || height < 0) {
        throw new RangeError('Width and height must be positive');
    }
    
    return width * height;
}
```

### Performance Tips

```javascript
// Use efficient array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Good - stops at first match
const firstEven = numbers.find(n => n % 2 === 0);

// Good - creates new array only when needed
const evens = numbers.filter(n => n % 2 === 0);

// Avoid unnecessary iterations
const hasEven = numbers.some(n => n % 2 === 0); // Better than filter + length check

// Use object lookups for multiple conditions
const statusMessages = {
    200: 'OK',
    404: 'Not Found',
    500: 'Internal Server Error'
};

function getStatusMessage(code) {
    return statusMessages[code] || 'Unknown Status';
}

// Cache expensive operations
const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};
```

### Security Considerations

```javascript
// Sanitize user input
function sanitizeInput(input) {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Validate data types
function processUserAge(age) {
    const numericAge = parseInt(age, 10);
    if (isNaN(numericAge) || numericAge < 0 ||
