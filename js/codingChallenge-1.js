/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var massJohn, massMark, heightJohn, heightMark;
massJohn = 75;
massMark = 83;
heightJohn = 1.83;
heightMark = 1.95;

var bmiJohn = massJohn / heightJohn ^ 2;
var bmiMark = massMark/heightMark ^ 2;

if (bmiMark > bmiJohn ) {
    console.log('Mark\'s MBI is higher than John\'s.');
} else {
    console.log('John\'s MBI is higher than Mark\'s.');
}