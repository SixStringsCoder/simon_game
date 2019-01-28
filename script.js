// Challenge Array
const challenge = [0, 1, 2, 2, 0, 3, 3, 2];

const touchpads = {
  pad0: { bgcolor: 'rgba(204, 255, 0, 1)'},
  pad1: { bgcolor: 'rgba(255, 0, 204, 1)'},
  pad2: { bgcolor: 'rgba(255, 204, 51, 1)'},
  pad3: { bgcolor: 'rgba(170, 240, 209, 1)'}
}

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
pad0.addEventListener('mousedown', () => tone0.play());
pad1.addEventListener('mousedown', () => tone1.play());
pad2.addEventListener('mousedown', () => tone2.play());
pad3.addEventListener('mousedown', () => tone3.play());
playgame.addEventListener('click', () => playPad(challenge))



function playPad(challengeArray) {
    let index = 0;
    const playChallenge = setInterval(playTone, 500);
    function playTone() {
      if (index === challengeArray.length-1) {
        clearInterval(playChallenge);
      } else {
        let tone = new Audio(`audio/tone${challengeArray[index]}.mp3`);
        tone.play();
        document.querySelector(`#pad${challengeArray[index]}`).style.backgroundColor = touchpads[`pad${challengeArray[index]}`].bgcolor;
        index += 1;
      }
    }
}
