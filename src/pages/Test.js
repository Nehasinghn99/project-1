import React from "react";

function Test(values) {

  return values.reduce(function (sum, value) {
    return sum + value;
});
}

var students = {
ABC: {
    eng: 25,
    maths: 50,
    sci: 25
},
DEF: {
    eng: 25,
    maths: 48,
    sci: 30
}
};

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];
   
// loop through all students in the list
Object.keys(testCase1).forEach(function (totalmarks) {
  // get student details by name
  var student = testCase1[totalmarks];

  // get all the grades for the student
  var grades = Object.values(student);

  // sum them up
  var total = Test(grades);

  console.log("Total for " + totalmarks + " is " + total);
});

export default Test;
