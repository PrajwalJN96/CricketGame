
'use strict';
let scoring = document.querySelector("body");
let playing = true;
let score = 0;
let highScore = 0;
let bat = 0;
let ball = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let scoreboard = (e) => {
if(playing){
  let key = e.key;
  if((typeof Number(key)) === "number" && !isNaN(Number(key)) && Number(key)>=0 && Number(key)<=6){
 bat =Number(key)}
  ball =  bowling();
  scoreCheck(ball,bat);
}
}

scoring.addEventListener("keypress",(e) =>scoreboard(e));

let bowling = () =>{
let ball = Number(Math.trunc(Math.random() * 6) + 1);
document.querySelector('.number').textContent = ball;
return ball;
}

let scoreCheck = () =>{
  //When player gets out
  if (ball === bat) {
    playing = false;
    displayMessage('BOWLED');
    document.querySelector('.number').textContent = ball;
    document.querySelector('body').style.backgroundColor = '#fc5432';
    document.querySelector('.number').style.width = '30rem';
    //to change highXcore everytime
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high').textContent = highScore;
    }
    score = 0;
    document.querySelector('.score').textContent  = 0;
    document.querySelector('.bat').textContent = 0;
    newgame();
  } else {
    if (bat === 1 || bat === 2 || bat === 3 || bat === 5 || bat === 0) {
      displayMessage(`${bat} Runs scored `);
      score += bat;
      document.querySelector('.score').textContent = score;
    } else if (bat === 4) {
      displayMessage('Four runs');
      score += bat;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('SIX!');
      score += bat;
      document.querySelector('.score').textContent = score;
    }
  }
};

let again = document.querySelector('.again')

let newgame = () =>{
  playing = true;
  score = 0;
  document.querySelector('body').style.backgroundColor = '#9ff356';
  ball = Math.trunc(Math.random() * 6) + 1;
  displayMessage('Start batting...');
  document.querySelector('.score').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.bat').valuse = '';
  document.querySelector('.number').style.widsth = '15rem';
}

again.addEventListener('click', newgame);
