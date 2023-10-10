const year = 2023;

const students = [
    {
        firstName: "Devin",
        lastName: "Wang",
        graduated:  false,
        DOB: 2008,
        siblings:["Bonsy", "Danny"],
        year,
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "Eric",
        lastName: "Huang",
        graduated:  false,
        DOB: 2009,
        siblings:["Sherry", "Min"],
        year,
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "Michael",
        lastName: "Jordan",
        graduated:  true,
        DOB: 1960,
        siblings:["Jimmy", "Lebron"],
        year,
        age: function (hi) {
            return year - 50;
        },
    },
];
//arrays store items and can access items by their index starting at 0
console.log(students[students.firstName]); 
console.log(students[students.age])
//foreach to run function on every item (for loop);
students.forEach((students)=> console.log(students.firstName, students.lastName))
students.forEach((students)=> console.log(students.graduated))
students.forEach((students)=> console.log(students.DOB))
students.forEach((students)=> console.log(students.siblings))
students.forEach((students)=> console.log(students.age))




//arrow functions ()=> are simlpier, auto return its output, this keyword changes
//const graduates = students.filter((student)=> student.graduated !== true);
//console.log (current);