let student = [
    {name: "A", marks:80},
    {name: "B", marks:40},
    {name: "C", marks:90},
    {name: "D", marks:70},
    {name: "E", marks:50},
    {name: "F", marks:76},
    {name: "G", marks:30},
];

let result = student.filter((student) => student.marks >= 50);
console.log(result);