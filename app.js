const students = [
    {
        firstName: "Devin",
        lastName: "Wang",
        graduated:  false,
        DOB: 2008,
        siblings:["Bonsy", "Danny"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "Eric",
        lastName: "Huang",
        graduated:  false,
        DOB: 2008,
        siblings:["Sherry", "Min"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "Michael",
        lastName: "Jordan",
        graduated:  false,
        DOB: 2008,
        siblings:["Jimmy", "Lebron"],
        age: function () {
            return year - this.DOB;
        },
    },

]
//arrays store items and can access items by their index starting at 0
console.students(students[students.length]);
//foreach to run function on every item (for loop)
nums.forEach((el, index)=> console.log(el, index))
//arrow functions ()=> are simlpier, auto return its output, this keyword changes

