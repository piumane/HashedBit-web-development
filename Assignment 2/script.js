// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2. Calculator using switch
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log("Calculator Results:");
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));


// 3. Tax calculation using switch(true)
function findTax(salary) {
    let taxRate;

    switch (true) {
        case salary > 0 && salary <= 500000:
            taxRate = 0;
            break;
        case salary > 500000 && salary <= 1000000:
            taxRate = 0.10;
            break;
        case salary > 1000000 && salary <= 1500000:
            taxRate = 0.20;
            break;
        case salary > 1500000:
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }

    return salary * taxRate;
}

console.log("Tax Results:");
console.log(findTax(400000));
console.log(findTax(800000));
console.log(findTax(1200000));
console.log(findTax(2000000));


// 4. Sum of products of corresponding digits
function sumOfDigitProducts(n1, n2) {
    let s1 = n1.toString().split("").reverse();
    let s2 = n2.toString().split("").reverse();

    let maxLength = Math.max(s1.length, s2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let d1 = parseInt(s1[i] || 0);
        let d2 = parseInt(s2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}

console.log("Digit Product Sum:");
console.log(sumOfDigitProducts(6, 34)); 
console.log(sumOfDigitProducts(123, 456)); 
