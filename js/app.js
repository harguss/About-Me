/* eslint-disable no-trailing-spaces */
'use strict';
console.log('js file connected');

let userName;
//prompt our user for input data
// 1st question
function questionOne(){
  userName = prompt('What is your name?').toLowerCase();
  console.log('user input is ', userName);
  
  //greet the user
  alert('Hello ' + userName);

}
questionOne();

// 2nd question
function questionTwo(){

  let hourNow = prompt('What time is it? Respond in military time.');
  console.log('the user time given ', hourNow);

  if (hourNow >= 12 && hourNow >= 6){
    alert('Good Morning!');
  } else if(hourNow >=12 && hourNow <= 18){
    alert('Good Afternoon!');
  }else if (hourNow >= 3 && hourNow <=4){
    alert('Why are you up at this hour??? Go to Bed!');
  } else {
    alert('Do you know what time it is?');
  }
}
questionTwo();


// 3rd question
function questionThree(){
  let favColor = prompt('what is your favorite color?');
  console.log('user favColor is ', favColor);

  alert(userName + ' your favorite color is ' + favColor);
}
questionThree();

//4rd question
function questionFour(){
  let favDessert = prompt('What is your favorite dessert?');
  console.log('userName + is', favDessert);

  alert(userName + ' your favorite dessert is ' + favDessert);
}
questionFour();

//5rd question
function questionFive(){
  let favAnimal = prompt('What is your favorite animal?');
  console.log('userName +  is', favAnimal);
  //respond
  alert(userName + 'your favorite animal is' + favAnimal);
}
questionFive();



//6th question guess the number I am thinking
function questionSix(){
  let guessNum = 7;
  let chances = 4;

  while(chances > 0){
    chances = chances - 1;
    //prompt user for a number
    let userResponse = prompt('How many years did I serve in the MN National Guard?');
    console.log('userResponse is a string ', typeof(userResponse));

    let userNumber =  Number(userResponse);
    console.log('userResponse is a num ', userNumber, typeof(userNumber));

    if (!userResponse){
      break; //incase no input
    }

    //user answer is correct handle
    if(userNumber === guessNum){
      alert(userName + ' Well done!');
      chances = 0;
    }


    //handle too high or too low
    if(userNumber < guessNum){
      alert(userName + 'you are too low, keep trying!');
    }

  //too high if
  }//closes while
  alert('the correct answer is ' + guessNum);
}
questionSix();


//create an array

let favoriteFood = ['poke bowl','salmon chazuke','rice','brats','noodles','sushi','coffee'];
console.log(favoriteFood.length);

let attempts = 0;
let correctAnswer = 0;

while(attempts !== 7){
  let userAnswer = prompt('What are my favorite foods?');
  let userAnswerTrimmedToUpperCase = userAnswer.toLowerCase().trim();
  console.log('userAnswerTrimmedToUpperCase',userAnswerTrimmedToUpperCase);

  if(favoriteFood.indexOf(userAnswerTrimmedToUpperCase) >= 0){
    alert('Yes! ' + userAnswerTrimmedToUpperCase + ' is one of my favorite foods.');
    correctAnswer = correctAnswer + 1;
    // correctAnswer += 1;
    // correctAnswer++;
  } else {
    alert('Not my favorite, but I like that too!@!!#%^#%%^');
  }

  attempts = attempts + 1;

}

alert('All of my favorite foods are: ' + favoriteFood.join(', '));
alert('You answered ' + correctAnswer + ' out of 7 correctly');
alert('Thanks for Playin...');
