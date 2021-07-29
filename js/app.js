'use strict';
console.log('js file connected');


// //prompt our user for input data
// let userName = prompt('What is your name?').toLowerCase();
// console.log('user input is ', userName);

// //greet the user
// alert('Hello ' + userName);


// let hourNow = prompt('What time is it? Respond in military time.');
// console.log('the user time given ', hourNow);

// if (hourNow >= 12 && hourNow >= 6){
//   alert('Good Morning!');
// } else if(hourNow >=12 && hourNow <= 18){
//   alert('Good Afternoon!');
// }else if (hourNow >= 3 && hourNow <=4){
//   alert('Why are you up at this hour??? Go to Bed!');
// } else {
//   alert('Do you know what time it is?');
// }






//3rd question
// let favColor = prompt('what is your favorite color?');
// console.log('user favColor is ', favColor);
//respond
//alert(userName + ' your favorite color is ' + favColor);

// //4rd question

//  let favDessert = prompt('What is your favorite dessert?');
//  console.log('userName + is', favDessert);
//respond
//alert(userName + ' your favorite dessert is ' + favDessert);


// //5rd question
// let favAnimal = prompt('What is your favorite animal?');
// console.log('userName +  is', favAnimal);
// //respond
//alert(username + 'your favorite animal is' + favAnimal);



//6th question guess the number I am thinking

// let guessNum = 7;
// let chances = 4;

// while(chances > 0){
//   chances = chances - 1;
//   //prompt user for a number
//   let userResponse = prompt('How many years did I serve in the MN National Guard?');
//   console.log('userResponse is a string ', typeof(userResponse));

//   let userNumber =  Number(userResponse);
//   console.log('userResponse is a num ', userNumber, typeof(userNumber));

//   if (!userResponse){
//     break; //incase no input
//   }

//   //user answer is correct handle
//   if(userNumber === guessNum){
//     alert(userName + ' Well done!');
//     chances = 0;
//   }


//   //handle too high or too low
//   if(userNumber < guessNum){
//     alert(userName + 'you are too low, keep trying!');
//   }

//   //too high if
// }//closes while
// alert('the correct answer is ' + guessNum);



//create an array

let states = ['ILLINOIS','IOWA','ARKANSAS','CALIFORNIA','TEXAS','OMAN','GERMANY'];
console.log(states.length);

let attempts = 0;
let correctAnswer = 0;

while(attempts !== 7){
  let userAnswer = prompt('What states of the world have I lived in?');
  let userAnswerTrimmedToUpperCase = userAnswer.toUpperCase().trim();
  console.log('userAnswerTrimmedToUpperCase',userAnswerTrimmedToUpperCase);

  if(states.indexOf(userAnswerTrimmedToUpperCase) >= 0){
    alert('Yes! ' + userAnswerTrimmedToUpperCase + ' is one of my states of residence.');
    correctAnswer = correctAnswer + 1;
    // correctAnswer += 1;
    // correctAnswer++;
  } else {
    alert('Your wrong@!!#%^#%%^');
  }

  attempts = attempts + 1;

}

alert('All states that I lived in are: ' + states.join(', '));
alert('You answered ' + correctAnswer + ' out of 7 correctly');
alert('Thanks for Playin...');
