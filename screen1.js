function screen1() {
  if (screen == 1) {
    frameRate(knobValue);
    background(0);
    fill(255);
    noStroke();
    // NORMAL 
    nor++;

    // SINE
    sineVal = sin(radians(nor));
    sineVal = map(sineVal, -1, 1, 0, 2); // set interval
    sine = sine + sineVal;

    // SQUARE
    if (nor % 100 == 0) { // set interval
      if (squVal == 0) {
        squVal = 2;
      } else {
        squVal = 0;
      }
    }
    squ = squ + squVal;

    // TRIANGLE
    if (nor % 100 == 0) { // set interval
      triVal = 0;
    } else {
      triVal = map(nor % 100, 0, 100, 0, 2);
    }
    tri = tri + triVal;

    // NOISE
    xoff = xoff + noiMul;
    noiVal = noise(xoff) * 2; // set interval
    noi = noi + noiVal;

    // RANDOM
    ranVal = random(0, 2); // set interval
    ran = ran + ranVal;

    all.push(nor, sine, squ, tri, noi, ran);
    plot.push(norVal, sineVal, squVal, triVal, noiVal, ranVal);
    if (norVals.length < wid) {
      norVals.push(norVal);
      sineVals.push(sineVal);
      squVals.push(squVal);
      triVals.push(triVal);
      noiVals.push(noiVal);
      ranVals.push(ranVal);
    } else {
      norVals.push(norVal);
      sineVals.push(sineVal);
      squVals.push(squVal);
      triVals.push(triVal);
      noiVals.push(noiVal);
      ranVals.push(ranVal);
      norVals.splice(0, 1);
      sineVals.splice(0, 1);
      squVals.splice(0, 1);
      triVals.splice(0, 1);
      noiVals.splice(0, 1);
      ranVals.splice(0, 1);
    }

    if (nor > 1) {
      all.splice(0, 6);
      plot.splice(0, 6);
    }

    for (i = 0; i < all.length; i++) {
      textSize(textsi);
      s = round(all[i]) % 100;
      m = floor(all[i] / 100);

      if (i == 0 && frameCount % 60000 == 0) {
        nor = 0;
        sine = 0;
        squ = 0;
        tri = 0;
        noi = 0;
        ran = 0;
        all.splice(0, 6)
        all.push(0, 0, 0, 0, 0, 0);
        h = h + 1;
      }

      // TEXT FORMAT
      if (s < 10) {
        stext = "0" + s;
      } else {
        stext = s;
      }

      if (m < 10) {
        mtext = "0" + m;
      } else {
        mtext = m;
      }

      if (h < 10) {
        htext = "0" + h;
      } else {
        htext = h;
      }


      fill(255);
      text(htext + ":" + mtext + ":" + stext, width / 7, height / 7 * (i + 1) + (textsi / 2));

      if (mouseX > width / 2) {
        frate = map(mouseX, width / 2, width, 20, 100);
        frameRate(frate);
        if (mouseX > width - 200) { // play every xx frame
          prate = 20;
        } else {
          prate = 100;
        }
        if ((round(all[i]) % prate) < frate / 10) { // if one second
          fill(255, 0, 0);
          text(htext + ":" + mtext + ":" + stext, width / 7, height / 7 * (i + 1) + (textsi / 2));
          if ((round(all[i]) % prate) == 0) {
            if (sounds[i].isPlaying() == 0) { // if not already playing
              if (mouseX > width - 200 && mouseX < width - 10) {
                sounds[floor(random(i))].play();
              }
              sounds[i].play();
            }
          }
        }
      } else {
        frameRate(knobValue);
      }
    }

    let xx = height / 10; // top of line
    let yy = height / 10 * 2; // bottom of line

    //VISUALS
    for (i = 0; i < plot.length; i++) {
      x = norVals.length + moveLine;
      y = (i * height / 7) + map(plot[i], 2, 0, xx, yy);
      strokeWeight(15);
      stroke(255);
      point(x, y);
      noStroke();
      textSize(textsi / 3.5);
      fill(255);
      text(nf(plot[i], 1, 2), x + 5, y - 5);
    }

    // print (sineVals);
    // DRAW GRAPH


    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape();

    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      ynorVals = 0 + map(norVals[i], 2, 0, xx, yy);
      vertex(x, ynorVals);
    }
    endShape();

    beginShape();
    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      ysineVals = height / 7 * 1 + map(sineVals[i], 2, 0, xx, yy);
      vertex(x, ysineVals);
    }
    endShape();

    beginShape();
    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      ysquVals = height / 7 * 2 + map(squVals[i], 2, 0, xx, yy);
      vertex(x, ysquVals);
    }
    endShape();

    beginShape();
    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      ytriVals = height / 7 * 3 + map(triVals[i], 2, 0, xx, yy);
      vertex(x, ytriVals);
    }
    endShape();

    beginShape();
    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      ynoiVals = height / 7 * 4 + map(noiVals[i], 2, 0, xx, yy);
      vertex(x, ynoiVals);
    }
    endShape();

    beginShape();
    for (i = 0; i < norVals.length; i++) {
      x = i + moveLine;
      yranVals = height / 7 * 5 + map(ranVals[i], 2, 0, xx, yy);
      vertex(x, yranVals);
    }
    endShape();

    if (mouseX > width - 10) {
      background(0);
      for (i = 0; i < 6; i++) {
        if (i != 0) {
          sounds[i].setVolume(0);
        }
      }
    }

    fill(0);
    noStroke();

    // if (tab1 == 0) {
    //   background(0);
    // }
    if (tab1 == 0) {
      rect(0, height / 7 * 2 - textsi + 8, width, height); // 8 is dot value/2
    }
    if (tab1 == 1) {
      rect(0, height / 7 * 3 - textsi + 8, width, height);
    }
    if (tab1 == 2) {
      rect(0, height / 7 * 4 - textsi + 8, width, height);
    }
    if (tab1 == 3) {
      rect(0, height / 7 * 5 - textsi + 8, width, height);
    }
    if (tab1 == 4) {
      rect(0, height / 7 * 6 - textsi + 8, width, height);
    }
    if (tab1 > 5) {
      rect((width / 7 * 3) - 20, 0, width, height);
    }

    if (tab1 >= sines.length-1) {
      sines[soundPlay - 1].stop();
    } else {
      if (tab1 > ptab1) {
        if (soundPlay >= 1) {
          sines[soundPlay - 1].stop();
        }
        sines[soundPlay].loop();
        soundPlay = soundPlay + 1;
      }
    }
    ptab1 = tab1;
  }
}