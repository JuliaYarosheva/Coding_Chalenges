/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

const john = {
    firstName: 'John',
    lastName: 'Bonjovi',
    mass: 76,
    height: 1.83,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

const mark = {
    firstName: 'Mark',
    lastName: 'Spenser',
    mass: 87,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

john.calcBMI();
mark.calcBMI();

console.log(john.bmi);
console.log(mark.bmi);

switch (true) {
    case john.indexBMI > mark.indexBMI:
        console.log(john.firstName + ' has grater BMI, which is ' + john.indexBMI);
        break;
    case mark.indexBMI > john.indexBMI:
        console.log(mark.firstName + ' has grater BMI, which is ' + mark.indexBMI);
        break;
    default:
        console.log(john.firstName + ' and ' + mark.firstName + ' have the equal  BMIs, which is ' + (john.indexBMI + mark.indexBMI) / 2);
}