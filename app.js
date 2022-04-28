const input = require('readline-sync');


/*Declare questions and check for right data type. In future, if changing questions 2 or 5, will need to change the paired while loops */

let candidateName = input.question('Candidate Name: ');
let question1 = input.question('\n1. True or False: 5000 meters = 5 kilometers.\n');
let question2 = input.question('\n2. (5 + 3)/2 * 10 = ?\n');

while (isNaN(question2)) {
    question2=Number(input.question('Please enter a numerical value for this question: '));
    //convert to string so can loop easily later
    question2 = question2.toString();
}

let question3 = input.question('\n3. Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?\n');
let question4 = input.question('\n4. Who was the first American woman in space?\n');
let question5 = input.question('\n5. What is the minimum crew size for the International Space Station (ISS)?\n');

while (isNaN(question5)) {
    question5 = Number(input.question('Please enter a numerical value for this question: '))
    //convert to string so can loop easily later
    question5 = question5.toString();
}

// Build candidate's answers array, correct answer's array, and declare points

let prompts = [];
let answers = ['True', '40', 'Trajectory', 'Sally Ride', '3'];
let points = 0;

prompts.push(question1, question2, question3, question4, question5);



console.log('\n--------------------------------------------\nANSWERS\n--------------------------------------------');

//Loop through candidate's answers and check against correct answers to display final results

for (let i = 0; i < prompts.length; i ++) {
  if (prompts[i].toLowerCase() === answers[i].toLowerCase()) {
    points += 1;
    console.log(`\nQuestion ${prompts.indexOf(prompts[i]) + 1} - Correct.\nYour answer: ${prompts[i]} \nCorrect answer: ${answers[i]}`);
    } else {
    console.log(`\nQuestion ${prompts.indexOf(prompts[i]) + 1} - Incorrect. \nYour answer: ${prompts[i]} \nCorrect answer: ${answers[i]}`);
  } 
}

console.log('\n--------------------------------------------\nFINAL RESULTS\n--------------------------------------------');

// Calculate and return final grade with personalized message

let finalGrade = (Math.round(points / prompts.length * 100));

if (finalGrade >= 80) {
  console.log(`\nFinal score: ${finalGrade}% - You got ${points} out of ${prompts.length} correct.\nCongrats, ${candidateName}. You Pass!`)
} else {
  console.log(`\nFinal score: ${finalGrade}% - You got ${points} out of ${prompts.length} correct.\nSorry ${candidateName}, you do not pass.`)
}
