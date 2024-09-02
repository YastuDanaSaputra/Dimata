// let students = ["Student 1", "Student 2", "Student 3"];

// let StudentsUpperCase = students.map((student) => {
//   return student.toUpperCase();
// });

// console.log(StudentsUpperCase);

let value = 1;
console.log(value);

function myFunction(cb) {
  cb();
}
myFunction(() => {
  value = 10;
});
console.log(value);
