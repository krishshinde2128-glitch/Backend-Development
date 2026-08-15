// let array = [80,90,70,85]

//create a function called fatherpromise that takes one marks array and will return a promise 
//after 2 sec the promise should either resolve or reject if the ang marks is above 75 
//if avg marks>=75 => resolve it saying "congrats! i will gift you a bike"
//else => reject it saying "sorry! you are not eligible for a gift"

let marksArray = [80, 90, 70, 85];
function fatherpromise(marks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    average = marks.reduce(function (sum, value) {
        return sum + value;
        }, 0) / marks.length;            
    if (average >= 75) {
                resolve("Congrats! I will gift you a bike");
            } else {
                reject("Sorry! You are not eligible for a gift");
            }
        }, 2000);
    });
}
fatherpromise(marksArray)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});



let array = [1,2,3,4,5]

function even (num) {
    return num.filter((ele) => 
     ele % 2 === 0
    );
    num.reduce((acc, curr) => {
        return acc + curr;
    }, 0)
}
console.log(even(array));


// function greetpromise (name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello ji");
//         }, 2000);
//     });
// }

async function greetpromise(name) {
    return await new Promise((resolve, reject) => {
        resolve("Hello ji")
    });
}
greetpromise()
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
});
const myButton = document.getElementById("Btn");

btn.addEventListener("click", async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        console.log(data);
    })

// async function fetchData() {
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await res.json();
//         console.log(data);
// }
// fetchData();
