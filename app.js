
const students = [
    {
        firstName: "Devin",
        lastName: "Wang",
        graduated:  false,
        DOB: 2008,
        siblings:["Bonsy", "Danny"],
        year: 2023,
        age: function (hi) {
            return year - this.DOB;
        },
    },
    {
        firstName: "Eric",
        lastName: "Huang",
        graduated:  false,
        DOB: 2009,
        siblings:["Sherry", "Min"],
        year: 2023,
        age: function (hi) {
            return year - this.DOB;
        },
    },
    {
        firstName: "Michael",
        lastName: "Jordan",
        graduated:  true,
        DOB: 1960,
        siblings:["Jimmy", "Lebron"],
        year: 2023,
        age: function (hi) {
            return year - this.DOB;
        },
    },
];
console.log(students.age);
//arrays store items and can access items by their index starting at 0
//foreach to run function on every item (for loop);
students.forEach((students)=> console.log(students.firstName, students.lastName))
students.forEach((students)=> console.log(students.graduated))
students.forEach((students)=> console.log(students.DOB))
students.forEach((student)=> console.log(student.siblings))
students.forEach((student)=> console.log(student.age))



//arrow functions ()=> are simlpier, auto return its output, this keyword changes
const graduates = graduated.filter((student)=> student.graduated !== true);
console.log (students);

