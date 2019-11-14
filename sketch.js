let screen = -1;
let knobChannel;
let knobValue = 20;
let tab1 = 0;
let tab2 = 0;
let ptab1 = 0;

let capture;
let vidWidth = 320;
let vidHeight = 240;
let currentMillis = 0;
let newMillis = 0;

// sines mp3
let sines = [];
let numSound = 11;
let soundPlay = 0;

let count = 0;
let pcount; 

function preload() {
  for (i = 1; i < 7; i++) {
    sounds.push(loadSound(i + ".mp3"));
  }

  for (let i = 0; i < numSound; i++) {
    sines.push(loadSound("sines/" + i + ".mp3"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  moveLine = width / 7 * 3;
  wid = width / 3;
  textsi = height / 12;
  frameRate(30);
  midisetup();

  // screen 3 set up
  capture = createCapture(VIDEO);
  capture.size(vidWidth, vidHeight);
  capture.hide();

}

function draw() {
  midireceive();

  if (screen == 0) {
    screen0();
  }

  if (screen == 1) {
    screen1();
    pcount = count;
  }

  if (screen == 2) {
    screen2();
    pcount = count;
  }

  if (screen == 3) {
    screen3();
    pcount = count;
  }

  if (screen == 4) {
    screen4();
  }

  if (screen == 5) {
    screen5();
    pcount = count;
  }
  // console.log(screen);
}

function mousePressed() {
  count = count+1;
  screen = screen + 1;
  if (screen == 0) {
    sines[soundPlay].loop();
    soundPlay = soundPlay + 1;
  }
    if (screen == 1) {
      sines[soundPlay-1].stop();
    sines[soundPlay].loop();
    soundPlay = soundPlay + 1;
  }
}

// function keyTyped() {

//   if (screen == 1) {
//     // if (key === 'm') {
//     //   if (soundPlay >= 1) {
//     //     sines[soundPlay - 1].stop();
//     //   }
//     //   sines[soundPlay].loop();
//     //   soundPlay = soundPlay + 1;
//     //   console.log(soundPlay);
//     // }
//   } else {
//     if (key === 'm') {
//       currentMillis = millis();
//     }
//   }
// }