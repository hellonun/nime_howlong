function screen3() {

  background(0);
  textSize(textsi);

  if (newMillis == 0) {
    newMillis = nf(0, 2, 3);
  }

  if (currentMillis) {
    newMillis = millis() - currentMillis;
    newMillis = nf(newMillis / 1000, 2, 3);
  }

  fill(255);
  text(newMillis, width / 4, height / 2);

  push();
  // translate(width, 0); // move to far corner
  // scale(-1.0, 1.0); // flip x-axis backwards
  // image(capture, 0, height / 2 - (vidHeight / 2), width / 2, width / 2 * 0.75);
  translate(width / 2, 0); // move to far corner
  // scale(-1.0, 1.0); // flip x-axis backwards
  image(capture, 0, height/2 - (240/320*width/4), width / 2, width / 2 * 0.75);
  pop();
  if (count>pcount) {
  currentMillis = millis();
  }
  pcount = count; 
}

// function keyTyped() {
//   if (key === 'm') {
//     currentMillis = millis();
//   }
// }