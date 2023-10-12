
const students = [
    {
        firstName: "Devin",
        lastName: "Wang",
        graduated:  false,
        DOB: 2008,
        siblings:["Bonsy", "Danny"],
        year: 2023,
        
    },
    {
        firstName: "Eric",
        lastName: "Huang",
        graduated:  false,
        DOB: 2009,
        siblings:["Sherry", "Min"],
        year: 2023,
       
    },
    {
        firstName: "Michael",
        lastName: "Jordan",
        graduated:  true,
        DOB: 1960,
        siblings:["Jimmy", "Lebron"],
        year: 2023,
       
    },
];
console.log(students.age);
//arrays store items and can access items by their index starting at 0
//foreach to run function on every item (for loop);
students.forEach((students)=> console.log(students.firstName, students.lastName))
students.forEach((students)=> console.log(students.graduated))
students.forEach((students)=> console.log(students.DOB))
const sibling = students.forEach((students)=> students.siblings.forEach((sibling) =>console.log(sibling)));


//
//arrow functions ()=> are simlpier, auto return its output, this keyword changes
const graduates = students.filter((students)=> students.graduated === true);
console.log (graduates);

