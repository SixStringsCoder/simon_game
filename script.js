// Challenge Array
const challenge = [];
const playerAnswers = [];
let simonePlaying = false;
let gameGoing = false;
// let counter = 0;

// Instantiate audio
const tone0 = new Audio("audio/tone0.mp3");
const tone1 = new Audio("audio/tone1.mp3");
const tone2 = new Audio("audio/tone2.mp3");
const tone3 = new Audio("audio/tone3.mp3");
const loser = new Audio("audio/loser.mp3");

// Set Object References
const pad0 = document.querySelector('#pad0');
const pad1 = document.querySelector('#pad1');
const pad2 = document.querySelector('#pad2');
const pad3 = document.querySelector('#pad3');
const playgame = document.querySelector('#play-game');

// Listeners and Handlers
pad0.addEventListener('mousedown', () => youPlayPad(event));
pad1.addEventListener('mousedown', () => youPlayPad(event));
pad2.addEventListener('mousedown', () => youPlayPad(event));
pad3.addEventListener('mousedown', () => youPlayPad(event));
playgame.addEventListener('click', () => {
    if(!simonePlaying) {
      gameGoing = true;
      simonePlaying = true;
      simonesTurn(challenge);
      // console.log(challenge);
      // playerAnswers.splice(0, playerAnswers.length);
    }
    if(!gameGoing) {
      challenge.splice(0, playerAnswers.length);
      gameGoing = true;
    }
})

const simonesTurn = (challengeArray) => {
    randomNumber();
    let index = 0;
    const playChallenge = setInterval(playTone, 500);
    function playTone() {
      if (index > challengeArray.length-1) {
        clearInterval(playChallenge);
        simonePlaying = false;
      } else {
        simonePlaying = true;
        let tone = new Audio(`audio/tone${challengeArray[index]}.mp3`);
        tone.play();
        let number = challengeArray[index];
        $(`#pad${number}`).addClass('opacityFull');
        setTimeout(() => $(`#pad${number}`).removeClass('opacityFull'), 300);
        index += 1;
      }
    }
}

const youPlayPad = (event) => {
  let number = parseInt(event.target.attributes.name.value);
  // play tone
  const tone = new Audio(`audio/tone${number}.mp3`);
  tone.play();
  // brighten light effect
  $(`#${event.target.id}`).addClass('opacityFull');
  setTimeout(() => $(`#${event.target.id}`).removeClass('opacityFull'), 200);

  playerAnswers.push(number);
  checkPlayerAnswer(playerAnswers);
  simonePlaying = false;
}


const checkPlayerAnswer = (answers) => {
  answers.forEach((answer, index) => {
    console.log(index);
    let i = answers.indexOf(answer);
    if (answer !== challenge[index]) {
      loserSFX();
      showLoserMSG();
      console.log(`WRONG! GAME OVER---> my: ${playerAnswers}, Simone: ${challenge}`);
      playerAnswers.splice(0, playerAnswers.length);
      challenge.splice(0, challenge.length);
      gameGoing = false;
    } else if (answer === challenge[index]) {
      console.log("CORRECT!");
      console.log(`my: ${playerAnswers}, Simone: ${challenge}`);
    }
    if (playerAnswers.length === challenge.length) {
      playerAnswers.splice(0, playerAnswers.length);
      setTimeout(continuePlay, 750);
      console.log("MOVING ON!  Simone's Turn");
    }

  });
}

const continuePlay = () => {
  if (gameGoing) {
    simonesTurn(challenge);
  }
}

const randomNumber = () => {
  let number = Math.floor(Math.random() * 4);
  challenge.push(number);
}

// LOST the GAME
const loserSFX = () => {
  loser.volume = 1;
  loser.play();
}
const showLoserMSG = () => {
  document.querySelector('.loser-msg').classList.add('show');
  setTimeout(hideLoserMSG, 25000);
}
const hideLoserMSG = () => document.querySelector('.loser-msg').classList.remove('show');
