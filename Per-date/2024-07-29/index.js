let student = {
  firstname: "Rusa",
};

student.age = 100;
student["last name"] = "totol";

let student1 = {
  firstname: "Rusa",
  grade: "A (yatta)",
  sayHi() {
    return this["first name"];
  },
  sayGrade() {
    return this.grade;
  },
};

let student2 = {
  province: "bali",
  // adress: {
  //     street: 'Jalan'
  // },
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

delete student.age;
delete student["firstname"];

console.log(student2.adress);

console.log(student.age);
console.log(student1["firstname"]);
console.log(student);
console.log(student.adress?.street);
console.log(student1.sayGrade());
