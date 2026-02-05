// // Title Generator

// let color = document.getElementById("color");
// let fontSize = document.getElementById("font-size");
// let text = document.getElementById("text");
// let btn = document.getElementById("btn");
// let resultDiv = document.getElementById("title");


// btn.addEventListener("click", function() {
// resultDiv.innerHTML = `
// <h1 
// style="font-size:${fontSize.value}px; 
// color:${color.value}">${text.value}
// </h1>
// `;
// });

// // Student constructor function

// function Student(firstName, lastName, birthYear, academy, grades) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.academy = academy;
//   this.grades = grades;

//   this.getAge = function () {
//     let currentYear = new Date().getFullYear();
//     return currentYear - this.birthYear;
//   };

//   this.getInfo = function () {
//     return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
//   };

//   this.getGradesAverage = function () {
//     let sum = 0;

//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }

//     return sum / this.grades.length;
//   };
// }


// let students = [
//   new Student("Dimitar", "Kocevski", 2006, "Avenga", [8, 9, 10]),
//   new Student("Martin", "Panovski", 1999, "Seavus", [9, 9, 8]),
//   new Student("Petar", "Petkovski", 2001, "Marketing", [7, 8, 9])
// ];

// console.log(students[0].getInfo());
// console.log(students[0].getAge());
// console.log(students[0].getGradesAverage());

// // List generator from an array

// let names = ["Dimitar", "Ana", "Mario", "Sara", "Martin"];

// let button = document.getElementById("btn");
// let list = document.getElementById("namesList");

// button.addEventListener("click", function () {
//   list.innerHTML = ""; 

//   for (let i = 0; i < names.length; i++) {
//     list.innerHTML += `<li>${names[i]}</li>`;
//   }
// });

//List Generator dynamically from inputs

document.getElementById("btn").onclick = function() {
  let color = document.getElementById("color").value;
  let size = document.getElementById("fontSize").value;
  let items = document.getElementById("items").value;

  let listItems = items.split(",").map(item => "<li>" + item.trim() + "</li>").join("");

  document.getElementById("result").innerHTML += `<ul style="color:${color}; font-size:${size}px;">${listItems}</ul>`;
};


