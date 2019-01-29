// Challenge Array
const challenge = [0, 1, 2, 2, 0, 3, 3, 2];
const playerAnswer = [];

// Instantiate audio
const tone0 = new Audio("audio/tone0.mp3");
const tone1 = new Audio("audio/tone1.mp3");
const tone2 = new Audio("audio/tone2.mp3");
const tone3 = new Audio("audio/tone3.mp3");

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
playgame.addEventListener('click', () => simonesTurn(challenge))


const simonesTurn = (challengeArray) => {
    let index = 0;
    const playChallenge = setInterval(playTone, 500);
    function playTone() {
      if (index > challengeArray.length-1) {
        clearInterval(playChallenge);
      } else {
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
  const tone = new Audio(`audio/tone${number}.mp3`);
  tone.play();
  $(`#${event.target.id}`).addClass('opacityFull');
  setTimeout(() => $(`#${event.target.id}`).removeClass('opacityFull'), 200);
  playerAnswer.push(number);
  checkPlayerAnswer(playerAnswer);
}


const checkPlayerAnswer = (answers) => {
  answers.forEach((answer, index) => {
    if (answer !== challenge[index]) {
      console.log("WRONG!")
    } else {
      console.log("WINNER");
    }
  })
}
