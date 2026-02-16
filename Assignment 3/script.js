// Q1) Remove states starting with vowels
const states = ["Andhra Pradesh","Bihar","Uttar Pradesh","Odisha","Assam","Kerala","Tamil Nadu"];
const filteredStates = states.filter(
    s => !["a","e","i","o","u"].includes(s[0].toLowerCase())
);
console.log("Q1:", filteredStates);


// Q2) Reverse words in string
let str = 'I love my India';
let reversedWords = str.split(" ").reverse().join(" ");
console.log("Q2:", reversedWords);


// Q3) INDIA -> INDONESIA using splice
let arr = "INDIA".split("");
arr.splice(3, 0, "O","N","E","S");
console.log("Q3:", arr.join(""));


// Q4) Count vowels & consonants
let longString = "This is a very long string used to count vowels and consonants";
let vowels = 0, consonants = 0;

for (let ch of longString.toLowerCase()) {
    if (/[aeiou]/.test(ch)) vowels++;
    else if (/[a-z]/.test(ch)) consonants++;
}
console.log("Q4:", { vowels, consonants });


// Q5) Replace wrong word with correct word
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log("Q5:", correctfn("I love Javasript", "Javasript", "JavaScript"));


// Q6) Filter numbers > 5
let inputArr = [1,2,3,9,10,7,5,4,3];
let answer = inputArr.filter(n => n > 5);
console.log("Q6:", answer);


// Q7) Student averages using map & reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const averages = students.map(stu => {
    let total = stu.scores.reduce((a,b) => a+b, 0);
    return { name: stu.name, average: total / stu.scores.length };
});
console.log("Q7:", averages);


// Q8) Repeated sum of digits until single digit
function singleDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((a,b)=>a+Number(b),0);
    }
    return num;
}
console.log("Q8:", singleDigitSum(456));


// Q9) Count words in paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log("Q9:", countWords("India is a diverse and beautiful country."));


// Q10) Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Q10:", reverseString("Hello"));


// Q11) Average marks from object of students
const marksData = {
    student1: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
    student2: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
    student3: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37}
};

const result = Object.entries(marksData).map(([name, subjects]) => {
    let scores = Object.values(subjects);
    let avg = scores.reduce((a,b)=>a+b,0)/scores.length;
    return { [name]: { average: avg }};
});

console.log("Q11:", result);
