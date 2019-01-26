// Instantiate audio
const tone1 = new Audio("audio/tone1.mp3");
const tone2 = new Audio("audio/tone2.mp3");
const tone3 = new Audio("audio/tone3.mp3");
const tone4 = new Audio("audio/tone4.mp3");

// Set Object References
const pad1 = document.querySelector('#pad1');
const pad2 = document.querySelector('#pad2');
const pad3 = document.querySelector('#pad3');
const pad4 = document.querySelector('#pad4');

// Listeners and Handlers
pad1.addEventListener('mousedown', () => tone1.play());
pad2.addEventListener('mousedown', () => tone2.play());
pad3.addEventListener('mousedown', () => tone3.play());
pad4.addEventListener('mousedown', () => tone4.play());
