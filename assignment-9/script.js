console.log("==================================================");
console.log("Q1");

function checkScope() {

    var a = 10;   
    let b = 20;   
    const c = 30; 
    

    if (true) {
        var x = 100;
        let y = 200;
        const z = 300;

        console.log("Inside block:");
        console.log(x); 
        console.log(y); 
        console.log(z); 
    }

    console.log("Outside block:");
    console.log(x); 
    
}

checkScope();


console.log("==================================================");
console.log("Q2");

let fruits = ["Apple", "Banana", "Graps", "Strawberry"];

function secondFruit() {
    return fruits[1];   
}

console.log("Second Fruit : ",secondFruit());  


console.log("==================================================");
console.log("Q3");

function modifyArray(arr) {
    arr.push(5);  
    console.log("After push:", arr);   

    arr.pop();  
    console.log("After pop:", arr);    

    return arr;
}

let numbers = [1, 2, 3, 4];
console.log("Returned Array:", modifyArray(numbers));


console.log("==================================================");
console.log("Q4");


let number = [1, 2, 3, 4, 5];

function squared(arr) {
    return arr.map(function(num) {
        return num * num;
    });
}


let square = squared(number);

console.log("Original Array:", number);
console.log("Squared Array:", square);


console.log("==================================================");
console.log("Q5");

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = n.filter(num => num % 2 !== 0);
console.log(oddNumbers);

console.log("==================================================");
console.log("Q6");

let per = {
    name: "Priya",
    age: 23,
    occupation: "Software Developer"
};

function greet(obj) {
    console.log("Hello, my name is " + obj.name + ". I am " + obj.age + " years old and I am working as a " + obj.occupation + ".");
}

greet(per);


console.log("==================================================");
console.log("Q7");

function Area(rectangle) {
    return rectangle.width * rectangle.height;
}
let rect = {
    width: 7,
    height: 5
};

let area = Area(rect);

console.log("Area of Rectangle:", area);


console.log("==================================================");
console.log("Q8");

function getObjectKeys(obj) {
    return Object.keys(obj);
}

let student = {name: "Abcd",age: 22,course: "Computer Science",city: "Pune"
};

let keysArray = getObjectKeys(student);

console.log("Object Keys:", keysArray);


console.log("==================================================");
console.log("Q9");

function mergeObjects(obj1, obj2) {
    let merged = Object.assign({}, obj1, obj2);
    return merged;
}

let person = { name: "PQRS", age: 22 };
let details = { city: "Pune", country: "India" };

let result = mergeObjects(person, details);

console.log("Merged Object:", result);


console.log("==================================================");
console.log("Q10");

let sum = n.reduce((total, num) => total + num, 0);
console.log(sum);