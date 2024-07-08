//This is first code. Defining object 

// const profile = {
//     name : "Ahmed Raad",
//     isfollow : true, 
//     posts : 195, 
//     followers : 569, 
//     following : 4, 
//     thread : "@raad_auritro",
// };

// console.log(profile);


// take input of a name from user

// const number = prompt("Enter a number : ");

// for (let index = 0; index < 6; index++) {
//     if (number%5==0) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         console.log(i);
//     }
//     else{
//         console.log(" ");
//     }
    
// }

// let numb = prompt("Enter an integer number : ");

// for (; numb !=70;) {
//     console.log("Wrong number. Please try again.");
//     numb = prompt("Enter an integer number : ");
// }
// console.log(numb)


// let fullName = prompt("Enter your full name : ");
// let str2 = fullName.trim();
// let str1 = str2.toLowerCase();
// let len = str1.length;

// let username = `@${str1}${len}`;
// console.log(username)

// let arr1 = [250, 645, 300, 900, 50];

// for (let i = 0; i < arr1.length; i++) {
    
//     arr1[i] = arr1[i]-arr1[i]*0.1;
// }

// let str1 = arr1.toString();
// str1 = `${str1} `;
// console.log(str1);

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift();
// companies.splice(1,1,"NVDIA")
// companies.push("Amazon")

// for (let i=0; i<companies.length; i++) {
//     console.log(companies[i]);
// }


// const countvowels = (str) => {
//     let count = 0;
//     for (const i of str) {
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//             count++;
//         }
//     }
//     return count;
    
// }

// let arr1 = [2,4,6,8,10];

// arr1.forEach((element) => {
//     element = element*element;
//     console.log(element);
// })

// let marks = [10,92,30,95,50,60,97,80,90,100];

// let toppers = marks.filter((element) => {
//     if (element > 90) {
//         return element;
//     }
// })

// console.log(toppers);


let n = parseInt(prompt("Enter a number : "));
let arr = [];

for (let i = 1; i <= n; i++) {
    let num = parseInt(prompt("Enter number " + i + " : "));
    arr.push(num);
}

console.log(arr);

