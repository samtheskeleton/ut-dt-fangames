function time() {
  if (timer >= 76) {
    if (nessP.x + 1 >= critter1.x && nessP.x - 19 <= critter1.x &&
      nessP.y + 3 >= critter1.y && nessP.y - 17 <= critter1.y)

    {
      health--;
      timer = 0;
      timer += 1;
    }

    if (nessP.x + 1 >= critter2.x && nessP.x - 19 <= critter2.x &&
      nessP.y + 3 >= critter2.y && nessP.y - 17 <= critter2.y)

    {
      health--;
      timer = 0;
      timer += 1;
    }

    if (nessP.x + 1 >= critter3.x && nessP.x - 19 <= critter3.x &&
      nessP.y + 3 >= critter3.y && nessP.y - 17 <= critter3.y)

    {
      health--;
      timer = 0;
      timer += 1;
    }

    if (nessP.x + 1 >= critter4.x && nessP.x - 19 <= critter4.x &&
      nessP.y + 3 >= critter4.y && nessP.y - 17 <= critter4.y)

    {
      health--;
      timer = 0;
      timer += 1;
    }

    if (nessP.x + 1 >= critter5.x && nessP.x - 19 <= critter5.x &&
      nessP.y + 3 >= critter5.y && nessP.y - 17 <= critter5.y)

    {
      health--;
      timer = 0;
      timer += 1;
    }
  }
}

function nessAnim() {
  let frames = ness_data.frames;

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = up.get(pos.x, pos.y, pos.w, pos.h);
    ups.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = down.get(pos.x, pos.y, pos.w, pos.h);
    downs.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = left.get(pos.x, pos.y, pos.w, pos.h);
    lefts.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = right.get(pos.x, pos.y, pos.w, pos.h);
    rights.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = up_left.get(pos.x, pos.y, pos.w, pos.h);
    up_lefts.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = up_right.get(pos.x, pos.y, pos.w, pos.h);
    up_rights.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = down_left.get(pos.x, pos.y, pos.w, pos.h);
    down_lefts.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = down_right.get(pos.x, pos.y, pos.w, pos.h);
    down_rights.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = dog_left.get(pos.x, pos.y, pos.w, pos.h);
    dl.push(img);
  }

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = dog_right.get(pos.x, pos.y, pos.w, pos.h);
    dr.push(img);
  }
}

function nessBlink() {
  if (timer <= 2 && timer > 1) {
    hurt.play();
  }
  if (timer >= 8 && timer <= 16) {
    nessP.body();
  }
  if (timer >= 24 && timer <= 32) {
    nessP.body();
  }
  if (timer >= 40 && timer <= 48) {
    nessP.body();
  }
  if (timer >= 56) {
    nessP.body();
  }
}

function chalkboard() {
  if (counter >= 1) {
    fill('#fff9ea');
    textAlign(CENTER);
    textFont(chalk, 7.5);
    noStroke();
    text('Collect ' + counter + ' bananas!', 114, 42.9);
  } else {
    image(door, 203, 26);
  }
}

function mostBodies() {
  if (keyIsDown(37) || keyIsDown(38) || keyIsDown(39) || keyIsDown(40)) {
    arwc = 1;
  }
  if (arwc == 0 && health > 0) {
    push();
    imageMode(CORNER);
    image(arrow, 215, 85);
    pop();
  }

  critter1.body();
  critter2.body();
  critter3.body();
  critter4.body();
  critter5.body();

  b1.body();
  b2.body7();
  b3.body6();
  b4.body5();
  b5.body4();
  b6.body3();
  b7.body2();
  b8.body1();
  b9.body();
}

function healthStuffs() {
  if (dt >= 80) {
    background(0);
  }

  if (f >= 8) {
    imageMode(CENTER);
    image(ups[frameCount % 1], nessP.x, nessP.y);
  }

  if (health > 0 && f <= 8) {
    nessBlink();
    nessP.move();
  }

  if (health <= 0) {
    schm.stop();
    dopn.stop();
    vic.stop();

    if (dt <= 1 && dt > 0) {
      hurt.play();
    }

    dt += 1;
    if (dt < 180) {
      imageMode(CENTER);
      image(downs[frameCount % 1], nessP.x, nessP.y);
    }

    if (dt <= 80 && dt > 79) {
      bk1.play();
    }
    if (dt <= 180 && dt > 179) {
      bbeat.play();
    }
    if (dt <= 188 && dt > 187) {
      bbeat.play();
    }
    if (dt <= 196 && dt > 195) {
      bbeat.play();
    }
    if (dt <= 204 && dt > 203) {
      bbeat.play();
    }
    if (dt <= 208 && dt > 207) {
      bk2.play();
    }

    if (dt >= 180) {
      imageMode(CENTER);
      if (dt >= 184 && dt < 188) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (dt >= 192 && dt < 196) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (dt >= 200 && dt < 204) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (dt >= 208 && dt < 212) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
    }
  }
}

function moveLayerCollision() {
  if (dt < 80) {
    nessP.collision();
    critterLayer();
  }

  if (health > 0);
  {
    critter1.move();
    critter2.move();
    critter3.move();
    critter4.move();
    critter5.move();
  }

  if (dt < 80) {
    imageMode(CORNER);
    image(school_top, -2, 15);
    b1.body_0();
    b2.body_7();
    b3.body_6();
    b4.body_5();
    b5.body_4();
    b6.body_3();
    b7.body_2();
    b8.body_1();
    b9.body_0();
  }

  counterCollision();
  time();
  hearts(246, 229);
}

function changeScenesOne() {
  if (counter <= 0) {
    schm.stop();
    mut += 1;

    if (mut <= 1 && mut > 0) {
      dopn.play();
    }
    if (mut <= 20 && mut > 19) {
      vic.play();
    }
    if (mut > 20) {
      mut = 21;
    }

    if (nessP.y - 12 <= 53 && nessP.x >= 210 && nessP.x <= 231) {
      counter = 0;
      timer = 0;
      dt = 0;
      background(0, 0, 0, f);
      f += 9;

      if (f >= 360) {
        scene = 2;
        mu = 0;
        nessP.x = 46;
        nessP.y = 111;
      }
    }
  }

  if (dt >= 300) {
    dt = 0;
    scene = 1;
    mu = 0;
  }
}

function bananaAnim() {
  let frames0 = banana_data.frames;

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = banana.get(pos.x, pos.y, pos.w, pos.h);
    bn.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b01.get(pos.x, pos.y, pos.w, pos.h);
    bn1.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b02.get(pos.x, pos.y, pos.w, pos.h);
    bn2.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b03.get(pos.x, pos.y, pos.w, pos.h);
    bn3.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b04.get(pos.x, pos.y, pos.w, pos.h);
    bn4.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b05.get(pos.x, pos.y, pos.w, pos.h);
    bn5.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b06.get(pos.x, pos.y, pos.w, pos.h);
    bn6.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = b07.get(pos.x, pos.y, pos.w, pos.h);
    bn7.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt00.get(pos.x, pos.y, pos.w, pos.h);
    bt0.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt01.get(pos.x, pos.y, pos.w, pos.h);
    bt1.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt02.get(pos.x, pos.y, pos.w, pos.h);
    bt2.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt03.get(pos.x, pos.y, pos.w, pos.h);
    bt3.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt04.get(pos.x, pos.y, pos.w, pos.h);
    bt4.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt05.get(pos.x, pos.y, pos.w, pos.h);
    bt5.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt06.get(pos.x, pos.y, pos.w, pos.h);
    bt6.push(img);
  }

  for (let i = 0; i < frames0.length; i++) {
    let pos = frames0[i].position;
    let img = bt07.get(pos.x, pos.y, pos.w, pos.h);
    bt7.push(img);
  }
}

function spriteSpawn() {
  b1 = new bananas(47, 108);
  b2 = new bananas(117, 108);
  b3 = new bananas(185, 108);
  b4 = new bananas(47, 139);
  b5 = new bananas(117, 139);
  b6 = new bananas(185, 139);
  b7 = new bananas(47, 171);
  b8 = new bananas(117, 171);
  b9 = new bananas(185, 171);

  box1 = new boxes(35, 115);
  box2 = new boxes(105, 115);
  box3 = new boxes(173, 115);
  box4 = new boxes(35, 146);
  box5 = new boxes(105, 146);
  box6 = new boxes(173, 146);
  box7 = new boxes(35, 178);
  box8 = new boxes(105, 178);
  box9 = new boxes(173, 178);
  desk = new boxes(67, 73);

  critter1 = new critters(16, 80, random(dx), random(dy));
  critter2 = new critters1(82, 195, random(dx1), random(dy1));
  critter3 = new critters2(151, 195, random(dx2), random(dy2));
  critter4 = new critters3(14, 192, random(dx3), random(dy3));
  critter5 = new critters4(14, 140, random(dx4), random(dy4));
}

function critterLayer() {
  if (nessP.y - 6 <= critter1.y) {
    imageMode(CORNER);
    critter1.body();
  }
  if (nessP.y - 6 <= critter2.y) {
    imageMode(CORNER);
    critter2.body();
  }
  if (nessP.y - 6 <= critter3.y) {
    imageMode(CORNER);
    critter3.body();
  }
  if (nessP.y - 6 <= critter4.y) {
    imageMode(CORNER);
    critter4.body();
  }
  if (nessP.y - 6 <= critter5.y) {
    imageMode(CORNER);
    critter5.body();
  }
}

function counterCollision() {
  switch (banana0) {
    case 0:
      b1.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana1) {
    case 0:
      b2.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana2) {
    case 0:
      b3.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana3) {
    case 0:
      b4.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana4) {
    case 0:
      b5.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana5) {
    case 0:
      b6.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana6) {
    case 0:
      b7.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana7) {
    case 0:
      b8.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
  switch (banana8) {
    case 0:
      b9.collision();
      break;
    case 1:
      counter -= 0;
      break;
  }
}

function dialogueTwo() {
  fill(0);
  stroke(1);
  fill(255);
  textAlign(LEFT);
  textFont(apple, 5);

  if (nessP.x + 9 >= applek.x && nessP.y - 3 >= applek.y &&
    nessP.x - 39 <= applek.x && nessP.y - 19 - 2 <= applek.y) {
    switch (ailg) {
      case 4:

        if (keyIsDown(90)) {
          ailg = 0;
          rdg = 0;
          wt = 0;
        }

        break;

      case 0:

        wt += 1;
        cmv = 1;

        if (wt < 25) {
          word = ap[0];
          text(word, 7, 198);

          if (wt >= 2) {
            word += ap[1];
            text(word, 7, 198);
          }
          if (wt >= 4) {
            word += ap[2];
            text(word, 7, 198);
          }
          if (wt >= 6) {
            word += ap[3];
            text(word, 7, 198);
          }
          if (wt >= 8) {
            word += ap[4];
            text(word, 7, 198);
          }
          if (wt >= 10) {
            word += ap[5];
            text(word, 7, 198);
          }
          if (wt >= 12) {
            word += ap[6];
            text(word, 7, 198);
          }
          if (wt >= 14) {
            word += ap[7];
            text(word, 7, 198);
          }
          if (wt >= 16) {
            word += ap[8];
            text(word, 7, 198);
          }
          if (wt >= 18) {
            word += ap[9];
            text(word, 7, 198);
          }
          if (wt >= 20) {
            word += ap[10];
            text(word, 7, 198);
          }
          if (wt >= 22) {
            word += ap[11];
            text(word, 7, 198);
          }
          if (wt >= 24) {
            word += ap[12];
            text(word, 7, 198);
            text(word, 7, 198);
          }

          if (wt >= 0 && wt <= 24) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 25) {
          text('We\'re dating.', 7, 198);
        }

        rdg += 1;

        if (rdg >= 34 && keyIsDown(90)) {
          ailg = 1;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 1:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          ailg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    ailg = 4;
  }

  if (nessP.x + 9 >= nurse.x && nessP.y - 3 >= nurse.y &&
    nessP.x - 25 <= nurse.x && nessP.y - 19 - 2 <= nurse.y &&
    tsts == 0) {
    switch (nuilg) {
      case 4:

        if (keyIsDown(90) && nswt == 0) {
          nuilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        if (keyIsDown(90) && nswt == 1) {
          nuilg = 1;
          rdg = 0;
          wt = 0;
          wts = 0;
        }

        break;

      case 0:

        wt += 1;
        cmv = 1;

        if (wt < 77) {
          word = an[0];
          text(word, 7, 198);

          if (wt >= 2) {
            word += an[1];
            text(word, 7, 198);
          }
          if (wt >= 4) {
            word += an[2];
            text(word, 7, 198);
          }
          if (wt >= 6) {
            word += an[3];
            text(word, 7, 198);
          }
          if (wt >= 8) {
            word += an[4];
            text(word, 7, 198);
          }
          if (wt >= 10) {
            word += an[5];
            text(word, 7, 198);
          }
          if (wt >= 12) {
            word += an[6];
            text(word, 7, 198);
          }
          if (wt >= 14) {
            word += an[7];
            text(word, 7, 198);
          }
          if (wt >= 16) {
            word += an[8];
            text(word, 7, 198);
          }
          if (wt >= 18) {
            word += an[9];
            text(word, 7, 198);
          }
          if (wt >= 20) {
            word += an[10];
            text(word, 7, 198);
          }
          if (wt >= 22) {
            word += an[11];
            text(word, 7, 198);
          }
          if (wt >= 24) {
            word += an[12];
            text(word, 7, 198);
          }
          if (wt >= 26) {
            word += an[13];
            text(word, 7, 198);
          }
          if (wt >= 28) {
            word += an[14];
            text(word, 7, 198);
          }
          if (wt >= 30) {
            word += an[15];
            text(word, 7, 198);
          }
          if (wt >= 32) {
            word += an[16];
            text(word, 7, 198);
          }
          if (wt >= 34) {
            word += an[17];
            text(word, 7, 198);
          }
          if (wt >= 36) {
            word += an[18];
            text(word, 7, 198);
          }
          if (wt >= 38) {
            word += an[19];
            text(word, 7, 198);
          }
          if (wt >= 40) {
            word += an[20];
            text(word, 7, 198);
          }
          if (wt >= 42) {
            word += an[21];
            text(word, 7, 198);
          }
          if (wt >= 44) {
            word += an[22];
            text(word, 7, 198);
          }
          if (wt >= 46) {
            word += an[23];
            text(word, 7, 198);
          }
          if (wt >= 48) {
            word += an[24];
            text(word, 7, 198);
          }
          if (wt >= 50) {
            word += an[25];
            text(word, 7, 198);
          }
          if (wt >= 52) {
            word += an[26];
            text(word, 7, 198);
          }
          if (wt >= 54) {
            word += an[27];
            text(word, 7, 198);
          }
          if (wt >= 56) {
            word += an[28];
            text(word, 7, 198);
          }
          if (wt >= 58) {
            word += an[29];
            text(word, 7, 198);
          }
          if (wt >= 60) {
            word += an[30];
            text(word, 7, 198);
          }
          if (wt >= 62) {
            word += an[31];
            text(word, 7, 198);
          }
          if (wt >= 64) {
            word += an[32];
            text(word, 7, 198);
          }
          if (wt >= 66) {
            word += an[33];
            text(word, 7, 198);
          }
          if (wt >= 68) {
            word += an[34];
            text(word, 7, 198);
          }
          if (wt >= 70) {
            word += an[35];
            text(word, 7, 198);
          }
          if (wt >= 72) {
            word += an[36];
            text(word, 7, 198);
          }
          if (wt >= 74) {
            word += an[37];
            text(word, 7, 198);
          }
          if (wt >= 76) {
            word += an[38];
            text(word, 7, 198);
            text(word, 7, 198);
          }
        }

        if (wt >= 77) {
          text('Thank you for rescuing our fab bananas!', 7, 198);
        }

        if (wt < 171) {
          if (wt >= 100) {
            word = an2[0];
            text(word, 7, 209);
          }
          if (wt >= 102) {
            word += an2[1];
            text(word, 7, 209);
          }
          if (wt >= 104) {
            word += an2[2];
            text(word, 7, 209);
          }
          if (wt >= 106) {
            word += an2[3];
            text(word, 7, 209);
          }
          if (wt >= 108) {
            word += an2[4];
            text(word, 7, 209);
          }
          if (wt >= 110) {
            word += an2[5];
            text(word, 7, 209);
          }
          if (wt >= 112) {
            word += an2[6];
            text(word, 7, 209);
          }
          if (wt >= 114) {
            word += an2[7];
            text(word, 7, 209);
          }
          if (wt >= 116) {
            word += an2[8];
            text(word, 7, 209);
          }
          if (wt >= 118) {
            word += an2[9];
            text(word, 7, 209);
          }
          if (wt >= 120) {
            word += an2[10];
            text(word, 7, 209);
          }
          if (wt >= 122) {
            word += an2[11];
            text(word, 7, 209);
          }
          if (wt >= 124) {
            word += an2[12];
            text(word, 7, 209);
          }
          if (wt >= 126) {
            word += an2[13];
            text(word, 7, 209);
          }
          if (wt >= 128) {
            word += an2[14];
            text(word, 7, 209);
          }
          if (wt >= 130) {
            word += an2[15];
            text(word, 7, 209);
          }
          if (wt >= 132) {
            word += an2[16];
            text(word, 7, 209);
          }
          if (wt >= 134) {
            word += an2[17];
            text(word, 7, 209);
          }
          if (wt >= 136) {
            word += an2[18];
            text(word, 7, 209);
          }
          if (wt >= 138) {
            word += an2[19];
            text(word, 7, 209);
          }
          if (wt >= 140) {
            word += an2[20];
            text(word, 7, 209);
          }
          if (wt >= 142) {
            word += an2[21];
            text(word, 7, 209);
          }
          if (wt >= 144) {
            word += an2[22];
            text(word, 7, 209);
          }
          if (wt >= 146) {
            word += an2[23];
            text(word, 7, 209);
          }
          if (wt >= 148) {
            word += an2[24];
            text(word, 7, 209);
          }
          if (wt >= 150) {
            word += an2[25];
            text(word, 7, 209);
          }
          if (wt >= 152) {
            word += an2[26];
            text(word, 7, 209);
          }
          if (wt >= 154) {
            word += an2[27];
            text(word, 7, 209);
          }
          if (wt >= 156) {
            word += an2[28];
            text(word, 7, 209);
          }
          if (wt >= 158) {
            word += an2[29];
            text(word, 7, 209);
          }
          if (wt >= 160) {
            word += an2[30];
            text(word, 7, 209);
          }
          if (wt >= 162) {
            word += an2[31];
            text(word, 7, 209);
          }
          if (wt >= 164) {
            word += an2[32];
            text(word, 7, 209);
          }
          if (wt >= 166) {
            word += an2[33];
            text(word, 7, 209);
          }
          if (wt >= 168) {
            word += an2[34];
            text(word, 7, 209);
          }
          if (wt >= 170) {
            word += an2[35];
            text(word, 7, 209);
            text(word, 7, 209);
          }

          if (wt >= 0 && wt <= 76 || wt >= 100 && wt <= 170) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 171) {
          text('Please allow me to repair your body.', 7, 209);
        }

        if (wt >= 194) {
          health = 5;
          rdg += 1;
        }
        if (wt <= 194 && wt > 193) {
          heal.play();
        }

        if (rdg >= 10 && keyIsDown(90)) {
          nuilg = 1;
          rdg = 0;
        }

        break;

      case 1:

        wts += 1;
        cmv = 1;
        nswt = 1;

        if (wts < 91) {
          word = an3[0];
          text(word, 7, 198);

          if (wts >= 2) {
            word += an3[1];
            text(word, 7, 198);
          }
          if (wts >= 4) {
            word += an3[2];
            text(word, 7, 198);
          }
          if (wts >= 6) {
            word += an3[3];
            text(word, 7, 198);
          }
          if (wts >= 8) {
            word += an3[4];
            text(word, 7, 198);
          }
          if (wts >= 10) {
            word += an3[5];
            text(word, 7, 198);
          }
          if (wts >= 12) {
            word += an3[6];
            text(word, 7, 198);
          }
          if (wts >= 14) {
            word += an3[7];
            text(word, 7, 198);
          }
          if (wts >= 16) {
            word += an3[8];
            text(word, 7, 198);
          }
          if (wts >= 18) {
            word += an3[9];
            text(word, 7, 198);
          }
          if (wts >= 20) {
            word += an3[10];
            text(word, 7, 198);
          }
          if (wts >= 22) {
            word += an3[11];
            text(word, 7, 198);
          }
          if (wts >= 24) {
            word += an3[12];
            text(word, 7, 198);
          }
          if (wts >= 26) {
            word += an3[13];
            text(word, 7, 198);
          }
          if (wts >= 28) {
            word += an3[14];
            text(word, 7, 198);
          }
          if (wts >= 30) {
            word += an3[15];
            text(word, 7, 198);
          }
          if (wts >= 32) {
            word += an3[16];
            text(word, 7, 198);
          }
          if (wts >= 34) {
            word += an3[17];
            text(word, 7, 198);
          }
          if (wts >= 36) {
            word += an3[18];
            text(word, 7, 198);
          }
          if (wts >= 38) {
            word += an3[19];
            text(word, 7, 198);
          }
          if (wts >= 40) {
            word += an3[20];
            text(word, 7, 198);
          }
          if (wts >= 42) {
            word += an3[21];
            text(word, 7, 198);
          }
          if (wts >= 44) {
            word += an3[22];
            text(word, 7, 198);
          }
          if (wts >= 46) {
            word += an3[23];
            text(word, 7, 198);
          }
          if (wts >= 48) {
            word += an3[24];
            text(word, 7, 198);
          }
          if (wts >= 50) {
            word += an3[25];
            text(word, 7, 198);
          }
          if (wts >= 52) {
            word += an3[26];
            text(word, 7, 198);
          }
          if (wts >= 54) {
            word += an3[27];
            text(word, 7, 198);
          }
          if (wts >= 56) {
            word += an3[28];
            text(word, 7, 198);
          }
          if (wts >= 58) {
            word += an3[29];
            text(word, 7, 198);
          }
          if (wts >= 60) {
            word += an3[30];
            text(word, 7, 198);
          }
          if (wts >= 62) {
            word += an3[31];
            text(word, 7, 198);
          }
          if (wts >= 64) {
            word += an3[32];
            text(word, 7, 198);
          }
          if (wts >= 66) {
            word += an3[33];
            text(word, 7, 198);
          }
          if (wts >= 68) {
            word += an3[34];
            text(word, 7, 198);
          }
          if (wts >= 70) {
            word += an3[35];
            text(word, 7, 198);
          }
          if (wts >= 72) {
            word += an3[36];
            text(word, 7, 198);
          }
          if (wts >= 74) {
            word += an3[37];
            text(word, 7, 198);
          }
          if (wts >= 76) {
            word += an3[38];
            text(word, 7, 198);
            text(word, 7, 198);
          }

          if (wts >= 80) {
            word = an4[0];
            text(word, 7, 209);
          }
          if (wts >= 82) {
            word += an4[1];
            text(word, 7, 209);
          }
          if (wts >= 84) {
            word += an4[2];
            text(word, 7, 209);
          }
          if (wts >= 86) {
            word += an4[3];
            text(word, 7, 209);
            text(word, 7, 209);
            text(word, 7, 209);
          }
          if (wts >= 88) {
            word += an4[4];
            text(word, 7, 209);
            text(word, 7, 209);
            text(word, 7, 209);
          }
          if (wts >= 90) {
            word += an4[5];
            text(word, 7, 209);
            text(word, 7, 209);
            text(word, 7, 209);
          }

          if (wts >= 0 && wts <= 90) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wts >= 91) {
          text('If only my husband would let me fix him', 7, 198);
          text('too...', 7, 209);
        }

        rdg += 1;

        if (rdg >= 100 && keyIsDown(90)) {
          nuilg = 2;
          rdg = 0;
          nswt = 1;
          cmv = 0;
        }

        break;
      case 2:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          nuilg = 4;
          rdg = 0;
          wt = 0;
          wts = 0;
          nswt = 1;
        }
        break;
    }
  } else {
    nuilg = 4;
  }

  if (nessP.x + 9 >= lady.x && nessP.y - 3 >= lady.y &&
    nessP.x - 25 <= lady.x && nessP.y - 19 - 2 <= lady.y) {
    switch (lilg) {
      case 4:

        if (keyIsDown(90)) {
          lilg = 0;
          rdg = 0;
          wt = 0;
        }

        break;

      case 0:

        wt += 1;
        cmv = 1;

        if (wt < 73) {
          word = ld[0];
          text(word, 7, 198);

          if (wt >= 2) {
            word += ld[1];
            text(word, 7, 198);
          }
          if (wt >= 4) {
            word += ld[2];
            text(word, 7, 198);
          }
          if (wt >= 6) {
            word += ld[3];
            text(word, 7, 198);
          }
          if (wt >= 8) {
            word += ld[4];
            text(word, 7, 198);
          }
          if (wt >= 10) {
            word += ld[5];
            text(word, 7, 198);
          }
          if (wt >= 12) {
            word += ld[6];
            text(word, 7, 198);
          }
          if (wt >= 14) {
            word += ld[7];
            text(word, 7, 198);
          }
          if (wt >= 16) {
            word += ld[8];
            text(word, 7, 198);
          }
          if (wt >= 18) {
            word += ld[9];
            text(word, 7, 198);
          }
          if (wt >= 20) {
            word += ld[10];
            text(word, 7, 198);
          }
          if (wt >= 22) {
            word += ld[11];
            text(word, 7, 198);
          }
          if (wt >= 24) {
            word += ld[12];
            text(word, 7, 198);
          }
          if (wt >= 26) {
            word += ld[13];
            text(word, 7, 198);
          }
          if (wt >= 28) {
            word += ld[14];
            text(word, 7, 198);
          }
          if (wt >= 30) {
            word += ld[15];
            text(word, 7, 198);
          }
          if (wt >= 32) {
            word += ld[16];
            text(word, 7, 198);
          }
          if (wt >= 34) {
            word += ld[17];
            text(word, 7, 198);
          }
          if (wt >= 36) {
            word += ld[18];
            text(word, 7, 198);
          }
          if (wt >= 38) {
            word += ld[19];
            text(word, 7, 198);
          }
          if (wt >= 40) {
            word += ld[20];
            text(word, 7, 198);
          }
          if (wt >= 42) {
            word += ld[21];
            text(word, 7, 198);
          }
          if (wt >= 44) {
            word += ld[22];
            text(word, 7, 198);
          }
          if (wt >= 46) {
            word += ld[23];
            text(word, 7, 198);
          }
          if (wt >= 48) {
            word += ld[24];
            text(word, 7, 198);
          }
          if (wt >= 50) {
            word += ld[25];
            text(word, 7, 198);
          }
          if (wt >= 52) {
            word += ld[26];
            text(word, 7, 198);
          }
          if (wt >= 54) {
            word += ld[27];
            text(word, 7, 198);
          }
          if (wt >= 56) {
            word += ld[28];
            text(word, 7, 198);
          }
          if (wt >= 58) {
            word += ld[29];
            text(word, 7, 198);
          }
          if (wt >= 60) {
            word += ld[30];
            text(word, 7, 198);
          }
          if (wt >= 62) {
            word += ld[31];
            text(word, 7, 198);
          }
          if (wt >= 64) {
            word += ld[32];
            text(word, 7, 198);
          }
          if (wt >= 66) {
            word += ld[33];
            text(word, 7, 198);
          }
          if (wt >= 68) {
            word += ld[34];
            text(word, 7, 198);
          }
          if (wt >= 70) {
            word += ld[35];
            text(word, 7, 198);
          }
          if (wt >= 72) {
            word += ld[36];
            text(word, 7, 198);
            text(word, 7, 198);
          }
        }

        if (wt >= 73) {
          text('Share your bananas with the potassium', 7, 198);
        }

        if (wt < 111) {
          if (wt >= 74) {
            word = ld2[0];
            text(word, 7, 209);
          }
          if (wt >= 76) {
            word += ld2[1];
            text(word, 7, 209);
          }
          if (wt >= 78) {
            word += ld2[2];
            text(word, 7, 209);
          }
          if (wt >= 80) {
            word += ld2[3];
            text(word, 7, 209);
          }
          if (wt >= 82) {
            word += ld2[4];
            text(word, 7, 209);
          }
          if (wt >= 84) {
            word += ld2[5];
            text(word, 7, 209);
          }
          if (wt >= 86) {
            word += ld2[6];
            text(word, 7, 209);
          }
          if (wt >= 88) {
            word += ld2[7];
            text(word, 7, 209);
          }
          if (wt >= 90) {
            word += ld2[8];
            text(word, 7, 209);
          }
          if (wt >= 92) {
            word += ld2[9];
            text(word, 7, 209);
          }
          if (wt >= 94) {
            word += ld2[10];
            text(word, 7, 209);
          }
          if (wt >= 96) {
            word += ld2[11];
            text(word, 7, 209);
          }
          if (wt >= 98) {
            word += ld2[12];
            text(word, 7, 209);
          }
          if (wt >= 100) {
            word += ld2[13];
            text(word, 7, 209);
          }
          if (wt >= 102) {
            word += ld2[14];
            text(word, 7, 209);
          }
          if (wt >= 104) {
            word += ld2[15];
            text(word, 7, 209);
          }
          if (wt >= 106) {
            word += ld2[16];
            text(word, 7, 209);
          }
          if (wt >= 108) {
            word += ld2[17];
            text(word, 7, 209);
          }
          if (wt >= 110) {
            word += ld2[18];
            text(word, 7, 209);
            text(word, 7, 209);
          }
        }

        if (wt >= 111) {
          text('deficient students.', 7, 209);
        }

        if (wt < 183) {
          if (wt >= 134) {
            word = ld3[0];
            text(word, 7, 223);
          }
          if (wt >= 136) {
            word += ld3[1];
            text(word, 7, 223);
          }
          if (wt >= 138) {
            word += ld3[2];
            text(word, 7, 223);
          }
          if (wt >= 140) {
            word += ld3[3];
            text(word, 7, 223);
          }
          if (wt >= 142) {
            word += ld3[4];
            text(word, 7, 223);
          }
          if (wt >= 144) {
            word += ld3[5];
            text(word, 7, 223);
          }
          if (wt >= 146) {
            word += ld3[6];
            text(word, 7, 223);
          }
          if (wt >= 148) {
            word += ld3[7];
            text(word, 7, 223);
          }
          if (wt >= 150) {
            word += ld3[8];
            text(word, 7, 223);
          }
          if (wt >= 152) {
            word += ld3[9];
            text(word, 7, 223);
          }
          if (wt >= 154) {
            word += ld3[10];
            text(word, 7, 223);
          }
          if (wt >= 156) {
            word += ld3[11];
            text(word, 7, 223);
          }
          if (wt >= 158) {
            word += ld3[12];
            text(word, 7, 223);
          }
          if (wt >= 160) {
            word += ld3[13];
            text(word, 7, 223);
          }
          if (wt >= 162) {
            word += ld3[14];
            text(word, 7, 223);
          }
          if (wt >= 164) {
            word += ld3[15];
            text(word, 7, 223);
          }
          if (wt >= 166) {
            word += ld3[16];
            text(word, 7, 223);
          }
          if (wt >= 168) {
            word += ld3[17];
            text(word, 7, 223);
          }
          if (wt >= 170) {
            word += ld3[18];
            text(word, 7, 223);
          }
          if (wt >= 172) {
            word += ld3[19];
            text(word, 7, 223);
          }
          if (wt >= 174) {
            word += ld3[20];
            text(word, 7, 223);
          }
          if (wt >= 176) {
            word += ld3[21];
            text(word, 7, 223);
          }
          if (wt >= 178) {
            word += ld3[22];
            text(word, 7, 223);
          }
          if (wt >= 180) {
            word += ld3[23];
            text(word, 7, 223);
          }
          if (wt >= 182) {
            word += ld3[24];
            text(word, 7, 223);
            text(word, 7, 223);
          }

          if (wt >= 0 && wt <= 110 || wt >= 134 && wt <= 182) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 183) {
          text('They\'re located up ahead.', 7, 223);
        }

        rdg += 1;

        if (rdg >= 192 && keyIsDown(90)) {
          lilg = 1;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 1:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          lilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    lilg = 4;
  }

  if (nessP.x + 9 >= business.x && nessP.y - 3 >= business.y &&
    nessP.x - 25 <= business.x && nessP.y - 19 - 2 <= business.y) {
    switch (bilg) {
      case 4:

        if (keyIsDown(90)) {
          bilg = 0;
          rdg = 0;
          wt = 0;
        }

        break;

      case 0:

        wt += 1;
        cmv = 1;

        if (wt < 81) {
          word = biz[0];
          text(word, 7, 198);

          if (wt >= 2) {
            word += biz[1];
            text(word, 7, 198);
          }
          if (wt >= 4) {
            word += biz[2];
            text(word, 7, 198);
          }
          if (wt >= 6) {
            word += biz[3];
            text(word, 7, 198);
          }
          if (wt >= 8) {
            word += biz[4];
            text(word, 7, 198);
          }
          if (wt >= 10) {
            word += biz[5];
            text(word, 7, 198);
          }
          if (wt >= 12) {
            word += biz[6];
            text(word, 7, 198);
          }
          if (wt >= 14) {
            word += biz[7];
            text(word, 7, 198);
          }
          if (wt >= 16) {
            word += biz[8];
            text(word, 7, 198);
          }
          if (wt >= 18) {
            word += biz[9];
            text(word, 7, 198);
          }
          if (wt >= 20) {
            word += biz[10];
            text(word, 7, 198);
          }
          if (wt >= 22) {
            word += biz[11];
            text(word, 7, 198);
          }
          if (wt >= 24) {
            word += biz[12];
            text(word, 7, 198);
          }
          if (wt >= 26) {
            word += biz[13];
            text(word, 7, 198);
          }
          if (wt >= 28) {
            word += biz[14];
            text(word, 7, 198);
          }
          if (wt >= 30) {
            word += biz[15];
            text(word, 7, 198);
          }
          if (wt >= 32) {
            word += biz[16];
            text(word, 7, 198);
          }
          if (wt >= 34) {
            word += biz[17];
            text(word, 7, 198);
          }
          if (wt >= 36) {
            word += biz[18];
            text(word, 7, 198);
          }
          if (wt >= 38) {
            word += biz[19];
            text(word, 7, 198);
          }
          if (wt >= 40) {
            word += biz[20];
            text(word, 7, 198);
          }
          if (wt >= 42) {
            word += biz[21];
            text(word, 7, 198);
          }
          if (wt >= 44) {
            word += biz[22];
            text(word, 7, 198);
          }
          if (wt >= 46) {
            word += biz[23];
            text(word, 7, 198);
          }
          if (wt >= 48) {
            word += biz[24];
            text(word, 7, 198);
          }
          if (wt >= 50) {
            word += biz[25];
            text(word, 7, 198);
          }
          if (wt >= 52) {
            word += biz[26];
            text(word, 7, 198);
          }
          if (wt >= 54) {
            word += biz[27];
            text(word, 7, 198);
          }
          if (wt >= 56) {
            word += biz[28];
            text(word, 7, 198);
          }
          if (wt >= 58) {
            word += biz[29];
            text(word, 7, 198);
          }
          if (wt >= 60) {
            word += biz[30];
            text(word, 7, 198);
          }
          if (wt >= 62) {
            word += biz[31];
            text(word, 7, 198);
          }
          if (wt >= 64) {
            word += biz[32];
            text(word, 7, 198);
          }
          if (wt >= 66) {
            word += biz[33];
            text(word, 7, 198);
          }
          if (wt >= 68) {
            word += biz[34];
            text(word, 7, 198);
          }
          if (wt >= 70) {
            word += biz[35];
            text(word, 7, 198);
          }
          if (wt >= 72) {
            word += biz[36];
            text(word, 7, 198);
          }
          if (wt >= 74) {
            word += biz[37];
            text(word, 7, 198);
          }
          if (wt >= 76) {
            word += biz[38];
            text(word, 7, 198);
          }
          if (wt >= 78) {
            word += biz[39];
            text(word, 7, 198);
          }
          if (wt >= 80) {
            word += biz[40];
            text(word, 7, 198);
            text(word, 7, 198);
          }
        }

        if (wt >= 81) {
          text('I regret purchasing such a large quantity', 7, 198);
        }

        if (wt < 131) {
          if (wt >= 82) {
            word = biz2[0];
            text(word, 7, 209);
          }
          if (wt >= 84) {
            word += biz2[1];
            text(word, 7, 209);
          }
          if (wt >= 86) {
            word += biz2[2];
            text(word, 7, 209);
          }
          if (wt >= 88) {
            word += biz2[3];
            text(word, 7, 209);
          }
          if (wt >= 90) {
            word += biz2[4];
            text(word, 7, 209);
          }
          if (wt >= 92) {
            word += biz2[5];
            text(word, 7, 209);
          }
          if (wt >= 94) {
            word += biz2[6];
            text(word, 7, 209);
          }
          if (wt >= 96) {
            word += biz2[7];
            text(word, 7, 209);
          }
          if (wt >= 98) {
            word += biz2[8];
            text(word, 7, 209);
          }
          if (wt >= 100) {
            word += biz2[9];
            text(word, 7, 209);
          }
          if (wt >= 102) {
            word += biz2[10];
            text(word, 7, 209);
          }
          if (wt >= 104) {
            word += biz2[11];
            text(word, 7, 209);
          }
          if (wt >= 106) {
            word += biz2[12];
            text(word, 7, 209);
          }
          if (wt >= 108) {
            word += biz2[13];
            text(word, 7, 209);
          }
          if (wt >= 110) {
            word += biz2[14];
            text(word, 7, 209);
          }
          if (wt >= 112) {
            word += biz2[15];
            text(word, 7, 209);
          }
          if (wt >= 114) {
            word += biz2[16];
            text(word, 7, 209);
          }
          if (wt >= 116) {
            word += biz2[17];
            text(word, 7, 209);
          }
          if (wt >= 118) {
            word += biz2[18];
            text(word, 7, 209);
          }
          if (wt >= 120) {
            word += biz2[19];
            text(word, 7, 209);
          }
          if (wt >= 122) {
            word += biz2[20];
            text(word, 7, 209);
          }
          if (wt >= 124) {
            word += biz2[21];
            text(word, 7, 209);
          }
          if (wt >= 126) {
            word += biz2[22];
            text(word, 7, 209);
          }
          if (wt >= 128) {
            word += biz2[23];
            text(word, 7, 209);
          }
          if (wt >= 130) {
            word += biz2[24];
            text(word, 7, 209);
            text(word, 7, 209);
          }
        }

        if (wt >= 131) {
          text('of doggos for our school.', 7, 209);
        }

        if (wt < 231) {
          if (wt >= 154) {
            word = biz3[0];
            text(word, 7, 223);
          }
          if (wt >= 156) {
            word += biz3[1];
            text(word, 7, 223);
          }
          if (wt >= 158) {
            word += biz3[2];
            text(word, 7, 223);
          }
          if (wt >= 160) {
            word += biz3[3];
            text(word, 7, 223);
          }
          if (wt >= 162) {
            word += biz3[4];
            text(word, 7, 223);
          }
          if (wt >= 164) {
            word += biz3[5];
            text(word, 7, 223);
          }
          if (wt >= 166) {
            word += biz3[6];
            text(word, 7, 223);
          }
          if (wt >= 168) {
            word += biz3[7];
            text(word, 7, 223);
          }
          if (wt >= 170) {
            word += biz3[8];
            text(word, 7, 223);
          }
          if (wt >= 172) {
            word += biz3[9];
            text(word, 7, 223);
          }
          if (wt >= 174) {
            word += biz3[10];
            text(word, 7, 223);
          }
          if (wt >= 176) {
            word += biz3[11];
            text(word, 7, 223);
          }
          if (wt >= 178) {
            word += biz3[12];
            text(word, 7, 223);
          }
          if (wt >= 180) {
            word += biz3[13];
            text(word, 7, 223);
          }
          if (wt >= 182) {
            word += biz3[14];
            text(word, 7, 223);
          }
          if (wt >= 184) {
            word += biz3[15];
            text(word, 7, 223);
          }
          if (wt >= 186) {
            word += biz3[16];
            text(word, 7, 223);
          }
          if (wt >= 188) {
            word += biz3[17];
            text(word, 7, 223);
          }
          if (wt >= 190) {
            word += biz3[18];
            text(word, 7, 223);
          }
          if (wt >= 192) {
            word += biz3[19];
            text(word, 7, 223);
          }
          if (wt >= 194) {
            word += biz3[20];
            text(word, 7, 223);
          }
          if (wt >= 196) {
            word += biz3[21];
            text(word, 7, 223);
          }
          if (wt >= 198) {
            word += biz3[22];
            text(word, 7, 223);
          }
          if (wt >= 200) {
            word += biz3[23];
            text(word, 7, 223);
          }
          if (wt >= 202) {
            word += biz3[24];
            text(word, 7, 223);
          }
          if (wt >= 204) {
            word += biz3[25];
            text(word, 7, 223);
          }
          if (wt >= 206) {
            word += biz3[26];
            text(word, 7, 223);
          }
          if (wt >= 208) {
            word += biz3[27];
            text(word, 7, 223);
          }
          if (wt >= 210) {
            word += biz3[28];
            text(word, 7, 223);
          }
          if (wt >= 212) {
            word += biz3[29];
            text(word, 7, 223);
          }
          if (wt >= 214) {
            word += biz3[30];
            text(word, 7, 223);
          }
          if (wt >= 216) {
            word += biz3[31];
            text(word, 7, 223);
          }
          if (wt >= 218) {
            word += biz3[32];
            text(word, 7, 223);
          }
          if (wt >= 220) {
            word += biz3[33];
            text(word, 7, 223);
          }
          if (wt >= 222) {
            word += biz3[34];
            text(word, 7, 223);
          }
          if (wt >= 224) {
            word += biz3[35];
            text(word, 7, 223);
          }
          if (wt >= 226) {
            word += biz3[36];
            text(word, 7, 223);
          }
          if (wt >= 228) {
            word += biz3[37];
            text(word, 7, 223);
          }
          if (wt >= 230) {
            word += biz3[38];
            text(word, 7, 223);
            text(word, 7, 223);
          }

          if (wt >= 0 && wt <= 130 || wt >= 154 && wt <= 230) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 231) {
          text('There are just too many heckin woofers!', 7, 223);
        }

        rdg += 1;

        if (rdg >= 240 && keyIsDown(90)) {
          bilg = 1;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 1:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          bilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    bilg = 4;
  }

  if (nessP.x + 9 >= granny.x && nessP.y - 3 >= granny.y &&
    nessP.x - 25 <= granny.x && nessP.y - 19 - 2 <= granny.y) {
    switch (grilg) {
      case 4:

        if (keyIsDown(90)) {
          grilg = 0;
          rdg = 0;
          wt = 0;
        }

        break;

      case 0:

        wt += 1;
        cmv = 1;

        if (wt < 53) {
          word = gm1[0];
          text(word, 7, 198);

          if (wt >= 2) {
            word += gm1[1];
            text(word, 7, 198);
          }
          if (wt >= 4) {
            word += gm1[2];
            text(word, 7, 198);
          }
          if (wt >= 6) {
            word += gm1[3];
            text(word, 7, 198);
          }
          if (wt >= 8) {
            word += gm1[4];
            text(word, 7, 198);
          }
          if (wt >= 10) {
            word += gm1[5];
            text(word, 7, 198);
          }
          if (wt >= 12) {
            word += gm1[6];
            text(word, 7, 198);
          }
          if (wt >= 14) {
            word += gm1[7];
            text(word, 7, 198);
          }
          if (wt >= 16) {
            word += gm1[8];
            text(word, 7, 198);
          }
          if (wt >= 18) {
            word += gm1[9];
            text(word, 7, 198);
          }
          if (wt >= 20) {
            word += gm1[10];
            text(word, 7, 198);
          }
          if (wt >= 22) {
            word += gm1[11];
            text(word, 7, 198);
          }
          if (wt >= 24) {
            word += gm1[12];
            text(word, 7, 198);
          }
          if (wt >= 26) {
            word += gm1[13];
            text(word, 7, 198);
          }
          if (wt >= 28) {
            word += gm1[14];
            text(word, 7, 198);
          }
          if (wt >= 30) {
            word += gm1[15];
            text(word, 7, 198);
          }
          if (wt >= 32) {
            word += gm1[16];
            text(word, 7, 198);
          }
          if (wt >= 34) {
            word += gm1[17];
            text(word, 7, 198);
          }
          if (wt >= 36) {
            word += gm1[18];
            text(word, 7, 198);
          }
          if (wt >= 38) {
            word += gm1[19];
            text(word, 7, 198);
          }
          if (wt >= 40) {
            word += gm1[20];
            text(word, 7, 198);
          }
          if (wt >= 42) {
            word += gm1[21];
            text(word, 7, 198);
          }
          if (wt >= 44) {
            word += gm1[22];
            text(word, 7, 198);
          }
          if (wt >= 46) {
            word += gm1[23];
            text(word, 7, 198);
          }
          if (wt >= 48) {
            word += gm1[24];
            text(word, 7, 198);
          }
          if (wt >= 50) {
            word += gm1[25];
            text(word, 7, 198);
          }
          if (wt >= 52) {
            word += gm1[26];
            text(word, 7, 198);
            text(word, 7, 198);
          }

          if (wt >= 0 && wt <= 52) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 53) {
          text('I envy the youthful spirit.', 7, 198);
        }

        rdg += 1;

        if (rdg >= 62 && keyIsDown(90)) {
          grilg = 1;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 1:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          grilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    grilg = 4;
  }
}

function spriteDirection() {
  if (kd > 0 && kdt <= 0 || kd > 0 && kdtt <= 0) {
    kd = kd - kd;
    kdt++;
    kdtt++;
  }
}

function npcLayer() {
  if (countdown > -1 && jt < 80) {
    if (nessP.y - 11 <= granny.y) {
      imageMode(CORNER);
      granny.granny();
    }
    if (nessP.y - 11 <= business.y) {
      imageMode(CORNER);
      business.business();
    }
    if (nessP.y - 11 <= nurse.y) {
      imageMode(CORNER);
      nurse.nurse();
    }
    if (nessP.y - 11 <= lady.y) {
      imageMode(CORNER);
      lady.lady();
    }
    if (nessP.y - 11 <= applek.y) {
      imageMode(CORNER);
      applek.applek();
    }
    if (nessP.y - 11 <= orange.y) {
      imageMode(CORNER);
      orange.orange();
    }
    if (nessP.y - 11 <= starman.y && bgm > 0) {
      imageMode(CORNER);
      if (bgm > 0 && swt <= 0) {
        starman.starman();
      }

      if (cdaa <= 40) {
        if (cda > 0 && cda < 4) {
          image(stm0, starman.x, starman.y);
        }
        if (cda >= 4 && cda < 8) {
          image(stm, starman.x, starman.y);
        }
        if (cda >= 8 && cda < 12) {
          image(stm0, starman.x, starman.y);
        }
        if (cda >= 12 && cda < 16) {
          image(stm, starman.x, starman.y);
        }
        if (cda >= 16 && cda < 20) {
          image(stm0, starman.x, starman.y);
        }
        if (cda >= 20 && cda < 24) {
          image(stm, starman.x, starman.y);
        }
        if (cda >= 24 && cda < 28) {
          image(stm0, starman.x, starman.y);
        }
        if (cda >= 28 && cda < 32) {
          image(stm, starman.x, starman.y);
        }
      }
    }
  }
}

function healthRelated() {
  if (jt >= 80) {
    background(0);
  }

  if (health > 0 && ffff <= 0) {
    if (ff <= 0 && spt <= 0 || bgm > 0) {
      if (cmv >= 1) {
        if (kd == 0) {
          imageMode(CENTER);
          image(downs[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 1) {
          imageMode(CENTER);
          image(ups[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 2) {
          imageMode(CENTER);
          image(rights[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 3) {
          imageMode(CENTER);
          image(lefts[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 4) {
          imageMode(CENTER);
          image(up_rights[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 5) {
          imageMode(CENTER);
          image(up_lefts[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 6) {
          imageMode(CENTER);
          image(down_rights[frameCount % 1], nessP.x, nessP.y);
        }
        if (kd == 7) {
          imageMode(CENTER);
          image(down_lefts[frameCount % 1], nessP.x, nessP.y);
        }
      } else {
        nht += 1;
        if (nht <= 2 && nht > 1) {
          hurt.play();
        }
        if (nht >= 8 && nht <= 16) {
          nessP.body();
        }
        if (nht >= 24 && nht <= 32) {
          nessP.body();
        }
        if (nht >= 40 && nht <= 48) {
          nessP.body();
        }
        if (nht >= 56) {
          nessP.body();
        }

        if (cmv <= 0) {
          nessP.move2();
        }
      }
    }
  }

  if (health <= 0) {
    jt += 1;
    if (jt <= 2 && jt > 1) {
      hurt.play();
    }
    ofoe.stop();
    wcav.stop();
    dopn.stop();
    vicw.stop();

    if (jt < 180) {
      imageMode(CENTER);
      image(downs[frameCount % 1], nessP.x, nessP.y);
    }

    if (jt <= 80 && jt > 79) {
      bk1.play();
    }
    if (jt <= 180 && jt > 179) {
      bbeat.play();
    }
    if (jt <= 188 && jt > 187) {
      bbeat.play();
    }
    if (jt <= 196 && jt > 195) {
      bbeat.play();
    }
    if (jt <= 204 && jt > 203) {
      bbeat.play();
    }
    if (jt <= 208 && jt > 207) {
      bk2.play();
    }

    if (jt >= 180) {
      imageMode(CENTER);
      if (jt >= 184 && jt < 188) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (jt >= 192 && jt < 196) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (jt >= 200 && jt < 204) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (jt >= 208 && jt < 212) {
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
    }
  }
}

function loadNPC() {
  nxx = random(nx);
  nyy = random(ny);
  nxx1 = random(nx1);
  nyy1 = random(ny1);
  nxx2 = random(nx2);
  nyy2 = random(ny2);
  nxx3 = random(nx3);
  nyy3 = random(ny3);
  nxx4 = random(nx4);
  nyy4 = random(ny4);
  nxx5 = random(nx5);
  nyy5 = random(ny5);

  nurse = new npc(79, 109);
  lady = new npc(188, 139);
  applek = new npc(119, 148);
  orange = new npc(133, 148);
  granny = new npc(212, 108);
  business = new npc(163, 118);
  starman = new npc(281, 120);
}

function twoDialogue() {
  fill(100);
  textAlign(LEFT);
  textFont(apple, 5);

  if (bgm <= 0) {
    dialogueTwo();
  }
}

function starmanSwitch() {
  if (bgm > 0) {
    if (swt <= 0) {
      if (nessP.x + 13 >= starman.x && nessP.y - 2 >= starman.y &&
        nessP.x - 28 <= starman.x && nessP.y - 22 <= starman.y) {
        swt++;
        wcav.stop();
      }
    }

    if (swt >= 1 && countdown > -1) {
      fill(255);
      textAlign(LEFT);
      textFont(apple, 5);
      text(countdown, 7, 198);
      cda += 1;
      cdaa += 1;

      stmt += 1;

      if (stmt <= 1 && stmt > 0) {
        laz.play();
      }
      if (stmt <= 41 && stmt > 40) {
        ofoe.play();
      }
    }

    if (cda >= 60) {
      cda = 0;
      countdown--;
      cda += 1;
    }
  }
}

function backgroundSecond() {
  if (bgm > 0) {
    if (nessP.x <= 168) {
      nessP.x += 1;
    }
  }

  if (bgm <= 0) {
    if (nessP.x >= 129 && nessP.x <= 290) {
      translate(129 - nessP.x, 0)
    }

    if (nessP.x > 290) {
      translate(129 - 290, 0)
    }
  } else {
    translate(129 - 290, 0)
  }

  if (bgt >= 260) {
    translate(0, 0)
  }

  imageMode(CORNER);
  image(hallway, 5, 56);

  if (countdown <= 14) {
    image(door0, 356, 61);
  }

  if (countdown > -1) {
    if (bgt > 0 && bgt <= 7) {
      image(hallway0, 5, 56);
    }
    if (bgt > 14 && bgt <= 21) {
      image(hallway0, 5, 56);
    }
    if (bgt > 28) {
      image(hallway0, 5, 56);
    }

    if (bgt <= 1 && bgt > 0) {
      bbeat.play();
    }
    if (bgt <= 15 && bgt > 14) {
      bbeat.play();
    }
    if (bgt <= 29 && bgt > 28) {
      bbeat.play();
    }
  }
}

function moreSwitches() {
  if (bgt >= 410 + 50) {
    bgt = 350 + 50;
    bgs++;
  }

  if (bgt >= 350 + 50 && bgs >= 1) {
    bgt += 1;
  }

  if (bgt >= 459) {
    bgm++;
  }
}

function drawBodies() {
  if (countdown > -1) {
    granny.granny();
    business.business();
    nurse.nurse();
    lady.lady();
    applek.applek();
    orange.orange();
  }

  if (bgm > 0 && swt <= 0) {
    starman.starman();
  }

  if (cdaa <= 40) {
    if (cda > 0 && cda < 4) {
      image(stm0, starman.x, starman.y);
    }
    if (cda >= 4 && cda < 8) {
      image(stm, starman.x, starman.y);
    }
    if (cda >= 8 && cda < 12) {
      image(stm0, starman.x, starman.y);
    }
    if (cda >= 12 && cda < 16) {
      image(stm, starman.x, starman.y);
    }
    if (cda >= 16 && cda < 20) {
      image(stm0, starman.x, starman.y);
    }
    if (cda >= 20 && cda < 24) {
      image(stm, starman.x, starman.y);
    }
    if (cda >= 24 && cda < 28) {
      image(stm0, starman.x, starman.y);
    }
    if (cda >= 28 && cda < 32) {
      image(stm, starman.x, starman.y);
      gpu += 1;
    }
  }

  if (ff > 0) {
    imageMode(CENTER);
    image(downs[frameCount % 1], nessP.x, nessP.y);
  }

  healthRelated();

  npcLayer();

  if (spt > 0 && bgt < 225) {
    imageMode(CENTER);
    image(ups[frameCount % 1], nessP.x, nessP.y);
  }

  if (bgt >= 225 && bgm <= 0) {
    imageMode(CENTER);
    image(down_lefts[frameCount % 1], nessP.x, nessP.y);
    kdt = 0;
  }
}

function characterAnim() {
  if (bgt >= 270 && gpu <= 0) {
    granny.x -= 0.783;
    granny.y -= 0.166;

    if (granny.x <= 165) {
      granny.x = 165;
    }
    if (granny.y <= 98) {
      granny.y = 98;
    }

    lady.x -= 0.383;
    lady.y -= 0.083;

    if (lady.x <= 165) {
      lady.x = 165;
    }
    if (lady.y <= 134) {
      lady.y = 134;
    }

    if (bgt <= 271) {
      nurse.x = 100;
      nurse.y = 122;
    }

    nurse.x += 1.083;

    if (nurse.x >= 165) {
      nurse.x = 165;
    }

    if (bgt <= 271) {
      applek.x = 125;
      applek.y = 146;
    }

    applek.x += 0.666;

    if (applek.x >= 165) {
      applek.x = 165;
    }

    if (bgt <= 271) {
      orange.x = 145;
      orange.y = 158;
    }

    orange.x += 0.333;

    if (orange.x >= 165) {
      orange.x = 165;
    }

    business.x += 0.033;
    business.y -= 0.133;

    if (business.x >= 165) {
      business.x = 165;
    }
    if (business.y <= 110) {
      business.y = 110;
    }
  }
}

function collisionsHitsBounces() {
  if (bgt >= 350 && bgs <= 0) {
    bgt += 1;
  }

  if (bgm <= 0) {
    nurse.collision();
    lady.collision();
    applek.collision();
    orange.collision();
    granny.collision();
    business.collision();
  } else {
    if (countdown > -1) {
      nurse.hit();
      lady.hit();
      applek.hit();
      orange.hit();
      granny.hit();
      business.hit();
    }

    if (cda <= 0) {
      starman.collision();
    }
  }

  if (gpu >= 1 && cdaa >= 40) {
    granny.x += nxx;
    granny.y += nyy;

    if (granny.y + 2 <= 97) {
      granny.y += 1;
      nyy *= -1;
    }

    if (granny.y + 23 >= 186) {
      granny.y -= 1;
      nyy *= -1;
    }

    if (granny.x <= 159) {
      granny.x += 1;
      nxx *= -1;
    }

    if (granny.x + 6 >= 405) {
      granny.x -= 1;
      nxx *= -1;
    }

    business.x += nxx1;
    business.y += nyy1;

    if (business.y + 2 <= 97) {
      business.y += 1;
      nyy1 *= -1;
    }

    if (business.y + 23 >= 186) {
      business.y -= 1;
      nyy1 *= -1;
    }

    if (business.x <= 159) {
      business.x += 1;
      nxx1 *= -1;
    }

    if (business.x + 6 >= 405) {
      business.x -= 1;
      nxx1 *= -1;
    }

    lady.x += nxx2;
    lady.y += nyy2;

    if (lady.y + 2 <= 97) {
      lady.y += 1;
      nyy2 *= -1;
    }

    if (lady.y + 23 >= 186) {
      lady.y -= 1;
      nyy2 *= -1;
    }

    if (lady.x <= 159) {
      lady.x += 1;
      nxx2 *= -1;
    }

    if (lady.x + 6 >= 405) {
      lady.x -= 1;
      nxx2 *= -1;
    }

    nurse.x += nxx3;
    nurse.y += nyy3;

    if (nurse.y + 2 <= 97) {
      nurse.y += 1;
      nyy3 *= -1;
    }

    if (nurse.y + 23 >= 186) {
      nurse.y -= 1;
      nyy3 *= -1;
    }

    if (nurse.x <= 159) {
      nurse.x += 1;
      nxx3 *= -1;
    }

    if (nurse.x + 6 >= 405) {
      nurse.x -= 1;
      nxx3 *= -1;
    }

    applek.x += nxx4;
    applek.y += nyy4;

    if (applek.y + 2 <= 97) {
      applek.y += 1;
      nyy4 *= -1;
    }

    if (applek.y + 23 >= 186) {
      applek.y -= 1;
      nyy4 *= -1;
    }

    if (applek.x <= 159) {
      applek.x += 1;
      nxx4 *= -1;
    }

    if (applek.x + 6 >= 405) {
      applek.x -= 1;
      nxx4 *= -1;
    }

    orange.x += nxx5;
    orange.y += nyy5;

    if (orange.y + 2 <= 97) {
      orange.y += 1;
      nyy5 *= -1;
    }

    if (orange.y + 23 >= 186) {
      orange.y -= 1;
      nyy5 *= -1;
    }

    if (orange.x <= 159) {
      orange.x += 1;
      nxx5 *= -1;
    }

    if (orange.x + 6 >= 405) {
      orange.x -= 1;
      nxx5 *= -1;
    }
  }
}

function starmanArrival() {
  if (bgt <= 100 && bgt > 99) {
    bosm.play();
  }
  if (bgt <= 255 && bgt > 254) {
    bosm.stop();
  }
  if (bgt <= 251 && bgt > 250) {
    wcav.volume(0.7);
    wcav.loop();
  }

  if (bgt >= 100 && bgt < 107) {
    imageMode(CORNER);
    image(st00, 281, -113);
  }
  if (bgt >= 107 && bgt < 114) {
    imageMode(CORNER);
    image(st01, 281, -113);
  }
  if (bgt >= 114 && bgt < 121) {
    imageMode(CORNER);
    image(st02, 281, -113);
  }
  if (bgt >= 121 && bgt < 128) {
    imageMode(CORNER);
    image(st03, 281, -113);
  }
  if (bgt >= 128 && bgt < 135) {
    imageMode(CORNER);
    image(st04, 281, -113);
  }
  if (bgt >= 135 && bgt < 142) {
    imageMode(CORNER);
    image(st05, 281, -113);
  }
  if (bgt >= 142 && bgt < 149) {
    imageMode(CORNER);
    image(st06, 281, -113);
  }
  if (bgt >= 149 && bgm <= 0) {
    imageMode(CORNER);
    image(st08, 281, -113);
  }
}

function nextSceneTwo() {
  if (countdown < 0) {
    tcd += 1;
    ofoe.stop();

    if (tcd <= 1 && tcd > 0) {
      dopn.play();
    }
    if (tcd <= 32 && tcd > 31) {
      vicw.play();
    }
    if (tcd > 32) {
      tcd = 33;
    }

    if (nessP.y <= 109 && nessP.x >= 363 && nessP.x <= 383) {
      if (ffff > 0 && ffff < 360) {
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      if (ffff >= 360) {
        kd = 0;
        nessP.x = 38;
        nessP.y = 68;
        mu = 0;
        scene = 3;
      }

      background(0, 0, 0, ffff);
      ffff += 9;
    }
  }
}

function evenMoreSwitches() {
  if (countdown >= 15) {
    if (nessP.y <= 109 && nessP.x >= 363 && nessP.x <= 383) {
      spt = 1;
      apm.stop();
      sptt += 1;

      if (sptt <= 1 && sptt > 0) {
        bfall.play();
      }

      if (sptt >= 80) {
        bgt += 1;
      }
    } else if (sptt >= 1 && spt >= 1) {
      bgt += 1;
    }
  } else if (bgm > 0) {
    bgt += 1;
    nht += 1;
  }
}

function gameOverTwo() {
  if (jt >= 300) {
    jt = 0;
    wt = 0;
    spt = 0;
    bgt = 0;
    sptt = 0;
    bgs = 0;
    bgm = 0;
    nht = 76;
    countdown = 15;
    jt = 0;
    cda = 0;
    swt = 0;
    seconds = 59;
    cdaa = 0;
    gpu = 0;

    f = 0;
    ff = 255;
    timer = 76;
    counter = 9;
    dt = 0;
    mu = 0;

    scene = 1;
  }
}

function gameOverText() {
  imageMode(CENTER);
  image(gameover, width / 2 - 1, height / 2 - 14, 210, 59);

  fill(255);
  textAlign(CENTER);
  textFont(apple, 7);
  text('press Z to try again', width / 2, 147);
}

function nessDeskHitboxes() {
  if (nessP.x >= dsk1.x - 7 && nessP.x <= dsk1.x - 6 &&
    nessP.y <= dsk1.y + 14 && nessP.y >= dsk1.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk1.x + 40 && nessP.x >= dsk1.x + 39 &&
    nessP.y <= dsk1.y + 14 && nessP.y >= dsk1.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk1.y - 5 && nessP.y <= dsk1.y - 4 &&
    nessP.x >= dsk1.x - 6 && nessP.x <= dsk1.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk1.y + 15 && nessP.y >= dsk1.y + 14 &&
    nessP.x >= dsk1.x - 6 && nessP.x <= dsk1.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk2.x - 7 && nessP.x <= dsk2.x - 6 &&
    nessP.y <= dsk2.y + 14 && nessP.y >= dsk2.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk2.x + 40 && nessP.x >= dsk2.x + 39 &&
    nessP.y <= dsk2.y + 14 && nessP.y >= dsk2.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk2.y - 5 && nessP.y <= dsk2.y - 4 &&
    nessP.x >= dsk2.x - 6 && nessP.x <= dsk2.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk2.y + 15 && nessP.y >= dsk2.y + 14 &&
    nessP.x >= dsk2.x - 6 && nessP.x <= dsk2.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk3.x - 7 && nessP.x <= dsk3.x - 6 &&
    nessP.y <= dsk1.y + 14 && nessP.y >= dsk3.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk3.x + 40 && nessP.x >= dsk3.x + 39 &&
    nessP.y <= dsk3.y + 14 && nessP.y >= dsk3.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk3.y - 5 && nessP.y <= dsk3.y - 4 &&
    nessP.x >= dsk3.x - 6 && nessP.x <= dsk3.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk3.y + 15 && nessP.y >= dsk3.y + 14 &&
    nessP.x >= dsk3.x - 6 && nessP.x <= dsk3.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk4.x - 7 && nessP.x <= dsk4.x - 6 &&
    nessP.y <= dsk4.y + 14 && nessP.y >= dsk4.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk4.x + 40 && nessP.x >= dsk4.x + 39 &&
    nessP.y <= dsk4.y + 14 && nessP.y >= dsk4.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk4.y - 5 && nessP.y <= dsk4.y - 4 &&
    nessP.x >= dsk4.x - 6 && nessP.x <= dsk4.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk4.y + 15 && nessP.y >= dsk4.y + 14 &&
    nessP.x >= dsk4.x - 6 && nessP.x <= dsk4.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk5.x - 7 && nessP.x <= dsk5.x - 6 &&
    nessP.y <= dsk5.y + 14 && nessP.y >= dsk5.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk5.x + 40 && nessP.x >= dsk5.x + 39 &&
    nessP.y <= dsk5.y + 14 && nessP.y >= dsk5.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk5.y - 5 && nessP.y <= dsk5.y - 4 &&
    nessP.x >= dsk5.x - 6 && nessP.x <= dsk5.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk5.y + 15 && nessP.y >= dsk5.y + 14 &&
    nessP.x >= dsk5.x - 6 && nessP.x <= dsk5.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk6.x - 7 && nessP.x <= dsk6.x - 6 &&
    nessP.y <= dsk6.y + 14 && nessP.y >= dsk6.y - 4) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk6.x + 40 && nessP.x >= dsk6.x + 39 &&
    nessP.y <= dsk6.y + 14 && nessP.y >= dsk6.y - 4) {
    nessP.x += 1;
  }

  if (nessP.y >= dsk6.y - 5 && nessP.y <= dsk6.y - 4 &&
    nessP.x >= dsk6.x - 6 && nessP.x <= dsk6.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk6.y + 15 && nessP.y >= dsk6.y + 14 &&
    nessP.x >= dsk6.x - 6 && nessP.x <= dsk6.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= dsk7.x - 7 && nessP.x <= dsk7.x - 6 &&
    nessP.y <= dsk7.y + 23 && nessP.y >= dsk7.y + 3) {
    nessP.x -= 1;
  }

  if (nessP.x <= dsk7.x + 99 && nessP.x >= dsk7.x + 98 &&
    nessP.y <= dsk7.y + 23 && nessP.y >= dsk7.y + 3) {
    nessP.x += 1;
  }

  if (nessP.y <= dsk7.y + 3 && nessP.y >= dsk7.y + 2 &&
    nessP.x >= dsk7.x - 6 && nessP.x <= dsk7.x + 98) {
    nessP.y -= 1;
  }

  if (nessP.y <= dsk7.y + 24 && nessP.y >= dsk7.y + 23 &&
    nessP.x >= dsk7.x - 6 && nessP.x <= dsk7.x + 98) {
    nessP.y += 1;
  }



  if (nessP.x >= blk.x - 21 && nessP.x <= blk.x - 20 &&
    nessP.y <= blk.y - 3 && nessP.y >= blk.y - 5) {
    nessP.x -= 1;
  }

  if (nessP.x <= blk.x + 18 && nessP.x >= blk.x + 17 &&
    nessP.y <= blk.y - 3 && nessP.y >= blk.y - 5) {
    nessP.x += 1;
  }

  if (nessP.y >= blk.y - 6 && nessP.y <= blk.y - 5 &&
    nessP.x >= blk.x - 20 && nessP.x <= blk.x + 17) {
    nessP.y -= 1;
  }

  if (nessP.y <= blk.y - 2 && nessP.y >= blk.y - 3 &&
    nessP.x >= blk.x - 20 && nessP.x <= blk.x + 17) {
    nessP.y += 1;
  }



  if (nessP.x >= chr.x - 9 && nessP.x <= chr.x - 8 &&
    nessP.y <= chr.y - 1 && nessP.y >= chr.y - 7) {
    nessP.x -= 1;
  }

  if (nessP.y >= chr.y - 8 && nessP.y <= chr.y - 7 &&
    nessP.x >= chr.x - 8 && nessP.x <= chr.x + 39) {
    nessP.y -= 1;
  }

  if (nessP.y <= chr.y + 0 && nessP.y >= chr.y - 1 &&
    nessP.x >= chr.x - 8 && nessP.x <= chr.x + 39) {
    nessP.y += 1;
  }



  if (nessP.x >= blk2.x - 7 && nessP.x <= blk2.x - 6 &&
    nessP.y <= blk2.y - 6 && nessP.y >= blk2.y - 8) {
    nessP.x -= 1;
  }

  if (nessP.x <= blk2.x + 19 && nessP.x >= blk2.x + 18 &&
    nessP.y <= blk2.y - 6 && nessP.y >= blk2.y - 8) {
    nessP.x += 1;
  }

  if (nessP.y >= blk2.y - 9 && nessP.y <= blk2.y - 8 &&
    nessP.x >= blk2.x - 6 && nessP.x <= blk2.x + 18) {
    nessP.y -= 1;
  }

  if (nessP.y <= blk2.y - 5 && nessP.y >= blk2.y - 6 &&
    nessP.x >= blk2.x - 6 && nessP.x <= blk2.x + 18) {
    nessP.y += 1;
  }
}

function threeDimensionalPath() {
  noStroke();
  fill(255, 50, 25);
  quad(135 - nessP.x * 0.05, 56, 135 - nessP.x * 0.05, 56,
    260 - nessP.x * 0.6, 89, 151.4 - nessP.x * 0.6, 89);
  quad(151.4 - nessP.x * 0.6, 89, 260 - nessP.x * 0.6, 89,
    260 - nessP.x * 0.6, 116, 151.4 - nessP.x * 0.6, 116)
}

function dialogueSceneThree() {
  fill(0);
  stroke(1);

  if (nessP.x + 9 >= blondie.x && nessP.y - 3 >= blondie.y &&
    nessP.x - 25 <= blondie.x && nessP.y - 19 - 2 <= blondie.y) {
    switch (yilg) {
      case 4:

        if (keyIsDown(90)) {
          yilg = 0;
          rdg = 0;
          wt = 0;
        }

        break;

      case 0:

        imageMode(CORNER);
        image(dlg0, 15, 170);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wt += 1;
        cmv = 1;

        if (wt < 73) {
          word = ylg[0];
          text(word, 31, 191);

          if (wt >= 2) {
            word += ylg[1];
            text(word, 31, 191);
          }
          if (wt >= 4) {
            word += ylg[2];
            text(word, 31, 191);
          }
          if (wt >= 6) {
            word += ylg[3];
            text(word, 31, 191);
          }
          if (wt >= 8) {
            word += ylg[4];
            text(word, 31, 191);
          }
          if (wt >= 10) {
            word += ylg[5];
            text(word, 31, 191);
          }
          if (wt >= 12) {
            word += ylg[6];
            text(word, 31, 191);
          }
          if (wt >= 14) {
            word += ylg[7];
            text(word, 31, 191);
          }
          if (wt >= 16) {
            word += ylg[8];
            text(word, 31, 191);
          }
          if (wt >= 18) {
            word += ylg[9];
            text(word, 31, 191);
          }
          if (wt >= 20) {
            word += ylg[10];
            text(word, 31, 191);
          }
          if (wt >= 22) {
            word += ylg[11];
            text(word, 31, 191);
          }
          if (wt >= 24) {
            word += ylg[12];
            text(word, 31, 191);
          }
          if (wt >= 26) {
            word += ylg[13];
            text(word, 31, 191);
          }
          if (wt >= 28) {
            word += ylg[14];
            text(word, 31, 191);
          }
          if (wt >= 30) {
            word += ylg[15];
            text(word, 31, 191);
          }
          if (wt >= 32) {
            word += ylg[16];
            text(word, 31, 191);
          }
          if (wt >= 34) {
            word += ylg[17];
            text(word, 31, 191);
          }
          if (wt >= 36) {
            word += ylg[18];
            text(word, 31, 191);
          }
          if (wt >= 38) {
            word += ylg[19];
            text(word, 31, 191);
          }
          if (wt >= 40) {
            word += ylg[20];
            text(word, 31, 191);
          }
          if (wt >= 42) {
            word += ylg[21];
            text(word, 31, 191);
          }
          if (wt >= 44) {
            word += ylg[22];
            text(word, 31, 191);
          }
          if (wt >= 46) {
            word += ylg[23];
            text(word, 31, 191);
          }
          if (wt >= 48) {
            word += ylg[24];
            text(word, 31, 191);
          }
          if (wt >= 50) {
            word += ylg[25];
            text(word, 31, 191);
          }
          if (wt >= 52) {
            word += ylg[26];
            text(word, 31, 191);
          }
          if (wt >= 54) {
            word += ylg[27];
            text(word, 31, 191);
          }
          if (wt >= 56) {
            word += ylg[28];
            text(word, 31, 191);
          }
          if (wt >= 58) {
            word += ylg[29];
            text(word, 31, 191);
          }
          if (wt >= 60) {
            word += ylg[30];
            text(word, 31, 191);
          }
          if (wt >= 62) {
            word += ylg[31];
            text(word, 31, 191);
          }
          if (wt >= 64) {
            word += ylg[32];
            text(word, 31, 191);
          }
          if (wt >= 66) {
            word += ylg[33];
            text(word, 31, 191);
          }
          if (wt >= 68) {
            word += ylg[34];
            text(word, 31, 191);
          }
          if (wt >= 70) {
            word += ylg[35];
            text(word, 31, 191);
          }
          if (wt >= 72) {
            word += ylg[36];
            text(word, 31, 191);
          }
        }

        if (wt >= 73) {
          text('I painted my dress and hair yellow to', 31, 191);
        }

        if (wt < 129) {
          if (wt >= 76) {
            word = ylg[37];
            text(word, 31, 203);
          }
          if (wt >= 78) {
            word += ylg[38];
            text(word, 31, 203);
          }
          if (wt >= 80) {
            word += ylg[39];
            text(word, 31, 203);
          }
          if (wt >= 82) {
            word += ylg[40];
            text(word, 31, 203);
          }
          if (wt >= 84) {
            word += ylg[41];
            text(word, 31, 203);
          }
          if (wt >= 86) {
            word += ylg[42];
            text(word, 31, 203);
          }
          if (wt >= 88) {
            word += ylg[43];
            text(word, 31, 203);
          }
          if (wt >= 90) {
            word += ylg[44];
            text(word, 31, 203);
          }
          if (wt >= 92) {
            word += ylg[45];
            text(word, 31, 203);
          }
          if (wt >= 94) {
            word += ylg[46];
            text(word, 31, 203);
          }
          if (wt >= 96) {
            word += ylg[47];
            text(word, 31, 203);
          }
          if (wt >= 98) {
            word += ylg[48];
            text(word, 31, 203);
          }
          if (wt >= 100) {
            word += ylg[49];
            text(word, 31, 203);
          }
          if (wt >= 102) {
            word += ylg[50];
            text(word, 31, 203);
          }
          if (wt >= 104) {
            word += ylg[51];
            text(word, 31, 203);
          }
          if (wt >= 106) {
            word += ylg[52];
            text(word, 31, 203);
          }
          if (wt >= 108) {
            word += ylg[53];
            text(word, 31, 203);
          }
          if (wt >= 110) {
            word += ylg[54];
            text(word, 31, 203);
          }
          if (wt >= 112) {
            word += ylg[55];
            text(word, 31, 203);
          }
          if (wt >= 114) {
            word += ylg[56];
            text(word, 31, 203);
          }
          if (wt >= 116) {
            word += ylg[57];
            text(word, 31, 203);
          }
          if (wt >= 118) {
            word += ylg[58];
            text(word, 31, 203);
          }
          if (wt >= 120) {
            word += ylg[59];
            text(word, 31, 203);
          }
          if (wt >= 122) {
            word += ylg[60];
            text(word, 31, 203);
          }
          if (wt >= 124) {
            word += ylg[61];
            text(word, 31, 203);
          }
          if (wt >= 126) {
            word += ylg[62];
            text(word, 31, 203);
          }
          if (wt >= 128) {
            word += ylg[63];
            text(word, 31, 203);
          }

          if (wt >= 0 && wt <= 128) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 129) {
          text('express my love of bananas.', 31, 203);
        }

        rdg += 1;
        if (rdg >= 138 && keyIsDown(90)) {
          yilg = 1;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 1:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          yilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    yilg = 4;
  }



  if (nessP.x + 9 >= reddie.x && nessP.y - 3 >= reddie.y &&
    nessP.x - 25 <= reddie.x && nessP.y - 19 - 2 <= reddie.y) {
    switch (dilg) {
      case 4:

        if (keyIsDown(90)) {
          dilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }

        break;

      case 0:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wt += 1;
        cmv = 1;

        if (wt < 73) {
          word = rlg[0];
          text(word, 31, 36);

          if (wt >= 2) {
            word += rlg[1];
            text(word, 31, 36);
          }
          if (wt >= 4) {
            word += rlg[2];
            text(word, 31, 36);
          }
          if (wt >= 6) {
            word += rlg[3];
            text(word, 31, 36);
          }
          if (wt >= 8) {
            word += rlg[4];
            text(word, 31, 36);
          }
          if (wt >= 10) {
            word += rlg[5];
            text(word, 31, 36);
          }
          if (wt >= 12) {
            word += rlg[6];
            text(word, 31, 36);
          }
          if (wt >= 14) {
            word += rlg[7];
            text(word, 31, 36);
          }
          if (wt >= 16) {
            word += rlg[8];
            text(word, 31, 36);
          }
          if (wt >= 18) {
            word += rlg[9];
            text(word, 31, 36);
          }
          if (wt >= 20) {
            word += rlg[10];
            text(word, 31, 36);
          }
          if (wt >= 22) {
            word += rlg[11];
            text(word, 31, 36);
          }
          if (wt >= 24) {
            word += rlg[12];
            text(word, 31, 36);
          }
          if (wt >= 26) {
            word += rlg[13];
            text(word, 31, 36);
          }
          if (wt >= 28) {
            word += rlg[14];
            text(word, 31, 36);
          }
          if (wt >= 30) {
            word += rlg[15];
            text(word, 31, 36);
          }
          if (wt >= 32) {
            word += rlg[16];
            text(word, 31, 36);
          }
          if (wt >= 34) {
            word += rlg[17];
            text(word, 31, 36);
          }
          if (wt >= 36) {
            word += rlg[18];
            text(word, 31, 36);
          }
          if (wt >= 38) {
            word += rlg[19];
            text(word, 31, 36);
          }
          if (wt >= 40) {
            word += rlg[20];
            text(word, 31, 36);
          }
          if (wt >= 42) {
            word += rlg[21];
            text(word, 31, 36);
          }
          if (wt >= 44) {
            word += rlg[22];
            text(word, 31, 36);
          }
          if (wt >= 46) {
            word += rlg[23];
            text(word, 31, 36);
          }
          if (wt >= 48) {
            word += rlg[24];
            text(word, 31, 36);
          }
          if (wt >= 50) {
            word += rlg[25];
            text(word, 31, 36);
          }
          if (wt >= 52) {
            word += rlg[26];
            text(word, 31, 36);
          }
          if (wt >= 54) {
            word += rlg[27];
            text(word, 31, 36);
          }
          if (wt >= 56) {
            word += rlg[28];
            text(word, 31, 36);
          }
          if (wt >= 58) {
            word += rlg[29];
            text(word, 31, 36);
          }
          if (wt >= 60) {
            word += rlg[30];
            text(word, 31, 36);
          }
          if (wt >= 62) {
            word += rlg[31];
            text(word, 31, 36);
          }
          if (wt >= 64) {
            word += rlg[32];
            text(word, 31, 36);
          }
          if (wt >= 66) {
            word += rlg[33];
            text(word, 31, 36);
          }
          if (wt >= 68) {
            word += rlg[34];
            text(word, 31, 36);
          }
          if (wt >= 70) {
            word += rlg[35];
            text(word, 31, 36);
          }
          if (wt >= 72) {
            word += rlg[36];
            text(word, 31, 36);
          }
        }

        if (wt >= 73) {
          text('Whenever somebody alludes to the act', 31, 36);
        }

        if (wt < 127) {
          if (wt >= 74) {
            word = rlg[37];
            text(word, 31, 48);
          }
          if (wt >= 76) {
            word += rlg[38];
            text(word, 31, 48);
          }
          if (wt >= 78) {
            word += rlg[39];
            text(word, 31, 48);
          }
          if (wt >= 80) {
            word += rlg[40];
            text(word, 31, 48);
          }
          if (wt >= 82) {
            word += rlg[41];
            text(word, 31, 48);
          }
          if (wt >= 84) {
            word += rlg[42];
            text(word, 31, 48);
          }
          if (wt >= 86) {
            word += rlg[43];
            text(word, 31, 48);
          }
          if (wt >= 88) {
            word += rlg[44];
            text(word, 31, 48);
          }
          if (wt >= 90) {
            word += rlg[45];
            text(word, 31, 48);
          }
          if (wt >= 92) {
            word += rlg[46];
            text(word, 31, 48);
          }
          if (wt >= 94) {
            word += rlg[47];
            text(word, 31, 48);
          }
          if (wt >= 96) {
            word += rlg[48];
            text(word, 31, 48);
          }
          if (wt >= 98) {
            word += rlg[49];
            text(word, 31, 48);
          }
          if (wt >= 100) {
            word += rlg[50];
            text(word, 31, 48);
          }
          if (wt >= 102) {
            word += rlg[51];
            text(word, 31, 48);
          }
          if (wt >= 104) {
            word += rlg[52];
            text(word, 31, 48);
          }
          if (wt >= 106) {
            word += rlg[53];
            text(word, 31, 48);
          }
          if (wt >= 108) {
            word += rlg[54];
            text(word, 31, 48);
          }
          if (wt >= 110) {
            word += rlg[55];
            text(word, 31, 48);
          }
          if (wt >= 112) {
            word += rlg[56];
            text(word, 31, 48);
          }
          if (wt >= 114) {
            word += rlg[57];
            text(word, 31, 48);
          }
          if (wt >= 116) {
            word += rlg[58];
            text(word, 31, 48);
          }
          if (wt >= 118) {
            word += rlg[59];
            text(word, 31, 48);
          }
          if (wt >= 120) {
            word += rlg[60];
            text(word, 31, 48);
          }
          if (wt >= 122) {
            word += rlg[61];
            text(word, 31, 48);
          }
          if (wt >= 124) {
            word += rlg[62];
            text(word, 31, 48);
          }
          if (wt >= 126) {
            word += rlg[63];
            text(word, 31, 48);
          }

          if (wt >= 0 && wt <= 126) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 127) {
          text('of "pooping" or "peeing"...', 31, 48);
        }

        rdg += 1;
        if (rdg >= 136 && keyIsDown(90)) {
          dilg = 1;
          rdg = 0;
        }

        break;
      case 1:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wts += 1;

        if (wts < 73) {
          word = rlg1[0];
          text(word, 31, 36);

          if (wts >= 2) {
            word += rlg1[1];
            text(word, 31, 36);
          }
          if (wts >= 4) {
            word += rlg1[2];
            text(word, 31, 36);
          }
          if (wts >= 6) {
            word += rlg1[3];
            text(word, 31, 36);
          }
          if (wts >= 8) {
            word += rlg1[4];
            text(word, 31, 36);
          }
          if (wts >= 10) {
            word += rlg1[5];
            text(word, 31, 36);
          }
          if (wts >= 12) {
            word += rlg1[6];
            text(word, 31, 36);
          }
          if (wts >= 14) {
            word += rlg1[7];
            text(word, 31, 36);
          }
          if (wts >= 16) {
            word += rlg1[8];
            text(word, 31, 36);
          }
          if (wts >= 18) {
            word += rlg1[9];
            text(word, 31, 36);
          }
          if (wts >= 20) {
            word += rlg1[10];
            text(word, 31, 36);
          }
          if (wts >= 22) {
            word += rlg1[11];
            text(word, 31, 36);
          }
          if (wts >= 24) {
            word += rlg1[12];
            text(word, 31, 36);
          }
          if (wts >= 26) {
            word += rlg1[13];
            text(word, 31, 36);
          }
          if (wts >= 28) {
            word += rlg1[14];
            text(word, 31, 36);
          }
          if (wts >= 30) {
            word += rlg1[15];
            text(word, 31, 36);
          }
          if (wts >= 32) {
            word += rlg1[16];
            text(word, 31, 36);
          }
          if (wts >= 34) {
            word += rlg1[17];
            text(word, 31, 36);
          }
          if (wts >= 36) {
            word += rlg1[18];
            text(word, 31, 36);
          }
          if (wts >= 38) {
            word += rlg1[19];
            text(word, 31, 36);
          }
          if (wts >= 40) {
            word += rlg1[20];
            text(word, 31, 36);
          }
          if (wts >= 42) {
            word += rlg1[21];
            text(word, 31, 36);
          }
          if (wts >= 44) {
            word += rlg1[22];
            text(word, 31, 36);
          }
          if (wts >= 46) {
            word += rlg1[23];
            text(word, 31, 36);
          }
          if (wts >= 48) {
            word += rlg1[24];
            text(word, 31, 36);
          }
          if (wts >= 50) {
            word += rlg1[25];
            text(word, 31, 36);
          }
          if (wts >= 52) {
            word += rlg1[26];
            text(word, 31, 36);
          }
          if (wts >= 54) {
            word += rlg1[27];
            text(word, 31, 36);
          }
          if (wts >= 56) {
            word += rlg1[28];
            text(word, 31, 36);
          }
          if (wts >= 58) {
            word += rlg1[29];
            text(word, 31, 36);
          }
          if (wts >= 60) {
            word += rlg1[30];
            text(word, 31, 36);
          }
          if (wts >= 62) {
            word += rlg1[31];
            text(word, 31, 36);
          }
          if (wts >= 64) {
            word += rlg1[32];
            text(word, 31, 36);
          }
          if (wts >= 66) {
            word += rlg1[33];
            text(word, 31, 36);
          }
          if (wts >= 68) {
            word += rlg1[34];
            text(word, 31, 36);
          }
          if (wts >= 70) {
            word += rlg1[35];
            text(word, 31, 36);
          }
          if (wts >= 72) {
            word += rlg1[36];
            text(word, 31, 36);
          }
        }

        if (wts >= 73) {
          text('I utilize my vocal chords to produce', 31, 36);
        }

        if (wts < 95) {
          if (wts >= 74) {
            word = rlg1[37];
            text(word, 31, 48);
          }
          if (wts >= 76) {
            word += rlg1[38];
            text(word, 31, 48);
          }
          if (wts >= 78) {
            word += rlg1[39];
            text(word, 31, 48);
          }
          if (wts >= 80) {
            word += rlg1[40];
            text(word, 31, 48);
          }
          if (wts >= 82) {
            word += rlg1[41];
            text(word, 31, 48);
          }
          if (wts >= 84) {
            word += rlg1[42];
            text(word, 31, 48);
          }
          if (wts >= 86) {
            word += rlg1[43];
            text(word, 31, 48);
          }
          if (wts >= 88) {
            word += rlg1[44];
            text(word, 31, 48);
          }
          if (wts >= 90) {
            word += rlg1[45];
            text(word, 31, 48);
          }
          if (wts >= 92) {
            word += rlg1[46];
            text(word, 31, 48);
          }
          if (wts >= 94) {
            word += rlg1[47];
            text(word, 31, 48);
          }

          if (wts >= 0 && wts <= 94) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wts >= 95) {
          text('a "chuckle"', 31, 48);
        }

        rdg += 1;
        if (rdg >= 104 && keyIsDown(90)) {
          dilg = 2;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 2:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          dilg = 4;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    dilg = 4;
  }



  if (nessP.x + 9 >= gabbie.x && nessP.y - 3 >= gabbie.y &&
    nessP.x - 25 <= gabbie.x && nessP.y - 19 - 2 <= gabbie.y) {
    switch (gilg) {
      case 4:

        if (keyIsDown(90)) {
          gilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
        }

        break;

      case 0:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wt += 1;
        cmv = 1;

        if (wt < 73) {
          word = ggdg[0];
          text(word, 31, 36);

          if (wt >= 2) {
            word += ggdg[1];
            text(word, 31, 36);
          }
          if (wt >= 4) {
            word += ggdg[2];
            text(word, 31, 36);
          }
          if (wt >= 6) {
            word += ggdg[3];
            text(word, 31, 36);
          }
          if (wt >= 8) {
            word += ggdg[4];
            text(word, 31, 36);
          }
          if (wt >= 10) {
            word += ggdg[5];
            text(word, 31, 36);
          }
          if (wt >= 12) {
            word += ggdg[6];
            text(word, 31, 36);
          }
          if (wt >= 14) {
            word += ggdg[7];
            text(word, 31, 36);
          }
          if (wt >= 16) {
            word += ggdg[8];
            text(word, 31, 36);
          }
          if (wt >= 18) {
            word += ggdg[9];
            text(word, 31, 36);
          }
          if (wt >= 20) {
            word += ggdg[10];
            text(word, 31, 36);
          }
          if (wt >= 22) {
            word += ggdg[11];
            text(word, 31, 36);
          }
          if (wt >= 24) {
            word += ggdg[12];
            text(word, 31, 36);
          }
          if (wt >= 26) {
            word += ggdg[13];
            text(word, 31, 36);
          }
          if (wt >= 28) {
            word += ggdg[14];
            text(word, 31, 36);
          }
          if (wt >= 30) {
            word += ggdg[15];
            text(word, 31, 36);
          }
          if (wt >= 32) {
            word += ggdg[16];
            text(word, 31, 36);
          }
          if (wt >= 34) {
            word += ggdg[17];
            text(word, 31, 36);
          }
          if (wt >= 36) {
            word += ggdg[18];
            text(word, 31, 36);
          }
          if (wt >= 38) {
            word += ggdg[19];
            text(word, 31, 36);
          }
          if (wt >= 40) {
            word += ggdg[20];
            text(word, 31, 36);
          }
          if (wt >= 42) {
            word += ggdg[21];
            text(word, 31, 36);
          }
          if (wt >= 44) {
            word += ggdg[22];
            text(word, 31, 36);
          }
          if (wt >= 46) {
            word += ggdg[23];
            text(word, 31, 36);
          }
          if (wt >= 48) {
            word += ggdg[24];
            text(word, 31, 36);
          }
          if (wt >= 50) {
            word += ggdg[25];
            text(word, 31, 36);
          }
          if (wt >= 52) {
            word += ggdg[26];
            text(word, 31, 36);
          }
          if (wt >= 54) {
            word += ggdg[27];
            text(word, 31, 36);
          }
          if (wt >= 56) {
            word += ggdg[28];
            text(word, 31, 36);
          }
          if (wt >= 58) {
            word += ggdg[29];
            text(word, 31, 36);
          }
          if (wt >= 60) {
            word += ggdg[30];
            text(word, 31, 36);
          }
          if (wt >= 62) {
            word += ggdg[31];
            text(word, 31, 36);
          }
          if (wt >= 64) {
            word += ggdg[32];
            text(word, 31, 36);
          }
          if (wt >= 66) {
            word += ggdg[33];
            text(word, 31, 36);
          }
          if (wt >= 68) {
            word += ggdg[34];
            text(word, 31, 36);
          }
          if (wt >= 70) {
            word += ggdg[35];
            text(word, 31, 36);
          }
          if (wt >= 72) {
            word += ggdg[36];
            text(word, 31, 36);
          }
        }

        if (wt >= 73) {
          text('Thank you for returning our bananas!', 31, 36);
        }

        if (wt < 167) {
          if (wt >= 94) {
            word = ggdg[37];
            text(word, 31, 48);
          }
          if (wt >= 96) {
            word += ggdg[38];
            text(word, 31, 48);
          }
          if (wt >= 98) {
            word += ggdg[39];
            text(word, 31, 48);
          }
          if (wt >= 100) {
            word += ggdg[40];
            text(word, 31, 48);
          }
          if (wt >= 102) {
            word += ggdg[41];
            text(word, 31, 48);
          }
          if (wt >= 104) {
            word += ggdg[42];
            text(word, 31, 48);
          }
          if (wt >= 106) {
            word += ggdg[43];
            text(word, 31, 48);
          }
          if (wt >= 108) {
            word += ggdg[44];
            text(word, 31, 48);
          }
          if (wt >= 110) {
            word += ggdg[45];
            text(word, 31, 48);
          }
          if (wt >= 112) {
            word += ggdg[46];
            text(word, 31, 48);
          }
          if (wt >= 114) {
            word += ggdg[47];
            text(word, 31, 48);
          }
          if (wt >= 116) {
            word += ggdg[48];
            text(word, 31, 48);
          }
          if (wt >= 118) {
            word += ggdg[49];
            text(word, 31, 48);
          }
          if (wt >= 120) {
            word += ggdg[50];
            text(word, 31, 48);
          }
          if (wt >= 122) {
            word += ggdg[51];
            text(word, 31, 48);
          }
          if (wt >= 124) {
            word += ggdg[52];
            text(word, 31, 48);
          }
          if (wt >= 126) {
            word += ggdg[53];
            text(word, 31, 48);
          }
          if (wt >= 128) {
            word += ggdg[54];
            text(word, 31, 48);
          }
          if (wt >= 130) {
            word += ggdg[55];
            text(word, 31, 48);
          }
          if (wt >= 132) {
            word += ggdg[56];
            text(word, 31, 48);
          }
          if (wt >= 134) {
            word += ggdg[57];
            text(word, 31, 48);
          }
          if (wt >= 136) {
            word += ggdg[58];
            text(word, 31, 48);
          }
          if (wt >= 138) {
            word += ggdg[59];
            text(word, 31, 48);
          }
          if (wt >= 140) {
            word += ggdg[60];
            text(word, 31, 48);
          }
          if (wt >= 142) {
            word += ggdg[61];
            text(word, 31, 48);
          }
          if (wt >= 144) {
            word += ggdg[62];
            text(word, 31, 48);
          }
          if (wt >= 146) {
            word += ggdg[63];
            text(word, 31, 48);
          }
          if (wt >= 148) {
            word += ggdg[64];
            text(word, 31, 48);
          }
          if (wt >= 150) {
            word += ggdg[65];
            text(word, 31, 48);
          }
          if (wt >= 152) {
            word += ggdg[66];
            text(word, 31, 48);
          }
          if (wt >= 154) {
            word += ggdg[67];
            text(word, 31, 48);
          }
          if (wt >= 156) {
            word += ggdg[68];
            text(word, 31, 48);
          }
          if (wt >= 158) {
            word += ggdg[69];
            text(word, 31, 48);
          }
          if (wt >= 160) {
            word += ggdg[70];
            text(word, 31, 48);
          }
          if (wt >= 162) {
            word += ggdg[71];
            text(word, 31, 48);
          }
          if (wt >= 164) {
            word += ggdg[72];
            text(word, 31, 48);
          }
          if (wt >= 166) {
            word += ggdg[73];
            text(word, 31, 48);
          }

          if (wt >= 0 && wt <= 72 || wt >= 94 && wt <= 166) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wt >= 167) {
          text('Our bodies desperately need the extra', 31, 48);
        }

        rdg += 1;
        if (rdg >= 176 && keyIsDown(90)) {
          gilg = 1;
          rdg = 0;
        }

        break;
      case 1:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wts += 1;

        if (wts < 103) {
          word = ggdg1[0];
          text(word, 31, 36);

          if (wts >= 2) {
            word += ggdg1[1];
            text(word, 31, 36);
          }
          if (wts >= 4) {
            word += ggdg1[2];
            text(word, 31, 36);
          }
          if (wts >= 6) {
            word += ggdg1[3];
            text(word, 31, 36);
          }
          if (wts >= 8) {
            word += ggdg1[4];
            text(word, 31, 36);
          }
          if (wts >= 10) {
            word += ggdg1[5];
            text(word, 31, 36);
          }
          if (wts >= 12) {
            word += ggdg1[6];
            text(word, 31, 36);
          }
          if (wts >= 14) {
            word += ggdg1[7];
            text(word, 31, 36);
          }
          if (wts >= 16) {
            word += ggdg1[8];
            text(word, 31, 36);
          }
          if (wts >= 18) {
            word += ggdg1[9];
            text(word, 31, 36);
          }
          if (wts >= 20) {
            word += ggdg1[10];
            text(word, 31, 36);
          }
          if (wts >= 44) {
            word += ggdg1[11];
            text(word, 31, 36);
          }
          if (wts >= 46) {
            word += ggdg1[12];
            text(word, 31, 36);
          }
          if (wts >= 48) {
            word += ggdg1[13];
            text(word, 31, 36);
          }
          if (wts >= 50) {
            word += ggdg1[14];
            text(word, 31, 36);
          }
          if (wts >= 52) {
            word += ggdg1[15];
            text(word, 31, 36);
          }
          if (wts >= 54) {
            word += ggdg1[16];
            text(word, 31, 36);
          }
          if (wts >= 56) {
            word += ggdg1[17];
            text(word, 31, 36);
          }
          if (wts >= 58) {
            word += ggdg1[18];
            text(word, 31, 36);
          }
          if (wts >= 60) {
            word += ggdg1[19];
            text(word, 31, 36);
          }
          if (wts >= 62) {
            word += ggdg1[20];
            text(word, 31, 36);
          }
          if (wts >= 64) {
            word += ggdg1[21];
            text(word, 31, 36);
          }
          if (wts >= 66) {
            word += ggdg1[22];
            text(word, 31, 36);
          }
          if (wts >= 68) {
            word += ggdg1[23];
            text(word, 31, 36);
          }
          if (wts >= 70) {
            word += ggdg1[24];
            text(word, 31, 36);
          }
          if (wts >= 72) {
            word += ggdg1[25];
            text(word, 31, 36);
          }
          if (wts >= 74) {
            word += ggdg1[26];
            text(word, 31, 36);
          }
          if (wts >= 76) {
            word += ggdg1[27];
            text(word, 31, 36);
          }
          if (wts >= 78) {
            word += ggdg1[28];
            text(word, 31, 36);
          }
          if (wts >= 80) {
            word += ggdg1[29];
            text(word, 31, 36);
          }
          if (wts >= 82) {
            word += ggdg1[30];
            text(word, 31, 36);
          }
          if (wts >= 84) {
            word += ggdg1[31];
            text(word, 31, 36);
          }
          if (wts >= 94) {
            word += ggdg1[32];
            text(word, 31, 36);
          }
          if (wts >= 96) {
            word += ggdg1[33];
            text(word, 31, 36);
          }
          if (wts >= 98) {
            word += ggdg1[34];
            text(word, 31, 36);
          }
          if (wts >= 100) {
            word += ggdg1[35];
            text(word, 31, 36);
          }
          if (wts >= 102) {
            word += ggdg1[36];
            text(word, 31, 36);
          }
        }

        if (wts >= 103) {
          text('potassium. To return the favor, I\'ll', 31, 36);
        }

        if (wts < 173) {
          if (wts >= 104) {
            word = ggdg1[37];
            text(word, 31, 48);
          }
          if (wts >= 106) {
            word += ggdg1[38];
            text(word, 31, 48);
          }
          if (wts >= 108) {
            word += ggdg1[39];
            text(word, 31, 48);
          }
          if (wts >= 110) {
            word += ggdg1[40];
            text(word, 31, 48);
          }
          if (wts >= 112) {
            word += ggdg1[41];
            text(word, 31, 48);
          }
          if (wts >= 114) {
            word += ggdg1[42];
            text(word, 31, 48);
          }
          if (wts >= 116) {
            word += ggdg1[43];
            text(word, 31, 48);
          }
          if (wts >= 118) {
            word += ggdg1[44];
            text(word, 31, 48);
          }
          if (wts >= 120) {
            word += ggdg1[45];
            text(word, 31, 48);
          }
          if (wts >= 122) {
            word += ggdg1[46];
            text(word, 31, 48);
          }
          if (wts >= 124) {
            word += ggdg1[47];
            text(word, 31, 48);
          }
          if (wts >= 126) {
            word += ggdg1[48];
            text(word, 31, 48);
          }
          if (wts >= 128) {
            word += ggdg1[49];
            text(word, 31, 48);
          }
          if (wts >= 130) {
            word += ggdg1[50];
            text(word, 31, 48);
          }
          if (wts >= 132) {
            word += ggdg1[51];
            text(word, 31, 48);
          }
          if (wts >= 134) {
            word += ggdg1[52];
            text(word, 31, 48);
          }
          if (wts >= 136) {
            word += ggdg1[53];
            text(word, 31, 48);
          }
          if (wts >= 138) {
            word += ggdg1[54];
            text(word, 31, 48);
          }
          if (wts >= 140) {
            word += ggdg1[55];
            text(word, 31, 48);
          }
          if (wts >= 142) {
            word += ggdg1[56];
            text(word, 31, 48);
          }
          if (wts >= 144) {
            word += ggdg1[57];
            text(word, 31, 48);
          }
          if (wts >= 146) {
            word += ggdg1[58];
            text(word, 31, 48);
          }
          if (wts >= 148) {
            word += ggdg1[59];
            text(word, 31, 48);
          }
          if (wts >= 150) {
            word += ggdg1[60];
            text(word, 31, 48);
          }
          if (wts >= 152) {
            word += ggdg1[61];
            text(word, 31, 48);
          }
          if (wts >= 154) {
            word += ggdg1[62];
            text(word, 31, 48);
          }
          if (wts >= 156) {
            word += ggdg1[63];
            text(word, 31, 48);
          }
          if (wts >= 158) {
            word += ggdg1[64];
            text(word, 31, 48);
          }
          if (wts >= 160) {
            word += ggdg1[65];
            text(word, 31, 48);
          }
          if (wts >= 162) {
            word += ggdg1[66];
            text(word, 31, 48);
          }
          if (wts >= 164) {
            word += ggdg1[67];
            text(word, 31, 48);
          }
          if (wts >= 166) {
            word += ggdg1[68];
            text(word, 31, 48);
          }
          if (wts >= 168) {
            word += ggdg1[69];
            text(word, 31, 48);
          }
          if (wts >= 170) {
            word += ggdg1[70];
            text(word, 31, 48);
          }
          if (wts >= 172) {
            word += ggdg1[71];
            text(word, 31, 48);
          }

          if (wts >= 0 && wts <= 20 || wts >= 44 && wts <= 84 ||
            wts >= 94 && wts <= 172) {
            tt += 1;

            if (tt >= 1 && tt < 2) {
              ntxt.play();
            }
            if (tt >= 4) {
              tt = 0;
            }
          } else {
            tt = 0;
          }
        }

        if (wts >= 173) {
          text('be your critter friend from now on!', 31, 48);
        }

        rdg += 1;
        if (rdg >= 182 && keyIsDown(90)) {
          gilg = 2;
          rdg = 0;
          cmv = 0;
        }

        break;
      case 2:
        rdg += 1;
        if (rdg >= 30 && keyIsDown(90)) {
          gilg = 4;
          rdg = 0;
          wt = 0;
          wts = 0;
        }
        break;
    }
  } else {
    gilg = 4;
  }



  if (nessP.x + 9 >= oldie.x && nessP.y - 3 >= oldie.y &&
    nessP.x - 25 <= oldie.x && nessP.y - 19 - 2 <= oldie.y) {
    switch (oilg) {
      case 4:

        if (keyIsDown(90)) {
          oilg = 0;
          rdg = 0;
          wt = 0;
          wts = 0;
          wtss = 0;
        }

        break;

      case 0:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        cmv = 1;
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wt += 1;

        if (wt < 73) {
          word = oldg[0];
          text(word, 31, 36);
          if (wt >= 2) {
            word += oldg[1];
            text(word, 31, 36);
          }
          if (wt >= 4) {
            word += oldg[2];
            text(word, 31, 36);
          }
          if (wt >= 6) {
            word += oldg[3];
            text(word, 31, 36);
          }
          if (wt >= 8) {
            word += oldg[4];
            text(word, 31, 36);
          }
          if (wt >= 10) {
            word += oldg[5];
            text(word, 31, 36);
          }
          if (wt >= 12) {
            word += oldg[6];
            text(word, 31, 36);
          }
          if (wt >= 14) {
            word += oldg[7];
            text(word, 31, 36);
          }
          if (wt >= 16) {
            word += oldg[8];
            text(word, 31, 36);
          }
          if (wt >= 18) {
            word += oldg[9];
            text(word, 31, 36);
          }
          if (wt >= 20) {
            word += oldg[10];
            text(word, 31, 36);
          }
          if (wt >= 22) {
            word += oldg[11];
            text(word, 31, 36);
          }
          if (wt >= 24) {
            word += oldg[12];
            text(word, 31, 36);
          }
          if (wt >= 26) {
            word += oldg[13];
            text(word, 31, 36);
          }
          if (wt >= 28) {
            word += oldg[14];
            text(word, 31, 36);
          }
          if (wt >= 30) {
            word += oldg[15];
            text(word, 31, 36);
          }
          if (wt >= 32) {
            word += oldg[16];
            text(word, 31, 36);
          }
          if (wt >= 34) {
            word += oldg[17];
            text(word, 31, 36);
          }
          if (wt >= 36) {
            word += oldg[18];
            text(word, 31, 36);
          }
          if (wt >= 38) {
            word += oldg[19];
            text(word, 31, 36);
          }
          if (wt >= 40) {
            word += oldg[20];
            text(word, 31, 36);
          }
          if (wt >= 42) {
            word += oldg[21];
            text(word, 31, 36);
          }
          if (wt >= 44) {
            word += oldg[22];
            text(word, 31, 36);
          }
          if (wt >= 54) {
            word += oldg[23];
            text(word, 31, 36);
          }
          if (wt >= 56) {
            word += oldg[24];
            text(word, 31, 36);
          }
          if (wt >= 58) {
            word += oldg[25];
            text(word, 31, 36);
          }
          if (wt >= 60) {
            word += oldg[26];
            text(word, 31, 36);
          }
          if (wt >= 62) {
            word += oldg[27];
            text(word, 31, 36);
          }
          if (wt >= 64) {
            word += oldg[28];
            text(word, 31, 36);
          }
          if (wt >= 66) {
            word += oldg[29];
            text(word, 31, 36);
          }
          if (wt >= 68) {
            word += oldg[30];
            text(word, 31, 36);
          }
          if (wt >= 70) {
            word += oldg[31];
            text(word, 31, 36);
          }
          if (wt >= 72) {
            word += oldg[32];
            text(word, 31, 36);
          }

          if (wt >= 0 && wt < 0 + 1) {
            fwt1.play();
          }
          if (wt >= 2 && wt < 2 + 1) {
            fwt1.play();
          }
          if (wt >= 4 && wt < 4 + 1) {
            fwt1.play();
          }

          if (wt >= 8 && wt < 8 + 1) {
            fwt1.play();
          }
          if (wt >= 10 && wt < 10 + 1) {
            fwt1.play();
          }
          if (wt >= 12 && wt < 12 + 1) {
            fwt1.play();
          }

          if (wt >= 16 && wt < 16 + 1) {
            fwt1.play();
          }
          if (wt >= 18 && wt < 18 + 1) {
            fwt1.play();
          }
          if (wt >= 20 && wt < 20 + 1) {
            fwt1.play();
          }
          if (wt >= 22 && wt < 22 + 1) {
            fwt1.play();
          }

          if (wt >= 26 && wt < 26 + 1) {
            fwt1.play();
          }
          if (wt >= 28 && wt < 28 + 1) {
            fwt1.play();
          }

          if (wt >= 32 && wt < 32 + 1) {
            fwt1.play();
          }
          if (wt >= 34 && wt < 34 + 1) {
            fwt1.play();
          }
          if (wt >= 36 && wt < 36 + 1) {
            fwt1.play();
          }
          if (wt >= 38 && wt < 38 + 1) {
            fwt1.play();
          }
          if (wt >= 40 && wt < 40 + 1) {
            fwt1.play();
          }
          if (wt >= 42 && wt < 42 + 1) {
            fwt1.play();
          }

          if (wt >= 54 && wt < 54 + 1) {
            fwt1.play();
          }
          if (wt >= 56 && wt < 56 + 1) {
            fwt1.play();
          }
          if (wt >= 58 && wt < 58 + 1) {
            fwt1.play();
          }
          if (wt >= 60 && wt < 60 + 1) {
            fwt1.play();
          }

          if (wt >= 64 && wt < 64 + 1) {
            fwt1.play();
          }
          if (wt >= 66 && wt < 66 + 1) {
            fwt1.play();
          }
          if (wt >= 68 && wt < 68 + 1) {
            fwt1.play();
          }
          if (wt >= 70 && wt < 70 + 1) {
            fwt1.play();
          }
        }

        if (wt >= 73) {
          text('For the past 76 years, I\'ve been', 31, 36);
        }

        if (wt < 165) {
          if (wt >= 74) {
            word = oldg[33];
            text(word, 31, 48);
          }
          if (wt >= 76) {
            word += oldg[34];
            text(word, 31, 48);
          }
          if (wt >= 78) {
            word += oldg[35];
            text(word, 31, 48);
          }
          if (wt >= 80) {
            word += oldg[36];
            text(word, 31, 48);
          }
          if (wt >= 82) {
            word += oldg[37];
            text(word, 31, 48);
          }
          if (wt >= 84) {
            word += oldg[38];
            text(word, 31, 48);
          }
          if (wt >= 86) {
            word += oldg[39];
            text(word, 31, 48);
          }
          if (wt >= 88) {
            word += oldg[40];
            text(word, 31, 48);
          }
          if (wt >= 90) {
            word += oldg[41];
            text(word, 31, 48);
          }
          if (wt >= 92) {
            word += oldg[42];
            text(word, 31, 48);
          }
          if (wt >= 94) {
            word += oldg[43];
            text(word, 31, 48);
          }
          if (wt >= 96) {
            word += oldg[44];
            text(word, 31, 48);
          }
          if (wt >= 98) {
            word += oldg[45];
            text(word, 31, 48);
          }
          if (wt >= 100) {
            word += oldg[46];
            text(word, 31, 48);
          }
          if (wt >= 102) {
            word += oldg[47];
            text(word, 31, 48);
          }
          if (wt >= 104) {
            word += oldg[48];
            text(word, 31, 48);
          }
          if (wt >= 106) {
            word += oldg[49];
            text(word, 31, 48);
          }
          if (wt >= 108) {
            word += oldg[50];
            text(word, 31, 48);
          }
          if (wt >= 110) {
            word += oldg[51];
            text(word, 31, 48);
          }
          if (wt >= 112) {
            word += oldg[52];
            text(word, 31, 48);
          }
          if (wt >= 114) {
            word += oldg[53];
            text(word, 31, 48);
          }
          if (wt >= 138) {
            word += oldg[54];
            text(word, 31, 48);
          }
          if (wt >= 140) {
            word += oldg[55];
            text(word, 31, 48);
          }
          if (wt >= 142) {
            word += oldg[56];
            text(word, 31, 48);
          }
          if (wt >= 144) {
            word += oldg[57];
            text(word, 31, 48);
          }
          if (wt >= 146) {
            word += oldg[58];
            text(word, 31, 48);
          }
          if (wt >= 148) {
            word += oldg[59];
            text(word, 31, 48);
          }
          if (wt >= 150) {
            word += oldg[60];
            text(word, 31, 48);
          }
          if (wt >= 152) {
            word += oldg[61];
            text(word, 31, 48);
          }
          if (wt >= 154) {
            word += oldg[62];
            text(word, 31, 48);
          }
          if (wt >= 156) {
            word += oldg[63];
            text(word, 31, 48);
          }
          if (wt >= 158) {
            word += oldg[64];
            text(word, 31, 48);
          }
          if (wt >= 160) {
            word += oldg[65];
            text(word, 31, 48);
          }
          if (wt >= 162) {
            word += oldg[66];
            text(word, 31, 48);
          }
          if (wt >= 164) {
            word += oldg[67];
            text(word, 31, 48);
          }

          if (wt >= 74 && wt < 74 + 1) {
            fwt1.play();
          }
          if (wt >= 76 && wt < 76 + 1) {
            fwt1.play();
          }
          if (wt >= 78 && wt < 78 + 1) {
            fwt1.play();
          }
          if (wt >= 80 && wt < 80 + 1) {
            fwt1.play();
          }
          if (wt >= 82 && wt < 82 + 1) {
            fwt1.play();
          }
          if (wt >= 84 && wt < 84 + 1) {
            fwt1.play();
          }
          if (wt >= 86 && wt < 86 + 1) {
            fwt1.play();
          }

          if (wt >= 90 && wt < 90 + 1) {
            fwt1.play();
          }
          if (wt >= 92 && wt < 92 + 1) {
            fwt1.play();
          }

          if (wt >= 96 && wt < 96 + 1) {
            fwt1.play();
          }
          if (wt >= 98 && wt < 98 + 1) {
            fwt1.play();
          }
          if (wt >= 100 && wt < 100 + 1) {
            fwt1.play();
          }
          if (wt >= 102 && wt < 102 + 1) {
            fwt1.play();
          }

          if (wt >= 106 && wt < 106 + 1) {
            fwt1.play();
          }
          if (wt >= 108 && wt < 108 + 1) {
            fwt1.play();
          }
          if (wt >= 110 && wt < 110 + 1) {
            fwt1.play();
          }
          if (wt >= 112 && wt < 112 + 1) {
            fwt1.play();
          }
          if (wt >= 114 && wt < 114 + 1) {
            fwt1.play();
          }

          if (wt >= 140 && wt < 140 + 1) {
            fwt1.play();
          }
          if (wt >= 142 && wt < 142 + 1) {
            fwt1.play();
          }
          if (wt >= 144 && wt < 144 + 1) {
            fwt1.play();
          }
          if (wt >= 146 && wt < 146 + 1) {
            fwt1.play();
          }

          if (wt >= 150 && wt < 150 + 1) {
            fwt1.play();
          }
          if (wt >= 152 && wt < 152 + 1) {
            fwt1.play();
          }
          if (wt >= 154 && wt < 154 + 1) {
            fwt1.play();
          }
          if (wt >= 156 && wt < 156 + 1) {
            fwt1.play();
          }
          if (wt >= 158 && wt < 158 + 1) {
            fwt1.play();
          }
          if (wt >= 160 && wt < 160 + 1) {
            fwt1.play();
          }
          if (wt >= 162 && wt < 162 + 1) {
            fwt1.play();
          }
          if (wt >= 164 && wt < 164 + 1) {
            fwt1.play();
          }
        }

        if (wt >= 165) {
          text('waiting in this room. They promised', 31, 48);
        }

        rdg += 1;
        if (rdg >= 174 && keyIsDown(90)) {
          oilg = 1;
          rdg = 0;
        }

        break;
      case 1:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wts += 1;

        if (wts < 97) {
          word = oldg1[0];
          text(word, 31, 36);
          if (wts >= 2) {
            word += oldg1[1];
            text(word, 31, 36);
          }
          if (wts >= 4) {
            word += oldg1[2];
            text(word, 31, 36);
          }
          if (wts >= 6) {
            word += oldg1[3];
            text(word, 31, 36);
          }
          if (wts >= 8) {
            word += oldg1[4];
            text(word, 31, 36);
          }
          if (wts >= 10) {
            word += oldg1[5];
            text(word, 31, 36);
          }
          if (wts >= 12) {
            word += oldg1[6];
            text(word, 31, 36);
          }
          if (wts >= 14) {
            word += oldg1[7];
            text(word, 31, 36);
          }
          if (wts >= 16) {
            word += oldg1[8];
            text(word, 31, 36);
          }
          if (wts >= 18) {
            word += oldg1[9];
            text(word, 31, 36);
          }
          if (wts >= 20) {
            word += oldg1[10];
            text(word, 31, 36);
          }
          if (wts >= 22) {
            word += oldg1[11];
            text(word, 31, 36);
          }
          if (wts >= 24) {
            word += oldg1[12];
            text(word, 31, 36);
          }
          if (wts >= 26) {
            word += oldg1[13];
            text(word, 31, 36);
          }
          if (wts >= 28) {
            word += oldg1[14];
            text(word, 31, 36);
          }
          if (wts >= 30) {
            word += oldg1[15];
            text(word, 31, 36);
          }
          if (wts >= 32) {
            word += oldg1[16];
            text(word, 31, 36);
          }
          if (wts >= 34) {
            word += oldg1[17];
            text(word, 31, 36);
          }
          if (wts >= 36) {
            word += oldg1[18];
            text(word, 31, 36);
          }
          if (wts >= 38) {
            word += oldg1[19];
            text(word, 31, 36);
          }
          if (wts >= 40) {
            word += oldg1[20];
            text(word, 31, 36);
          }
          if (wts >= 42) {
            word += oldg1[21];
            text(word, 31, 36);
          }
          if (wts >= 66) {
            word += oldg1[22];
            text(word, 31, 36);
          }
          if (wts >= 68) {
            word += oldg1[23];
            text(word, 31, 36);
          }
          if (wts >= 70) {
            word += oldg1[24];
            text(word, 31, 36);
          }
          if (wts >= 72) {
            word += oldg1[25];
            text(word, 31, 36);
          }
          if (wts >= 74) {
            word += oldg1[26];
            text(word, 31, 36);
          }
          if (wts >= 76) {
            word += oldg1[27];
            text(word, 31, 36);
          }
          if (wts >= 78) {
            word += oldg1[28];
            text(word, 31, 36);
          }
          if (wts >= 80) {
            word += oldg1[29];
            text(word, 31, 36);
          }
          if (wts >= 82) {
            word += oldg1[30];
            text(word, 31, 36);
          }
          if (wts >= 84) {
            word += oldg1[31];
            text(word, 31, 36);
          }
          if (wts >= 86) {
            word += oldg1[32];
            text(word, 31, 36);
          }
          if (wts >= 88) {
            word += oldg1[33];
            text(word, 31, 36);
          }
          if (wts >= 90) {
            word += oldg1[34];
            text(word, 31, 36);
          }
          if (wts >= 92) {
            word += oldg1[35];
            text(word, 31, 36);
          }
          if (wts >= 94) {
            word += oldg1[36];
            text(word, 31, 36);
          }
          if (wts >= 96) {
            word += oldg1[37];
            text(word, 31, 36);
          }

          if (wts >= 0 && wts < 0 + 1) {
            fwt1.play();
          }
          if (wts >= 2 && wts < 2 + 1) {
            fwt1.play();
          }

          if (wts >= 6 && wts < 6 + 1) {
            fwt1.play();
          }
          if (wts >= 8 && wts < 8 + 1) {
            fwt1.play();
          }
          if (wts >= 10 && wts < 10 + 1) {
            fwt1.play();
          }
          if (wts >= 12 && wts < 12 + 1) {
            fwt1.play();
          }
          if (wts >= 14 && wts < 14 + 1) {
            fwt1.play();
          }

          if (wts >= 18 && wts < 18 + 1) {
            fwt1.play();
          }
          if (wts >= 20 && wts < 20 + 1) {
            fwt1.play();
          }

          if (wts >= 24 && wts < 24 + 1) {
            fwt1.play();
          }

          if (wts >= 28 && wts < 28 + 1) {
            fwt1.play();
          }
          if (wts >= 30 && wts < 30 + 1) {
            fwt1.play();
          }
          if (wts >= 32 && wts < 32 + 1) {
            fwt1.play();
          }
          if (wts >= 34 && wts < 34 + 1) {
            fwt1.play();
          }
          if (wts >= 36 && wts < 36 + 1) {
            fwt1.play();
          }
          if (wts >= 38 && wts < 38 + 1) {
            fwt1.play();
          }
          if (wts >= 40 && wts < 40 + 1) {
            fwt1.play();
          }

          if (wts >= 66 && wts < 66 + 1) {
            fwt1.play();
          }
          if (wts >= 68 && wts < 68 + 1) {
            fwt1.play();
          }
          if (wts >= 70 && wts < 70 + 1) {
            fwt1.play();
          }

          if (wts >= 74 && wts < 74 + 1) {
            fwt1.play();
          }
          if (wts >= 76 && wts < 76 + 1) {
            fwt1.play();
          }
          if (wts >= 78 && wts < 78 + 1) {
            fwt1.play();
          }
          if (wts >= 80 && wts < 80 + 1) {
            fwt1.play();
          }
          if (wts >= 82 && wts < 82 + 1) {
            fwt1.play();
          }
          if (wts >= 84 && wts < 84 + 1) {
            fwt1.play();
          }
          if (wts >= 86 && wts < 86 + 1) {
            fwt1.play();
          }

          if (wts >= 90 && wts < 90 + 1) {
            fwt1.play();
          }
          if (wts >= 92 && wts < 92 + 1) {
            fwt1.play();
          }
          if (wts >= 94 && wts < 94 + 1) {
            fwt1.play();
          }
        }

        if (wts >= 97) {
          text('to bring me a banana. But waiting for', 31, 36);
        }

        if (wts < 171) {
          if (wts >= 98) {
            word = oldg1[38];
            text(word, 31, 48);
          }
          if (wts >= 100) {
            word += oldg1[39];
            text(word, 31, 48);
          }
          if (wts >= 102) {
            word += oldg1[40];
            text(word, 31, 48);
          }
          if (wts >= 104) {
            word += oldg1[41];
            text(word, 31, 48);
          }
          if (wts >= 106) {
            word += oldg1[42];
            text(word, 31, 48);
          }
          if (wts >= 108) {
            word += oldg1[43];
            text(word, 31, 48);
          }
          if (wts >= 110) {
            word += oldg1[44];
            text(word, 31, 48);
          }
          if (wts >= 112) {
            word += oldg1[45];
            text(word, 31, 48);
          }
          if (wts >= 114) {
            word += oldg1[46];
            text(word, 31, 48);
          }
          if (wts >= 116) {
            word += oldg1[47];
            text(word, 31, 48);
          }
          if (wts >= 118) {
            word += oldg1[48];
            text(word, 31, 48);
          }
          if (wts >= 120) {
            word += oldg1[49];
            text(word, 31, 48);
          }
          if (wts >= 122) {
            word += oldg1[50];
            text(word, 31, 48);
          }
          if (wts >= 124) {
            word += oldg1[51];
            text(word, 31, 48);
          }
          if (wts >= 126) {
            word += oldg1[52];
            text(word, 31, 48);
          }
          if (wts >= 128) {
            word += oldg1[53];
            text(word, 31, 48);
          }
          if (wts >= 130) {
            word += oldg1[54];
            text(word, 31, 48);
          }
          if (wts >= 132) {
            word += oldg1[55];
            text(word, 31, 48);
          }
          if (wts >= 134) {
            word += oldg1[56];
            text(word, 31, 48);
          }
          if (wts >= 136) {
            word += oldg1[57];
            text(word, 31, 48);
          }
          if (wts >= 138) {
            word += oldg1[58];
            text(word, 31, 48);
          }
          if (wts >= 140) {
            word += oldg1[59];
            text(word, 31, 48);
          }
          if (wts >= 142) {
            word += oldg1[60];
            text(word, 31, 48);
          }
          if (wts >= 144) {
            word += oldg1[61];
            text(word, 31, 48);
          }
          if (wts >= 146) {
            word += oldg1[62];
            text(word, 31, 48);
          }
          if (wts >= 148) {
            word += oldg1[63];
            text(word, 31, 48);
          }
          if (wts >= 150) {
            word += oldg1[64];
            text(word, 31, 48);
          }
          if (wts >= 152) {
            word += oldg1[65];
            text(word, 31, 48);
          }
          if (wts >= 154) {
            word += oldg1[66];
            text(word, 31, 48);
          }
          if (wts >= 156) {
            word += oldg1[67];
            text(word, 31, 48);
          }
          if (wts >= 158) {
            word += oldg1[68];
            text(word, 31, 48);
          }
          if (wts >= 160) {
            word += oldg1[69];
            text(word, 31, 48);
          }
          if (wts >= 162) {
            word += oldg1[70];
            text(word, 31, 48);
          }
          if (wts >= 164) {
            word += oldg1[71];
            text(word, 31, 48);
          }
          if (wts >= 166) {
            word += oldg1[72];
            text(word, 31, 48);
          }
          if (wts >= 168) {
            word += oldg1[73];
            text(word, 31, 48);
          }
          if (wts >= 170) {
            word += oldg1[74];
            text(word, 31, 48);
            text(word, 31, 48);
          }

          if (wts >= 98 && wts < 98 + 1) {
            fwt1.play();
          }
          if (wts >= 100 && wts < 100 + 1) {
            fwt1.play();
          }

          if (wts >= 104 && wts < 104 + 1) {
            fwt1.play();
          }
          if (wts >= 106 && wts < 106 + 1) {
            fwt1.play();
          }
          if (wts >= 108 && wts < 108 + 1) {
            fwt1.play();
          }
          if (wts >= 110 && wts < 110 + 1) {
            fwt1.play();
          }

          if (wts >= 114 && wts < 114 + 1) {
            fwt1.play();
          }
          if (wts >= 116 && wts < 116 + 1) {
            fwt1.play();
          }
          if (wts >= 118 && wts < 118 + 1) {
            fwt1.play();
          }
          if (wts >= 120 && wts < 120 + 1) {
            fwt1.play();
          }
          if (wts >= 122 && wts < 122 + 1) {
            fwt1.play();
          }
          if (wts >= 124 && wts < 124 + 1) {
            fwt1.play();
          }
          if (wts >= 126 && wts < 126 + 1) {
            fwt1.play();
          }

          if (wts >= 130 && wts < 130 + 1) {
            fwt1.play();
          }
          if (wts >= 132 && wts < 132 + 1) {
            fwt1.play();
          }
          if (wts >= 134 && wts < 134 + 1) {
            fwt1.play();
          }
          if (wts >= 136 && wts < 136 + 1) {
            fwt1.play();
          }
          if (wts >= 138 && wts < 138 + 1) {
            fwt1.play();
          }
          if (wts >= 140 && wts < 140 + 1) {
            fwt1.play();
          }
          if (wts >= 142 && wts < 142 + 1) {
            fwt1.play();
          }

          if (wts >= 146 && wts < 146 + 1) {
            fwt1.play();
          }
          if (wts >= 148 && wts < 148 + 1) {
            fwt1.play();
          }

          if (wts >= 152 && wts < 152 + 1) {
            fwt1.play();
          }
          if (wts >= 154 && wts < 154 + 1) {
            fwt1.play();
          }
          if (wts >= 156 && wts < 156 + 1) {
            fwt1.play();
          }
          if (wts >= 158 && wts < 158 + 1) {
            fwt1.play();
          }
          if (wts >= 160 && wts < 160 + 1) {
            fwt1.play();
          }
          if (wts >= 162 && wts < 162 + 1) {
            fwt1.play();
          }
          if (wts >= 164 && wts < 164 + 1) {
            fwt1.play();
          }
          if (wts >= 166 && wts < 166 + 1) {
            fwt1.play();
          }
          if (wts >= 168 && wts < 168 + 1) {
            fwt1.play();
          }
          if (wts >= 170 && wts < 170 + 1) {
            fwt1.play();
          }
        }

        if (wts >= 171) {
          text('so many decades brought me suffering.', 31, 48);
        }

        rdg += 1;
        if (rdg >= 180 && keyIsDown(90)) {
          oilg = 2;
          rdg = 0;
        }

        break;
      case 2:

        imageMode(CORNER);
        image(dlg0, 15, 14);
        fill(255);
        textAlign(LEFT);
        textFont(apple, 6);

        wtss += 1;

        if (wtss < 108) {
          word = oldg2[0];
          text(word, 31, 36);
          if (wtss >= 2) {
            word += oldg2[1];
            text(word, 31, 36);
          }
          if (wtss >= 4) {
            word += oldg2[2];
            text(word, 31, 36);
          }
          if (wtss >= 6) {
            word += oldg2[3];
            text(word, 31, 36);
          }
          if (wtss >= 8) {
            word += oldg2[4];
            text(word, 31, 36);
          }
          if (wtss >= 10) {
            word += oldg2[5];
            text(word, 31, 36);
          }
          if (wtss >= 12) {
            word += oldg2[6];
            text(word, 31, 36);
          }
          if (wtss >= 14) {
            word += oldg2[7];
            text(word, 31, 36);
          }
          if (wtss >= 16) {
            word += oldg2[8];
            text(word, 31, 36);
          }
          if (wtss >= 18) {
            word += oldg2[9];
            text(word, 31, 36);
          }
          if (wtss >= 20) {
            word += oldg2[10];
            text(word, 31, 36);
          }
          if (wtss >= 22) {
            word += oldg2[11];
            text(word, 31, 36);
          }
          if (wtss >= 24) {
            word += oldg2[12];
            text(word, 31, 36);
          }
          if (wtss >= 26) {
            word += oldg2[13];
            text(word, 31, 36);
          }
          if (wtss >= 28) {
            word += oldg2[14];
            text(word, 31, 36);
          }
          if (wtss >= 30) {
            word += oldg2[15];
            text(word, 31, 36);
          }
          if (wtss >= 32) {
            word += oldg2[16];
            text(word, 31, 36);
          }
          if (wtss >= 34) {
            word += oldg2[17];
            text(word, 31, 36);
          }
          if (wtss >= 36) {
            word += oldg2[18];
            text(word, 31, 36);
          }
          if (wtss >= 38) {
            word += oldg2[19];
            text(word, 31, 36);
          }
          if (wtss >= 40) {
            word += oldg2[20];
            text(word, 31, 36);
          }
          if (wtss >= 42) {
            word += oldg2[21];
            text(word, 31, 36);
          }
          if (wtss >= 44) {
            word += oldg2[22];
            text(word, 31, 36);
          }
          if (wtss >= 46) {
            word += oldg2[23];
            text(word, 31, 36);
          }
          if (wtss >= 48) {
            word += oldg2[24];
            text(word, 31, 36);
          }
          if (wtss >= 50) {
            word += oldg2[25];
            text(word, 31, 36);
          }
          if (wtss >= 52) {
            word += oldg2[26];
            text(word, 31, 36);
          }
          if (wtss >= 54) {
            word += oldg2[27];
            text(word, 31, 36);
          }
          if (wtss >= 56) {
            word += oldg2[28];
            text(word, 31, 36);
          }
          if (wtss >= 58) {
            word += oldg2[29];
            text(word, 31, 36);
          }
          if (wtss >= 60) {
            word += oldg2[30];
            text(word, 31, 36);
          }
          if (wtss >= 62) {
            word += oldg2[31];
            text(word, 31, 36);
          }
          if (wtss >= 77) {
            word += oldg2[32];
            text(word, 31, 36);
            text(word, 31, 36);
          }
          if (wtss >= 92) {
            word += oldg2[33];
            text(word, 31, 36);
            text(word, 31, 36);
          }
          if (wtss >= 107) {
            word += oldg2[34];
            text(word, 31, 36);
            text(word, 31, 36);
          }
          if (wtss >= 107) {
            word += oldg2[35];
            text(word, 31, 36);
          }

          if (wtss >= 0 && wtss < 0 + 1) {
            fwt1.play();
          }
          if (wtss >= 2 && wtss < 2 + 1) {
            fwt1.play();
          }
          if (wtss >= 4 && wtss < 4 + 1) {
            fwt1.play();
          }
          if (wtss >= 6 && wtss < 6 + 1) {
            fwt1.play();
          }
          if (wtss >= 8 && wtss < 8 + 1) {
            fwt1.play();
          }
          if (wtss >= 10 && wtss < 10 + 1) {
            fwt1.play();
          }
          if (wtss >= 12 && wtss < 12 + 1) {
            fwt1.play();
          }

          if (wtss >= 16 && wtss < 16 + 1) {
            fwt1.play();
          }
          if (wtss >= 18 && wtss < 18 + 1) {
            fwt1.play();
          }

          if (wtss >= 22 && wtss < 22 + 1) {
            fwt1.play();
          }
          if (wtss >= 24 && wtss < 24 + 1) {
            fwt1.play();
          }
          if (wtss >= 26 && wtss < 26 + 1) {
            fwt1.play();
          }
          if (wtss >= 28 && wtss < 28 + 1) {
            fwt1.play();
          }
          if (wtss >= 30 && wtss < 30 + 1) {
            fwt1.play();
          }
          if (wtss >= 32 && wtss < 32 + 1) {
            fwt1.play();
          }
          if (wtss >= 34 && wtss < 34 + 1) {
            fwt1.play();
          }
          if (wtss >= 36 && wtss < 36 + 1) {
            fwt1.play();
          }
          if (wtss >= 38 && wtss < 38 + 1) {
            fwt1.play();
          }

          if (wtss >= 42 && wtss < 42 + 1) {
            fwt1.play();
          }
          if (wtss >= 44 && wtss < 44 + 1) {
            fwt1.play();
          }
          if (wtss >= 46 && wtss < 46 + 1) {
            fwt1.play();
          }
          if (wtss >= 48 && wtss < 48 + 1) {
            fwt1.play();
          }

          if (wtss >= 52 && wtss < 52 + 1) {
            fwt1.play();
          }
          if (wtss >= 54 && wtss < 54 + 1) {
            fwt1.play();
          }
          if (wtss >= 56 && wtss < 56 + 1) {
            fwt1.play();
          }
          if (wtss >= 58 && wtss < 58 + 1) {
            fwt1.play();
          }
          if (wtss >= 60 && wtss < 60 + 1) {
            fwt1.play();
          }
          if (wtss >= 62 && wtss < 62 + 1) {
            fwt1.play();
          }
          if (wtss >= 77 && wtss < 77 + 1) {
            fwt1.play();
          }
          if (wtss >= 92 && wtss < 92 + 1) {
            fwt1.play();
          }
          if (wtss >= 107 && wtss < 107 + 1) {
            fwt1.play();
          }
        }

        if (wtss >= 60) {
          kcr.volume(kcv);
          kcv -= 0.01;
        }
        if (kcv <= 0) {
          kcv = 0;
          kcr.stop();
        }

        if (wtss >= 108) {
          text('Instead of accepting your banana...', 31, 36);
        }

        push();
        translate(random(-0.5, 0.5), random(-0.5, 0.5));

        if (wtss < 300) {
          if (wtss >= 163) {
            word = oldg2[36];
            text(word, 31, 48);
          }
          if (wtss >= 167) {
            word += oldg2[37];
            text(word, 31, 48);
          }
          if (wtss >= 171) {
            word += oldg2[38];
            text(word, 31, 48);
          }
          if (wtss >= 175) {
            word += oldg2[39];
            text(word, 31, 48);
          }
          if (wtss >= 179) {
            word += oldg2[40];
            text(word, 31, 48);
          }
          if (wtss >= 183) {
            word += oldg2[41];
            text(word, 31, 48);
          }
          if (wtss >= 187) {
            word += oldg2[42];
            text(word, 31, 48);
          }
          if (wtss >= 191) {
            word += oldg2[43];
            text(word, 31, 48);
          }
          if (wtss >= 195) {
            word += oldg2[44];
            text(word, 31, 48);
          }
          if (wtss >= 199) {
            word += oldg2[45];
            text(word, 31, 48);
          }
          if (wtss >= 203) {
            word += oldg2[46];
            text(word, 31, 48);
          }
          if (wtss >= 207) {
            word += oldg2[47];
            text(word, 31, 48);
          }
          if (wtss >= 211) {
            word += oldg2[48];
            text(word, 31, 48);
          }
          if (wtss >= 215) {
            word += oldg2[49];
            text(word, 31, 48);
          }
          if (wtss >= 219) {
            word += oldg2[50];
            text(word, 31, 48);
          }
          if (wtss >= 223) {
            word += oldg2[51];
            text(word, 31, 48);
          }
          if (wtss >= 227) {
            word += oldg2[52];
            text(word, 31, 48);
          }
          if (wtss >= 231) {
            word += oldg2[53];
            text(word, 31, 48);
          }
          if (wtss >= 235) {
            word += oldg2[54];
            text(word, 31, 48);
          }
          if (wtss >= 239) {
            word += oldg2[55];
            text(word, 31, 48);
          }
          if (wtss >= 243) {
            word += oldg2[56];
            text(word, 31, 48);
          }
          if (wtss >= 247) {
            word += oldg2[57];
            text(word, 31, 48);
          }
          if (wtss >= 251) {
            word += oldg2[58];
            text(word, 31, 48);
          }
          if (wtss >= 255) {
            word += oldg2[59];
            text(word, 31, 48);
          }
          if (wtss >= 259) {
            word += oldg2[60];
            text(word, 31, 48);
          }
          if (wtss >= 263) {
            word += oldg2[61];
            text(word, 31, 48);
          }
          if (wtss >= 267) {
            word += oldg2[62];
            text(word, 31, 48);
          }
          if (wtss >= 271) {
            word += oldg2[63];
            text(word, 31, 48);
          }
          if (wtss >= 275) {
            word += oldg2[64];
            text(word, 31, 48);
          }
          if (wtss >= 279) {
            word += oldg2[65];
            text(word, 31, 48);
          }
          if (wtss >= 283) {
            word += oldg2[66];
            text(word, 31, 48);
          }
          if (wtss >= 287) {
            word += oldg2[67];
            text(word, 31, 48);
          }
          if (wtss >= 291) {
            word += oldg2[68];
            text(word, 31, 48);
          }
          if (wtss >= 295) {
            word += oldg2[69];
            text(word, 31, 48);
          }
          if (wtss >= 299) {
            word += oldg2[70];
            text(word, 31, 48);
            text(word, 31, 48);
          }

          if (wtss >= 163 && wtss < 163 + 1) {
            fwt2.play();
          }
          if (wtss >= 167 && wtss < 167 + 1) {
            fwt2.play();
          }
          if (wtss >= 171 && wtss < 171 + 1) {
            fwt2.play();
          }

          if (wtss >= 179 && wtss < 179 + 1) {
            fwt2.play();
          }
          if (wtss >= 183 && wtss < 183 + 1) {
            fwt2.play();
          }
          if (wtss >= 187 && wtss < 187 + 1) {
            fwt2.play();
          }
          if (wtss >= 191 && wtss < 191 + 1) {
            fwt2.play();
          }
          if (wtss >= 195 && wtss < 195 + 1) {
            fwt2.play();
          }

          if (wtss >= 203 && wtss < 203 + 1) {
            fwt2.play();
          }
          if (wtss >= 207 && wtss < 207 + 1) {
            fwt2.play();
          }
          if (wtss >= 211 && wtss < 211 + 1) {
            fwt2.play();
          }
          if (wtss >= 215 && wtss < 215 + 1) {
            fwt2.play();
          }

          if (wtss >= 223 && wtss < 223 + 1) {
            fwt2.play();
          }
          if (wtss >= 227 && wtss < 227 + 1) {
            fwt2.play();
          }

          if (wtss >= 235 && wtss < 235 + 1) {
            fwt2.play();
          }
          if (wtss >= 239 && wtss < 239 + 1) {
            fwt2.play();
          }
          if (wtss >= 243 && wtss < 243 + 1) {
            fwt2.play();
          }
          if (wtss >= 247 && wtss < 247 + 1) {
            fwt2.play();
          }
          if (wtss >= 251 && wtss < 251 + 1) {
            fwt2.play();
          }

          if (wtss >= 259 && wtss < 259 + 1) {
            fwt2.play();
          }
          if (wtss >= 263 && wtss < 263 + 1) {
            fwt2.play();
          }
          if (wtss >= 267 && wtss < 267 + 1) {
            fwt2.play();
          }

          if (wtss >= 275 && wtss < 275 + 1) {
            fwt2.play();
          }
          if (wtss >= 279 && wtss < 279 + 1) {
            fwt2.play();
          }

          if (wtss >= 287 && wtss < 287 + 1) {
            fwt2.play();
          }
          if (wtss >= 291 && wtss < 291 + 1) {
            fwt2.play();
          }
          if (wtss >= 295 && wtss < 295 + 1) {
            fwt2.play();
          }
          if (wtss >= 299 && wtss < 299 + 1) {
            fwt2.play();
          }
        }

        if (wtss >= 300) {
          text('I\'m gonna take my anger out on you.', 31, 48);
        }

        pop();

        rdg += 1;
        if (rdg >= 299 && keyIsDown(90)) {
          scene = 4;
          rdg = 0;
          mu = 0;
          htimx = (nessP.x - width / 2 + 0.5) / 30;
          htimy = (nessP.y - 143.5) / 30;
        }

        break;
    }
  } else {
    oilg = 4;
  }
}

function characterBodiesThree() {
  if (fff > 0) {
    imageMode(CENTER);
    image(downs[frameCount % 1], nessP.x, nessP.y);
  }

  if (fff <= 0) {
    if (cmv >= 1) {
      if (kd == 0) {
        imageMode(CENTER);
        image(downs[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 1) {
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 2) {
        imageMode(CENTER);
        image(rights[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 3) {
        imageMode(CENTER);
        image(lefts[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 4) {
        imageMode(CENTER);
        image(up_rights[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 5) {
        imageMode(CENTER);
        image(up_lefts[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 6) {
        imageMode(CENTER);
        image(down_rights[frameCount % 1], nessP.x, nessP.y);
      }
      if (kd == 7) {
        imageMode(CENTER);
        image(down_lefts[frameCount % 1], nessP.x, nessP.y);
      }
    } else {
      nessP.body();
    }

    if (cmv <= 0) {
      nessP.move3();
    }
  }

  if (nessP.y <= 71 && nessP.x >= 191) {
    nessP.y += 1;
  }
  if (nessP.y <= 70 && nessP.x >= 190) {
    nessP.x -= 1;
  }
}

function topLayersThree() {
  if (nessP.y - 11 <= blondie.y) {
    imageMode(CORNER);
    blondie.blondie();
  }
  if (nessP.y - 11 <= gabbie.y) {
    imageMode(CORNER);
    gabbie.gabbie();
  }
  if (nessP.y - 11 <= reddie.y) {
    imageMode(CORNER);
    reddie.reddie();
  }
  if (nessP.y - 11 <= oldie.y) {
    imageMode(CORNER);
    oldie.oldie();
  }

  if (bngtm <= 0) {
    bngtm += 1;
  }
  if (bngtm >= 30) {
    bngtm = 0;
  }

  if (nessP.y <= 193) {
    imageMode(CORNER);
    image(classroomp01, -2, 15);
  }

  if (nessP.y <= 200) {
    imageMode(CORNER);
    image(classroomp02, -2, 15);
  }

  if (nessP.y <= 159) {
    imageMode(CORNER);
    image(classroomp03, -2, 15);
  }

  if (nessP.y <= 130) {
    imageMode(CORNER);
    image(classroomp04, -2, 15);
  }

  if (nessP.y <= 96) {
    imageMode(CORNER);
    image(classroomp05, -2, 15);
  }

  if (nessP.y <= 200) {
    imageMode(CORNER);
    image(classroomp06, -2, 15);
  }
}

function npcCollisionThree() {
  blondie.blondie();
  gabbie.gabbie();
  reddie.reddie();
  oldie.oldie();
  blondie.collision();
  gabbie.collision();
  reddie.collision();
  oldie.collision();
}

function thirdNPC() {
  dsk1 = new boxes(78, 117);
  dsk2 = new boxes(129, 117);
  dsk3 = new boxes(179, 117);
  dsk4 = new boxes(78, 146);
  dsk5 = new boxes(129, 146);
  dsk6 = new boxes(179, 146);
  dsk7 = new boxes(97, 74);
  blk = new boxes(35, 197);
  chr = new boxes(235, 204);
  blk2 = new boxes(26, 207);

  blondie = new npc(216, 83);
  gabbie = new npc(26, 145);
  reddie = new npc(53, 184);
  oldie = new npc(207, 185);
}

function backgroundFadeIn() {
  if (htimer > 40) {
    background(0, 0, 0, fffff);
    fffff -= 9;
  }

  if (htimer > 20 && htimer <= 70) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }
}

function heartBlinks() {
  if (ntimer <= 2 && ntimer > 1) {
    hurt.play();
  }

  if (htimer <= 2 && htimer > 1 ||
    htimer <= 12 && htimer > 11) {
    bbeat.play();
  }

  if (htimer <= 22 && htimer > 21) {
    bfall.play();
  }

  if (htimer >= 0 && htimer <= 5 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (htimer > 10 && htimer <= 15 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (ntimer >= 8 && ntimer <= 16 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (ntimer >= 24 && ntimer <= 32 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (ntimer >= 40 && ntimer <= 48 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (htimer > 20 && ntimer >= 56 && cswt <= 0) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (htimer > 20 && ntimer >= 56 && cswt >= 1) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }

  if (cswt >= 1) {
    imageMode(CENTER);
    image(heart2, nessP.x, nessP.y + 5);
  }
}

function heartTransition() {
  if (htimer > 25 && htimer <= 55) {
    nessP.x -= htimx;
    nessP.y -= htimy;

    if (nessP.x <= width / 2 + 0.5) {
      nessP.x = width / 2 + 0.5;
    }

    if (nessP.y <= 143.5) {
      nessP.y = 143.5;
    }
  }
}

function playerControlsThree() {
  if (htimer > 60) {
    if (keyIsDown(UP_ARROW)) {
      nessP.y -= 1;
      if (nessP.y + 2 <= 108) {
        nessP.y += 1;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      nessP.y += 1;
      if (nessP.y + 8 >= 192) {
        nessP.y -= 1;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      nessP.x -= 1;
      if (nessP.x - 3 <= 86) {
        nessP.x += 1;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      nessP.x += 1;
      if (nessP.x + 3 >= 171) {
        nessP.x -= 1;
      }
    }
  }
}

function dropsMove() {
  if (htimer >= random(100, 107)) {
    drswt += 1
  } else {
    drop.x = oldx - 6;
    drop.y = oldy - 2;
  }
  if (htimer >= random(107, 114)) {
    drswt1 += 1
  } else {
    drop1.x = oldx + 5;
    drop1.y = oldy - 2;
  }
  //if (htimer >= random(114,121)) { drswt2 += 1 }
  //else {drop2.x = oldx - 6; drop2.y = oldy - 2;}
  //if (htimer >= random(121,128)) { drswt3 += 1 }
  //else {drop3.x = oldx + 5; drop3.y = oldy - 2;}
  if (htimer >= random(128, 135)) {
    drswt4 += 1
  } else {
    drop4.x = oldx - 6;
    drop4.y = oldy - 2;
  }
  if (htimer >= random(135, 142)) {
    drswt5 += 1
  } else {
    drop5.x = oldx + 5;
    drop5.y = oldy - 2;
  }
  //if (htimer >= random(142,149)) { drswt6 += 1 }
  //else {drop6.x = oldx - 6; drop6.y = oldy - 2;}
  //if (htimer >= random(149,156)) { drswt7 += 1 }
  //else {drop7.x = oldx + 5; drop7.y = oldy - 2;}
  if (htimer >= random(156, 163)) {
    drswt8 += 1
  } else {
    drop8.x = oldx - 6;
    drop8.y = oldy - 2;
  }
  if (htimer >= random(163, 170)) {
    drswt9 += 1
  } else {
    drop9.x = oldx + 5;
    drop9.y = oldy - 2;
  }
  //if (htimer >= random(170,177)) { drswt10 += 1 }
  //else {drop10.x = oldx - 6; drop10.y = oldy - 2;}

  //if (htimer >= random(177,184)) { drswt11 += 1 }
  //else {drop11.x = oldx - 6; drop11.y = oldy - 2;}
  if (htimer >= random(184, 191)) {
    drswt12 += 1
  } else {
    drop12.x = oldx + 5;
    drop12.y = oldy - 2;
  }
  if (htimer >= random(191, 198)) {
    drswt13 += 1
  } else {
    drop13.x = oldx - 6;
    drop13.y = oldy - 2;
  }
  //if (htimer >= random(198,205)) { drswt14 += 1 }
  //else {drop14.x = oldx + 5; drop14.y = oldy - 2;}
  //if (htimer >= random(205,212)) { drswt15 += 1 }
  //else {drop15.x = oldx - 6; drop15.y = oldy - 2;}
  if (htimer >= random(212, 219)) {
    drswt16 += 1
  } else {
    drop16.x = oldx + 5;
    drop16.y = oldy - 2;
  }
  if (htimer >= random(219, 226)) {
    drswt17 += 1
  } else {
    drop17.x = oldx - 6;
    drop17.y = oldy - 2;
  }
  //if (htimer >= random(226,233)) { drswt18 += 1 }
  //else {drop18.x = oldx + 5; drop18.y = oldy - 2;}
  //if (htimer >= random(233,240)) { drswt19 += 1 }
  //else {drop19.x = oldx - 6; drop19.y = oldy - 2;}
  if (htimer >= random(240, 247)) {
    drswt20 += 1
  } else {
    drop20.x = oldx + 5;
    drop20.y = oldy - 2;
  }
  if (htimer >= random(247, 254)) {
    drswt21 += 1
  } else {
    drop21.x = oldx - 6;
    drop21.y = oldy - 2;
  }

  //if (htimer >= random(254,261)) { drswt22 += 1 }
  //else {drop22.x = oldx - 6; drop22.y = oldy - 2;}
  //if (htimer >= random(261,268)) { drswt23 += 1 }
  //else {drop23.x = oldx + 5; drop23.y = oldy - 2;}
  if (htimer >= random(268, 275)) {
    drswt24 += 1
  } else {
    drop24.x = oldx - 6;
    drop24.y = oldy - 2;
  }
  if (htimer >= random(275, 282)) {
    drswt25 += 1
  } else {
    drop25.x = oldx + 5;
    drop25.y = oldy - 2;
  }
  //if (htimer >= random(282,289)) { drswt26 += 1 }
  //else {drop26.x = oldx - 6; drop26.y = oldy - 2;}
  //if (htimer >= random(289,296)) { drswt27 += 1 }
  //else {drop27.x = oldx + 5; drop27.y = oldy - 2;}
  if (htimer >= random(296, 303)) {
    drswt28 += 1
  } else {
    drop28.x = oldx - 6;
    drop28.y = oldy - 2;
  }
  if (htimer >= random(303, 310)) {
    drswt29 += 1
  } else {
    drop29.x = oldx + 5;
    drop29.y = oldy - 2;
  }
  //if (htimer >= random(310,317)) { drswt30 += 1 }
  //else {drop30.x = oldx - 6; drop30.y = oldy - 2;}

  if (drswt >= 6 && cswt <= 0 && htimer <= 200) {
    drswt = 6;
    drop.y += 2.6;
    drop.drop();
  }

  if (drswt1 >= 6 && cswt <= 0 && htimer <= 207) {
    drswt1 = 6;
    drop1.y += 3.0;
    drop1.drop();
  }

  //if (drswt2 >= 6 && cswt <= 0 && htimer <= 214) 
  //{ drswt2 = 6; drop2.y += 2.5; drop2.drop(); }

  //if (drswt3 >= 6 && cswt <= 0 && htimer <= 221) 
  //{ drswt3 = 6; drop3.y += 3.0; drop3.drop(); }

  if (drswt4 >= 6 && cswt <= 0 && htimer <= 228) {
    drswt4 = 6;
    drop4.y += 2.9;
    drop4.drop();
  }

  if (drswt5 >= 6 && cswt <= 0 && htimer <= 235) {
    drswt5 = 6;
    drop5.y += 3.5;
    drop5.drop();
  }

  //if (drswt6 >= 6 && cswt <= 0 && htimer <= 242) 
  //{ drswt6 = 6; drop6.y += 3.0; drop6.drop(); }

  //if (drswt7 >= 6 && cswt <= 0 && htimer <= 249) 
  //{ drswt7 = 6; drop7.y += 2.7; drop7.drop(); }

  if (drswt8 >= 6 && cswt <= 0 && htimer <= 256) {
    drswt8 = 6;
    drop8.y += 2.8;
    drop8.drop();
  }

  if (drswt9 >= 6 && cswt <= 0 && htimer <= 263) {
    drswt9 = 6;
    drop9.y += 2.5;
    drop9.drop();
  }

  //if (drswt10 >= 6 && cswt <= 0 && htimer <= 270) 
  //{ drswt10 = 6; drop10.y += 3.4; drop10.drop(); }


  //if (drswt11 >= 6 && cswt <= 0 && htimer <= 277) 
  //{ drswt11 = 6; drop11.y += 3.5; drop11.drop(); }

  if (drswt12 >= 6 && cswt <= 0 && htimer <= 284) {
    drswt12 = 6;
    drop12.y += 2.9;
    drop12.drop();
  }

  if (drswt13 >= 6 && cswt <= 0 && htimer <= 291) {
    drswt13 = 6;
    drop13.y += 2.6;
    drop13.drop();
  }

  //if (drswt14 >= 6 && cswt <= 0 && htimer <= 298) 
  //{ drswt14 = 6; drop14.y += 3.0; drop14.drop(); }

  //if (drswt15 >= 6 && cswt <= 0 && htimer <= 305) 
  //{ drswt15 = 6; drop15.y += 3.4; drop15.drop(); }

  if (drswt16 >= 6 && cswt <= 0 && htimer <= 412) {
    drswt16 = 6;
    drop16.y += 3.0;
    drop16.drop();
  }

  if (drswt17 >= 6 && cswt <= 0 && htimer <= 419) {
    drswt17 = 6;
    drop17.y += 3.0;
    drop17.drop();
  }

  //if (drswt18 >= 6 && cswt <= 0 && htimer <= 426) 
  //{ drswt18 = 6; drop18.y += 2.5; drop18.drop(); }

  //if (drswt19 >= 6 && cswt <= 0 && htimer <= 433) 
  //{ drswt19 = 6; drop19.y += 2.8; drop19.drop(); }

  if (drswt20 >= 6 && cswt <= 0 && htimer <= 440) {
    drswt20 = 6;
    drop20.y += 3.5;
    drop20.drop();
  }


  if (drswt21 >= 6 && cswt <= 0 && htimer <= 447) {
    drswt21 = 6;
    drop21.y += 3.0;
    drop21.drop();
  }

  //if (drswt22 >= 6 && cswt <= 0 && htimer <= 454) 
  //{ drswt22 = 6; drop22.y += 2.5; drop22.drop(); }

  //if (drswt23 >= 6 && cswt <= 0 && htimer <= 461) 
  //{ drswt23 = 6; drop23.y += 3.4; drop23.drop(); }

  if (drswt24 >= 6 && cswt <= 0 && htimer <= 468) {
    drswt24 = 6;
    drop24.y += 2.8;
    drop24.drop();
  }

  if (drswt25 >= 6 && cswt <= 0 && htimer <= 475) {
    drswt25 = 6;
    drop25.y += 3.0;
    drop25.drop();
  }

  //if (drswt26 >= 6 && cswt <= 0 && htimer <= 482) 
  //{ drswt26 = 6; drop26.y += 2.6; drop26.drop(); }

  //if (drswt27 >= 6 && cswt <= 0 && htimer <= 489) 
  //{ drswt27 = 6; drop27.y += 2.5; drop27.drop(); }

  if (drswt28 >= 6 && cswt <= 0 && htimer <= 496) {
    drswt28 = 6;
    drop28.y += 2.7;
    drop28.drop();
  }

  if (drswt29 >= 6 && cswt <= 0 && htimer <= 503) {
    drswt29 = 6;
    drop29.y += 2.9;
    drop29.drop();
  }

  //if (drswt30 >= 6 && cswt <= 0 && htimer <= 510) 
  //{ drswt30 = 6; drop30.y += 2.5; drop30.drop(); }
}


function dropHealth() {
  drop.dHealth();
  drop1.dHealth();
  drop2.dHealth();
  drop3.dHealth();
  drop4.dHealth();
  drop5.dHealth();
  drop6.dHealth();
  drop7.dHealth();
  drop8.dHealth();
  drop9.dHealth();
  drop10.dHealth();
  drop11.dHealth();
  drop12.dHealth();
  drop13.dHealth();
  drop14.dHealth();
  drop15.dHealth();
  drop16.dHealth();
  drop17.dHealth();
  drop18.dHealth();
  drop19.dHealth();
  drop20.dHealth();
  drop21.dHealth();
  drop22.dHealth();
  drop23.dHealth();
  drop24.dHealth();
  drop25.dHealth();
  drop26.dHealth();
  drop27.dHealth();
  drop28.dHealth();
  drop29.dHealth();
  drop30.dHealth();

  drop0.dHealth();
  drop01.dHealth();
  drop02.dHealth();
  drop03.dHealth();
  drop04.dHealth();
  drop05.dHealth();
  drop06.dHealth();
  drop07.dHealth();
  drop08.dHealth();
  drop09.dHealth();
  drop010.dHealth();
  drop011.dHealth();
  drop012.dHealth();
  drop013.dHealth();
  drop014.dHealth();
  drop015.dHealth();
  drop016.dHealth();
  drop017.dHealth();
  drop018.dHealth();
  drop019.dHealth();
  drop020.dHealth();
  drop021.dHealth();
  drop022.dHealth();
  drop023.dHealth();
  drop024.dHealth();
  drop025.dHealth();
  drop026.dHealth();
  drop027.dHealth();
  drop028.dHealth();
  drop029.dHealth();
  drop030.dHealth();

  drop00.dHealth();
  drop001.dHealth();
  drop002.dHealth();
  drop003.dHealth();
  drop004.dHealth();
  drop005.dHealth();
  drop006.dHealth();
  drop007.dHealth();
  drop008.dHealth();
  drop009.dHealth();
  drop0010.dHealth();
  drop0011.dHealth();
  drop0012.dHealth();
  drop0013.dHealth();
  drop0014.dHealth();
  drop0015.dHealth();
  drop0016.dHealth();
  drop0017.dHealth();
  drop0018.dHealth();
  drop0019.dHealth();
  drop0020.dHealth();
  drop0021.dHealth();
  drop0022.dHealth();
  drop0023.dHealth();
  drop0024.dHealth();
  drop0025.dHealth();
  drop0026.dHealth();
  drop0027.dHealth();
  drop0028.dHealth();
  drop0029.dHealth();
  drop0030.dHealth();
}

function knifeHealth() {
  lkn.kHealth();
  rkn.kHealth();
  lkn2.kHealth();
  rkn2.kHealth();
  lkn3.kHealth();
  rkn3.kHealth();
  lkn4.kHealth();
  rkn4.kHealth();
  lkn5.kHealth();
  rkn5.kHealth();
  lkn6.kHealth();
  rkn6.kHealth();
  lkn7.kHealth();
  rkn7.kHealth();
  lkn8.kHealth();
  rkn8.kHealth();
  lkn9.kHealth();
  rkn9.kHealth();
}

function knifeBody() {
  lkn.lkn();
  rkn.rkn();
  lkn2.lkn();
  rkn2.rkn();
  lkn3.lkn();
  rkn3.rkn();
  lkn4.lkn();
  rkn4.rkn();
  lkn5.lkn();
  rkn5.rkn();
  lkn6.lkn();
  rkn6.rkn();
  lkn7.lkn();
  rkn7.rkn();
  lkn8.lkn();
  rkn8.rkn();
  lkn9.lkn();
  rkn9.rkn();
}

function knifeMove() {
  let kte = 2330;
  let kted = 270;

  if (htimer >= 360 && htimer <= 460 || htimer >= 615 + kte && htimer <= 715 + kte ||
    htimer >= 615 + kte + kted && htimer <= 715 + kte + kted) {
    rkn.x -= rkn.dx;
    rkn.y -= rkn.dy;
    if (rkn.x <= 104) {
      rkn.dx *= -1;
    }
  } else {
    rkn.x = 276;
    rkn.y = 220;
    rkn.dx = 5;
    rkn.dy = 1;
  }

  if (htimer >= 375 && htimer <= 475 || htimer >= 600 + kte && htimer <= 700 + kte ||
    htimer >= 600 + kte + kted && htimer <= 700 + kte + kted) {
    lkn.x += lkn.dx;
    lkn.y += lkn.dy;
    if (lkn.x >= 153) {
      lkn.dx *= -1;
    }
  } else {
    lkn.x = -19;
    lkn.y = 80;
    lkn.dx = 5;
    lkn.dy = 1;
  }


  if (htimer >= 1200) {
    if (htimer >= 390 && htimer <= 490 || htimer >= 585 + kte && htimer <= 685 + kte ||
      htimer >= 585 + kte + kted && htimer <= 685 + kte + kted) {
      rkn2.x -= rkn2.dx;
      rkn2.y -= rkn2.dy;
      if (rkn2.x <= 104) {
        rkn2.dx *= -1;
      }
    } else {
      rkn2.x = 276;
      rkn2.y = 197;
      rkn2.dx = 5;
      rkn2.dy = 1;
    }

    if (htimer >= 405 && htimer <= 505 || htimer >= 570 + kte && htimer <= 670 + kte ||
      htimer >= 570 + kte + kted && htimer <= 670 + kte + kted) {
      lkn2.x += lkn2.dx;
      lkn2.y += lkn2.dy;
      if (lkn2.x >= 153) {
        lkn2.dx *= -1;
      }
    } else {
      lkn2.x = -19;
      lkn2.y = 103;
      lkn2.dx = 5;
      lkn2.dy = 1;
    }
  }


  if (htimer >= 420 && htimer <= 520 || htimer >= 555 + kte && htimer <= 655 + kte ||
    htimer >= 555 + kte + kted && htimer <= 655 + kte + kted) {
    rkn3.x -= rkn3.dx;
    rkn3.y -= rkn3.dy;
    if (rkn3.x <= 104) {
      rkn3.dx *= -1;
    }
  } else {
    rkn3.x = 276;
    rkn3.y = 174;
    rkn3.dx = 5;
    rkn3.dy = 1;
  }

  if (htimer >= 435 && htimer <= 535 || htimer >= 540 + kte && htimer <= 640 + kte ||
    htimer >= 540 + kte + kted && htimer <= 640 + kte + kted) {
    lkn3.x += lkn3.dx;
    lkn3.y += lkn3.dy;
    if (lkn3.x >= 153) {
      lkn3.dx *= -1;
    }
  } else {
    lkn3.x = -19;
    lkn3.y = 126;
    lkn3.dx = 5;
    lkn3.dy = 1;
  }


  if (htimer >= 1200) {
    if (htimer >= 450 && htimer <= 550 || htimer >= 525 + kte && htimer <= 625 + kte ||
      htimer >= 525 + kte + kted && htimer <= 625 + kte + kted) {
      rkn4.x -= rkn4.dx;
      rkn4.y -= rkn4.dy;
      if (rkn4.x <= 104) {
        rkn4.dx *= -1;
      }
    } else {
      rkn4.x = 276;
      rkn4.y = 150;
      rkn4.dx = 5;
      rkn4.dy = 1;
    }

    if (htimer >= 465 && htimer <= 565 || htimer >= 510 + kte && htimer <= 610 + kte ||
      htimer >= 510 + kte + kted && htimer <= 610 + kte + kted) {
      lkn4.x += lkn4.dx;
      lkn4.y += lkn4.dy;
      if (lkn4.x >= 153) {
        lkn4.dx *= -1;
      }
    } else {
      lkn4.x = -19;
      lkn4.y = 150;
      lkn4.dx = 5;
      lkn4.dy = 1;
    }
  }


  if (htimer >= 480 && htimer <= 580 || htimer >= 495 + kte && htimer <= 595 + kte ||
    htimer >= 495 + kte + kted && htimer <= 595 + kte + kted) {
    rkn5.x -= rkn5.dx;
    rkn5.y -= rkn5.dy;
    if (rkn5.x <= 104) {
      rkn5.dx *= -1;
    }
  } else {
    rkn5.x = 276;
    rkn5.y = 220;
    rkn5.dx = 5;
    rkn5.dy = 1;
  }

  if (htimer >= 495 && htimer <= 595 || htimer >= 480 + kte && htimer <= 580 + kte ||
    htimer >= 480 + kte + kted && htimer <= 580 + kte + kted) {
    lkn5.x += lkn5.dx;
    lkn5.y += lkn5.dy;
    if (lkn5.x >= 153) {
      lkn5.dx *= -1;
    }
  } else {
    lkn5.x = -19;
    lkn5.y = 114;
    lkn5.dx = 5;
    lkn5.dy = 1;
  }


  if (htimer >= 1200) {
    if (htimer >= 510 && htimer <= 610 || htimer >= 465 + kte && htimer <= 565 + kte ||
      htimer >= 465 + kte + kted && htimer <= 565 + kte + kted) {
      rkn6.x -= rkn6.dx;
      rkn6.y -= rkn6.dy;
      if (rkn6.x <= 104) {
        rkn6.dx *= -1;
      }
    } else {
      rkn6.x = 276;
      rkn6.y = 167;
      rkn6.dx = 5;
      rkn6.dy = 1;
    }

    if (htimer >= 525 && htimer <= 625 || htimer >= 450 + kte && htimer <= 550 + kte ||
      htimer >= 450 + kte + kted && htimer <= 550 + kte + kted) {
      lkn6.x += lkn6.dx;
      lkn6.y += lkn6.dy;
      if (lkn6.x >= 153) {
        lkn6.dx *= -1;
      }
    } else {
      lkn6.x = -19;
      lkn6.y = 80;
      lkn6.dx = 5;
      lkn6.dy = 1;
    }
  }


  if (htimer >= 540 && htimer <= 640 || htimer >= 435 + kte && htimer <= 535 + kte ||
    htimer >= 435 + kte + kted && htimer <= 535 + kte + kted) {
    rkn7.x -= rkn7.dx;
    rkn7.y -= rkn7.dy;
    if (rkn7.x <= 104) {
      rkn7.dx *= -1;
    }
  } else {
    rkn7.x = 276;
    rkn7.y = 150;
    rkn7.dx = 5;
    rkn7.dy = 1;
  }

  if (htimer >= 555 && htimer <= 655 || htimer >= 420 + kte && htimer <= 520 + kte ||
    htimer >= 420 + kte + kted && htimer <= 520 + kte + kted) {
    lkn7.x += lkn7.dx;
    lkn7.y += lkn7.dy;
    if (lkn7.x >= 153) {
      lkn7.dx *= -1;
    }
  } else {
    lkn7.x = -19;
    lkn7.y = 150;
    lkn7.dx = 5;
    lkn7.dy = 1;
  }


  if (htimer >= 1200) {
    if (htimer >= 570 && htimer <= 670 || htimer >= 405 + kte && htimer <= 505 + kte ||
      htimer >= 405 + kte + kted && htimer <= 505 + kte + kted) {
      rkn8.x -= rkn8.dx;
      rkn8.y -= rkn8.dy;
      if (rkn8.x <= 104) {
        rkn8.dx *= -1;
      }
    } else {
      rkn8.x = 276;
      rkn8.y = 204;
      rkn8.dx = 5;
      rkn8.dy = 1;
    }

    if (htimer >= 585 && htimer <= 685 || htimer >= 390 + kte && htimer <= 490 + kte ||
      htimer >= 390 + kte + kted && htimer <= 490 + kte + kted) {
      lkn8.x += lkn8.dx;
      lkn8.y += lkn8.dy;
      if (lkn8.x >= 153) {
        lkn8.dx *= -1;
      }
    } else {
      lkn8.x = -19;
      lkn8.y = 92;
      lkn8.dx = 5;
      lkn8.dy = 1;
    }
  }


  if (htimer >= 600 && htimer <= 700 || htimer >= 375 + kte && htimer <= 475 + kte ||
    htimer >= 375 + kte + kted && htimer <= 475 + kte + kted) {
    rkn9.x -= rkn9.dx;
    rkn9.y -= rkn9.dy;
    if (rkn9.x <= 104) {
      rkn9.dx *= -1;
    }
  } else {
    rkn9.x = 276;
    rkn9.y = 185;
    rkn9.dx = 5;
    rkn9.dy = 1;
  }

  if (htimer >= 615 && htimer <= 715 || htimer >= 360 + kte && htimer <= 460 + kte ||
    htimer >= 360 + kte + kted && htimer <= 460 + kte + kted) {
    lkn9.x += lkn9.dx;
    lkn9.y += lkn9.dy;
    if (lkn9.x >= 153) {
      lkn9.dx *= -1;
    }
  } else {
    lkn9.x = -19;
    lkn9.y = 137;
    lkn9.dx = 5;
    lkn9.dy = 1;
  }
}

function orbMove() {
  let otte = 2300;
  let oeet = 300;

  if (htimer >= 560 + 110 && htimer <= 560 + 310 && cswt <= 0 ||
    htimer >= 560 + 410 && htimer <= 560 + 610 && cswt <= 0 ||
    htimer >= 560 + 410 + otte && htimer <= 560 + 610 + otte && cswt <= 0 ||
    htimer >= 560 + 410 + otte + oeet && htimer <= 560 + 610 + otte + oeet && cswt <= 0)

  {
    orb1.x += (nessP.x - orb1.x) / 32;
    orb1.y += 2.5;
    orb1.orb();
  } else {
    orb1.x = oldx + 0;
    orb1.y = oldy + 4;
  }

  if (htimer >= 560 + 120 && htimer <= 560 + 320 && cswt <= 0 ||
    htimer >= 560 + 420 && htimer <= 560 + 620 && cswt <= 0 ||
    htimer >= 560 + 420 + otte && htimer <= 560 + 620 + otte && cswt <= 0 ||
    htimer >= 560 + 420 + otte + oeet && htimer <= 560 + 620 + otte + oeet && cswt <= 0)

  {
    orb2.x += (nessP.x - orb2.x) / 24;
    orb2.y += 1.5;
    orb2.orb();
  } else {
    orb2.x = oldx + 0;
    orb2.y = oldy + 4;
  }

  if (htimer >= 560 + 130 && htimer <= 560 + 330 && cswt <= 0 ||
    htimer >= 560 + 430 && htimer <= 560 + 630 && cswt <= 0 ||
    htimer >= 560 + 430 + otte && htimer <= 560 + 630 + otte && cswt <= 0 ||
    htimer >= 560 + 430 + otte + oeet && htimer <= 560 + 630 + otte + oeet && cswt <= 0)

  {
    orb3.x += (nessP.x - orb3.x) / 35;
    orb3.y += 2.8;
    orb3.orb();
  } else {
    orb3.x = oldx + 0;
    orb3.y = oldy + 4;
  }

  if (htimer >= 560 + 140 && htimer <= 560 + 340 && cswt <= 0 ||
    htimer >= 560 + 440 && htimer <= 560 + 640 && cswt <= 0 ||
    htimer >= 560 + otte + 440 && htimer <= 560 + 640 + otte && cswt <= 0 ||
    htimer >= 560 + otte + 440 + oeet && htimer <= 560 + 640 + otte + oeet && cswt <= 0)

  {
    orb4.x += (nessP.x - orb4.x) / 34;
    orb4.y += 2.1;
    orb4.orb();
  } else {
    orb4.x = oldx + 0;
    orb4.y = oldy + 4;
  }

  if (htimer >= 560 + 150 && htimer <= 560 + 350 && cswt <= 0 ||
    htimer >= 560 + 450 && htimer <= 560 + 650 && cswt <= 0 ||
    htimer >= 560 + otte + 450 && htimer <= 560 + 650 + otte && cswt <= 0 ||
    htimer >= 560 + otte + 450 + oeet && htimer <= 560 + 650 + otte + oeet && cswt <= 0)

  {
    orb5.x += (nessP.x - orb5.x) / 36;
    orb5.y += 3.0;
    orb5.orb();
  } else {
    orb5.x = oldx + 0;
    orb5.y = oldy + 4;
  }

  if (htimer >= 560 + 160 && htimer <= 560 + 360 && cswt <= 0 ||
    htimer >= 560 + 460 && htimer <= 560 + 660 && cswt <= 0 ||
    htimer >= 560 + 460 + otte && htimer <= 560 + 660 + otte && cswt <= 0 ||
    htimer >= 560 + 460 + otte + oeet && htimer <= 560 + 660 + otte + oeet && cswt <= 0)

  {
    orb6.x += (nessP.x - orb6.x) / 26;
    orb6.y += 2.2;
    orb6.orb();
  } else {
    orb6.x = oldx + 0;
    orb6.y = oldy + 4;
  }

  if (htimer >= 560 + 170 && htimer <= 560 + 370 && cswt <= 0 ||
    htimer >= 560 + 470 && htimer <= 560 + 670 && cswt <= 0 ||
    htimer >= 560 + 470 + otte && htimer <= 560 + 670 + otte && cswt <= 0 ||
    htimer >= 560 + 470 + otte + oeet && htimer <= 560 + 670 + otte + oeet && cswt <= 0)

  {
    orb7.x += (nessP.x - orb7.x) / 19;
    orb7.y += 2.6;
    orb7.orb();
  } else {
    orb7.x = oldx + 0;
    orb7.y = oldy + 4;
  }

  //__________________________________________________________\\


  if (htimer >= 560 + 380 && htimer <= 560 + 580 && cswt <= 0 ||
    htimer >= 560 + 480 + otte && htimer <= 560 + 680 + otte && cswt <= 0 ||
    htimer >= 560 + 480 + otte + oeet && htimer <= 560 + 680 + otte + oeet && cswt <= 0)

  {
    orb8.x += (nessP.x - orb8.x) / 22;
    orb8.y += 1.8;
    orb8.orb();
  } else {
    orb8.x = oldx + 0;
    orb8.y = oldy + 4;
  }

  if (htimer >= 560 + 390 && htimer <= 560 + 590 && cswt <= 0 ||
    htimer >= 560 + 490 + otte && htimer <= 560 + 690 + otte && cswt <= 0 ||
    htimer >= 560 + 490 + otte + oeet && htimer <= 560 + 690 + otte + oeet && cswt <= 0)

  {
    orb9.x += (nessP.x - orb9.x) / 30;
    orb9.y += 2.0;
    orb9.orb();
  } else {
    orb9.x = oldx + 0;
    orb9.y = oldy + 4;
  }

  if (htimer >= 560 + 400 && htimer <= 560 + 600 && cswt <= 0 ||
    htimer >= 560 + 500 + otte && htimer <= 560 + 700 + otte && cswt <= 0 ||
    htimer >= 560 + 500 + otte + oeet && htimer <= 560 + 700 + otte + oeet && cswt <= 0)

  {
    orb10.x += (nessP.x - orb10.x) / 27;
    orb10.y += 2.3;
    orb10.orb();
  } else {
    orb10.x = oldx + 0;
    orb10.y = oldy + 4;
  }

  if (htimer >= 560 + 480 && htimer <= 560 + 680 && cswt <= 0)

  {
    orb41.x += (nessP.x - orb41.x) / 22;
    orb41.y += 1.8;
    orb41.orb();
  } else {
    orb41.x = oldx + 0;
    orb41.y = oldy + 4;
  }

  if (htimer >= 560 + 490 && htimer <= 560 + 690 && cswt <= 0)

  {
    orb42.x += (nessP.x - orb42.x) / 30;
    orb42.y += 2.0;
    orb42.orb();
  } else {
    orb42.x = oldx + 0;
    orb42.y = oldy + 4;
  }

  if (htimer >= 560 + 500 && htimer <= 560 + 700 && cswt <= 0)

  {
    orb43.x += (nessP.x - orb43.x) / 27;
    orb43.y += 2.3;
    orb43.orb();
  } else {
    orb43.x = oldx + 0;
    orb43.y = oldy + 4;
  }

  //__________________________________________________________\\


  if (htimer >= 560 + 180 && htimer <= 560 + 380 && cswt <= 0 ||
    htimer >= 560 + 510 && htimer <= 560 + 710 && cswt <= 0 ||
    htimer >= 560 + 510 + otte && htimer <= 560 + 710 + otte && cswt <= 0 ||
    htimer >= 560 + 510 + otte + oeet && htimer <= 560 + 710 + otte + oeet && cswt <= 0)

  {
    orb11.x += (nessP.x - orb11.x) / 21;
    orb11.y += 2.9;
    orb11.orb();
  } else {
    orb11.x = oldx + 0;
    orb11.y = oldy + 4;
  }

  if (htimer >= 560 + 190 && htimer <= 560 + 390 && cswt <= 0 ||
    htimer >= 560 + 520 && htimer <= 560 + 720 && cswt <= 0 ||
    htimer >= 560 + 520 + otte && htimer <= 560 + 720 + otte && cswt <= 0 ||
    htimer >= 560 + 520 + otte + oeet && htimer <= 560 + 720 + otte + oeet && cswt <= 0)

  {
    orb12.x += (nessP.x - orb12.x) / 25;
    orb12.y += 1.9;
    orb12.orb();
  } else {
    orb12.x = oldx + 0;
    orb12.y = oldy + 4;
  }

  if (htimer >= 560 + 200 && htimer <= 560 + 400 && cswt <= 0 ||
    htimer >= 560 + 530 && htimer <= 560 + 730 && cswt <= 0 ||
    htimer >= 560 + 530 + otte && htimer <= 560 + 730 + otte && cswt <= 0 ||
    htimer >= 560 + 530 + otte + oeet && htimer <= 560 + 730 + otte + oeet && cswt <= 0)

  {
    orb13.x += (nessP.x - orb13.x) / 23;
    orb13.y += 2.7;
    orb13.orb();
  } else {
    orb13.x = oldx + 0;
    orb13.y = oldy + 4;
  }

  if (htimer >= 560 + 210 && htimer <= 560 + 410 && cswt <= 0 ||
    htimer >= 560 + 540 && htimer <= 560 + 740 && cswt <= 0 ||
    htimer >= 560 + 540 + otte && htimer <= 560 + 740 + otte && cswt <= 0 ||
    htimer >= 560 + 540 + otte + oeet && htimer <= 560 + 740 + otte + oeet && cswt <= 0)

  {
    orb14.x += (nessP.x - orb14.x) / 28;
    orb14.y += 1.6;
    orb14.orb();
  } else {
    orb14.x = oldx + 0;
    orb14.y = oldy + 4;
  }

  if (htimer >= 560 + 220 && htimer <= 560 + 420 && cswt <= 0 ||
    htimer >= 560 + 550 && htimer <= 560 + 750 && cswt <= 0 ||
    htimer >= 560 + 550 + otte && htimer <= 560 + 750 + otte && cswt <= 0 ||
    htimer >= 560 + 550 + otte + oeet && htimer <= 560 + 750 + otte + oeet && cswt <= 0)

  {
    orb15.x += (nessP.x - orb15.x) / 20;
    orb15.y += 2.4;
    orb15.orb();
  } else {
    orb15.x = oldx + 0;
    orb15.y = oldy + 4;
  }

  if (htimer >= 560 + 230 && htimer <= 560 + 430 && cswt <= 0 ||
    htimer >= 560 + 560 && htimer <= 560 + 760 && cswt <= 0 ||
    htimer >= 560 + 560 + otte && htimer <= 560 + 760 + otte && cswt <= 0 ||
    htimer >= 560 + 560 + otte + oeet && htimer <= 560 + 760 + otte + oeet && cswt <= 0)

  {
    orb16.x += (nessP.x - orb16.x) / 33;
    orb16.y += 1.7;
    orb16.orb();
  } else {
    orb16.x = oldx + 0;
    orb16.y = oldy + 4;
  }

  if (htimer >= 560 + 240 && htimer <= 560 + 440 && cswt <= 0 ||
    htimer >= 560 + 570 && htimer <= 560 + 770 && cswt <= 0 ||
    htimer >= 560 + 570 + otte && htimer <= 560 + 770 + otte && cswt <= 0 ||
    htimer >= 560 + 570 + otte + oeet && htimer <= 560 + 770 + otte + oeet && cswt <= 0)

  {
    orb17.x += (nessP.x - orb17.x) / 31;
    orb17.y += 1.9;
    orb17.orb();
  } else {
    orb17.x = oldx + 0;
    orb17.y = oldy + 4;
  }

  if (htimer >= 560 + 250 && htimer <= 560 + 450 && cswt <= 0 ||
    htimer >= 560 + 580 && htimer <= 560 + 780 && cswt <= 0 ||
    htimer >= 560 + 580 + otte && htimer <= 560 + 780 + otte && cswt <= 0 ||
    htimer >= 560 + 580 + otte + oeet && htimer <= 560 + 780 + otte + oeet && cswt <= 0)

  {
    orb18.x += (nessP.x - orb18.x) / 40;
    orb18.y += 2.6;
    orb18.orb();
  } else {
    orb18.x = oldx + 0;
    orb18.y = oldy + 4;
  }

  if (htimer >= 560 + 260 && htimer <= 560 + 460 && cswt <= 0 ||
    htimer >= 560 + 590 && htimer <= 560 + 790 && cswt <= 0 ||
    htimer >= 560 + 590 + otte && htimer <= 560 + 790 + otte && cswt <= 0 ||
    htimer >= 560 + 590 + otte + oeet && htimer <= 560 + 790 + otte + oeet && cswt <= 0)

  {
    orb19.x += (nessP.x - orb19.x) / 38;
    orb19.y += 1.6;
    orb19.orb();
  } else {
    orb19.x = oldx + 0;
    orb19.y = oldy + 4;
  }

  if (htimer >= 560 + 270 && htimer <= 560 + 470 && cswt <= 0 ||
    htimer >= 560 + 600 && htimer <= 560 + 800 && cswt <= 0 ||
    htimer >= 560 + 600 + otte && htimer <= 560 + 800 + otte && cswt <= 0 ||
    htimer >= 560 + 600 + otte + oeet && htimer <= 560 + 800 + otte + oeet && cswt <= 0)

  {
    orb20.x += (nessP.x - orb20.x) / 37;
    orb20.y += 2.9;
    orb20.orb();
  } else {
    orb20.x = oldx + 0;
    orb20.y = oldy + 4;
  }


  if (htimer >= 560 + 280 && htimer <= 560 + 480 && cswt <= 0 ||
    htimer >= 560 + 610 && htimer <= 560 + 810 && cswt <= 0 ||
    htimer >= 560 + 610 + otte && htimer <= 560 + 810 + otte && cswt <= 0 ||
    htimer >= 560 + 610 + otte + oeet && htimer <= 560 + 810 + otte + oeet && cswt <= 0)

  {
    orb21.x += (nessP.x - orb21.x) / 39;
    orb21.y += 1.7;
    orb21.orb();
  } else {
    orb21.x = oldx + 0;
    orb21.y = oldy + 4;
  }

  if (htimer >= 560 + 290 && htimer <= 560 + 490 && cswt <= 0 ||
    htimer >= 560 + 620 && htimer <= 560 + 820 && cswt <= 0 ||
    htimer >= 560 + 620 + otte && htimer <= 560 + 820 + otte && cswt <= 0 ||
    htimer >= 560 + 620 + otte + oeet && htimer <= 560 + 820 + otte + oeet && cswt <= 0)

  {
    orb22.x += (nessP.x - orb22.x) / 29;
    orb22.y += 2.5;
    orb22.orb();
  } else {
    orb22.x = oldx + 0;
    orb22.y = oldy + 4;
  }

  if (htimer >= 560 + 300 && htimer <= 560 + 500 && cswt <= 0 ||
    htimer >= 560 + 630 && htimer <= 560 + 830 && cswt <= 0 ||
    htimer >= 560 + 630 + otte && htimer <= 560 + 830 + otte && cswt <= 0 ||
    htimer >= 560 + 630 + otte + oeet && htimer <= 560 + 830 + otte + oeet && cswt <= 0)

  {
    orb23.x += (nessP.x - orb23.x) / 26;
    orb23.y += 2.4;
    orb23.orb();
  } else {
    orb23.x = oldx + 0;
    orb23.y = oldy + 4;
  }

  if (htimer >= 560 + 310 && htimer <= 560 + 510 && cswt <= 0 ||
    htimer >= 560 + 640 && htimer <= 560 + 840 && cswt <= 0 ||
    htimer >= 560 + 640 + otte && htimer <= 560 + 840 + otte && cswt <= 0 ||
    htimer >= 560 + 640 + otte + oeet && htimer <= 560 + 840 + otte + oeet && cswt <= 0)

  {
    orb24.x += (nessP.x - orb24.x) / 38;
    orb24.y += 1.5;
    orb24.orb();
  } else {
    orb24.x = oldx + 0;
    orb24.y = oldy + 4;
  }

  if (htimer >= 560 + 320 && htimer <= 560 + 520 && cswt <= 0 ||
    htimer >= 560 + 650 && htimer <= 560 + 850 && cswt <= 0 ||
    htimer >= 560 + 650 + otte && htimer <= 560 + 850 + otte && cswt <= 0 ||
    htimer >= 560 + 650 + otte + oeet && htimer <= 560 + 850 + otte + oeet && cswt <= 0)

  {
    orb25.x += (nessP.x - orb25.x) / 40;
    orb25.y += 2.3;
    orb25.orb();
  } else {
    orb25.x = oldx + 0;
    orb25.y = oldy + 4;
  }

  if (htimer >= 560 + 330 && htimer <= 560 + 530 && cswt <= 0 ||
    htimer >= 560 + 660 && htimer <= 560 + 860 && cswt <= 0 ||
    htimer >= 560 + 660 + otte && htimer <= 560 + 860 + otte && cswt <= 0 ||
    htimer >= 560 + 660 + otte + oeet && htimer <= 560 + 860 + otte + oeet && cswt <= 0)

  {
    orb26.x += (nessP.x - orb26.x) / 28;
    orb26.y += 2.1;
    orb26.orb();
  } else {
    orb26.x = oldx + 0;
    orb26.y = oldy + 4;
  }

  if (htimer >= 560 + 340 && htimer <= 560 + 540 && cswt <= 0 ||
    htimer >= 560 + 670 && htimer <= 560 + 870 && cswt <= 0 ||
    htimer >= 560 + 670 + otte && htimer <= 560 + 870 + otte && cswt <= 0 ||
    htimer >= 560 + 670 + otte + oeet && htimer <= 560 + 870 + otte + oeet && cswt <= 0)

  {
    orb27.x += (nessP.x - orb27.x) / 20;
    orb27.y += 2.2;
    orb27.orb();
  } else {
    orb27.x = oldx + 0;
    orb27.y = oldy + 4;
  }

  if (htimer >= 560 + 350 && htimer <= 560 + 550 && cswt <= 0 ||
    htimer >= 560 + 680 && htimer <= 560 + 880 && cswt <= 0 ||
    htimer >= 560 + 680 + otte && htimer <= 560 + 880 + otte && cswt <= 0 ||
    htimer >= 560 + 680 + otte + oeet && htimer <= 560 + 880 + otte + oeet && cswt <= 0)

  {
    orb28.x += (nessP.x - orb28.x) / 30;
    orb28.y += 2.8;
    orb28.orb();
  } else {
    orb28.x = oldx + 0;
    orb28.y = oldy + 4;
  }

  if (htimer >= 560 + 360 && htimer <= 560 + 560 && cswt <= 0 ||
    htimer >= 560 + 690 && htimer <= 560 + 890 && cswt <= 0 ||
    htimer >= 560 + 690 + otte && htimer <= 560 + 890 + otte && cswt <= 0 ||
    htimer >= 560 + 690 + otte + oeet && htimer <= 560 + 890 + otte + oeet && cswt <= 0)

  {
    orb29.x += (nessP.x - orb29.x) / 27;
    orb29.y += 3.0;
    orb29.orb();
  } else {
    orb29.x = oldx + 0;
    orb29.y = oldy + 4;
  }

  if (htimer >= 560 + 370 && htimer <= 560 + 570 && cswt <= 0 ||
    htimer >= 560 + 700 && htimer <= 560 + 900 && cswt <= 0 ||
    htimer >= 560 + 700 + otte && htimer <= 560 + 900 + otte && cswt <= 0 ||
    htimer >= 560 + 700 + otte + oeet && htimer <= 560 + 900 + otte + oeet && cswt <= 0)

  {
    orb30.x += (nessP.x - orb30.x) / 21;
    orb30.y += 1.8;
    orb30.orb();
  } else {
    orb30.x = oldx + 0;
    orb30.y = oldy + 4;
  }
}

function orbHealth() {
  orb1.oHealth();
  orb2.oHealth();
  orb3.oHealth();
  orb4.oHealth();
  orb5.oHealth();
  orb6.oHealth();
  orb7.oHealth();
  orb8.oHealth();
  orb9.oHealth();
  orb10.oHealth();
  orb11.oHealth();
  orb12.oHealth();
  orb13.oHealth();
  orb14.oHealth();
  orb15.oHealth();
  orb16.oHealth();
  orb17.oHealth();
  orb18.oHealth();
  orb19.oHealth();
  orb20.oHealth();
  orb21.oHealth();
  orb22.oHealth();
  orb23.oHealth();
  orb24.oHealth();
  orb25.oHealth();
  orb26.oHealth();
  orb27.oHealth();
  orb28.oHealth();
  orb29.oHealth();
  orb30.oHealth();
  orb41.oHealth();
  orb42.oHealth();
  orb43.oHealth();
}

function headHealth() {
  if (dist(nessP.x, nessP.y + 4.5, hmx, hmy) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx, hmy) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx1, hmy1) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx1, hmy1) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx2, hmy2) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx2, hmy2) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx3, hmy3) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx3, hmy3) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx4, hmy4) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx4, hmy4) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx5, hmy5) < 9 &&
    ntimer >= 76 && health > 1)

  {
    ntimer = 0;
    health--;
  }

  if (dist(nessP.x, nessP.y + 4.5, hmx5, hmy5) < 9 &&
    ntimer >= 76 && health <= 1)

  {
    cswt = 1;
  }
}

function headMove() {
  let tfb = 1150;

  if (htimer >= 100 + tfb && htimer <= 600 + tfb && cswt <= 0) {
    hmyv += 0.1;
    hmy += hmyv;
    head.head();

    if (hmy >= 280 && htimer <= 210 + tfb) {
      hmyv *= -1;
      hmy -= 1;
    }

    if (htimer >= 205 + tfb && htimer <= 405 + tfb) {
      if (hmy >= 185) {
        hmyv *= -0.9;
        hmy -= 1;
      }

      if (hmy <= 117) {
        hmyv *= -0.9;
        hmy += 1;
      }
    }

    hmx -= hmyx;

    if (htimer >= 205 + tfb && htimer <= 405 + tfb) {
      if (hmx >= 164) {
        hmyx *= -0.9;
        hmx -= 1;
      }

      if (hmx <= 93) {
        hmyx *= -0.9;
        hmx += 1;
      }
    }
  }
  //____________________________________________________________________________\\        

  let tbf = 1210;

  if (htimer >= 100 + tbf && htimer <= 600 + tbf && cswt <= 0) {
    hmyv1 += 0.1;
    hmy1 += hmyv1;
    head1.head1();

    if (hmy1 >= 280 && htimer <= 210 + tbf) {
      hmyv1 *= -1;
      hmy1 -= 1;
    }

    if (htimer >= 205 + tbf && htimer <= 430 + tbf) {
      if (hmy1 >= 185) {
        hmyv1 *= -0.9;
        hmy1 -= 1;
      }

      if (hmy1 <= 117) {
        hmyv1 *= -0.9;
        hmy1 += 1;
      }
    }

    hmx1 += hmyx1;

    if (htimer >= 205 + tbf && htimer <= 430 + tbf) {
      if (hmx1 >= 164) {
        hmyx1 *= -0.9;
        hmx1 -= 1;
      }

      if (hmx1 <= 93) {
        hmyx1 *= -0.9;
        hmx1 += 1;
      }
    }
  }
  //____________________________________________________________________________\\

  let tbf1 = 1380;

  if (htimer >= 100 + tbf1 && htimer <= 650 + tbf1 && cswt <= 0) {
    hmyv2 += 0.1;
    hmy2 -= hmyv2;
    head2.head2();

    if (hmy2 <= -40 && htimer <= 210 + tbf1) {
      hmyv2 *= -1;
      hmy2 += 1;
    }

    if (htimer >= 205 + tbf1 && htimer <= 420 + tbf1) {
      if (hmy2 >= 185) {
        hmyv2 *= -0.92;
        hmy2 -= 1;
      }

      if (hmy2 <= 117) {
        hmyv2 *= -0.92;
        hmy2 += 1;
      }
    }

    hmx2 -= hmyx2;

    if (htimer >= 205 + tbf1 && htimer <= 420 + tbf1) {
      if (hmx2 >= 164) {
        hmyx2 *= -0.9;
        hmx2 -= 1;
      }

      if (hmx2 <= 93) {
        hmyx2 *= -0.9;
        hmx2 += 1;
      }
    }
  }
  //____________________________________________________________________________\\

  let tbf2 = 1440;

  if (htimer >= 100 + tbf2 && htimer <= 650 + tbf2 && cswt <= 0) {
    hmyv3 += 0.1;
    hmy3 -= hmyv3;
    head3.head3();

    if (hmy3 <= -40 && htimer <= 210 + tbf2) {
      hmyv3 *= -1;
      hmy3 += 1;
    }

    if (htimer >= 205 + tbf2 && htimer <= 424 + tbf2) {
      if (hmy3 >= 185) {
        hmyv3 *= -0.92;
        hmy3 -= 1;
      }

      if (hmy3 <= 117) {
        hmyv3 *= -0.92;
        hmy3 += 1;
      }
    }

    hmx3 += hmyx3;

    if (htimer >= 205 + tbf2 && htimer <= 424 + tbf2) {
      if (hmx3 >= 164) {
        hmyx3 *= -0.9;
        hmx3 -= 1;
      }

      if (hmx3 <= 93) {
        hmyx3 *= -0.9;
        hmx3 += 1;
      }
    }
  }
  //____________________________________________________________________________\\

  let tbf3 = 1630;

  if (htimer >= 100 + tbf3 && htimer <= 600 + tbf3 && cswt <= 0) {
    hmyx4 += 0.1;
    hmx4 += hmyx4;
    head4.head4();

    if (hmx4 >= 280 && htimer <= 210 + tbf3) {
      hmyx4 *= -1;
      hmx4 -= 1;
    }

    if (htimer >= 205 + tbf3 && htimer <= 480 + tbf3) {
      if (hmy4 >= 185) {
        hmyv4 *= -0.9;
        hmy4 -= 1;
      }

      if (hmy4 <= 117) {
        hmyv4 *= -0.9;
        hmy4 += 1;
      }
    }

    hmy4 -= hmyv4;

    if (htimer >= 205 + tbf3 && htimer <= 480 + tbf3) {
      if (hmx4 >= 164) {
        hmyx4 *= -0.9;
        hmx4 -= 1;
      }

      if (hmx4 <= 93) {
        hmyx4 *= -0.9;
        hmx4 += 1;
      }
    }
  }
  //____________________________________________________________________________\\

  let tbf4 = 1700;

  if (htimer >= 100 + tbf4 && htimer <= 600 + tbf4 && cswt <= 0) {
    hmyx5 += 0.1;
    hmx5 -= hmyx5;
    head5.head5();

    if (hmx5 <= -23 && htimer <= 210 + tbf4) {
      hmyx5 *= -1;
      hmx5 -= 1;
    }

    if (htimer >= 195 + tbf4 && htimer <= 480 + tbf4) {
      if (hmy5 >= 185) {
        hmyv5 *= -0.9;
        hmy5 -= 1;
      }

      if (hmy5 <= 117) {
        hmyv5 *= -0.9;
        hmy5 += 1;
      }
    }

    hmy5 -= hmyv5;

    if (htimer >= 195 + tbf4 && htimer <= 480 + tbf4) {
      if (hmx5 >= 164) {
        hmyx5 *= -0.9;
        hmx5 -= 1;
      }

      if (hmx5 <= 93) {
        hmyx5 *= -0.9;
        hmx5 += 1;
      }
    }
  }
}

function drops2Move() {
  let dte = 2120;
  let det = 217;
  let dts = 0;

  if (htimer >= random(100 + dte, 107 + dte)) {
    drswt0 += 1
  } else {
    drop0.x = oldx - 6;
    drop0.y = oldy - 2;
  }
  if (htimer >= random(107 + dte, 114 + dte)) {
    drswt01 += 1
  } else {
    drop01.x = oldx + 5;
    drop01.y = oldy - 2;
  }
  if (htimer >= random(114 + dte, 121 + dte)) {
    drswt02 += 1
  } else {
    drop02.x = oldx - 6;
    drop02.y = oldy - 2;
  }
  if (htimer >= random(121 + dte, 128 + dte)) {
    drswt03 += 1
  } else {
    drop03.x = oldx + 5;
    drop03.y = oldy - 2;
  }
  if (htimer >= random(128 + dte, 135 + dte)) {
    drswt04 += 1
  } else {
    drop04.x = oldx - 6;
    drop04.y = oldy - 2;
  }
  if (htimer >= random(135 + dte, 142 + dte)) {
    drswt05 += 1
  } else {
    drop05.x = oldx + 5;
    drop05.y = oldy - 2;
  }
  if (htimer >= random(142 + dte, 149 + dte)) {
    drswt06 += 1
  } else {
    drop06.x = oldx - 6;
    drop06.y = oldy - 2;
  }
  if (htimer >= random(149 + dte, 156 + dte)) {
    drswt07 += 1
  } else {
    drop07.x = oldx + 5;
    drop07.y = oldy - 2;
  }
  if (htimer >= random(156 + dte, 163 + dte)) {
    drswt08 += 1
  } else {
    drop08.x = oldx - 6;
    drop08.y = oldy - 2;
  }
  if (htimer >= random(163 + dte, 170 + dte)) {
    drswt09 += 1
  } else {
    drop09.x = oldx + 5;
    drop09.y = oldy - 2;
  }
  if (htimer >= random(170 + dte, 177 + dte)) {
    drswt010 += 1
  } else {
    drop010.x = oldx - 6;
    drop010.y = oldy - 2;
  }

  if (htimer >= random(177 + dte, 184 + dte)) {
    drswt011 += 1
  } else {
    drop011.x = oldx - 6;
    drop011.y = oldy - 2;
  }
  if (htimer >= random(184 + dte, 191 + dte)) {
    drswt012 += 1
  } else {
    drop012.x = oldx + 5;
    drop012.y = oldy - 2;
  }
  if (htimer >= random(191 + dte, 198 + dte)) {
    drswt013 += 1
  } else {
    drop013.x = oldx - 6;
    drop013.y = oldy - 2;
  }
  if (htimer >= random(198 + dte, 205 + dte)) {
    drswt014 += 1
  } else {
    drop014.x = oldx + 5;
    drop014.y = oldy - 2;
  }
  if (htimer >= random(205 + dte, 212 + dte)) {
    drswt015 += 1
  } else {
    drop015.x = oldx - 6;
    drop015.y = oldy - 2;
  }
  if (htimer >= random(212 + dte, 219 + dte)) {
    drswt016 += 1
  } else {
    drop016.x = oldx + 5;
    drop016.y = oldy - 2;
  }
  if (htimer >= random(219 + dte, 226 + dte)) {
    drswt017 += 1
  } else {
    drop017.x = oldx - 6;
    drop017.y = oldy - 2;
  }
  if (htimer >= random(226 + dte, 233 + dte)) {
    drswt018 += 1
  } else {
    drop018.x = oldx + 5;
    drop018.y = oldy - 2;
  }
  if (htimer >= random(233 + dte, 240 + dte)) {
    drswt019 += 1
  } else {
    drop019.x = oldx - 6;
    drop019.y = oldy - 2;
  }
  if (htimer >= random(240 + dte, 247 + dte)) {
    drswt020 += 1
  } else {
    drop020.x = oldx + 5;
    drop020.y = oldy - 2;
  }
  if (htimer >= random(247 + dte, 254 + dte)) {
    drswt021 += 1
  } else {
    drop021.x = oldx - 6;
    drop021.y = oldy - 2;
  }

  if (htimer >= random(254 + dte, 261 + dte)) {
    drswt022 += 1
  } else {
    drop022.x = oldx - 6;
    drop022.y = oldy - 2;
  }
  if (htimer >= random(261 + dte, 268 + dte)) {
    drswt023 += 1
  } else {
    drop023.x = oldx + 5;
    drop023.y = oldy - 2;
  }
  if (htimer >= random(268 + dte, 275 + dte)) {
    drswt024 += 1
  } else {
    drop024.x = oldx - 6;
    drop024.y = oldy - 2;
  }
  if (htimer >= random(275 + dte, 282 + dte)) {
    drswt025 += 1
  } else {
    drop025.x = oldx + 5;
    drop025.y = oldy - 2;
  }
  if (htimer >= random(282 + dte, 289 + dte)) {
    drswt026 += 1
  } else {
    drop026.x = oldx - 6;
    drop026.y = oldy - 2;
  }
  if (htimer >= random(289 + dte, 296 + dte)) {
    drswt027 += 1
  } else {
    drop027.x = oldx + 5;
    drop027.y = oldy - 2;
  }
  if (htimer >= random(296 + dte, 303 + dte)) {
    drswt028 += 1
  } else {
    drop028.x = oldx - 6;
    drop028.y = oldy - 2;
  }
  if (htimer >= random(303 + dte, 310 + dte)) {
    drswt029 += 1
  } else {
    drop029.x = oldx + 5;
    drop029.y = oldy - 2;
  }
  if (htimer >= random(310 + dte, 317 + dte)) {
    drswt030 += 1
  } else {
    drop030.x = oldx - 6;
    drop030.y = oldy - 2;
  }

  if (drswt0 >= 6 && cswt <= 0 && htimer <= 200 + dte) {
    drswt0 = 6;
    drop0.y += 2.6 + dts;
    drop0.drop();
  }

  if (drswt01 >= 6 && cswt <= 0 && htimer <= 207 + dte) {
    drswt01 = 6;
    drop01.y += 3.0 + dts;
    drop01.drop();
  }

  if (drswt02 >= 6 && cswt <= 0 && htimer <= 214 + dte) {
    drswt02 = 6;
    drop02.y += 2.5 + dts;
    drop02.drop();
  }

  if (drswt03 >= 6 && cswt <= 0 && htimer <= 221 + dte) {
    drswt03 = 6;
    drop03.y += 3.0 + dts;
    drop03.drop();
  }

  if (drswt04 >= 6 && cswt <= 0 && htimer <= 228 + dte) {
    drswt04 = 6;
    drop04.y += 2.9 + dts;
    drop04.drop();
  }

  if (drswt05 >= 6 && cswt <= 0 && htimer <= 235 + dte) {
    drswt05 = 6;
    drop05.y += 3.5 + dts;
    drop05.drop();
  }

  if (drswt06 >= 6 && cswt <= 0 && htimer <= 242 + dte) {
    drswt06 = 6;
    drop06.y += 3.0 + dts;
    drop06.drop();
  }

  if (drswt07 >= 6 && cswt <= 0 && htimer <= 249 + dte) {
    drswt07 = 6;
    drop07.y += 2.7 + dts;
    drop07.drop();
  }

  if (drswt08 >= 6 && cswt <= 0 && htimer <= 256 + dte) {
    drswt08 = 6;
    drop08.y += 2.8 + dts;
    drop08.drop();
  }

  if (drswt09 >= 6 && cswt <= 0 && htimer <= 263 + dte) {
    drswt09 = 6;
    drop09.y += 2.5 + dts;
    drop09.drop();
  }

  if (drswt010 >= 6 && cswt <= 0 && htimer <= 270 + dte) {
    drswt010 = 6;
    drop010.y += 3.4 + dts;
    drop010.drop();
  }


  if (drswt011 >= 6 && cswt <= 0 && htimer <= 277 + dte) {
    drswt011 = 6;
    drop011.y += 3.5 + dts;
    drop011.drop();
  }

  if (drswt012 >= 6 && cswt <= 0 && htimer <= 284 + dte) {
    drswt012 = 6;
    drop012.y += 2.9 + dts;
    drop012.drop();
  }

  if (drswt013 >= 6 && cswt <= 0 && htimer <= 291 + dte) {
    drswt013 = 6;
    drop013.y += 2.6 + dts;
    drop013.drop();
  }

  if (drswt014 >= 6 && cswt <= 0 && htimer <= 298 + dte) {
    drswt014 = 6;
    drop014.y += 3.0 + dts;
    drop014.drop();
  }

  if (drswt015 >= 6 && cswt <= 0 && htimer <= 305 + dte) {
    drswt015 = 6;
    drop015.y += 3.4 + dts;
    drop015.drop();
  }

  if (drswt016 >= 6 && cswt <= 0 && htimer <= 412 + dte) {
    drswt016 = 6;
    drop016.y += 3.0 + dts;
    drop016.drop();
  }

  if (drswt017 >= 6 && cswt <= 0 && htimer <= 419 + dte) {
    drswt017 = 6;
    drop017.y += 3.0 + dts;
    drop017.drop();
  }

  if (drswt018 >= 6 && cswt <= 0 && htimer <= 426 + dte) {
    drswt018 = 6;
    drop018.y += 2.5 + dts;
    drop018.drop();
  }

  if (drswt019 >= 6 && cswt <= 0 && htimer <= 433 + dte) {
    drswt019 = 6;
    drop019.y += 2.8 + dts;
    drop019.drop();
  }

  if (drswt020 >= 6 && cswt <= 0 && htimer <= 440 + dte) {
    drswt020 = 6;
    drop020.y += 3.5 + dts;
    drop020.drop();
  }


  if (drswt021 >= 6 && cswt <= 0 && htimer <= 447 + dte) {
    drswt021 = 6;
    drop021.y += 3.0 + dts;
    drop021.drop();
  }

  if (drswt022 >= 6 && cswt <= 0 && htimer <= 454 + dte) {
    drswt022 = 6;
    drop022.y += 2.5 + dts;
    drop022.drop();
  }

  if (drswt023 >= 6 && cswt <= 0 && htimer <= 461 + dte) {
    drswt023 = 6;
    drop023.y += 3.4 + dts;
    drop023.drop();
  }

  if (drswt024 >= 6 && cswt <= 0 && htimer <= 468 + dte) {
    drswt024 = 6;
    drop024.y += 2.8 + dts;
    drop024.drop();
  }

  if (drswt025 >= 6 && cswt <= 0 && htimer <= 475 + dte) {
    drswt025 = 6;
    drop025.y += 3.0 + dts;
    drop025.drop();
  }

  if (drswt026 >= 6 && cswt <= 0 && htimer <= 482 + dte) {
    drswt026 = 6;
    drop026.y += 2.6 + dts;
    drop026.drop();
  }

  if (drswt027 >= 6 && cswt <= 0 && htimer <= 489 + dte) {
    drswt027 = 6;
    drop027.y += 2.5 + dts;
    drop027.drop();
  }

  if (drswt028 >= 6 && cswt <= 0 && htimer <= 496 + dte) {
    drswt028 = 6;
    drop028.y += 2.7 + dts;
    drop028.drop();
  }

  if (drswt029 >= 6 && cswt <= 0 && htimer <= 503 + dte) {
    drswt029 = 6;
    drop029.y += 2.9 + dts;
    drop029.drop();
  }

  if (drswt030 >= 6 && cswt <= 0 && htimer <= 510 + dte) {
    drswt030 = 6;
    drop030.y += 2.5 + dts;
    drop030.drop();
  }

  //____________________________________________________________________________\\

  if (htimer >= random(100 + dte + det, 107 + dte + det)) {
    drswt00 += 1
  } else {
    drop00.x = oldx - 6;
    drop00.y = oldy - 2;
  }
  if (htimer >= random(107 + dte + det, 114 + dte + det)) {
    drswt001 += 1
  } else {
    drop001.x = oldx + 5;
    drop001.y = oldy - 2;
  }
  if (htimer >= random(114 + dte + det, 121 + dte + det)) {
    drswt002 += 1
  } else {
    drop002.x = oldx - 6;
    drop002.y = oldy - 2;
  }
  if (htimer >= random(121 + dte + det, 128 + dte + det)) {
    drswt003 += 1
  } else {
    drop003.x = oldx + 5;
    drop003.y = oldy - 2;
  }
  if (htimer >= random(128 + dte + det, 135 + dte + det)) {
    drswt004 += 1
  } else {
    drop004.x = oldx - 6;
    drop004.y = oldy - 2;
  }
  if (htimer >= random(135 + dte + det, 142 + dte + det)) {
    drswt005 += 1
  } else {
    drop005.x = oldx + 5;
    drop005.y = oldy - 2;
  }
  if (htimer >= random(142 + dte + det, 149 + dte + det)) {
    drswt006 += 1
  } else {
    drop006.x = oldx - 6;
    drop006.y = oldy - 2;
  }
  if (htimer >= random(149 + dte + det, 156 + dte + det)) {
    drswt007 += 1
  } else {
    drop007.x = oldx + 5;
    drop007.y = oldy - 2;
  }
  if (htimer >= random(156 + dte + det, 163 + dte + det)) {
    drswt008 += 1
  } else {
    drop008.x = oldx - 6;
    drop008.y = oldy - 2;
  }
  if (htimer >= random(163 + dte + det, 170 + dte + det)) {
    drswt009 += 1
  } else {
    drop009.x = oldx + 5;
    drop009.y = oldy - 2;
  }
  if (htimer >= random(170 + dte + det, 177 + dte + det)) {
    drswt0010 += 1
  } else {
    drop0010.x = oldx - 6;
    drop0010.y = oldy - 2;
  }

  if (htimer >= random(177 + dte + det, 184 + dte + det)) {
    drswt0011 += 1
  } else {
    drop0011.x = oldx - 6;
    drop0011.y = oldy - 2;
  }
  if (htimer >= random(184 + dte + det, 191 + dte + det)) {
    drswt0012 += 1
  } else {
    drop0012.x = oldx + 5;
    drop0012.y = oldy - 2;
  }
  if (htimer >= random(191 + dte + det, 198 + dte + det)) {
    drswt0013 += 1
  } else {
    drop0013.x = oldx - 6;
    drop0013.y = oldy - 2;
  }
  if (htimer >= random(198 + dte + det, 205 + dte + det)) {
    drswt0014 += 1
  } else {
    drop0014.x = oldx + 5;
    drop0014.y = oldy - 2;
  }
  if (htimer >= random(205 + dte + det, 212 + dte + det)) {
    drswt0015 += 1
  } else {
    drop0015.x = oldx - 6;
    drop0015.y = oldy - 2;
  }
  if (htimer >= random(212 + dte + det, 219 + dte + det)) {
    drswt0016 += 1
  } else {
    drop0016.x = oldx + 5;
    drop0016.y = oldy - 2;
  }
  if (htimer >= random(219 + dte + det, 226 + dte + det)) {
    drswt0017 += 1
  } else {
    drop0017.x = oldx - 6;
    drop0017.y = oldy - 2;
  }
  if (htimer >= random(226 + dte + det, 233 + dte + det)) {
    drswt0018 += 1
  } else {
    drop0018.x = oldx + 5;
    drop0018.y = oldy - 2;
  }
  if (htimer >= random(233 + dte + det, 240 + dte + det)) {
    drswt0019 += 1
  } else {
    drop0019.x = oldx - 6;
    drop0019.y = oldy - 2;
  }
  if (htimer >= random(240 + dte + det, 247 + dte + det)) {
    drswt0020 += 1
  } else {
    drop0020.x = oldx + 5;
    drop0020.y = oldy - 2;
  }
  if (htimer >= random(247 + dte + det, 254 + dte + det)) {
    drswt0021 += 1
  } else {
    drop0021.x = oldx - 6;
    drop0021.y = oldy - 2;
  }

  if (htimer >= random(254 + dte + det, 261 + dte + det)) {
    drswt0022 += 1
  } else {
    drop0022.x = oldx - 6;
    drop0022.y = oldy - 2;
  }
  if (htimer >= random(261 + dte + det, 268 + dte + det)) {
    drswt0023 += 1
  } else {
    drop0023.x = oldx + 5;
    drop0023.y = oldy - 2;
  }
  if (htimer >= random(268 + dte + det, 275 + dte + det)) {
    drswt0024 += 1
  } else {
    drop0024.x = oldx - 6;
    drop0024.y = oldy - 2;
  }
  if (htimer >= random(275 + dte + det, 282 + dte + det)) {
    drswt0025 += 1
  } else {
    drop0025.x = oldx + 5;
    drop0025.y = oldy - 2;
  }
  if (htimer >= random(282 + dte + det, 289 + dte + det)) {
    drswt0026 += 1
  } else {
    drop0026.x = oldx - 6;
    drop0026.y = oldy - 2;
  }
  if (htimer >= random(289 + dte + det, 296 + dte + det)) {
    drswt0027 += 1
  } else {
    drop0027.x = oldx + 5;
    drop0027.y = oldy - 2;
  }
  if (htimer >= random(296 + dte + det, 303 + dte + det)) {
    drswt0028 += 1
  } else {
    drop0028.x = oldx - 6;
    drop0028.y = oldy - 2;
  }
  if (htimer >= random(303 + dte + det, 310 + dte + det)) {
    drswt0029 += 1
  } else {
    drop0029.x = oldx + 5;
    drop0029.y = oldy - 2;
  }
  if (htimer >= random(310 + dte + det, 317 + dte + det)) {
    drswt0030 += 1
  } else {
    drop0030.x = oldx - 6;
    drop0030.y = oldy - 2;
  }

  if (drswt00 >= 6 && cswt <= 0 && htimer <= 200 + dte + det) {
    drswt00 = 6;
    drop00.y += 2.6 + dts;
    drop00.drop();
  }

  if (drswt001 >= 6 && cswt <= 0 && htimer <= 207 + dte + det) {
    drswt001 = 6;
    drop001.y += 3.0 + dts;
    drop001.drop();
  }

  if (drswt002 >= 6 && cswt <= 0 && htimer <= 214 + dte + det) {
    drswt002 = 6;
    drop002.y += 2.5 + dts;
    drop002.drop();
  }

  if (drswt003 >= 6 && cswt <= 0 && htimer <= 221 + dte + det) {
    drswt003 = 6;
    drop003.y += 3.0 + dts;
    drop003.drop();
  }

  if (drswt004 >= 6 && cswt <= 0 && htimer <= 228 + dte + det) {
    drswt004 = 6;
    drop004.y += 2.9 + dts;
    drop004.drop();
  }

  if (drswt005 >= 6 && cswt <= 0 && htimer <= 235 + dte + det) {
    drswt005 = 6;
    drop005.y += 3.5 + dts;
    drop005.drop();
  }

  if (drswt006 >= 6 && cswt <= 0 && htimer <= 242 + dte + det) {
    drswt006 = 6;
    drop006.y += 3.0 + dts;
    drop006.drop();
  }

  if (drswt007 >= 6 && cswt <= 0 && htimer <= 249 + dte + det) {
    drswt007 = 6;
    drop007.y += 2.7 + dts;
    drop007.drop();
  }

  if (drswt008 >= 6 && cswt <= 0 && htimer <= 256 + dte + det) {
    drswt008 = 6;
    drop008.y += 2.8 + dts;
    drop008.drop();
  }

  if (drswt009 >= 6 && cswt <= 0 && htimer <= 263 + dte + det) {
    drswt009 = 6;
    drop009.y += 2.5 + dts;
    drop009.drop();
  }

  if (drswt0010 >= 6 && cswt <= 0 && htimer <= 270 + dte + det) {
    drswt0010 = 6;
    drop0010.y += 3.4 + dts;
    drop0010.drop();
  }


  if (drswt0011 >= 6 && cswt <= 0 && htimer <= 277 + dte + det) {
    drswt0011 = 6;
    drop0011.y += 3.5 + dts;
    drop0011.drop();
  }

  if (drswt0012 >= 6 && cswt <= 0 && htimer <= 284 + dte + det) {
    drswt0012 = 6;
    drop0012.y += 2.9 + dts;
    drop0012.drop();
  }

  if (drswt0013 >= 6 && cswt <= 0 && htimer <= 291 + dte + det) {
    drswt0013 = 6;
    drop0013.y += 2.6 + dts;
    drop0013.drop();
  }

  if (drswt0014 >= 6 && cswt <= 0 && htimer <= 298 + dte + det) {
    drswt0014 = 6;
    drop0014.y += 3.0 + dts;
    drop0014.drop();
  }

  if (drswt0015 >= 6 && cswt <= 0 && htimer <= 305 + dte + det) {
    drswt0015 = 6;
    drop0015.y += 3.4 + dts;
    drop0015.drop();
  }

  if (drswt0016 >= 6 && cswt <= 0 && htimer <= 412 + dte + det) {
    drswt0016 = 6;
    drop0016.y += 3.0 + dts;
    drop0016.drop();
  }

  if (drswt0017 >= 6 && cswt <= 0 && htimer <= 419 + dte + det) {
    drswt0017 = 6;
    drop0017.y += 3.0 + dts;
    drop0017.drop();
  }

  if (drswt0018 >= 6 && cswt <= 0 && htimer <= 426 + dte + det) {
    drswt0018 = 6;
    drop0018.y += 2.5 + dts;
    drop0018.drop();
  }

  if (drswt0019 >= 6 && cswt <= 0 && htimer <= 433 + dte + det) {
    drswt0019 = 6;
    drop0019.y += 2.8 + dts;
    drop0019.drop();
  }

  if (drswt0020 >= 6 && cswt <= 0 && htimer <= 440 + dte + det) {
    drswt0020 = 6;
    drop0020.y += 3.5 + dts;
    drop0020.drop();
  }


  if (drswt0021 >= 6 && cswt <= 0 && htimer <= 447 + dte + det) {
    drswt0021 = 6;
    drop0021.y += 3.0 + dts;
    drop0021.drop();
  }

  if (drswt0022 >= 6 && cswt <= 0 && htimer <= 454 + dte + det) {
    drswt0022 = 6;
    drop0022.y += 2.5 + dts;
    drop0022.drop();
  }

  if (drswt0023 >= 6 && cswt <= 0 && htimer <= 461 + dte + det) {
    drswt0023 = 6;
    drop0023.y += 3.4 + dts;
    drop0023.drop();
  }

  if (drswt0024 >= 6 && cswt <= 0 && htimer <= 468 + dte + det) {
    drswt0024 = 6;
    drop0024.y += 2.8 + dts;
    drop0024.drop();
  }

  if (drswt0025 >= 6 && cswt <= 0 && htimer <= 475 + dte + det) {
    drswt0025 = 6;
    drop0025.y += 3.0 + dts;
    drop0025.drop();
  }

  if (drswt0026 >= 6 && cswt <= 0 && htimer <= 482 + dte + det) {
    drswt0026 = 6;
    drop0026.y += 2.6 + dts;
    drop0026.drop();
  }

  if (drswt0027 >= 6 && cswt <= 0 && htimer <= 489 + dte + det) {
    drswt0027 = 6;
    drop0027.y += 2.5 + dts;
    drop0027.drop();
  }

  if (drswt0028 >= 6 && cswt <= 0 && htimer <= 496 + dte + det) {
    drswt0028 = 6;
    drop0028.y += 2.7 + dts;
    drop0028.drop();
  }

  if (drswt0029 >= 6 && cswt <= 0 && htimer <= 503 + dte + det) {
    drswt0029 = 6;
    drop0029.y += 2.9 + dts;
    drop0029.drop();
  }

  if (drswt0030 >= 6 && cswt <= 0 && htimer <= 510 + dte + det) {
    drswt0030 = 6;
    drop0030.y += 2.5 + dts;
    drop0030.drop();
  }
}

function threeVisuals() {
  // giant head image

  if (htimer > 40) {
    if (oldxx >= 0 && ctmir <= 400) {
      if (oaswt > 0) {
        push();

        imageMode(CENTER);
        translate(oldx, oldy);
        rotate(hpr);
        image(olmn00, 0, 0);

        pop();
      } else {
        imageMode(CENTER);
        image(olmn00, oldx, oldy);
      }
    } else if (oldxx < 0 && ctmir <= 400) {
      if (oaswt > 0) {
        push();

        imageMode(CENTER);
        translate(oldx, oldy);
        rotate(hpr);
        image(olmn000, 0, 0);

        pop();
      } else {
        imageMode(CENTER);
        image(olmn000, oldx, oldy);
      }
    }

    // square boundaries

    fill(0, 0, 0, 0);
    stroke(255);
    strokeWeight(1);
    rectMode(CENTER);
    square(width / 2, 150, 85);

    // bullet visuals

    if (cswt <= 0) {
      knifeBody();
    }

    // heart amount

    hearts3(246, 229);
  }
}

function thirdBullets() {
  drop = new bullets(0, 0);
  drop16 = new bullets(0, 0);
  drop1 = new bullets(0, 0);
  drop17 = new bullets(0, 0);
  drop2 = new bullets(0, 0);
  drop18 = new bullets(0, 0);
  drop3 = new bullets(0, 0);
  drop19 = new bullets(0, 0);
  drop4 = new bullets(0, 0);
  drop20 = new bullets(0, 0);
  drop5 = new bullets(0, 0);
  drop21 = new bullets(0, 0);
  drop6 = new bullets(0, 0);
  drop22 = new bullets(0, 0);
  drop7 = new bullets(0, 0);
  drop23 = new bullets(0, 0);
  drop8 = new bullets(0, 0);
  drop24 = new bullets(0, 0);
  drop9 = new bullets(0, 0);
  drop25 = new bullets(0, 0);
  drop10 = new bullets(0, 0);
  drop26 = new bullets(0, 0);
  drop11 = new bullets(0, 0);
  drop27 = new bullets(0, 0);
  drop12 = new bullets(0, 0);
  drop28 = new bullets(0, 0);
  drop13 = new bullets(0, 0);
  drop29 = new bullets(0, 0);
  drop14 = new bullets(0, 0);
  drop30 = new bullets(0, 0);
  drop15 = new bullets(0, 0);

  lkn = new bullets(-19, 80);
  rkn = new bullets(276, 220);
  lkn2 = new bullets(-19, 103);
  rkn2 = new bullets(276, 197);
  lkn3 = new bullets(-19, 126);
  rkn3 = new bullets(276, 174);
  lkn4 = new bullets(-19, 150);
  rkn4 = new bullets(276, 150);
  lkn5 = new bullets(-19, 114);
  rkn5 = new bullets(276, 220);
  lkn6 = new bullets(-19, 80);
  rkn6 = new bullets(276, 167);
  lkn7 = new bullets(-19, 150);
  rkn7 = new bullets(276, 150);
  lkn8 = new bullets(-19, 92);
  rkn8 = new bullets(276, 204);
  lkn9 = new bullets(-19, 137);
  rkn9 = new bullets(276, 185);

  orb1 = new bullets(98, 180);
  orb16 = new bullets(98, 180);
  orb2 = new bullets(98, 180);
  orb17 = new bullets(98, 180);
  orb3 = new bullets(98, 180);
  orb18 = new bullets(98, 180);
  orb4 = new bullets(98, 180);
  orb19 = new bullets(98, 180);
  orb5 = new bullets(98, 180);
  orb20 = new bullets(98, 180);
  orb6 = new bullets(98, 180);
  orb21 = new bullets(98, 180);
  orb7 = new bullets(98, 180);
  orb22 = new bullets(98, 180);
  orb8 = new bullets(98, 180);
  orb23 = new bullets(98, 180);
  orb9 = new bullets(98, 180);
  orb24 = new bullets(98, 180);
  orb10 = new bullets(98, 180);
  orb25 = new bullets(98, 180);
  orb11 = new bullets(98, 180);
  orb26 = new bullets(98, 180);
  orb12 = new bullets(98, 180);
  orb27 = new bullets(98, 180);
  orb13 = new bullets(98, 180);
  orb28 = new bullets(98, 180);
  orb14 = new bullets(98, 180);
  orb29 = new bullets(98, 180);
  orb15 = new bullets(98, 180);
  orb30 = new bullets(98, 180);
  orb41 = new bullets(98, 180);
  orb42 = new bullets(98, 180);
  orb43 = new bullets(98, 180);

  head = new bullets(0, 0);
  head1 = new bullets(0, 0);
  head2 = new bullets(0, 0);
  head3 = new bullets(0, 0);
  head4 = new bullets(0, 0);
  head5 = new bullets(0, 0);

  drop0 = new bullets(0, 0);
  drop016 = new bullets(0, 0);
  drop01 = new bullets(0, 0);
  drop017 = new bullets(0, 0);
  drop02 = new bullets(0, 0);
  drop018 = new bullets(0, 0);
  drop03 = new bullets(0, 0);
  drop019 = new bullets(0, 0);
  drop04 = new bullets(0, 0);
  drop020 = new bullets(0, 0);
  drop05 = new bullets(0, 0);
  drop021 = new bullets(0, 0);
  drop06 = new bullets(0, 0);
  drop022 = new bullets(0, 0);
  drop07 = new bullets(0, 0);
  drop023 = new bullets(0, 0);
  drop08 = new bullets(0, 0);
  drop024 = new bullets(0, 0);
  drop09 = new bullets(0, 0);
  drop025 = new bullets(0, 0);
  drop010 = new bullets(0, 0);
  drop026 = new bullets(0, 0);
  drop011 = new bullets(0, 0);
  drop027 = new bullets(0, 0);
  drop012 = new bullets(0, 0);
  drop028 = new bullets(0, 0);
  drop013 = new bullets(0, 0);
  drop029 = new bullets(0, 0);
  drop014 = new bullets(0, 0);
  drop030 = new bullets(0, 0);
  drop015 = new bullets(0, 0);

  drop00 = new bullets(0, 0);
  drop0016 = new bullets(0, 0);
  drop001 = new bullets(0, 0);
  drop0017 = new bullets(0, 0);
  drop002 = new bullets(0, 0);
  drop0018 = new bullets(0, 0);
  drop003 = new bullets(0, 0);
  drop0019 = new bullets(0, 0);
  drop004 = new bullets(0, 0);
  drop0020 = new bullets(0, 0);
  drop005 = new bullets(0, 0);
  drop0021 = new bullets(0, 0);
  drop006 = new bullets(0, 0);
  drop0022 = new bullets(0, 0);
  drop007 = new bullets(0, 0);
  drop0023 = new bullets(0, 0);
  drop008 = new bullets(0, 0);
  drop0024 = new bullets(0, 0);
  drop009 = new bullets(0, 0);
  drop0025 = new bullets(0, 0);
  drop0010 = new bullets(0, 0);
  drop0026 = new bullets(0, 0);
  drop0011 = new bullets(0, 0);
  drop0027 = new bullets(0, 0);
  drop0012 = new bullets(0, 0);
  drop0028 = new bullets(0, 0);
  drop0013 = new bullets(0, 0);
  drop0029 = new bullets(0, 0);
  drop0014 = new bullets(0, 0);
  drop0030 = new bullets(0, 0);
  drop0015 = new bullets(0, 0);
}

function noelleFlame() {
  if (cswt >= 1) {
    ctmir += 1;
    let o = 20;

    if (ctmir < 2 && ctmir >= 1) {
      rsn.play();
    }
    if (nfst < 3 && nfst >= 2) {
      fwh.play();
    }

    if (ctmir >= 104 + o && ctmir < 106 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 108 + o && ctmir < 110 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 112 + o && ctmir < 114 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 116 + o && ctmir < 118 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 120 + o && ctmir < 122 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 124 + o && ctmir < 126 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 128 + o && ctmir < 130 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 132 + o && ctmir < 134 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 136 + o && ctmir < 138 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 140 + o && ctmir < 142 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 144 + o && ctmir < 146 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 148 + o && ctmir < 150 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 152 + o && ctmir < 154 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 156 + o && ctmir < 158 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }
    if (ctmir >= 160 + o && ctmir < 162 + o) {
      image(flal[frameCount % 1], flamx, flamy);
    }

    if (ctmir >= 164 + o && flamx >= oldx + 12 && oaswt <= 0) {
      flamx -= 2;
      image(flal[frameCount % 40], flamx, flamy);
    }
  }
}

function oldHeadMove() {
  if (htimer >= 30 && htimer <= 340 && cswt <= 0 ||
    htimer >= 675 && htimer <= 2665 && cswt <= 0 ||
    htimer >= 3250 && cswt <= 0) {
    oldy += oldyy;
    if (oldy >= 68) {
      oldyy *= -1;
    }
    if (oldy <= 58) {
      oldyy *= -1;
    }

    oldx -= oldxx;
    if (oldx >= 167) {
      oldxx *= -1;
    }
    if (oldx <= 90) {
      oldxx *= -1;
    }
  }

  if (htimer >= 674) {
    omtm = 1;
  }

  if (htimer > 340 && htimer < 675 && cswt <= 0 && omtm <= 0) {
    oldx += oldxxz;
    if (oldx >= 137) {
      oldxxz *= -1;
    }
    if (oldx <= 120) {
      oldxxz *= -1;
    }
  }

  if (htimer >= 3249) {
    ommtm = 1;
  }

  if (htimer > 2665 && htimer < 3250 && cswt <= 0 && ommtm <= 0) {
    oldx += oldxxz;
    if (oldx >= 137) {
      oldxxz *= -1;
    }
    if (oldx <= 120) {
      oldxxz *= -1;
    }
  }

  if (cswt >= 1 && flamx <= oldx + 12) {
    oaswt = 1;
  }
  if (oaswt >= 1 && ctmir <= 400) {
    oldx -= 3.5;
    oldy -= 0.5;
    hpr -= 0.05;
  }
}

function frameShake() {
  if (cswt >= 1 && ctmir > 0 && ctmir <= 10) {
    translate(random(-2, 2), random(-2, 2));
  }

  if (cswt >= 1 && flamx <= oldx + 12) {
    nfst = 1;
  }
  if (nfst >= 1) {
    nfst += 1;
  }
  if (cswt >= 1 && nfst > 0 && nfst <= 7) {
    translate(random(-1.7, 1.7), random(-0.5, 0.5));
  }
}

function skipEdit() {
  htimx = (nessP.x + width / 2 + 0.5) / 30;
  htimy = (nessP.y - 143.5) / 30;
}

function endHealth() {
  if (htimer >= 3750) {
    cswt = 1;
  }
  if (cswt <= 0) {
    dropHealth();
    knifeHealth();
    orbHealth();
    headHealth();
  }
}

function startNull() {
  swtch0 = null;
  swtch1 = null;
  swtch2 = null;
  swtch3 = null;
  swtch4 = null;
  swtch5 = null;
  swtch6 = null;
  swtch7 = null;
  swtch8 = null;
  banana0 = null;
  banana1 = null;
  banana2 = null;
  banana3 = null;
  banana4 = null;
  banana5 = null;
  banana6 = null;
  banana7 = null;
  banana8 = null;
  dl = null;
  dr = null;
  dx = null;
  dy = null;
  dx1 = null;
  dy1 = null;
  dx2 = null;
  dy2 = null;
  dx3 = null;
  dy3 = null;
  dx4 = null;
  dy4 = null;
  bn = null;
  bn1 = null;
  bn2 = null;
  bn3 = null;
  bn4 = null;
  bn5 = null;
  bn6 = null;
  bn7 = null;
  bt0 = null;
  bt1 = null;
  bt2 = null;
  bt3 = null;
  bt4 = null;
  bt5 = null;
  bt6 = null;
  bt7 = null;
  dxx = null;
  dyy = null;
  dxx1 = null;
  dyy1 = null;
  dxx2 = null;
  dyy2 = null;
  dxx3 = null;
  dyy3 = null;
  dxx4 = null;
  dyy4 = null;
  box1 = null;
  box2 = null;
  box3 = null;
  box4 = null;
  box5 = null;
  box6 = null;
  box7 = null;
  box8 = null;
  box9 = null;
  desk = null;
  b1 = null;
  b2 = null;
  b3 = null;
  b4 = null;
  b5 = null;
  b6 = null;
  b7 = null;
  b8 = null;
  b9 = null;
  critter1 = null;
  critter2 = null;
  critter3 = null;
  critter4 = null;
  critter5 = null;

  lady = null;
  nurse = null;
  applek = null;
  starman = null;
  orange = null;
  granny = null;
  business = null;
  ap = null;
  an = null;
  an2 = null;
  an3 = null;
  an4 = null;
  ld = null;
  ld2 = null;
  ld3 = null;
  biz = null;
  biz2 = null;
  biz3 = null;
  gm1 = null;
  spt = null;
  bgt = null;
  sptt = null;
  kdt = null;
  bgs = null;
  bgm = null;
  nht = null;
  countdown = null;
  jt = null;
  cda = null;
  swt = null;
  seconds = null;
  cdaa = null;
  gpu = null;
  kdtt = null;
  tsts = null;
  nx = null;
  ny = null;
  nxx = null;
  nyy = null;
  nx1 = null;
  ny1 = null;
  nxx1 = null;
  nyy1 = null;
  nx2 = null;
  ny2 = null;
  nxx2 = null;
  nyy2 = null;
  nx3 = null;
  ny3 = null;
  nxx3 = null;
  nyy3 = null;
  nx4 = null;
  ny4 = null;
  nxx4 = null;
  nyy4 = null;
  nx5 = null;
  ny5 = null;
  nxx5 = null;
  nyy5 = null;
  counter = null;
  timer = null;
}

function stats(x, y) {
  push();

  fill(0);
  noStroke();
  textAlign(LEFT);
  textFont(apple, 3);
  rect(5, 0, 49, 14);
  rect(197, 0, 60, 19);
  fill(255);

  text('fps: ' + round(frameRate()), 3, 6);
  text(x + y, 3, 11);

  text('used memory: ', 200, 6);
  text('total memory: ', 200, 11);
  text('memory limit: ', 200, 16);

  textAlign(RIGHT);
  text(round(performance.memory.usedJSHeapSize /
    Math.pow(1000, 2)) + ' MB', 254, 6);

  text(round(performance.memory.totalJSHeapSize /
    Math.pow(1000, 2)) + ' MB', 254, 11);

  text(round(performance.memory.jsHeapSizeLimit /
    Math.pow(1000, 2)) + ' MB', 254, 16);

  pop();
}

function startGameOver() {
  if (gob <= 0 && keyIsDown(90)) {
    goe = 1;
  }

  if (goe >= 1) {
    gob += 9;
    if (gob >= 350) {
      gob = 350;
    }

    gof.volume(gofv);
    gofv -= 0.03;
    if (gofv <= 0.05) {
      gofv = 0;
    }

    if (gob >= 350) {
      counter = 9;
      timer = 76;
      nswt = 0;
      health = 5;
      scene = 0;
      dt = 0;

      banana0 = 0;
      banana1 = 0;
      banana2 = 0;
      banana3 = 0;
      banana4 = 0;
      banana5 = 0;
      banana6 = 0;
      banana7 = 0;
      banana8 = 0;

      swtch0 = 0;
      swtch1 = 0;
      swtch2 = 0;
      swtch3 = 0;
      swtch4 = 0;
      swtch5 = 0;
      swtch6 = 0;
      swtch7 = 0;
      swtch8 = 0;

      mu = 0;
      mut = 0;
      gob = 255;

      setup();
    }
  }

  if (goe <= 0) {
    gob -= 9;
    if (gob <= 0) {
      gob = 0;
    }
  }

  push();
  fill(0);
  background(0, 0, 0, gob);
  pop();
}

function sceneTwo() {
  push();

  backgroundSecond();
  moreSwitches();
  drawBodies();
  characterAnim();
  collisionsHitsBounces();
  starmanArrival();
  nextSceneTwo();
  evenMoreSwitches();
  gameOverTwo();

  pop();
}

function sceneThree() {
  imageMode(CORNER);
  image(classroomp, -2, 15);

  npcCollisionThree();
  characterBodiesThree();
  nessDeskHitboxes();
  topLayersThree();
  dialogueSceneThree();
}

function noelleCutscene() {
  if (ctmir >= 360) {
    noex -= 1;

    if (ctmir >= 510) {
      background(0, 0, 0, ffbb);
      ffbb += 9;
    }

    if (noex > 128) {
      image(noelwe[frameCount % 40], noex, noey);
    }
    if (noex <= 128) {
      image(noel, 128, 71);
    }

    push();
    hearts3(246, 229);
    tint(255, ffbb);
    heartso(246, 229);
    pop();
  }

  if (ctmir <= 560 && ctmir > 559) {
    nlg.loop();
  }

  if (ctmir >= 570) {
    fill(255);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textFont(apple, 6);

    switch (nodig) {
      case 0:

        txtm += 1;
        word = nogg1[0];
        text(word, 59.5, 120);

        if (txtm >= 2) {
          word += nogg1[1];
          text(word, 59.5, 120);
        }
        if (txtm >= 4) {
          word += nogg1[2];
          text(word, 59.5, 120);
        }
        if (txtm >= 6) {
          word += nogg1[3];
          text(word, 59.5, 120);
        }
        if (txtm >= 8) {
          word += nogg1[4];
          text(word, 59.5, 120);
        }
        if (txtm >= 10) {
          word += nogg1[5];
          text(word, 59.5, 120);
        }
        if (txtm >= 12) {
          word += nogg1[6];
          text(word, 59.5, 120);
        }
        if (txtm >= 14) {
          word += nogg1[7];
          text(word, 59.5, 120);
        }
        if (txtm >= 16) {
          word += nogg1[8];
          text(word, 59.5, 120);
        }
        if (txtm >= 18) {
          word += nogg1[9];
          text(word, 59.5, 120);
        }
        if (txtm >= 20) {
          word += nogg1[10];
          text(word, 59.5, 120);
        }
        if (txtm >= 22) {
          word += nogg1[11];
          text(word, 59.5, 120);
        }
        if (txtm >= 24) {
          word += nogg1[12];
          text(word, 59.5, 120);
        }
        if (txtm >= 48) {
          word += nogg1[13];
          text(word, 59.5, 120);
        }
        if (txtm >= 50) {
          word += nogg1[14];
          text(word, 59.5, 120);
        }
        if (txtm >= 52) {
          word += nogg1[15];
          text(word, 59.5, 120);
        }
        if (txtm >= 54) {
          word += nogg1[16];
          text(word, 59.5, 120);
        }
        if (txtm >= 56) {
          word += nogg1[17];
          text(word, 59.5, 120);
        }
        if (txtm >= 58) {
          word += nogg1[18];
          text(word, 59.5, 120);
        }
        if (txtm >= 60) {
          word += nogg1[19];
          text(word, 59.5, 120);
        }
        if (txtm >= 62) {
          word += nogg1[20];
          text(word, 59.5, 120);
        }
        if (txtm >= 64) {
          word += nogg1[21];
          text(word, 59.5, 120);
        }
        if (txtm >= 66) {
          word += nogg1[22];
          text(word, 59.5, 120);
        }
        if (txtm >= 68) {
          word += nogg1[23];
          text(word, 59.5, 120);
        }
        if (txtm >= 70) {
          word += nogg1[24];
          text(word, 59.5, 120);
        }
        if (txtm >= 72) {
          word += nogg1[25];
          text(word, 59.5, 120);
        }

        if (txtm >= 116 + 6) {
          word = nogg1[26];
          text(word, 54, 137);
        }
        if (txtm >= 118 + 6) {
          word += nogg1[27];
          text(word, 54, 137);
        }
        if (txtm >= 120 + 6) {
          word += nogg1[28];
          text(word, 54, 137);
        }
        if (txtm >= 122 + 6) {
          word += nogg1[29];
          text(word, 54, 137);
        }
        if (txtm >= 124 + 6) {
          word += nogg1[30];
          text(word, 54, 137);
        }
        if (txtm >= 126 + 6) {
          word += nogg1[31];
          text(word, 54, 137);
        }
        if (txtm >= 128 + 6) {
          word += nogg1[32];
          text(word, 54, 137);
        }
        if (txtm >= 130 + 6) {
          word += nogg1[33];
          text(word, 54, 137);
        }
        if (txtm >= 132 + 6) {
          word += nogg1[34];
          text(word, 54, 137);
        }
        if (txtm >= 134 + 6) {
          word += nogg1[35];
          text(word, 54, 137);
        }
        if (txtm >= 136 + 6) {
          word += nogg1[36];
          text(word, 54, 137);
        }
        if (txtm >= 138 + 6) {
          word += nogg1[37];
          text(word, 54, 137);
        }
        if (txtm >= 140 + 6) {
          word += nogg1[38];
          text(word, 54, 137);
        }
        if (txtm >= 142 + 6) {
          word += nogg1[39];
          text(word, 54, 137);
        }
        if (txtm >= 144 + 6) {
          word += nogg1[40];
          text(word, 54, 137);
        }
        if (txtm >= 146 + 6) {
          word += nogg1[41];
          text(word, 54, 137);
        }
        if (txtm >= 148 + 6) {
          word += nogg1[42];
          text(word, 54, 137);
        }
        if (txtm >= 150 + 6) {
          word += nogg1[43];
          text(word, 54, 137);
        }
        if (txtm >= 152 + 6) {
          word += nogg1[44];
          text(word, 54, 137);
        }
        if (txtm >= 154 + 6) {
          word += nogg1[45];
          text(word, 54, 137);
        }
        if (txtm >= 156 + 6) {
          word += nogg1[46];
          text(word, 54, 137);
        }
        if (txtm >= 158 + 6) {
          word += nogg1[47];
          text(word, 54, 137);
        }
        if (txtm >= 160 + 6) {
          word += nogg1[48];
          text(word, 54, 137);
        }
        if (txtm >= 162 + 6) {
          word += nogg1[49];
          text(word, 54, 137);
        }
        if (txtm >= 164 + 6) {
          word += nogg1[50];
          text(word, 54, 137);
        }
        if (txtm >= 166 + 6) {
          word += nogg1[51];
          text(word, 54, 137);
        }
        if (txtm >= 168 + 6) {
          word += nogg1[52];
          text(word, 54, 137);
        }
        if (txtm >= 170 + 6) {
          word += nogg1[53];
          text(word, 54, 137);
        }

        if (txtm >= 174 + 6) {
          word = nogg1[54];
          text(word, 83, 149);
        }
        if (txtm >= 176 + 6) {
          word += nogg1[55];
          text(word, 83, 149);
        }
        if (txtm >= 178 + 6) {
          word += nogg1[56];
          text(word, 83, 149);
        }
        if (txtm >= 180 + 6) {
          word += nogg1[57];
          text(word, 83, 149);
        }
        if (txtm >= 182 + 6) {
          word += nogg1[58];
          text(word, 83, 149);
        }
        if (txtm >= 184 + 6) {
          word += nogg1[59];
          text(word, 83, 149);
        }
        if (txtm >= 186 + 6) {
          word += nogg1[60];
          text(word, 83, 149);
        }
        if (txtm >= 188 + 6) {
          word += nogg1[61];
          text(word, 83, 149);
        }
        if (txtm >= 190 + 6) {
          word += nogg1[62];
          text(word, 83, 149);
        }
        if (txtm >= 192 + 6) {
          word += nogg1[63];
          text(word, 83, 149);
        }
        if (txtm >= 194 + 6) {
          word += nogg1[64];
          text(word, 83, 149);
        }
        if (txtm >= 196 + 6) {
          word += nogg1[65];
          text(word, 83, 149);
        }
        if (txtm >= 198 + 6) {
          word += nogg1[66];
          text(word, 83, 149);
        }
        if (txtm >= 200 + 6) {
          word += nogg1[67];
          text(word, 83, 149);
        }
        if (txtm >= 202 + 6) {
          word += nogg1[68];
          text(word, 83, 149);
        }
        if (txtm >= 204 + 6) {
          word += nogg1[69];
          text(word, 83, 149);
        }
        if (txtm >= 206 + 6) {
          word += nogg1[70];
          text(word, 83, 149);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }

        if (txtm >= 8 && txtm < 8 + 1) {
          tor.play();
        }
        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }
        if (txtm >= 12 && txtm < 12 + 1) {
          tor.play();
        }
        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }
        if (txtm >= 18 && txtm < 18 + 1) {
          tor.play();
        }
        if (txtm >= 20 && txtm < 20 + 1) {
          tor.play();
        }
        if (txtm >= 22 && txtm < 22 + 1) {
          tor.play();
        }

        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }
        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }

        if (txtm >= 56 && txtm < 56 + 1) {
          tor.play();
        }
        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }
        if (txtm >= 60 && txtm < 60 + 1) {
          tor.play();
        }

        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }
        if (txtm >= 66 && txtm < 66 + 1) {
          tor.play();
        }
        if (txtm >= 68 && txtm < 68 + 1) {
          tor.play();
        }
        if (txtm >= 70 && txtm < 70 + 1) {
          tor.play();
        }
        if (txtm >= 72 && txtm < 72 + 1) {
          tor.play();
        }

        if (txtm >= 116 + 6 && txtm < 116 + 7) {
          tor.play();
        }
        if (txtm >= 118 + 6 && txtm < 118 + 7) {
          tor.play();
        }
        if (txtm >= 120 + 6 && txtm < 120 + 7) {
          tor.play();
        }

        if (txtm >= 124 + 6 && txtm < 124 + 7) {
          tor.play();
        }
        if (txtm >= 126 + 6 && txtm < 126 + 7) {
          tor.play();
        }
        if (txtm >= 128 + 6 && txtm < 128 + 7) {
          tor.play();
        }
        if (txtm >= 130 + 6 && txtm < 130 + 7) {
          tor.play();
        }
        if (txtm >= 132 + 6 && txtm < 132 + 7) {
          tor.play();
        }
        if (txtm >= 134 + 6 && txtm < 134 + 7) {
          tor.play();
        }

        if (txtm >= 138 + 6 && txtm < 138 + 7) {
          tor.play();
        }
        if (txtm >= 140 + 6 && txtm < 140 + 7) {
          tor.play();
        }

        if (txtm >= 144 + 6 && txtm < 144 + 7) {
          tor.play();
        }
        if (txtm >= 146 + 6 && txtm < 146 + 7) {
          tor.play();
        }
        if (txtm >= 148 + 6 && txtm < 148 + 7) {
          tor.play();
        }
        if (txtm >= 150 + 6 && txtm < 150 + 7) {
          tor.play();
        }

        if (txtm >= 154 + 6 && txtm < 154 + 7) {
          tor.play();
        }
        if (txtm >= 156 + 6 && txtm < 156 + 7) {
          tor.play();
        }
        if (txtm >= 158 + 6 && txtm < 158 + 7) {
          tor.play();
        }
        if (txtm >= 160 + 6 && txtm < 160 + 7) {
          tor.play();
        }

        if (txtm >= 164 + 6 && txtm < 164 + 7) {
          tor.play();
        }
        if (txtm >= 166 + 6 && txtm < 166 + 7) {
          tor.play();
        }
        if (txtm >= 168 + 6 && txtm < 168 + 7) {
          tor.play();
        }
        if (txtm >= 170 + 6 && txtm < 170 + 7) {
          tor.play();
        }

        if (txtm >= 174 + 6 && txtm < 174 + 7) {
          tor.play();
        }
        if (txtm >= 176 + 6 && txtm < 176 + 7) {
          tor.play();
        }
        if (txtm >= 178 + 6 && txtm < 178 + 7) {
          tor.play();
        }
        if (txtm >= 180 + 6 && txtm < 180 + 7) {
          tor.play();
        }
        if (txtm >= 182 + 6 && txtm < 182 + 7) {
          tor.play();
        }
        if (txtm >= 184 + 6 && txtm < 184 + 7) {
          tor.play();
        }
        if (txtm >= 186 + 6 && txtm < 186 + 7) {
          tor.play();
        }
        if (txtm >= 188 + 6 && txtm < 188 + 7) {
          tor.play();
        }

        if (txtm >= 192 + 6 && txtm < 192 + 7) {
          tor.play();
        }
        if (txtm >= 194 + 6 && txtm < 194 + 7) {
          tor.play();
        }
        if (txtm >= 196 + 6 && txtm < 196 + 7) {
          tor.play();
        }

        if (txtm >= 200 + 6 && txtm < 200 + 7) {
          tor.play();
        }
        if (txtm >= 202 + 6 && txtm < 202 + 7) {
          tor.play();
        }
        if (txtm >= 204 + 6 && txtm < 204 + 7) {
          tor.play();
        }
        if (txtm >= 206 + 6 && txtm < 206 + 7) {
          tor.play();
        }

        if (txtm >= 222 && keyIsDown(90)) {
          nodig = 1;
          txtm = 0;
        }

        break;
      case 1:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos2, 128, 70);

        txtm += 1;
        word = nogg2[0];
        text(word, 41.3, 120);

        if (txtm >= 2) {
          word += nogg2[1];
          text(word, 41.3, 120);
        }
        if (txtm >= 4) {
          word += nogg2[2];
          text(word, 41.3, 120);
        }
        if (txtm >= 6) {
          word += nogg2[3];
          text(word, 41.3, 120);
        }
        if (txtm >= 8) {
          word += nogg2[4];
          text(word, 41.3, 120);
        }
        if (txtm >= 10) {
          word += nogg2[5];
          text(word, 41.3, 120);
        }
        if (txtm >= 12) {
          word += nogg2[6];
          text(word, 41.3, 120);
        }
        if (txtm >= 14) {
          word += nogg2[7];
          text(word, 41.3, 120);
        }
        if (txtm >= 16) {
          word += nogg2[8];
          text(word, 41.3, 120);
        }
        if (txtm >= 18) {
          word += nogg2[9];
          text(word, 41.3, 120);
        }
        if (txtm >= 20) {
          word += nogg2[10];
          text(word, 41.3, 120);
        }
        if (txtm >= 22) {
          word += nogg2[11];
          text(word, 41.3, 120);
        }
        if (txtm >= 24) {
          word += nogg2[12];
          text(word, 41.3, 120);
        }
        if (txtm >= 26) {
          word += nogg2[13];
          text(word, 41.3, 120);
        }
        if (txtm >= 28) {
          word += nogg2[14];
          text(word, 41.3, 120);
        }
        if (txtm >= 30) {
          word += nogg2[15];
          text(word, 41.3, 120);
        }
        if (txtm >= 32) {
          word += nogg2[16];
          text(word, 41.3, 120);
        }
        if (txtm >= 34) {
          word += nogg2[17];
          text(word, 41.3, 120);
        }
        if (txtm >= 36) {
          word += nogg2[18];
          text(word, 41.3, 120);
        }
        if (txtm >= 38) {
          word += nogg2[19];
          text(word, 41.3, 120);
        }
        if (txtm >= 40) {
          word += nogg2[20];
          text(word, 41.3, 120);
        }
        if (txtm >= 42) {
          word += nogg2[21];
          text(word, 41.3, 120);
        }
        if (txtm >= 44) {
          word += nogg2[22];
          text(word, 41.3, 120);
        }
        if (txtm >= 46) {
          word += nogg2[23];
          text(word, 41.3, 120);
        }
        if (txtm >= 48) {
          word += nogg2[24];
          text(word, 41.3, 120);
        }
        if (txtm >= 50) {
          word += nogg2[25];
          text(word, 41.3, 120);
        }
        if (txtm >= 52) {
          word += nogg2[26];
          text(word, 41.3, 120);
        }
        if (txtm >= 54) {
          word += nogg2[27];
          text(word, 41.3, 120);
        }
        if (txtm >= 56) {
          word += nogg2[28];
          text(word, 41.3, 120);
        }
        if (txtm >= 58) {
          word += nogg2[29];
          text(word, 41.3, 120);
        }
        if (txtm >= 60) {
          word += nogg2[30];
          text(word, 41.3, 120);
        }
        if (txtm >= 62) {
          word += nogg2[31];
          text(word, 41.3, 120);
        }
        if (txtm >= 64) {
          word += nogg2[32];
          text(word, 41.3, 120);
        }

        if (txtm >= 114) {
          word = nogg2[33];
          text(word, 59.5, 137);
        }
        if (txtm >= 116) {
          word += nogg2[34];
          text(word, 59.5, 137);
        }
        if (txtm >= 118) {
          word += nogg2[35];
          text(word, 59.5, 137);
        }
        if (txtm >= 120) {
          word += nogg2[36];
          text(word, 59.5, 137);
        }
        if (txtm >= 122) {
          word += nogg2[37];
          text(word, 59.5, 137);
        }
        if (txtm >= 124) {
          word += nogg2[38];
          text(word, 59.5, 137);
        }
        if (txtm >= 126) {
          word += nogg2[39];
          text(word, 59.5, 137);
        }
        if (txtm >= 128) {
          word += nogg2[40];
          text(word, 59.5, 137);
        }
        if (txtm >= 130) {
          word += nogg2[41];
          text(word, 59.5, 137);
        }
        if (txtm >= 132) {
          word += nogg2[42];
          text(word, 59.5, 137);
        }
        if (txtm >= 134) {
          word += nogg2[43];
          text(word, 59.5, 137);
        }
        if (txtm >= 136) {
          word += nogg2[44];
          text(word, 59.5, 137);
        }
        if (txtm >= 138) {
          word += nogg2[45];
          text(word, 59.5, 137);
        }
        if (txtm >= 140) {
          word += nogg2[46];
          text(word, 59.5, 137);
        }
        if (txtm >= 142) {
          word += nogg2[47];
          text(word, 59.5, 137);
        }
        if (txtm >= 144) {
          word += nogg2[48];
          text(word, 59.5, 137);
        }
        if (txtm >= 146) {
          word += nogg2[49];
          text(word, 59.5, 137);
        }
        if (txtm >= 148) {
          word += nogg2[50];
          text(word, 59.5, 137);
        }
        if (txtm >= 150) {
          word += nogg2[51];
          text(word, 59.5, 137);
        }
        if (txtm >= 152) {
          word += nogg2[52];
          text(word, 59.5, 137);
        }
        if (txtm >= 154) {
          word += nogg2[53];
          text(word, 59.5, 137);
        }
        if (txtm >= 156) {
          word += nogg2[54];
          text(word, 59.5, 137);
        }
        if (txtm >= 158) {
          word += nogg2[55];
          text(word, 59.5, 137);
        }
        if (txtm >= 160) {
          word += nogg2[56];
          text(word, 59.5, 137);
        }
        if (txtm >= 162) {
          word += nogg2[57];
          text(word, 59.5, 137);
        }
        if (txtm >= 164) {
          word += nogg2[58];
          text(word, 59.5, 137);
        }

        if (txtm >= 168) {
          word = nogg2[59];
          text(word, 91.2, 149);
        }
        if (txtm >= 170) {
          word += nogg2[60];
          text(word, 91.2, 149);
        }
        if (txtm >= 172) {
          word += nogg2[61];
          text(word, 91.2, 149);
        }
        if (txtm >= 174) {
          word += nogg2[62];
          text(word, 91.2, 149);
        }
        if (txtm >= 176) {
          word += nogg2[63];
          text(word, 91.2, 149);
        }
        if (txtm >= 178) {
          word += nogg2[64];
          text(word, 91.2, 149);
        }
        if (txtm >= 180) {
          word += nogg2[65];
          text(word, 91.2, 149);
        }
        if (txtm >= 182) {
          word += nogg2[66];
          text(word, 91.2, 149);
        }
        if (txtm >= 184) {
          word += nogg2[67];
          text(word, 91.2, 149);
        }
        if (txtm >= 186) {
          word += nogg2[68];
          text(word, 91.2, 149);
        }
        if (txtm >= 188) {
          word += nogg2[69];
          text(word, 91.2, 149);
        }
        if (txtm >= 190) {
          word += nogg2[70];
          text(word, 91.2, 149);
        }
        if (txtm >= 192) {
          word += nogg2[71];
          text(word, 91.2, 149);
        }
        if (txtm >= 194) {
          word += nogg2[72];
          text(word, 91.2, 149);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }
        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }
        if (txtm >= 8 && txtm < 8 + 1) {
          tor.play();
        }

        if (txtm >= 12 && txtm < 12 + 1) {
          tor.play();
        }
        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }

        if (txtm >= 20 && txtm < 20 + 1) {
          tor.play();
        }

        if (txtm >= 24 && txtm < 24 + 1) {
          tor.play();
        }
        if (txtm >= 26 && txtm < 26 + 1) {
          tor.play();
        }
        if (txtm >= 28 && txtm < 28 + 1) {
          tor.play();
        }
        if (txtm >= 30 && txtm < 30 + 1) {
          tor.play();
        }
        if (txtm >= 32 && txtm < 32 + 1) {
          tor.play();
        }
        if (txtm >= 34 && txtm < 34 + 1) {
          tor.play();
        }
        if (txtm >= 36 && txtm < 36 + 1) {
          tor.play();
        }

        if (txtm >= 40 && txtm < 40 + 1) {
          tor.play();
        }
        if (txtm >= 42 && txtm < 42 + 1) {
          tor.play();
        }
        if (txtm >= 44 && txtm < 44 + 1) {
          tor.play();
        }
        if (txtm >= 46 && txtm < 46 + 1) {
          tor.play();
        }

        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }

        if (txtm >= 56 && txtm < 56 + 1) {
          tor.play();
        }
        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }
        if (txtm >= 60 && txtm < 60 + 1) {
          tor.play();
        }
        if (txtm >= 62 && txtm < 62 + 1) {
          tor.play();
        }
        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }

        if (txtm >= 114 && txtm < 114 + 1) {
          tor.play();
        }
        if (txtm >= 116 && txtm < 116 + 1) {
          tor.play();
        }
        if (txtm >= 118 && txtm < 118 + 1) {
          tor.play();
        }

        if (txtm >= 122 && txtm < 122 + 1) {
          tor.play();
        }
        if (txtm >= 124 && txtm < 124 + 1) {
          tor.play();
        }
        if (txtm >= 126 && txtm < 126 + 1) {
          tor.play();
        }

        if (txtm >= 130 && txtm < 130 + 1) {
          tor.play();
        }
        if (txtm >= 132 && txtm < 132 + 1) {
          tor.play();
        }
        if (txtm >= 134 && txtm < 134 + 1) {
          tor.play();
        }

        if (txtm >= 138 && txtm < 138 + 1) {
          tor.play();
        }
        if (txtm >= 140 && txtm < 140 + 1) {
          tor.play();
        }
        if (txtm >= 142 && txtm < 142 + 1) {
          tor.play();
        }

        if (txtm >= 146 && txtm < 146 + 1) {
          tor.play();
        }
        if (txtm >= 148 && txtm < 148 + 1) {
          tor.play();
        }

        if (txtm >= 152 && txtm < 152 + 1) {
          tor.play();
        }
        if (txtm >= 154 && txtm < 154 + 1) {
          tor.play();
        }

        if (txtm >= 158 && txtm < 158 + 1) {
          tor.play();
        }
        if (txtm >= 160 && txtm < 160 + 1) {
          tor.play();
        }
        if (txtm >= 162 && txtm < 162 + 1) {
          tor.play();
        }
        if (txtm >= 164 && txtm < 164 + 1) {
          tor.play();
        }

        if (txtm >= 168 && txtm < 168 + 1) {
          tor.play();
        }

        if (txtm >= 172 && txtm < 172 + 1) {
          tor.play();
        }
        if (txtm >= 174 && txtm < 174 + 1) {
          tor.play();
        }
        if (txtm >= 176 && txtm < 176 + 1) {
          tor.play();
        }
        if (txtm >= 178 && txtm < 178 + 1) {
          tor.play();
        }
        if (txtm >= 180 && txtm < 180 + 1) {
          tor.play();
        }
        if (txtm >= 182 && txtm < 182 + 1) {
          tor.play();
        }
        if (txtm >= 184 && txtm < 184 + 1) {
          tor.play();
        }
        if (txtm >= 186 && txtm < 186 + 1) {
          tor.play();
        }
        if (txtm >= 188 && txtm < 188 + 1) {
          tor.play();
        }
        if (txtm >= 190 && txtm < 190 + 1) {
          tor.play();
        }
        if (txtm >= 192 && txtm < 192 + 1) {
          tor.play();
        }
        if (txtm >= 194 && txtm < 194 + 1) {
          tor.play();
        }

        if (txtm >= 204 && keyIsDown(90)) {
          nodig = 2;
          txtm = 0;
        }

        break;
      case 2:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos4, 128, 70);

        txtm += 1;
        word = nogg3[0];
        text(word, 120.5, 120);

        if (txtm >= 30) {
          word += nogg3[1];
          text(word, 120.5, 120);
        }
        if (txtm >= 60) {
          word += nogg3[2];
          text(word, 120.5, 120);
        }

        if (txtm >= 70 && keyIsDown(90)) {
          nodig = 3;
          txtm = 0;
        }

        break;
      case 3:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos3, 128, 71.5);

        push();
        translate(random(-0.3, 0.3), random(-0.3, 0.3));

        txtm += 0.7;
        word = nogg4[0];
        text(word, 65, 120);

        if (txtm >= 2) {
          word += nogg4[1];
          text(word, 65, 120);
        }
        if (txtm >= 4) {
          word += nogg4[2];
          text(word, 65, 120);
        }
        if (txtm >= 6) {
          word += nogg4[3];
          text(word, 65, 120);
        }
        if (txtm >= 8) {
          word += nogg4[4];
          text(word, 65, 120);
        }
        if (txtm >= 10) {
          word += nogg4[5];
          text(word, 65, 120);
        }
        if (txtm >= 12) {
          word += nogg4[6];
          text(word, 65, 120);
        }
        if (txtm >= 14) {
          word += nogg4[7];
          text(word, 65, 120);
        }
        if (txtm >= 16) {
          word += nogg4[8];
          text(word, 65, 120);
        }

        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }
        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }
        if (txtm >= 8 && txtm < 8 + 1) {
          tor.play();
        }
        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }
        if (txtm >= 12 && txtm < 12 + 1) {
          tor.play();
        }
        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }

        pop();
        push();
        translate(random(-0.4, 0.4), random(-0.4, 0.4));

        if (txtm >= 46) {
          word = nogg4[9];
          text(word, 112, 120);
        }
        if (txtm >= 48) {
          word += nogg4[10];
          text(word, 112, 120);
        }
        if (txtm >= 50) {
          word += nogg4[11];
          text(word, 112, 120);
        }
        if (txtm >= 52) {
          word += nogg4[12];
          text(word, 112, 120);
        }
        if (txtm >= 54) {
          word += nogg4[13];
          text(word, 112, 120);
        }
        if (txtm >= 56) {
          word += nogg4[14];
          text(word, 112, 120);
        }
        if (txtm >= 58) {
          word += nogg4[15];
          text(word, 112, 120);
        }
        if (txtm >= 60) {
          word += nogg4[16];
          text(word, 112, 120);
        }
        if (txtm >= 62) {
          word += nogg4[17];
          text(word, 112, 120);
        }
        if (txtm >= 64) {
          word += nogg4[18];
          text(word, 112, 120);
        }
        if (txtm >= 66) {
          word += nogg4[19];
          text(word, 112, 120);
        }
        if (txtm >= 68) {
          word += nogg4[20];
          text(word, 112, 120);
        }
        if (txtm >= 70) {
          word += nogg4[21];
          text(word, 112, 120);
        }
        if (txtm >= 72) {
          word += nogg4[22];
          text(word, 112, 120);
        }
        if (txtm >= 74) {
          word += nogg4[23];
          text(word, 112, 120);
        }

        if (txtm >= 46 && txtm < 46 + 1) {
          tor.play();
        }
        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }
        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }
        if (txtm >= 54 && txtm < 54 + 1) {
          tor.play();
        }
        if (txtm >= 56 && txtm < 56 + 1) {
          tor.play();
        }

        if (txtm >= 60 && txtm < 60 + 1) {
          tor.play();
        }
        if (txtm >= 62 && txtm < 62 + 1) {
          tor.play();
        }
        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }
        if (txtm >= 66 && txtm < 66 + 1) {
          tor.play();
        }
        if (txtm >= 68 && txtm < 68 + 1) {
          tor.play();
        }
        if (txtm >= 70 && txtm < 70 + 1) {
          tor.play();
        }
        if (txtm >= 72 && txtm < 72 + 1) {
          tor.play();
        }
        if (txtm >= 74 && txtm < 74 + 1) {
          tor.play();
        }

        pop();
        push();
        translate(random(-0.5, 0.5), random(-0.5, 0.5));

        if (txtm >= 104) {
          word = nogg4[24];
          text(word, 70, 132);
        }
        if (txtm >= 106) {
          word += nogg4[25];
          text(word, 70, 132);
        }
        if (txtm >= 108) {
          word += nogg4[26];
          text(word, 70, 132);
        }
        if (txtm >= 110) {
          word += nogg4[27];
          text(word, 70, 132);
        }
        if (txtm >= 112) {
          word += nogg4[28];
          text(word, 70, 132);
        }
        if (txtm >= 114) {
          word += nogg4[29];
          text(word, 70, 132);
        }
        if (txtm >= 116) {
          word += nogg4[30];
          text(word, 70, 132);
        }
        if (txtm >= 118) {
          word += nogg4[31];
          text(word, 70, 132);
        }
        if (txtm >= 120) {
          word += nogg4[32];
          text(word, 70, 132);
        }
        if (txtm >= 122) {
          word += nogg4[33];
          text(word, 70, 132);
        }
        if (txtm >= 124) {
          word += nogg4[34];
          text(word, 70, 132);
        }
        if (txtm >= 126) {
          word += nogg4[35];
          text(word, 70, 132);
        }
        if (txtm >= 128) {
          word += nogg4[36];
          text(word, 70, 132);
        }
        if (txtm >= 130) {
          word += nogg4[37];
          text(word, 70, 132);
        }
        if (txtm >= 132) {
          word += nogg4[38];
          text(word, 70, 132);
        }
        if (txtm >= 134) {
          word += nogg4[39];
          text(word, 70, 132);
        }
        if (txtm >= 136) {
          word += nogg4[40];
          text(word, 70, 132);
        }
        if (txtm >= 138) {
          word += nogg4[41];
          text(word, 70, 132);
        }
        if (txtm >= 140) {
          word += nogg4[42];
          text(word, 70, 132);
        }
        if (txtm >= 142) {
          word += nogg4[43];
          text(word, 70, 132);
        }
        if (txtm >= 144) {
          word += nogg4[44];
          text(word, 70, 132);
        }
        if (txtm >= 146) {
          word += nogg4[45];
          text(word, 70, 132);
        }

        if (txtm >= 104 && txtm < 104 + 1) {
          tor.play();
        }
        if (txtm >= 106 && txtm < 106 + 1) {
          tor.play();
        }
        if (txtm >= 108 && txtm < 108 + 1) {
          tor.play();
        }
        if (txtm >= 110 && txtm < 110 + 1) {
          tor.play();
        }
        if (txtm >= 112 && txtm < 112 + 1) {
          tor.play();
        }
        if (txtm >= 114 && txtm < 114 + 1) {
          tor.play();
        }
        if (txtm >= 116 && txtm < 116 + 1) {
          tor.play();
        }
        if (txtm >= 118 && txtm < 118 + 1) {
          tor.play();
        }
        if (txtm >= 120 && txtm < 120 + 1) {
          tor.play();
        }

        if (txtm >= 124 && txtm < 124 + 1) {
          tor.play();
        }
        if (txtm >= 126 && txtm < 126 + 1) {
          tor.play();
        }
        if (txtm >= 128 && txtm < 128 + 1) {
          tor.play();
        }
        if (txtm >= 130 && txtm < 130 + 1) {
          tor.play();
        }
        if (txtm >= 132 && txtm < 132 + 1) {
          tor.play();
        }
        if (txtm >= 134 && txtm < 134 + 1) {
          tor.play();
        }
        if (txtm >= 136 && txtm < 136 + 1) {
          tor.play();
        }
        if (txtm >= 138 && txtm < 138 + 1) {
          tor.play();
        }
        if (txtm >= 140 && txtm < 140 + 1) {
          tor.play();
        }
        if (txtm >= 142 && txtm < 142 + 1) {
          tor.play();
        }
        if (txtm >= 144 && txtm < 144 + 1) {
          tor.play();
        }
        if (txtm >= 146 && txtm < 146 + 1) {
          tor.play();
        }

        pop();

        if (txtm >= 156 && keyIsDown(90)) {
          nodig = 4;
          txtm = 0;
        }

        break;
      case 4:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos1, 128, 71);

        txtm += 1;
        word = nogg5[0];
        text(word, 70.2, 120);

        if (txtm >= 2) {
          word += nogg5[1];
          text(word, 70.2, 120);
        }
        if (txtm >= 4) {
          word += nogg5[2];
          text(word, 70.2, 120);
        }
        if (txtm >= 6) {
          word += nogg5[3];
          text(word, 70.2, 120);
        }
        if (txtm >= 8) {
          word += nogg5[4];
          text(word, 70.2, 120);
        }
        if (txtm >= 10) {
          word += nogg5[5];
          text(word, 70.2, 120);
        }
        if (txtm >= 12) {
          word += nogg5[6];
          text(word, 70.2, 120);
        }
        if (txtm >= 14) {
          word += nogg5[7];
          text(word, 70.2, 120);
        }
        if (txtm >= 16) {
          word += nogg5[8];
          text(word, 70.2, 120);
        }
        if (txtm >= 18) {
          word += nogg5[9];
          text(word, 70.2, 120);
        }
        if (txtm >= 20) {
          word += nogg5[10];
          text(word, 70.2, 120);
        }
        if (txtm >= 22) {
          word += nogg5[11];
          text(word, 70.2, 120);
        }
        if (txtm >= 24) {
          word += nogg5[12];
          text(word, 70.2, 120);
        }
        if (txtm >= 26) {
          word += nogg5[13];
          text(word, 70.2, 120);
        }
        if (txtm >= 28) {
          word += nogg5[14];
          text(word, 70.2, 120);
        }
        if (txtm >= 30) {
          word += nogg5[15];
          text(word, 70.2, 120);
        }
        if (txtm >= 32) {
          word += nogg5[16];
          text(word, 70.2, 120);
        }
        if (txtm >= 34) {
          word += nogg5[17];
          text(word, 70.2, 120);
        }
        if (txtm >= 36) {
          word += nogg5[18];
          text(word, 70.2, 120);
        }
        if (txtm >= 38) {
          word += nogg5[19];
          text(word, 70.2, 120);
        }
        if (txtm >= 40) {
          word += nogg5[20];
          text(word, 70.2, 120);
        }
        if (txtm >= 42) {
          word += nogg5[21];
          text(word, 70.2, 120);
        }

        if (txtm >= 46) {
          word = nogg5[22];
          text(word, 91.3, 132);
        }
        if (txtm >= 48) {
          word += nogg5[23];
          text(word, 91.3, 132);
        }
        if (txtm >= 50) {
          word += nogg5[24];
          text(word, 91.3, 132);
        }
        if (txtm >= 52) {
          word += nogg5[25];
          text(word, 91.3, 132);
        }
        if (txtm >= 54) {
          word += nogg5[26];
          text(word, 91.3, 132);
        }
        if (txtm >= 56) {
          word += nogg5[27];
          text(word, 91.3, 132);
        }
        if (txtm >= 58) {
          word += nogg5[28];
          text(word, 91.3, 132);
        }
        if (txtm >= 60) {
          word += nogg5[29];
          text(word, 91.3, 132);
        }
        if (txtm >= 62) {
          word += nogg5[30];
          text(word, 91.3, 132);
        }
        if (txtm >= 64) {
          word += nogg5[31];
          text(word, 91.3, 132);
        }
        if (txtm >= 66) {
          word += nogg5[32];
          text(word, 91.3, 132);
        }
        if (txtm >= 68) {
          word += nogg5[33];
          text(word, 91.3, 132);
        }
        if (txtm >= 70) {
          word += nogg5[34];
          text(word, 91.3, 132);
        }
        if (txtm >= 72) {
          word += nogg5[35];
          text(word, 91.3, 132);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }
        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }
        if (txtm >= 8 && txtm < 8 + 1) {
          tor.play();
        }
        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }

        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }
        if (txtm >= 18 && txtm < 18 + 1) {
          tor.play();
        }
        if (txtm >= 20 && txtm < 20 + 1) {
          tor.play();
        }

        if (txtm >= 24 && txtm < 24 + 1) {
          tor.play();
        }
        if (txtm >= 26 && txtm < 26 + 1) {
          tor.play();
        }
        if (txtm >= 28 && txtm < 28 + 1) {
          tor.play();
        }
        if (txtm >= 30 && txtm < 30 + 1) {
          tor.play();
        }
        if (txtm >= 32 && txtm < 32 + 1) {
          tor.play();
        }
        if (txtm >= 34 && txtm < 34 + 1) {
          tor.play();
        }

        if (txtm >= 38 && txtm < 38 + 1) {
          tor.play();
        }
        if (txtm >= 40 && txtm < 40 + 1) {
          tor.play();
        }
        if (txtm >= 42 && txtm < 42 + 1) {
          tor.play();
        }

        if (txtm >= 46 && txtm < 46 + 1) {
          tor.play();
        }
        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }
        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }
        if (txtm >= 54 && txtm < 54 + 1) {
          tor.play();
        }

        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }

        if (txtm >= 62 && txtm < 62 + 1) {
          tor.play();
        }
        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }
        if (txtm >= 66 && txtm < 66 + 1) {
          tor.play();
        }
        if (txtm >= 68 && txtm < 68 + 1) {
          tor.play();
        }
        if (txtm >= 70 && txtm < 70 + 1) {
          tor.play();
        }
        if (txtm >= 72 && txtm < 72 + 1) {
          tor.play();
        }

        if (txtm >= 82 && keyIsDown(90)) {
          nodig = 5;
          txtm = 0;
        }

        break;
      case 5:

        txtm += 1;
        word = nogg6[0];
        text(word, 49.3, 120);

        if (txtm >= 2) {
          word += nogg6[1];
          text(word, 49.3, 120);
        }
        if (txtm >= 4) {
          word += nogg6[2];
          text(word, 49.3, 120);
        }
        if (txtm >= 6) {
          word += nogg6[3];
          text(word, 49.3, 120);
        }
        if (txtm >= 8) {
          word += nogg6[4];
          text(word, 49.3, 120);
        }
        if (txtm >= 10) {
          word += nogg6[5];
          text(word, 49.3, 120);
        }
        if (txtm >= 12) {
          word += nogg6[6];
          text(word, 49.3, 120);
        }
        if (txtm >= 14) {
          word += nogg6[7];
          text(word, 49.3, 120);
        }
        if (txtm >= 16) {
          word += nogg6[8];
          text(word, 49.3, 120);
        }
        if (txtm >= 18) {
          word += nogg6[9];
          text(word, 49.3, 120);
        }
        if (txtm >= 20) {
          word += nogg6[10];
          text(word, 49.3, 120);
        }
        if (txtm >= 22) {
          word += nogg6[11];
          text(word, 49.3, 120);
        }
        if (txtm >= 32) {
          word += nogg6[12];
          text(word, 49.3, 120);
        }
        if (txtm >= 34) {
          word += nogg6[13];
          text(word, 49.3, 120);
        }
        if (txtm >= 36) {
          word += nogg6[14];
          text(word, 49.3, 120);
        }
        if (txtm >= 38) {
          word += nogg6[15];
          text(word, 49.3, 120);
        }
        if (txtm >= 40) {
          word += nogg6[16];
          text(word, 49.3, 120);
        }
        if (txtm >= 42) {
          word += nogg6[17];
          text(word, 49.3, 120);
        }
        if (txtm >= 44) {
          word += nogg6[18];
          text(word, 49.3, 120);
        }
        if (txtm >= 46) {
          word += nogg6[19];
          text(word, 49.3, 120);
        }
        if (txtm >= 48) {
          word += nogg6[20];
          text(word, 49.3, 120);
        }
        if (txtm >= 50) {
          word += nogg6[21];
          text(word, 49.3, 120);
        }
        if (txtm >= 52) {
          word += nogg6[22];
          text(word, 49.3, 120);
        }
        if (txtm >= 54) {
          word += nogg6[23];
          text(word, 49.3, 120);
        }
        if (txtm >= 56) {
          word += nogg6[24];
          text(word, 49.3, 120);
        }
        if (txtm >= 58) {
          word += nogg6[25];
          text(word, 49.3, 120);
        }
        if (txtm >= 60) {
          word += nogg6[26];
          text(word, 49.3, 120);
        }
        if (txtm >= 62) {
          word += nogg6[27];
          text(word, 49.3, 120);
        }
        if (txtm >= 64) {
          word += nogg6[28];
          text(word, 49.3, 120);
        }
        if (txtm >= 66) {
          word += nogg6[29];
          text(word, 49.3, 120);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }

        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }
        if (txtm >= 8 && txtm < 8 + 1) {
          tor.play();
        }
        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }

        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }
        if (txtm >= 18 && txtm < 18 + 1) {
          tor.play();
        }
        if (txtm >= 20 && txtm < 20 + 1) {
          tor.play();
        }

        if (txtm >= 32 && txtm < 32 + 1) {
          tor.play();
        }
        if (txtm >= 34 && txtm < 34 + 1) {
          tor.play();
        }
        if (txtm >= 36 && txtm < 36 + 1) {
          tor.play();
        }
        if (txtm >= 38 && txtm < 38 + 1) {
          tor.play();
        }

        if (txtm >= 42 && txtm < 42 + 1) {
          tor.play();
        }
        if (txtm >= 44 && txtm < 44 + 1) {
          tor.play();
        }

        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }
        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }
        if (txtm >= 54 && txtm < 54 + 1) {
          tor.play();
        }

        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }
        if (txtm >= 60 && txtm < 60 + 1) {
          tor.play();
        }
        if (txtm >= 62 && txtm < 62 + 1) {
          tor.play();
        }
        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }
        if (txtm >= 66 && txtm < 66 + 1) {
          tor.play();
        }

        if (txtm >= 76 && keyIsDown(90)) {
          nodig = 6;
          txtm = 0;
        }

        break;
      case 6:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos2, 128, 70);

        txtm += 1;
        word = nogg7[0];
        text(word, 120.5, 120);

        if (txtm >= 30) {
          word += nogg7[1];
          text(word, 120.5, 120);
        }
        if (txtm >= 60) {
          word += nogg7[2];
          text(word, 120.5, 120);
        }

        if (txtm >= 70 && keyIsDown(90)) {
          nodig = 7;
          txtm = 0;
        }

        break;
      case 7:

        txtm += 1;
        word = nogg8[0];
        text(word, 75.5, 120);

        if (txtm >= 2) {
          word += nogg8[1];
          text(word, 75.5, 120);
        }
        if (txtm >= 4) {
          word += nogg8[2];
          text(word, 75.5, 120);
        }
        if (txtm >= 6) {
          word += nogg8[3];
          text(word, 75.5, 120);
        }
        if (txtm >= 8) {
          word += nogg8[4];
          text(word, 75.5, 120);
        }
        if (txtm >= 10) {
          word += nogg8[5];
          text(word, 75.5, 120);
        }
        if (txtm >= 12) {
          word += nogg8[6];
          text(word, 75.5, 120);
        }
        if (txtm >= 14) {
          word += nogg8[7];
          text(word, 75.5, 120);
        }
        if (txtm >= 16) {
          word += nogg8[8];
          text(word, 75.5, 120);
        }
        if (txtm >= 18) {
          word += nogg8[9];
          text(word, 75.5, 120);
        }
        if (txtm >= 20) {
          word += nogg8[10];
          text(word, 75.5, 120);
        }
        if (txtm >= 32) {
          word += nogg8[11];
          text(word, 75.5, 120);
        }
        if (txtm >= 34) {
          word += nogg8[12];
          text(word, 75.5, 120);
        }
        if (txtm >= 36) {
          word += nogg8[13];
          text(word, 75.5, 120);
        }
        if (txtm >= 38) {
          word += nogg8[14];
          text(word, 75.5, 120);
        }
        if (txtm >= 40) {
          word += nogg8[15];
          text(word, 75.5, 120);
        }
        if (txtm >= 42) {
          word += nogg8[16];
          text(word, 75.5, 120);
        }
        if (txtm >= 44) {
          word += nogg8[17];
          text(word, 75.5, 120);
        }
        if (txtm >= 46) {
          word += nogg8[18];
          text(word, 75.5, 120);
        }
        if (txtm >= 48) {
          word += nogg8[19];
          text(word, 75.5, 120);
        }

        if (txtm >= 52) {
          word = nogg8[20];
          text(word, 84, 132);
        }
        if (txtm >= 54) {
          word += nogg8[21];
          text(word, 84, 132);
        }
        if (txtm >= 56) {
          word += nogg8[22];
          text(word, 84, 132);
        }
        if (txtm >= 58) {
          word += nogg8[23];
          text(word, 84, 132);
        }
        if (txtm >= 60) {
          word += nogg8[24];
          text(word, 84, 132);
        }
        if (txtm >= 62) {
          word += nogg8[25];
          text(word, 84, 132);
        }
        if (txtm >= 64) {
          word += nogg8[26];
          text(word, 84, 132);
        }
        if (txtm >= 66) {
          word += nogg8[27];
          text(word, 84, 132);
        }
        if (txtm >= 68) {
          word += nogg8[28];
          text(word, 84, 132);
        }
        if (txtm >= 70) {
          word += nogg8[29];
          text(word, 84, 132);
        }
        if (txtm >= 72) {
          word += nogg8[30];
          text(word, 84, 132);
        }
        if (txtm >= 74) {
          word += nogg8[31];
          text(word, 84, 132);
        }
        if (txtm >= 76) {
          word += nogg8[32];
          text(word, 84, 132);
        }
        if (txtm >= 78) {
          word += nogg8[33];
          text(word, 84, 132);
        }
        if (txtm >= 80) {
          word += nogg8[34];
          text(word, 84, 132);
        }
        if (txtm >= 82) {
          word += nogg8[35];
          text(word, 84, 132);
        }
        if (txtm >= 84) {
          word += nogg8[36];
          text(word, 84, 132);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }
        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }

        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }
        if (txtm >= 12 && txtm < 12 + 1) {
          tor.play();
        }
        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }
        if (txtm >= 18 && txtm < 18 + 1) {
          tor.play();
        }

        if (txtm >= 32 && txtm < 32 + 1) {
          tor.play();
        }
        if (txtm >= 34 && txtm < 34 + 1) {
          tor.play();
        }
        if (txtm >= 36 && txtm < 36 + 1) {
          tor.play();
        }

        if (txtm >= 40 && txtm < 40 + 1) {
          tor.play();
        }
        if (txtm >= 42 && txtm < 42 + 1) {
          tor.play();
        }
        if (txtm >= 44 && txtm < 44 + 1) {
          tor.play();
        }
        if (txtm >= 46 && txtm < 46 + 1) {
          tor.play();
        }
        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }

        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }
        if (txtm >= 54 && txtm < 54 + 1) {
          tor.play();
        }
        if (txtm >= 56 && txtm < 56 + 1) {
          tor.play();
        }
        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }

        if (txtm >= 62 && txtm < 62 + 1) {
          tor.play();
        }
        if (txtm >= 64 && txtm < 64 + 1) {
          tor.play();
        }
        if (txtm >= 66 && txtm < 66 + 1) {
          tor.play();
        }
        if (txtm >= 68 && txtm < 68 + 1) {
          tor.play();
        }

        if (txtm >= 72 && txtm < 72 + 1) {
          tor.play();
        }
        if (txtm >= 74 && txtm < 74 + 1) {
          tor.play();
        }
        if (txtm >= 76 && txtm < 76 + 1) {
          tor.play();
        }
        if (txtm >= 78 && txtm < 78 + 1) {
          tor.play();
        }
        if (txtm >= 80 && txtm < 80 + 1) {
          tor.play();
        }
        if (txtm >= 82 && txtm < 82 + 1) {
          tor.play();
        }
        if (txtm >= 84 && txtm < 84 + 1) {
          tor.play();
        }

        if (txtm >= 94 && keyIsDown(90)) {
          nodig = 8;
          txtm = 0;
        }

        break;
      case 8:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        image(nos5, 128, 71);

        txtm += 1;
        word = nogg9[0];
        text(word, 49.3, 120);

        if (txtm >= 2) {
          word += nogg9[1];
          text(word, 49.3, 120);
        }
        if (txtm >= 4) {
          word += nogg9[2];
          text(word, 49.3, 120);
        }
        if (txtm >= 6) {
          word += nogg9[3];
          text(word, 49.3, 120);
        }
        if (txtm >= 8) {
          word += nogg9[4];
          text(word, 49.3, 120);
        }
        if (txtm >= 10) {
          word += nogg9[5];
          text(word, 49.3, 120);
        }
        if (txtm >= 12) {
          word += nogg9[6];
          text(word, 49.3, 120);
        }
        if (txtm >= 14) {
          word += nogg9[7];
          text(word, 49.3, 120);
        }
        if (txtm >= 16) {
          word += nogg9[8];
          text(word, 49.3, 120);
        }
        if (txtm >= 18) {
          word += nogg9[9];
          text(word, 49.3, 120);
        }
        if (txtm >= 20) {
          word += nogg9[10];
          text(word, 49.3, 120);
        }
        if (txtm >= 22) {
          word += nogg9[11];
          text(word, 49.3, 120);
        }
        if (txtm >= 24) {
          word += nogg9[12];
          text(word, 49.3, 120);
        }
        if (txtm >= 26) {
          word += nogg9[13];
          text(word, 49.3, 120);
        }
        if (txtm >= 28) {
          word += nogg9[14];
          text(word, 49.3, 120);
        }
        if (txtm >= 30) {
          word += nogg9[15];
          text(word, 49.3, 120);
        }
        if (txtm >= 32) {
          word += nogg9[16];
          text(word, 49.3, 120);
        }
        if (txtm >= 34) {
          word += nogg9[17];
          text(word, 49.3, 120);
        }
        if (txtm >= 36) {
          word += nogg9[18];
          text(word, 49.3, 120);
        }
        if (txtm >= 38) {
          word += nogg9[19];
          text(word, 49.3, 120);
        }
        if (txtm >= 40) {
          word += nogg9[20];
          text(word, 49.3, 120);
        }
        if (txtm >= 42) {
          word += nogg9[21];
          text(word, 49.3, 120);
        }
        if (txtm >= 44) {
          word += nogg9[22];
          text(word, 49.3, 120);
        }
        if (txtm >= 46) {
          word += nogg9[23];
          text(word, 49.3, 120);
        }
        if (txtm >= 48) {
          word += nogg9[24];
          text(word, 49.3, 120);
        }
        if (txtm >= 50) {
          word += nogg9[25];
          text(word, 49.3, 120);
        }
        if (txtm >= 52) {
          word += nogg9[26];
          text(word, 49.3, 120);
        }
        if (txtm >= 54) {
          word += nogg9[27];
          text(word, 49.3, 120);
        }
        if (txtm >= 56) {
          word += nogg9[28];
          text(word, 49.3, 120);
        }
        if (txtm >= 58) {
          word += nogg9[29];
          text(word, 49.3, 120);
        }

        if (txtm >= 70) {
          word = nogg9[30];
          text(word, 70.2, 132);
        }
        if (txtm >= 72) {
          word += nogg9[31];
          text(word, 70.2, 132);
        }
        if (txtm >= 74) {
          word += nogg9[32];
          text(word, 70.2, 132);
        }
        if (txtm >= 76) {
          word += nogg9[33];
          text(word, 70.2, 132);
        }
        if (txtm >= 78) {
          word += nogg9[34];
          text(word, 70.2, 132);
        }
        if (txtm >= 80) {
          word += nogg9[35];
          text(word, 70.2, 132);
        }
        if (txtm >= 82) {
          word += nogg9[36];
          text(word, 70.2, 132);
        }
        if (txtm >= 84) {
          word += nogg9[37];
          text(word, 70.2, 132);
        }
        if (txtm >= 86) {
          word += nogg9[38];
          text(word, 70.2, 132);
        }
        if (txtm >= 88) {
          word += nogg9[39];
          text(word, 70.2, 132);
        }
        if (txtm >= 90) {
          word += nogg9[40];
          text(word, 70.2, 132);
        }
        if (txtm >= 92) {
          word += nogg9[41];
          text(word, 70.2, 132);
        }
        if (txtm >= 94) {
          word += nogg9[42];
          text(word, 70.2, 132);
        }
        if (txtm >= 96) {
          word += nogg9[43];
          text(word, 70.2, 132);
        }
        if (txtm >= 98) {
          word += nogg9[44];
          text(word, 70.2, 132);
        }
        if (txtm >= 100) {
          word += nogg9[45];
          text(word, 70.2, 132);
        }
        if (txtm >= 102) {
          word += nogg9[46];
          text(word, 70.2, 132);
        }
        if (txtm >= 104) {
          word += nogg9[47];
          text(word, 70.2, 132);
        }
        if (txtm >= 106) {
          word += nogg9[48];
          text(word, 70.2, 132);
        }
        if (txtm >= 108) {
          word += nogg9[49];
          text(word, 70.2, 132);
        }
        if (txtm >= 110) {
          word += nogg9[50];
          text(word, 70.2, 132);
        }
        if (txtm >= 112) {
          word += nogg9[51];
          text(word, 70.2, 132);
        }


        if (txtm >= 0 && txtm < 0 + 1) {
          tor.play();
        }
        if (txtm >= 2 && txtm < 2 + 1) {
          tor.play();
        }
        if (txtm >= 4 && txtm < 4 + 1) {
          tor.play();
        }
        if (txtm >= 6 && txtm < 6 + 1) {
          tor.play();
        }

        if (txtm >= 10 && txtm < 10 + 1) {
          tor.play();
        }
        if (txtm >= 12 && txtm < 12 + 1) {
          tor.play();
        }
        if (txtm >= 14 && txtm < 14 + 1) {
          tor.play();
        }
        if (txtm >= 16 && txtm < 16 + 1) {
          tor.play();
        }
        if (txtm >= 18 && txtm < 18 + 1) {
          tor.play();
        }
        if (txtm >= 20 && txtm < 20 + 1) {
          tor.play();
        }
        if (txtm >= 22 && txtm < 22 + 1) {
          tor.play();
        }
        if (txtm >= 24 && txtm < 24 + 1) {
          tor.play();
        }
        if (txtm >= 26 && txtm < 26 + 1) {
          tor.play();
        }
        if (txtm >= 28 && txtm < 28 + 1) {
          tor.play();
        }
        if (txtm >= 30 && txtm < 30 + 1) {
          tor.play();
        }

        if (txtm >= 34 && txtm < 34 + 1) {
          tor.play();
        }
        if (txtm >= 36 && txtm < 36 + 1) {
          tor.play();
        }

        if (txtm >= 40 && txtm < 40 + 1) {
          tor.play();
        }
        if (txtm >= 42 && txtm < 42 + 1) {
          tor.play();
        }
        if (txtm >= 44 && txtm < 44 + 1) {
          tor.play();
        }
        if (txtm >= 46 && txtm < 46 + 1) {
          tor.play();
        }
        if (txtm >= 48 && txtm < 48 + 1) {
          tor.play();
        }
        if (txtm >= 50 && txtm < 50 + 1) {
          tor.play();
        }
        if (txtm >= 52 && txtm < 52 + 1) {
          tor.play();
        }
        if (txtm >= 54 && txtm < 54 + 1) {
          tor.play();
        }
        if (txtm >= 56 && txtm < 56 + 1) {
          tor.play();
        }
        if (txtm >= 58 && txtm < 58 + 1) {
          tor.play();
        }

        if (txtm >= 70 && txtm < 70 + 1) {
          tor.play();
        }
        if (txtm >= 72 && txtm < 72 + 1) {
          tor.play();
        }

        if (txtm >= 76 && txtm < 76 + 1) {
          tor.play();
        }
        if (txtm >= 78 && txtm < 78 + 1) {
          tor.play();
        }
        if (txtm >= 80 && txtm < 80 + 1) {
          tor.play();
        }
        if (txtm >= 82 && txtm < 82 + 1) {
          tor.play();
        }
        if (txtm >= 84 && txtm < 84 + 1) {
          tor.play();
        }
        if (txtm >= 86 && txtm < 86 + 1) {
          tor.play();
        }

        if (txtm >= 90 && txtm < 90 + 1) {
          tor.play();
        }
        if (txtm >= 92 && txtm < 92 + 1) {
          tor.play();
        }
        if (txtm >= 94 && txtm < 94 + 1) {
          tor.play();
        }
        if (txtm >= 96 && txtm < 96 + 1) {
          tor.play();
        }
        if (txtm >= 98 && txtm < 98 + 1) {
          tor.play();
        }
        if (txtm >= 100 && txtm < 100 + 1) {
          tor.play();
        }
        if (txtm >= 102 && txtm < 102 + 1) {
          tor.play();
        }
        if (txtm >= 104 && txtm < 104 + 1) {
          tor.play();
        }
        if (txtm >= 106 && txtm < 106 + 1) {
          tor.play();
        }
        if (txtm >= 108 && txtm < 108 + 1) {
          tor.play();
        }
        if (txtm >= 110 && txtm < 110 + 1) {
          tor.play();
        }
        if (txtm >= 112 && txtm < 112 + 1) {
          tor.play();
        }

        if (txtm >= 122 && keyIsDown(90)) {
          fdsw = 0;
        }

        if (fdsw <= 0) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 5) {
          nlg.volume(nlv);
          nlv -= 0.02;
        }
        if (nlv <= 0) {
          nlv = 0;
          nlg.stop();
        }

        if (fd >= 300) {
          nodig = 9;
          txtm = 0;
          fd = 255;
        }

        break;
      case 9:

        txtm += 1;
        background(0);

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        let nogg10 = ['G', 'I', 'Y', 'G', 'A', 'S', ' ', 'h', 'a', 's', ' ', 'r',
          'e', 't', 'u', 'r', 'n', 'e', 'd', '.'
        ];

        //text('GIYGAS has returned.',77,120);

        if (txtm <= 50 && txtm > 49) {
          nsty.loop();
        }

        if (txtm >= 50) {
          word = nogg10[0];
          text(word, 77, 120);
        }
        if (txtm >= 54) {
          word += nogg10[1];
          text(word, 77, 120);
        }
        if (txtm >= 58) {
          word += nogg10[2];
          text(word, 77, 120);
        }
        if (txtm >= 62) {
          word += nogg10[3];
          text(word, 77, 120);
        }
        if (txtm >= 66) {
          word += nogg10[4];
          text(word, 77, 120);
        }
        if (txtm >= 70) {
          word += nogg10[5];
          text(word, 77, 120);
        }
        if (txtm >= 74) {
          word += nogg10[6];
          text(word, 77, 120);
        }
        if (txtm >= 78) {
          word += nogg10[7];
          text(word, 77, 120);
        }
        if (txtm >= 82) {
          word += nogg10[8];
          text(word, 77, 120);
        }
        if (txtm >= 86) {
          word += nogg10[9];
          text(word, 77, 120);
        }
        if (txtm >= 90) {
          word += nogg10[10];
          text(word, 77, 120);
        }
        if (txtm >= 94) {
          word += nogg10[11];
          text(word, 77, 120);
        }
        if (txtm >= 98) {
          word += nogg10[12];
          text(word, 77, 120);
        }
        if (txtm >= 102) {
          word += nogg10[13];
          text(word, 77, 120);
        }
        if (txtm >= 106) {
          word += nogg10[14];
          text(word, 77, 120);
        }
        if (txtm >= 110) {
          word += nogg10[15];
          text(word, 77, 120);
        }
        if (txtm >= 114) {
          word += nogg10[16];
          text(word, 77, 120);
        }
        if (txtm >= 118) {
          word += nogg10[17];
          text(word, 77, 120);
        }
        if (txtm >= 122) {
          word += nogg10[18];
          text(word, 77, 120);
        }
        if (txtm >= 126) {
          word += nogg10[19];
          text(word, 77, 120);
        }

        if (txtm >= 136 && keyIsDown(90)) {
          fdsw = 1;
        }

        if (fdsw >= 1) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 10;
          txtm = 0;
          fd = 255;
        }

        break;
      case 10:

        txtm += 1;
        background(0);

        push();
        scale(1.005);
        image(sty06, 128, 126);
        pop();

        push();
        scale(1.005);

        if (fdt <= 0) {
          fdc = 0;
        }
        if (fdc <= 0) {
          fdt += 3;
        }
        if (fdt >= 50) {
          fdc = 1;
        }
        if (fdc >= 1) {
          fdt -= 3;
        }

        if (fdt >= 10 && fdt < 20) {
          image(gg25, 128, 126);
        }
        if (fdt >= 20 && fdt < 30) {
          image(gg50, 128, 126);
        }
        if (fdt >= 30 && fdt < 40) {
          image(gg75, 128, 126);
        }
        if (fdt >= 40 && fdt <= 50) {
          image(sty07, 128, 126);
        }

        push();
        rectMode(CORNER);
        noStroke();
        fill(0);
        rect(0, 0, 300, 32.2);
        rect(0, 178.2, 300, 32);
        pop();
        pop();

        let nogg11 = ['H', 'i', 's', ' ', 'a', 'r', 'm', 'y', ' ', 'o', 'f', ' ',
          'S', 'T', 'A', 'R', 'M', 'E', 'N', ' ', 'w', 'o', 'r', 'k',
          ' ', 'r', 'e', 'l', 'e', 'n', 't', 'l', 'e', 's', 's', 'l',
          'y', 't', 'o', ' ', 'e', 'n', 'v', 'e', 'l', 'o', 'p', ' ',
          'o', 'u', 'r', ' ', 'E', 'a', 'r', 't', 'h', ' ', 'i', 'n',
          ' ', 'd', 'a', 'r', 'k', 'n', 'e', 's', 's', '.'
        ];

        //text('His army of STARMEN work relentlessly',31,196);
        //text('to envelop our Earth in darkness.',41.5,208);

        if (txtm < 83) {
          if (txtm >= 10) {
            word = nogg11[0];
            text(word, 31, 196);
          }
          if (txtm >= 12) {
            word += nogg11[1];
            text(word, 31, 196);
          }
          if (txtm >= 14) {
            word += nogg11[2];
            text(word, 31, 196);
          }
          if (txtm >= 16) {
            word += nogg11[3];
            text(word, 31, 196);
          }
          if (txtm >= 18) {
            word += nogg11[4];
            text(word, 31, 196);
          }
          if (txtm >= 20) {
            word += nogg11[5];
            text(word, 31, 196);
          }
          if (txtm >= 22) {
            word += nogg11[6];
            text(word, 31, 196);
          }
          if (txtm >= 24) {
            word += nogg11[7];
            text(word, 31, 196);
          }
          if (txtm >= 26) {
            word += nogg11[8];
            text(word, 31, 196);
          }
          if (txtm >= 28) {
            word += nogg11[9];
            text(word, 31, 196);
          }
          if (txtm >= 30) {
            word += nogg11[10];
            text(word, 31, 196);
          }
          if (txtm >= 32) {
            word += nogg11[11];
            text(word, 31, 196);
          }
          if (txtm >= 34) {
            word += nogg11[12];
            text(word, 31, 196);
          }
          if (txtm >= 36) {
            word += nogg11[13];
            text(word, 31, 196);
          }
          if (txtm >= 38) {
            word += nogg11[14];
            text(word, 31, 196);
          }
          if (txtm >= 40) {
            word += nogg11[15];
            text(word, 31, 196);
          }
          if (txtm >= 42) {
            word += nogg11[16];
            text(word, 31, 196);
          }
          if (txtm >= 44) {
            word += nogg11[17];
            text(word, 31, 196);
          }
          if (txtm >= 46) {
            word += nogg11[18];
            text(word, 31, 196);
          }
          if (txtm >= 48) {
            word += nogg11[19];
            text(word, 31, 196);
          }
          if (txtm >= 50) {
            word += nogg11[20];
            text(word, 31, 196);
          }
          if (txtm >= 52) {
            word += nogg11[21];
            text(word, 31, 196);
          }
          if (txtm >= 54) {
            word += nogg11[22];
            text(word, 31, 196);
          }
          if (txtm >= 56) {
            word += nogg11[23];
            text(word, 31, 196);
          }
          if (txtm >= 58) {
            word += nogg11[24];
            text(word, 31, 196);
          }
          if (txtm >= 60) {
            word += nogg11[25];
            text(word, 31, 196);
          }
          if (txtm >= 62) {
            word += nogg11[26];
            text(word, 31, 196);
          }
          if (txtm >= 64) {
            word += nogg11[27];
            text(word, 31, 196);
          }
          if (txtm >= 66) {
            word += nogg11[28];
            text(word, 31, 196);
          }
          if (txtm >= 68) {
            word += nogg11[29];
            text(word, 31, 196);
          }
          if (txtm >= 70) {
            word += nogg11[30];
            text(word, 31, 196);
          }
          if (txtm >= 72) {
            word += nogg11[31];
            text(word, 31, 196);
          }
          if (txtm >= 74) {
            word += nogg11[32];
            text(word, 31, 196);
          }
          if (txtm >= 76) {
            word += nogg11[33];
            text(word, 31, 196);
          }
          if (txtm >= 78) {
            word += nogg11[34];
            text(word, 31, 196);
          }
          if (txtm >= 80) {
            word += nogg11[35];
            text(word, 31, 196);
          }
          if (txtm >= 82) {
            word += nogg11[36];
            text(word, 31, 196);
          }
        }

        if (txtm >= 83) {
          text('His army of STARMEN work relentlessly', 31, 196);
        }

        if (txtm < 151) {
          if (txtm >= 86) {
            word = nogg11[37];
            text(word, 41.5, 208);
          }
          if (txtm >= 88) {
            word += nogg11[38];
            text(word, 41.5, 208);
          }
          if (txtm >= 90) {
            word += nogg11[39];
            text(word, 41.5, 208);
          }
          if (txtm >= 92) {
            word += nogg11[40];
            text(word, 41.5, 208);
          }
          if (txtm >= 94) {
            word += nogg11[41];
            text(word, 41.5, 208);
          }
          if (txtm >= 96) {
            word += nogg11[42];
            text(word, 41.5, 208);
          }
          if (txtm >= 98) {
            word += nogg11[43];
            text(word, 41.5, 208);
          }
          if (txtm >= 100) {
            word += nogg11[44];
            text(word, 41.5, 208);
          }
          if (txtm >= 102) {
            word += nogg11[45];
            text(word, 41.5, 208);
          }
          if (txtm >= 104) {
            word += nogg11[46];
            text(word, 41.5, 208);
          }
          if (txtm >= 106) {
            word += nogg11[47];
            text(word, 41.5, 208);
          }
          if (txtm >= 108) {
            word += nogg11[48];
            text(word, 41.5, 208);
          }
          if (txtm >= 110) {
            word += nogg11[49];
            text(word, 41.5, 208);
          }
          if (txtm >= 112) {
            word += nogg11[50];
            text(word, 41.5, 208);
          }
          if (txtm >= 114) {
            word += nogg11[51];
            text(word, 41.5, 208);
          }
          if (txtm >= 116) {
            word += nogg11[52];
            text(word, 41.5, 208);
          }
          if (txtm >= 118) {
            word += nogg11[53];
            text(word, 41.5, 208);
          }
          if (txtm >= 120) {
            word += nogg11[54];
            text(word, 41.5, 208);
          }
          if (txtm >= 122) {
            word += nogg11[55];
            text(word, 41.5, 208);
          }
          if (txtm >= 124) {
            word += nogg11[56];
            text(word, 41.5, 208);
          }
          if (txtm >= 126) {
            word += nogg11[57];
            text(word, 41.5, 208);
          }
          if (txtm >= 128) {
            word += nogg11[58];
            text(word, 41.5, 208);
          }
          if (txtm >= 130) {
            word += nogg11[59];
            text(word, 41.5, 208);
          }
          if (txtm >= 132) {
            word += nogg11[60];
            text(word, 41.5, 208);
          }
          if (txtm >= 134) {
            word += nogg11[61];
            text(word, 41.5, 208);
          }
          if (txtm >= 136) {
            word += nogg11[62];
            text(word, 41.5, 208);
          }
          if (txtm >= 138) {
            word += nogg11[63];
            text(word, 41.5, 208);
          }
          if (txtm >= 140) {
            word += nogg11[64];
            text(word, 41.5, 208);
          }
          if (txtm >= 142) {
            word += nogg11[65];
            text(word, 41.5, 208);
          }
          if (txtm >= 144) {
            word += nogg11[66];
            text(word, 41.5, 208);
          }
          if (txtm >= 146) {
            word += nogg11[67];
            text(word, 41.5, 208);
          }
          if (txtm >= 148) {
            word += nogg11[68];
            text(word, 41.5, 208);
          }
          if (txtm >= 150) {
            word += nogg11[69];
            text(word, 41.5, 208);
          }
        }

        if (txtm >= 151) {
          text('to envelop our Earth in darkness.', 41.5, 208);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 160 && keyIsDown(90)) {
          fdsw = 0;
        }

        if (fdsw <= 0) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 11;
          txtm = 0;
          fd = 255;
          fdt = 0;
          fdc = 0;
        }

        break;
      case 11:

        txtm += 1;
        fdt += 1;
        background(0);

        push();
        scale(0.81);

        if (fdt >= 89 && fdt < 96) {
          translate(random(-1.7, 1.7), random(-0.5, 0.5));
        }

        image(sty08, 158, 146);
        pop();

        push();
        scale(0.81);

        if (fdt >= 89 && fdt < 96) {
          translate(random(-1.7, 1.7), random(-0.5, 0.5));
        }

        if (fdt >= 87 && fdt < 88) {
          hurt.play();
        }

        if (fdt >= 86 && fdt < 88) {
          image(bc80, 158, 146);
        }
        if (fdt >= 88 && fdt < 90) {
          image(bc20, 158, 146);
        }
        if (fdt >= 90) {
          image(sty09, 158, 146);
        }

        pop();

        let nogg12 = ['M', 'o', 's', 't', ' ', 'h', 'a', 'v', 'e', ' ', 'a', 'l',
          'r', 'e', 'a', 'd', 'y', ' ', 'f', 'a', 'l', 'l', 'e', 'n',
          ' ', 'u', 'n', 'd', 'e', 'r', ' ', 't', 'h', 'e', 'i', 'r',
          ' ', 's', 'p', 'e', 'l', 'l', '.', 'B', 'e', ' ', 'c', 'a',
          'r', 'e', 'f', 'u', 'l', ' ', 'w', 'h', 'o', ' ', 'y', 'o',
          'u', ' ', 't', 'r', 'u', 's', 't', '.'
        ];

        //text('Most have already fallen under their spell.',15,176);
        //text('Be careful who you trust.',62.5,188);

        if (txtm < 95) {
          if (txtm >= 10) {
            word = nogg12[0];
            text(word, 15, 176);
          }
          if (txtm >= 12) {
            word += nogg12[1];
            text(word, 15, 176);
          }
          if (txtm >= 14) {
            word += nogg12[2];
            text(word, 15, 176);
          }
          if (txtm >= 16) {
            word += nogg12[3];
            text(word, 15, 176);
          }
          if (txtm >= 18) {
            word += nogg12[4];
            text(word, 15, 176);
          }
          if (txtm >= 20) {
            word += nogg12[5];
            text(word, 15, 176);
          }
          if (txtm >= 22) {
            word += nogg12[6];
            text(word, 15, 176);
          }
          if (txtm >= 24) {
            word += nogg12[7];
            text(word, 15, 176);
          }
          if (txtm >= 26) {
            word += nogg12[8];
            text(word, 15, 176);
          }
          if (txtm >= 28) {
            word += nogg12[9];
            text(word, 15, 176);
          }
          if (txtm >= 30) {
            word += nogg12[10];
            text(word, 15, 176);
          }
          if (txtm >= 32) {
            word += nogg12[11];
            text(word, 15, 176);
          }
          if (txtm >= 34) {
            word += nogg12[12];
            text(word, 15, 176);
          }
          if (txtm >= 36) {
            word += nogg12[13];
            text(word, 15, 176);
          }
          if (txtm >= 38) {
            word += nogg12[14];
            text(word, 15, 176);
          }
          if (txtm >= 40) {
            word += nogg12[15];
            text(word, 15, 176);
          }
          if (txtm >= 42) {
            word += nogg12[16];
            text(word, 15, 176);
          }
          if (txtm >= 44) {
            word += nogg12[17];
            text(word, 15, 176);
          }
          if (txtm >= 46) {
            word += nogg12[18];
            text(word, 15, 176);
          }
          if (txtm >= 48) {
            word += nogg12[19];
            text(word, 15, 176);
          }
          if (txtm >= 50) {
            word += nogg12[20];
            text(word, 15, 176);
          }
          if (txtm >= 52) {
            word += nogg12[21];
            text(word, 15, 176);
          }
          if (txtm >= 54) {
            word += nogg12[22];
            text(word, 15, 176);
          }
          if (txtm >= 56) {
            word += nogg12[23];
            text(word, 15, 176);
          }
          if (txtm >= 58) {
            word += nogg12[24];
            text(word, 15, 176);
          }
          if (txtm >= 60) {
            word += nogg12[25];
            text(word, 15, 176);
          }
          if (txtm >= 62) {
            word += nogg12[26];
            text(word, 15, 176);
          }
          if (txtm >= 64) {
            word += nogg12[27];
            text(word, 15, 176);
          }
          if (txtm >= 66) {
            word += nogg12[28];
            text(word, 15, 176);
          }
          if (txtm >= 68) {
            word += nogg12[29];
            text(word, 15, 176);
          }
          if (txtm >= 70) {
            word += nogg12[30];
            text(word, 15, 176);
          }
          if (txtm >= 72) {
            word += nogg12[31];
            text(word, 15, 176);
          }
          if (txtm >= 74) {
            word += nogg12[32];
            text(word, 15, 176);
          }
          if (txtm >= 76) {
            word += nogg12[33];
            text(word, 15, 176);
          }
          if (txtm >= 78) {
            word += nogg12[34];
            text(word, 15, 176);
          }
          if (txtm >= 80) {
            word += nogg12[35];
            text(word, 15, 176);
          }
          if (txtm >= 82) {
            word += nogg12[36];
            text(word, 15, 176);
          }
          if (txtm >= 84) {
            word += nogg12[37];
            text(word, 15, 176);
          }
          if (txtm >= 86) {
            word += nogg12[38];
            text(word, 15, 176);
          }
          if (txtm >= 88) {
            word += nogg12[39];
            text(word, 15, 176);
          }
          if (txtm >= 90) {
            word += nogg12[40];
            text(word, 15, 176);
          }
          if (txtm >= 92) {
            word += nogg12[41];
            text(word, 15, 176);
          }
          if (txtm >= 94) {
            word += nogg12[42];
            text(word, 15, 176);
          }
        }

        if (txtm >= 95) {
          text('Most have already fallen under their spell.', 15, 176);
        }

        if (txtm < 177) {
          if (txtm >= 98 + 30) {
            word = nogg12[43];
            text(word, 62.5, 188);
          }
          if (txtm >= 100 + 30) {
            word += nogg12[44];
            text(word, 62.5, 188);
          }
          if (txtm >= 102 + 30) {
            word += nogg12[45];
            text(word, 62.5, 188);
          }
          if (txtm >= 104 + 30) {
            word += nogg12[46];
            text(word, 62.5, 188);
          }
          if (txtm >= 106 + 30) {
            word += nogg12[47];
            text(word, 62.5, 188);
          }
          if (txtm >= 108 + 30) {
            word += nogg12[48];
            text(word, 62.5, 188);
          }
          if (txtm >= 110 + 30) {
            word += nogg12[49];
            text(word, 62.5, 188);
          }
          if (txtm >= 112 + 30) {
            word += nogg12[50];
            text(word, 62.5, 188);
          }
          if (txtm >= 114 + 30) {
            word += nogg12[51];
            text(word, 62.5, 188);
          }
          if (txtm >= 116 + 30) {
            word += nogg12[52];
            text(word, 62.5, 188);
          }
          if (txtm >= 118 + 30) {
            word += nogg12[53];
            text(word, 62.5, 188);
          }
          if (txtm >= 120 + 30) {
            word += nogg12[54];
            text(word, 62.5, 188);
          }
          if (txtm >= 122 + 30) {
            word += nogg12[55];
            text(word, 62.5, 188);
          }
          if (txtm >= 124 + 30) {
            word += nogg12[56];
            text(word, 62.5, 188);
          }
          if (txtm >= 126 + 30) {
            word += nogg12[57];
            text(word, 62.5, 188);
          }
          if (txtm >= 128 + 30) {
            word += nogg12[58];
            text(word, 62.5, 188);
          }
          if (txtm >= 130 + 30) {
            word += nogg12[59];
            text(word, 62.5, 188);
          }
          if (txtm >= 132 + 30) {
            word += nogg12[60];
            text(word, 62.5, 188);
          }
          if (txtm >= 134 + 30) {
            word += nogg12[61];
            text(word, 62.5, 188);
          }
          if (txtm >= 136 + 30) {
            word += nogg12[62];
            text(word, 62.5, 188);
          }
          if (txtm >= 138 + 30) {
            word += nogg12[63];
            text(word, 62.5, 188);
          }
          if (txtm >= 140 + 30) {
            word += nogg12[64];
            text(word, 62.5, 188);
          }
          if (txtm >= 142 + 30) {
            word += nogg12[65];
            text(word, 62.5, 188);
          }
          if (txtm >= 144 + 30) {
            word += nogg12[66];
            text(word, 62.5, 188);
          }
          if (txtm >= 146 + 30) {
            word += nogg12[67];
            text(word, 62.5, 188);
          }
        }

        if (txtm >= 177) {
          text('Be careful who you trust.', 62.5, 188);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 186 && keyIsDown(90)) {
          fdsw = 1;
        }

        if (fdsw >= 1) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 12;
          txtm = 0;
          fd = 255;
          fdt = 0;
        }

        break;
      case 12:

        txtm += 1;
        fdt += 1;
        background(0);

        push();
        scale(0.81);
        image(sty03, 158, 160);
        pop();

        let nogg13 = ['O', 'n', 'l', 'y', ' ', 't', 'h', 'e', ' ', 't', 'h', 'r',
          'e', 'e', ' ', 'H', 'E', 'R', 'O', 'E', 'S', ' ', 'c', 'a',
          'n', ' ', 's', 'a', 'v', 'e', ' ', 'u', 's', ' ', 'n', 'o',
          'w', '.'
        ];

        //text('Only the three HEROES can save us now.',28,196);

        if (txtm >= 10) {
          word = nogg13[0];
          text(word, 28, 196);
        }
        if (txtm >= 12) {
          word += nogg13[1];
          text(word, 28, 196);
        }
        if (txtm >= 14) {
          word += nogg13[2];
          text(word, 28, 196);
        }
        if (txtm >= 16) {
          word += nogg13[3];
          text(word, 28, 196);
        }
        if (txtm >= 18) {
          word += nogg13[4];
          text(word, 28, 196);
        }
        if (txtm >= 20) {
          word += nogg13[5];
          text(word, 28, 196);
        }
        if (txtm >= 22) {
          word += nogg13[6];
          text(word, 28, 196);
        }
        if (txtm >= 24) {
          word += nogg13[7];
          text(word, 28, 196);
        }
        if (txtm >= 26) {
          word += nogg13[8];
          text(word, 28, 196);
        }
        if (txtm >= 28) {
          word += nogg13[9];
          text(word, 28, 196);
        }
        if (txtm >= 30) {
          word += nogg13[10];
          text(word, 28, 196);
        }
        if (txtm >= 32) {
          word += nogg13[11];
          text(word, 28, 196);
        }
        if (txtm >= 34) {
          word += nogg13[12];
          text(word, 28, 196);
        }
        if (txtm >= 36) {
          word += nogg13[13];
          text(word, 28, 196);
        }
        if (txtm >= 38) {
          word += nogg13[14];
          text(word, 28, 196);
        }
        if (txtm >= 40) {
          word += nogg13[15];
          text(word, 28, 196);
        }
        if (txtm >= 42) {
          word += nogg13[16];
          text(word, 28, 196);
        }
        if (txtm >= 44) {
          word += nogg13[17];
          text(word, 28, 196);
        }
        if (txtm >= 46) {
          word += nogg13[18];
          text(word, 28, 196);
        }
        if (txtm >= 48) {
          word += nogg13[19];
          text(word, 28, 196);
        }
        if (txtm >= 50) {
          word += nogg13[20];
          text(word, 28, 196);
        }
        if (txtm >= 52) {
          word += nogg13[21];
          text(word, 28, 196);
        }
        if (txtm >= 54) {
          word += nogg13[22];
          text(word, 28, 196);
        }
        if (txtm >= 56) {
          word += nogg13[23];
          text(word, 28, 196);
        }
        if (txtm >= 58) {
          word += nogg13[24];
          text(word, 28, 196);
        }
        if (txtm >= 60) {
          word += nogg13[25];
          text(word, 28, 196);
        }
        if (txtm >= 62) {
          word += nogg13[26];
          text(word, 28, 196);
        }
        if (txtm >= 64) {
          word += nogg13[27];
          text(word, 28, 196);
        }
        if (txtm >= 66) {
          word += nogg13[28];
          text(word, 28, 196);
        }
        if (txtm >= 68) {
          word += nogg13[29];
          text(word, 28, 196);
        }
        if (txtm >= 70) {
          word += nogg13[30];
          text(word, 28, 196);
        }
        if (txtm >= 72) {
          word += nogg13[31];
          text(word, 28, 196);
        }
        if (txtm >= 74) {
          word += nogg13[32];
          text(word, 28, 196);
        }
        if (txtm >= 76) {
          word += nogg13[33];
          text(word, 28, 196);
        }
        if (txtm >= 78) {
          word += nogg13[34];
          text(word, 28, 196);
        }
        if (txtm >= 80) {
          word += nogg13[35];
          text(word, 28, 196);
        }
        if (txtm >= 82) {
          word += nogg13[36];
          text(word, 28, 196);
        }
        if (txtm >= 84) {
          word += nogg13[37];
          text(word, 28, 196);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 94 && keyIsDown(90)) {
          fdsw = 0;
        }

        if (fdsw <= 0) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 13;
          txtm = 0;
          fd = 255;
        }

        break;
      case 13:

        txtm += 1;
        background(0);

        push();
        scale(0.81);
        image(sty04, 158, 160);
        pop();

        push();
        rectMode(CORNER);
        noStroke();
        fill(0, 0, 0, cfi);

        rect(77, 30, 102, 150);
        fill(0, 0, 0, cfil);
        rect(179, 30, 102, 150);
        pop();

        if (txtm >= 66) {
          cfi -= 5;
        }
        if (txtm >= 136) {
          cfil -= 5;
        }

        let nogg14 = ['A', ' ', 'h', 'u', 'm', 'a', 'n', ',', 'a', ' ', 'm', 'o',
          'n', 's', 't', 'e', 'r', ',', 'a', 'n', 'd', ' ', 'a', 'p',
          'r', 'i', 'n', 'c', 'e', ' ', 'f', 'r', 'o', 'm', 't', 'h',
          'e', ' ', 'd', 'a', 'r', 'k', '.'
        ];

        //text('A human,',19,196); text('a monster,',105,196);
        //text('and a',204,195); text('prince from',188.5,207.5);
        //text('the dark.',195.5,220);

        if (txtm >= 10) {
          word = nogg14[0];
          text(word, 19, 196);
        }
        if (txtm >= 12) {
          word += nogg14[1];
          text(word, 19, 196);
        }
        if (txtm >= 14) {
          word += nogg14[2];
          text(word, 19, 196);
        }
        if (txtm >= 16) {
          word += nogg14[3];
          text(word, 19, 196);
        }
        if (txtm >= 18) {
          word += nogg14[4];
          text(word, 19, 196);
        }
        if (txtm >= 20) {
          word += nogg14[5];
          text(word, 19, 196);
        }
        if (txtm >= 22) {
          word += nogg14[6];
          text(word, 19, 196);
        }
        if (txtm >= 24) {
          word += nogg14[7];
          text(word, 19, 196);
        }

        if (txtm >= 26 + 50) {
          word = nogg14[8];
          text(word, 105, 196);
        }
        if (txtm >= 28 + 50) {
          word += nogg14[9];
          text(word, 105, 196);
        }
        if (txtm >= 30 + 50) {
          word += nogg14[10];
          text(word, 105, 196);
        }
        if (txtm >= 32 + 50) {
          word += nogg14[11];
          text(word, 105, 196);
        }
        if (txtm >= 34 + 50) {
          word += nogg14[12];
          text(word, 105, 196);
        }
        if (txtm >= 36 + 50) {
          word += nogg14[13];
          text(word, 105, 196);
        }
        if (txtm >= 38 + 50) {
          word += nogg14[14];
          text(word, 105, 196);
        }
        if (txtm >= 40 + 50) {
          word += nogg14[15];
          text(word, 105, 196);
        }
        if (txtm >= 42 + 50) {
          word += nogg14[16];
          text(word, 105, 196);
        }
        if (txtm >= 44 + 50) {
          word += nogg14[17];
          text(word, 105, 196);
        }

        if (txtm >= 46 + 100) {
          word = nogg14[18];
          text(word, 204, 195);
        }
        if (txtm >= 48 + 100) {
          word += nogg14[19];
          text(word, 204, 195);
        }
        if (txtm >= 50 + 100) {
          word += nogg14[20];
          text(word, 204, 195);
        }
        if (txtm >= 52 + 100) {
          word += nogg14[21];
          text(word, 204, 195);
        }
        if (txtm >= 54 + 100) {
          word += nogg14[22];
          text(word, 204, 195);
        }

        if (txtm >= 56 + 102) {
          word = nogg14[23];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 58 + 102) {
          word += nogg14[24];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 60 + 102) {
          word += nogg14[25];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 62 + 102) {
          word += nogg14[26];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 64 + 102) {
          word += nogg14[27];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 66 + 102) {
          word += nogg14[28];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 68 + 102) {
          word += nogg14[29];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 70 + 102) {
          word += nogg14[30];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 72 + 102) {
          word += nogg14[31];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 74 + 102) {
          word += nogg14[32];
          text(word, 188.5, 207.5);
        }
        if (txtm >= 76 + 102) {
          word += nogg14[33];
          text(word, 188.5, 207.5);
        }

        if (txtm >= 78 + 104) {
          word = nogg14[34];
          text(word, 195.5, 220);
        }
        if (txtm >= 80 + 104) {
          word += nogg14[35];
          text(word, 195.5, 220);
        }
        if (txtm >= 82 + 104) {
          word += nogg14[36];
          text(word, 195.5, 220);
        }
        if (txtm >= 84 + 104) {
          word += nogg14[37];
          text(word, 195.5, 220);
        }
        if (txtm >= 86 + 104) {
          word += nogg14[38];
          text(word, 195.5, 220);
        }
        if (txtm >= 88 + 104) {
          word += nogg14[39];
          text(word, 195.5, 220);
        }
        if (txtm >= 90 + 104) {
          word += nogg14[40];
          text(word, 195.5, 220);
        }
        if (txtm >= 92 + 104) {
          word += nogg14[41];
          text(word, 195.5, 220);
        }
        if (txtm >= 94 + 104) {
          word += nogg14[42];
          text(word, 195.5, 220);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 204 && keyIsDown(90)) {
          fdsw = 1;
        }

        if (fdsw >= 1) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 14;
          txtm = 0;
          fd = 255;
        }

        break;
      case 14:

        txtm += 1;
        background(0);

        push();
        scale(0.81);
        image(sty05, 158, 160);
        pop();

        let nogg15 = ['O', 'n', 'l', 'y', ' ', 't', 'h', 'e', 'y', ' ', 'c', 'a',
          'n', ' ', 'b', 'a', 'n', 'i', 's', 'h', ' ', 'G', 'I', 'Y',
          'G', 'A', 'S', ' ', 'a', 'n', 'd', ' ', 'h', 'i', 's', ' ',
          'a', 'r', 'm', 'y', '.'
        ];

        //text('Only they can banish GIYGAS and his army.',20.5,196);

        if (txtm >= 10) {
          word = nogg15[0];
          text(word, 20.5, 196);
        }
        if (txtm >= 12) {
          word += nogg15[1];
          text(word, 20.5, 196);
        }
        if (txtm >= 14) {
          word += nogg15[2];
          text(word, 20.5, 196);
        }
        if (txtm >= 16) {
          word += nogg15[3];
          text(word, 20.5, 196);
        }
        if (txtm >= 18) {
          word += nogg15[4];
          text(word, 20.5, 196);
        }
        if (txtm >= 20) {
          word += nogg15[5];
          text(word, 20.5, 196);
        }
        if (txtm >= 22) {
          word += nogg15[6];
          text(word, 20.5, 196);
        }
        if (txtm >= 24) {
          word += nogg15[7];
          text(word, 20.5, 196);
        }
        if (txtm >= 26) {
          word += nogg15[8];
          text(word, 20.5, 196);
        }
        if (txtm >= 28) {
          word += nogg15[9];
          text(word, 20.5, 196);
        }
        if (txtm >= 30) {
          word += nogg15[10];
          text(word, 20.5, 196);
        }
        if (txtm >= 32) {
          word += nogg15[11];
          text(word, 20.5, 196);
        }
        if (txtm >= 34) {
          word += nogg15[12];
          text(word, 20.5, 196);
        }
        if (txtm >= 36) {
          word += nogg15[13];
          text(word, 20.5, 196);
        }
        if (txtm >= 38) {
          word += nogg15[14];
          text(word, 20.5, 196);
        }
        if (txtm >= 40) {
          word += nogg15[15];
          text(word, 20.5, 196);
        }
        if (txtm >= 42) {
          word += nogg15[16];
          text(word, 20.5, 196);
        }
        if (txtm >= 44) {
          word += nogg15[17];
          text(word, 20.5, 196);
        }
        if (txtm >= 46) {
          word += nogg15[18];
          text(word, 20.5, 196);
        }
        if (txtm >= 48) {
          word += nogg15[19];
          text(word, 20.5, 196);
        }
        if (txtm >= 50) {
          word += nogg15[20];
          text(word, 20.5, 196);
        }
        if (txtm >= 52) {
          word += nogg15[21];
          text(word, 20.5, 196);
        }
        if (txtm >= 54) {
          word += nogg15[22];
          text(word, 20.5, 196);
        }
        if (txtm >= 56) {
          word += nogg15[23];
          text(word, 20.5, 196);
        }
        if (txtm >= 58) {
          word += nogg15[24];
          text(word, 20.5, 196);
        }
        if (txtm >= 60) {
          word += nogg15[25];
          text(word, 20.5, 196);
        }
        if (txtm >= 62) {
          word += nogg15[26];
          text(word, 20.5, 196);
        }
        if (txtm >= 64) {
          word += nogg15[27];
          text(word, 20.5, 196);
        }
        if (txtm >= 66) {
          word += nogg15[28];
          text(word, 20.5, 196);
        }
        if (txtm >= 68) {
          word += nogg15[29];
          text(word, 20.5, 196);
        }
        if (txtm >= 70) {
          word += nogg15[30];
          text(word, 20.5, 196);
        }
        if (txtm >= 72) {
          word += nogg15[31];
          text(word, 20.5, 196);
        }
        if (txtm >= 74) {
          word += nogg15[32];
          text(word, 20.5, 196);
        }
        if (txtm >= 76) {
          word += nogg15[33];
          text(word, 20.5, 196);
        }
        if (txtm >= 78) {
          word += nogg15[34];
          text(word, 20.5, 196);
        }
        if (txtm >= 80) {
          word += nogg15[35];
          text(word, 20.5, 196);
        }
        if (txtm >= 82) {
          word += nogg15[36];
          text(word, 20.5, 196);
        }
        if (txtm >= 84) {
          word += nogg15[37];
          text(word, 20.5, 196);
        }
        if (txtm >= 86) {
          word += nogg15[38];
          text(word, 20.5, 196);
        }
        if (txtm >= 88) {
          word += nogg15[39];
          text(word, 20.5, 196);
        }
        if (txtm >= 90) {
          word += nogg15[40];
          text(word, 20.5, 196);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 100 && keyIsDown(90)) {
          fdsw = 0;
        }

        if (fdsw <= 0) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fd >= 300) {
          nodig = 15;
          txtm = 0;
          fd = 255;
        }

        break;
      case 15:

        txtm += 1;
        background(0);

        push();
        scale(0.81);
        image(sty01, 158, 160);
        pop();

        let nogg16 = ['I', 'f', ' ', 'y', 'o', 'u', ' ', 'f', 'a', 'i', 'l', '.',
          '.', '.', 't', 'h', 'e', ' ', 'E', 'A', 'R', 'T', 'H', ' ',
          'w', 'i', 'l', 'l', ' ', 'd', 'r', 'a', 'w', ' ', 'h', 'e',
          'r', ' ', 'f', 'i', 'n', 'a', 'l', ' ', 'b', 'r', 'e', 'a',
          't', 'h', '.'
        ];

        //text('If you fail...',91.3,196);
        //text('the EARTH will draw her final breath.',33.5,208);

        if (txtm >= 10) {
          word = nogg16[0];
          text(word, 91.3, 196);
        }
        if (txtm >= 12) {
          word += nogg16[1];
          text(word, 91.3, 196);
        }
        if (txtm >= 14) {
          word += nogg16[2];
          text(word, 91.3, 196);
        }
        if (txtm >= 16) {
          word += nogg16[3];
          text(word, 91.3, 196);
        }
        if (txtm >= 18) {
          word += nogg16[4];
          text(word, 91.3, 196);
        }
        if (txtm >= 20) {
          word += nogg16[5];
          text(word, 91.3, 196);
        }
        if (txtm >= 22) {
          word += nogg16[6];
          text(word, 91.3, 196);
        }
        if (txtm >= 24) {
          word += nogg16[7];
          text(word, 91.3, 196);
        }
        if (txtm >= 26) {
          word += nogg16[8];
          text(word, 91.3, 196);
        }
        if (txtm >= 28) {
          word += nogg16[9];
          text(word, 91.3, 196);
        }
        if (txtm >= 30) {
          word += nogg16[10];
          text(word, 91.3, 196);
        }
        if (txtm >= 32) {
          word += nogg16[11];
          text(word, 91.3, 196);
        }
        if (txtm >= 34) {
          word += nogg16[12];
          text(word, 91.3, 196);
        }
        if (txtm >= 36) {
          word += nogg16[13];
          text(word, 91.3, 196);
        }

        if (txtm >= 38 + 30) {
          word = nogg16[14];
          text(word, 33.5, 208);
        }
        if (txtm >= 40 + 30) {
          word += nogg16[15];
          text(word, 33.5, 208);
        }
        if (txtm >= 42 + 30) {
          word += nogg16[16];
          text(word, 33.5, 208);
        }
        if (txtm >= 44 + 30) {
          word += nogg16[17];
          text(word, 33.5, 208);
        }
        if (txtm >= 46 + 30) {
          word += nogg16[18];
          text(word, 33.5, 208);
        }
        if (txtm >= 48 + 30) {
          word += nogg16[19];
          text(word, 33.5, 208);
        }
        if (txtm >= 50 + 30) {
          word += nogg16[20];
          text(word, 33.5, 208);
        }
        if (txtm >= 52 + 30) {
          word += nogg16[21];
          text(word, 33.5, 208);
        }
        if (txtm >= 54 + 30) {
          word += nogg16[22];
          text(word, 33.5, 208);
        }
        if (txtm >= 56 + 30) {
          word += nogg16[23];
          text(word, 33.5, 208);
        }
        if (txtm >= 58 + 30) {
          word += nogg16[24];
          text(word, 33.5, 208);
        }
        if (txtm >= 60 + 30) {
          word += nogg16[25];
          text(word, 33.5, 208);
        }
        if (txtm >= 62 + 30) {
          word += nogg16[26];
          text(word, 33.5, 208);
        }
        if (txtm >= 64 + 30) {
          word += nogg16[27];
          text(word, 33.5, 208);
        }
        if (txtm >= 66 + 30) {
          word += nogg16[28];
          text(word, 33.5, 208);
        }
        if (txtm >= 68 + 30) {
          word += nogg16[29];
          text(word, 33.5, 208);
        }
        if (txtm >= 70 + 30) {
          word += nogg16[30];
          text(word, 33.5, 208);
        }
        if (txtm >= 72 + 30) {
          word += nogg16[31];
          text(word, 33.5, 208);
        }
        if (txtm >= 74 + 30) {
          word += nogg16[32];
          text(word, 33.5, 208);
        }
        if (txtm >= 76 + 30) {
          word += nogg16[33];
          text(word, 33.5, 208);
        }
        if (txtm >= 78 + 30) {
          word += nogg16[34];
          text(word, 33.5, 208);
        }
        if (txtm >= 80 + 30) {
          word += nogg16[35];
          text(word, 33.5, 208);
        }
        if (txtm >= 82 + 30) {
          word += nogg16[36];
          text(word, 33.5, 208);
        }
        if (txtm >= 84 + 30) {
          word += nogg16[37];
          text(word, 33.5, 208);
        }
        if (txtm >= 86 + 30) {
          word += nogg16[38];
          text(word, 33.5, 208);
        }
        if (txtm >= 88 + 30) {
          word += nogg16[39];
          text(word, 33.5, 208);
        }
        if (txtm >= 90 + 30) {
          word += nogg16[40];
          text(word, 33.5, 208);
        }
        if (txtm >= 92 + 30) {
          word += nogg16[41];
          text(word, 33.5, 208);
        }
        if (txtm >= 94 + 30) {
          word += nogg16[42];
          text(word, 33.5, 208);
        }
        if (txtm >= 96 + 30) {
          word += nogg16[43];
          text(word, 33.5, 208);
        }
        if (txtm >= 98 + 30) {
          word += nogg16[44];
          text(word, 33.5, 208);
        }
        if (txtm >= 100 + 30) {
          word += nogg16[45];
          text(word, 33.5, 208);
        }
        if (txtm >= 102 + 30) {
          word += nogg16[46];
          text(word, 33.5, 208);
        }
        if (txtm >= 104 + 30) {
          word += nogg16[47];
          text(word, 33.5, 208);
        }
        if (txtm >= 106 + 30) {
          word += nogg16[48];
          text(word, 33.5, 208);
        }
        if (txtm >= 108 + 30) {
          word += nogg16[49];
          text(word, 33.5, 208);
        }
        if (txtm >= 110 + 30) {
          word += nogg16[50];
          text(word, 33.5, 208);
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 150 && keyIsDown(90)) {
          fdsw = 1;
        }

        if (fdsw >= 1) {
          background(0, 0, 0, fd);
          fd += 5;
        }

        if (fdsw >= 1) {
          nsty.volume(stv);
          stv -= 0.01;
        }
        if (stv <= 0) {
          stv = 0;
          nsty.stop();
        }

        if (fd >= 500) {
          nodig = 16;
          txtm = 0;
          fd = 255;
        }

        break;
      case 16:

        push();
        noStroke();
        rectMode(CENTER);
        fill(0);
        square(128, 70, 50);
        pop();

        nessP.x = 129;
        nessP.y = 185;

        if (txtm < 170) {
          frameCount = 0;
          image(nos7a[frameCount % 1], 130, 70);
        }

        if (txtm >= 170 && txtm < 259) {
          image(nos7a[frameCount % 90], 130, 70);
        }

        if (txtm >= 259) {
          image(nos79, 130, 70);
        }

        txtm += 1;

        let nogg17 = ['G', 'o', 'o', 'd', ' ', 'l', 'u', 'c', 'k', ',', ' ', 'N',
          'e', 's', 's', '.', 'I', ' ', 'b', 'e', 'l', 'i', 'e', 'v',
          'e', ' ', 'i', 'n', ' ', 'y', 'o', 'u', '.'
        ];

        //text('Good luck, Ness.',86,120); text('I believe in you.',83.5,137);

        if (txtm >= 100) {
          word = nogg17[0];
          text(word, 86, 120);
        }
        if (txtm >= 102) {
          word += nogg17[1];
          text(word, 86, 120);
        }
        if (txtm >= 104) {
          word += nogg17[2];
          text(word, 86, 120);
        }
        if (txtm >= 106) {
          word += nogg17[3];
          text(word, 86, 120);
        }
        if (txtm >= 108) {
          word += nogg17[4];
          text(word, 86, 120);
        }
        if (txtm >= 110) {
          word += nogg17[5];
          text(word, 86, 120);
        }
        if (txtm >= 112) {
          word += nogg17[6];
          text(word, 86, 120);
        }
        if (txtm >= 114) {
          word += nogg17[7];
          text(word, 86, 120);
        }
        if (txtm >= 116) {
          word += nogg17[8];
          text(word, 86, 120);
        }
        if (txtm >= 118) {
          word += nogg17[9];
          text(word, 86, 120);
        }
        if (txtm >= 120) {
          word += nogg17[10];
          text(word, 86, 120);
        }
        if (txtm >= 132) {
          word += nogg17[11];
          text(word, 86, 120);
        }
        if (txtm >= 134) {
          word += nogg17[12];
          text(word, 86, 120);
        }
        if (txtm >= 136) {
          word += nogg17[13];
          text(word, 86, 120);
        }
        if (txtm >= 138) {
          word += nogg17[14];
          text(word, 86, 120);
        }
        if (txtm >= 140) {
          word += nogg17[15];
          text(word, 86, 120);
        }

        if (txtm >= 142 + 40) {
          word = nogg17[16];
          text(word, 83.5, 137);
        }
        if (txtm >= 144 + 40) {
          word += nogg17[17];
          text(word, 83.5, 137);
        }
        if (txtm >= 146 + 40) {
          word += nogg17[18];
          text(word, 83.5, 137);
        }
        if (txtm >= 148 + 40) {
          word += nogg17[19];
          text(word, 83.5, 137);
        }
        if (txtm >= 150 + 40) {
          word += nogg17[20];
          text(word, 83.5, 137);
        }
        if (txtm >= 152 + 40) {
          word += nogg17[21];
          text(word, 83.5, 137);
        }
        if (txtm >= 154 + 40) {
          word += nogg17[22];
          text(word, 83.5, 137);
        }
        if (txtm >= 156 + 40) {
          word += nogg17[23];
          text(word, 83.5, 137);
        }
        if (txtm >= 158 + 40) {
          word += nogg17[24];
          text(word, 83.5, 137);
        }
        if (txtm >= 160 + 40) {
          word += nogg17[25];
          text(word, 83.5, 137);
        }
        if (txtm >= 162 + 40) {
          word += nogg17[26];
          text(word, 83.5, 137);
        }
        if (txtm >= 164 + 40) {
          word += nogg17[27];
          text(word, 83.5, 137);
        }
        if (txtm >= 166 + 40) {
          word += nogg17[28];
          text(word, 83.5, 137);
        }
        if (txtm >= 168 + 40) {
          word += nogg17[29];
          text(word, 83.5, 137);
        }
        if (txtm >= 170 + 40) {
          word += nogg17[30];
          text(word, 83.5, 137);
        }
        if (txtm >= 172 + 40) {
          word += nogg17[31];
          text(word, 83.5, 137);
        }
        if (txtm >= 174 + 40) {
          word += nogg17[32];
          text(word, 83.5, 137);
        }


        if (txtm >= 100 && txtm < 100 + 1) {
          tor.play();
        }
        if (txtm >= 102 && txtm < 102 + 1) {
          tor.play();
        }
        if (txtm >= 104 && txtm < 104 + 1) {
          tor.play();
        }
        if (txtm >= 106 && txtm < 106 + 1) {
          tor.play();
        }

        if (txtm >= 110 && txtm < 110 + 1) {
          tor.play();
        }
        if (txtm >= 112 && txtm < 112 + 1) {
          tor.play();
        }
        if (txtm >= 114 && txtm < 114 + 1) {
          tor.play();
        }
        if (txtm >= 116 && txtm < 116 + 1) {
          tor.play();
        }
        if (txtm >= 118 && txtm < 118 + 1) {
          tor.play();
        }

        if (txtm >= 132 && txtm < 132 + 1) {
          tor.play();
        }
        if (txtm >= 134 && txtm < 134 + 1) {
          tor.play();
        }
        if (txtm >= 136 && txtm < 136 + 1) {
          tor.play();
        }
        if (txtm >= 138 && txtm < 138 + 1) {
          tor.play();
        }
        if (txtm >= 140 && txtm < 140 + 1) {
          tor.play();
        }

        if (txtm >= 142 + 40 && txtm < 142 + 41) {
          tor.play();
        }

        if (txtm >= 146 + 40 && txtm < 146 + 41) {
          tor.play();
        }
        if (txtm >= 148 + 40 && txtm < 148 + 41) {
          tor.play();
        }
        if (txtm >= 150 + 40 && txtm < 150 + 41) {
          tor.play();
        }
        if (txtm >= 152 + 40 && txtm < 152 + 41) {
          tor.play();
        }
        if (txtm >= 154 + 40 && txtm < 154 + 41) {
          tor.play();
        }
        if (txtm >= 156 + 40 && txtm < 156 + 41) {
          tor.play();
        }
        if (txtm >= 158 + 40 && txtm < 158 + 41) {
          tor.play();
        }

        if (txtm >= 162 + 40 && txtm < 162 + 41) {
          tor.play();
        }
        if (txtm >= 164 + 40 && txtm < 164 + 41) {
          tor.play();
        }

        if (txtm >= 168 + 40 && txtm < 168 + 41) {
          tor.play();
        }
        if (txtm >= 170 + 40 && txtm < 170 + 41) {
          tor.play();
        }
        if (txtm >= 172 + 40 && txtm < 172 + 41) {
          tor.play();
        }
        if (txtm >= 174 + 40 && txtm < 174 + 41) {
          tor.play();
        }

        if (txtm >= 228 && txtm < 254) {
          health = 2;
        }
        if (txtm >= 254 && txtm < 280) {
          health = 3;
        }
        if (txtm >= 280 && txtm < 306) {
          health = 4;
        }
        if (txtm >= 306 && txtm < 332) {
          health = 5;
        }
        if (txtm >= 332) {
          health = 6;
        }

        if (txtm <= 228 && txtm > 227) {
          wfade.play();
        }

        if (fd >= 5 && txtm <= 60) {
          background(0, 0, 0, fd);
          fd -= 5;
        }

        if (txtm >= 260) {
          fdsw = 0;
        }

        if (fdsw <= 0) {
          background(255, 255, 255, fd);
          fd += 2;
        }

        if (fd >= 450) {
          wfade.stop();
          scene = 5;
          nodig = null;
          mu = 0;
          txtm = 0;
          fd = 255;
        }

        break;
    }
  }
}

function oldBattle() {
  htimer += 1;
  ntimer += 1;
  heartBlinks();
  endHealth();
  threeVisuals();
  backgroundFadeIn();

  oldHeadMove();
  dropsMove();
  knifeMove();
  orbMove();
  headMove();
  drops2Move();
  noelleFlame();
}

function thirdScenes() {
  let flamfr = flam_data.frames;

  for (let i = 0; i < flamfr.length; i++) {
    let pos = flamfr[i].position;
    let img = flam.get(pos.x, pos.y, pos.w, pos.h);
    flal.push(img);
  }

  let noewal = noelw_data.frames;

  for (let i = 0; i < noewal.length; i++) {
    let pos = noewal[i].position;
    let img = noelw.get(pos.x, pos.y, pos.w, pos.h);
    noelwe.push(img);
  }

  let nossv = nos7_data.frames;

  for (let i = 0; i < nossv.length; i++) {
    let pos = nossv[i].position;
    let img = nos7.get(pos.x, pos.y, pos.w, pos.h);
    nos7a.push(img);
  }
}

function menuScroll() {
  textFont(apple, 5.5);
  text('ITEMS', 54, 96.7);
  textFont(apple, 5.5);
  text('EQUIP', 54, 109.7);
  textFont(apple, 5.5);
  text('KITTY', 54, 122.7);

  if (itw == 0 && eqw == 0 && cnw == 0) {
    if (mnu == 0 && keyIsDown(40) || mnu == 1 && keyIsDown(40)) {
      mnu = 1;
      uks = 1;
    } else if (mnu == 1 && uks == 1) {
      mnu = 2;
    }

    if (mnu == 2 && keyIsDown(40) || mnu == 3 && keyIsDown(40)) {
      mnu = 3;
      uks = 1;
    } else if (mnu == 3 && uks == 1) {
      mnu = 4;
    }

    if (mnu == 4 && keyIsDown(38) || mnu == 1 && keyIsDown(38)) {
      mnu = 1;
      uks = 0;
    } else if (mnu == 1 && uks == 0) {
      mnu = 2;
    }

    if (mnu == 2 && keyIsDown(38) || mnu == 5 && keyIsDown(38)) {
      mnu = 5;
      uks = 0;
    } else if (mnu == 5 && uks == 0) {
      mnu = 0;
    }
  }

  push();

  if (mnu == 0 || mnu == 5) {
    scale(0.8);
    image(heart, 60.3, 118);
  }

  if (mnu == 1 || mnu == 2) {
    scale(0.8);
    image(heart, 60.3, 134);
  }

  if (mnu == 3 || mnu == 4) {
    scale(0.8);
    image(heart, 60.3, 150.5);
  }

  pop();
}

function itemScroll() {
  if (itps == 0) {
    if (itmn >= 2) {
      if (its == 0 && keyIsDown(40) || its == 1 && keyIsDown(40)) {
        its = 1;
        uks = 1;
      } else if (its == 1 && uks == 1) {
        its = 2;
      }
    }

    if (itmn >= 3) {
      if (its == 2 && keyIsDown(40) || its == 3 && keyIsDown(40)) {
        its = 3;
        uks = 1;
      } else if (its == 3 && uks == 1) {
        its = 4;
      }
    }

    if (itmn >= 4) {
      if (its == 4 && keyIsDown(40) || its == 5 && keyIsDown(40)) {
        its = 5;
        uks = 1;
      } else if (its == 5 && uks == 1) {
        its = 6;
      }
    }

    if (itmn >= 5) {
      if (its == 6 && keyIsDown(40) || its == 7 && keyIsDown(40)) {
        its = 7;
        uks = 1;
      } else if (its == 7 && uks == 1) {
        its = 8;
      }
    }

    if (itmn >= 6) {
      if (its == 8 && keyIsDown(40) || its == 9 && keyIsDown(40)) {
        its = 9;
        uks = 1;
      } else if (its == 9 && uks == 1) {
        its = 10;
      }
    }

    if (itmn >= 7) {
      if (its == 10 && keyIsDown(40) || its == 11 && keyIsDown(40)) {
        its = 11;
        uks = 1;
      } else if (its == 11 && uks == 1) {
        its = 12;
      }
    }

    if (itmn >= 8) {
      if (its == 12 && keyIsDown(40) || its == 13 && keyIsDown(40)) {
        its = 13;
        uks = 1;
      } else if (its == 13 && uks == 1) {
        its = 14;
      }
    }

    if (itmn >= 9) {
      if (its == 14 && keyIsDown(40) || its == 15 && keyIsDown(40)) {
        its = 15;
        uks = 1;
      } else if (its == 15 && uks == 1) {
        its = 16;
      }
    }

    if (itmn >= 10) {
      if (its == 16 && keyIsDown(40) || its == 17 && keyIsDown(40)) {
        its = 17;
        uks = 1;
      } else if (its == 17 && uks == 1) {
        its = 18;
      }
    }

    if (itmn >= 11) {
      if (its == 18 && keyIsDown(40) || its == 19 && keyIsDown(40)) {
        its = 19;
        uks = 1;
      } else if (its == 19 && uks == 1) {
        its = 20;
      }
    }

    if (itmn >= 12) {
      if (its == 20 && keyIsDown(40) || its == 21 && keyIsDown(40)) {
        its = 21;
        uks = 1;
      } else if (its == 21 && uks == 1) {
        its = 22;
      }
    }

    if (itmn >= 13) {
      if (its == 22 && keyIsDown(40) || its == 23 && keyIsDown(40)) {
        its = 23;
        uks = 1;
      } else if (its == 23 && uks == 1) {
        its = 24;
      }
    }


    if (itmn >= 13) {
      if (its == 24 && keyIsDown(38) || its == 21 && keyIsDown(38)) {
        its = 21;
        uks = 0;
      } else if (its == 21 && uks == 0) {
        its = 22;
      }
    }

    if (itmn >= 12) {
      if (its == 22 && keyIsDown(38) || its == 19 && keyIsDown(38)) {
        its = 19;
        uks = 0;
      } else if (its == 19 && uks == 0) {
        its = 20;
      }
    }

    if (itmn >= 11) {
      if (its == 20 && keyIsDown(38) || its == 17 && keyIsDown(38)) {
        its = 17;
        uks = 0;
      } else if (its == 17 && uks == 0) {
        its = 18;
      }
    }

    if (itmn >= 10) {
      if (its == 18 && keyIsDown(38) || its == 15 && keyIsDown(38)) {
        its = 15;
        uks = 0;
      } else if (its == 15 && uks == 0) {
        its = 16;
      }
    }

    if (itmn >= 9) {
      if (its == 16 && keyIsDown(38) || its == 13 && keyIsDown(38)) {
        its = 13;
        uks = 0;
      } else if (its == 13 && uks == 0) {
        its = 14;
      }
    }

    if (itmn >= 8) {
      if (its == 14 && keyIsDown(38) || its == 11 && keyIsDown(38)) {
        its = 11;
        uks = 0;
      } else if (its == 11 && uks == 0) {
        its = 12;
      }
    }

    if (itmn >= 7) {
      if (its == 12 && keyIsDown(38) || its == 9 && keyIsDown(38)) {
        its = 9;
        uks = 0;
      } else if (its == 9 && uks == 0) {
        its = 10;
      }
    }

    if (itmn >= 6) {
      if (its == 10 && keyIsDown(38) || its == 7 && keyIsDown(38)) {
        its = 7;
        uks = 0;
      } else if (its == 7 && uks == 0) {
        its = 8;
      }
    }

    if (itmn >= 5) {
      if (its == 8 && keyIsDown(38) || its == 5 && keyIsDown(38)) {
        its = 5;
        uks = 0;
      } else if (its == 5 && uks == 0) {
        its = 6;
      }
    }

    if (itmn >= 4) {
      if (its == 6 && keyIsDown(38) || its == 3 && keyIsDown(38)) {
        its = 3;
        uks = 0;
      } else if (its == 3 && uks == 0) {
        its = 4;
      }
    }

    if (itmn >= 3) {
      if (its == 4 && keyIsDown(38) || its == 1 && keyIsDown(38)) {
        its = 1;
        uks = 0;
      } else if (its == 1 && uks == 0) {
        its = 2;
      }
    }

    if (itmn >= 2) {
      if (its == 2 && keyIsDown(38) || its == 25 && keyIsDown(38)) {
        its = 25;
        uks = 0;
      } else if (its == 25 && uks == 0) {
        its = 0;
      }
    }
  }
}

function itemHeart() {
  push();
  scale(0.8);

  if (itmn > 0) {
    if (its == 0 || its == 25) {
      image(heart, 133, 61.5);
    }
    if (its == 1 || its == 2) {
      image(heart, 133, 74);
    }
    if (its == 3 || its == 4) {
      image(heart, 133, 86.5);
    }
    if (its == 5 || its == 6) {
      image(heart, 133, 99);
    }
    if (its == 7 || its == 8) {
      image(heart, 133, 111.5);
    }
    if (its == 9 || its == 10) {
      image(heart, 133, 124);
    }
    if (its == 11 || its == 12) {
      image(heart, 133, 136.5);
    }
    if (its == 13 || its == 14) {
      image(heart, 133, 149);
    }
    if (its == 15 || its == 16) {
      image(heart, 133, 161.5);
    }
    if (its == 17 || its == 18) {
      image(heart, 133, 174);
    }
    if (its == 19 || its == 20) {
      image(heart, 133, 186.5);
    }
    if (its == 21 || its == 22) {
      image(heart, 133, 199);
    }
    if (its == 23 || its == 24) {
      image(heart, 133, 211.5);
    }
  }

  pop();
}

function equipScroll() {
  if (eqps == 0) {
    if (eqmn >= 2) {
      if (eqs == 0 && keyIsDown(40) || eqs == 1 && keyIsDown(40)) {
        eqs = 1;
        uks = 1;
      } else if (eqs == 1 && uks == 1) {
        eqs = 2;
      }
    }

    if (eqmn >= 3) {
      if (eqs == 2 && keyIsDown(40) || eqs == 3 && keyIsDown(40)) {
        eqs = 3;
        uks = 1;
      } else if (eqs == 3 && uks == 1) {
        eqs = 4;
      }
    }

    if (eqmn >= 4) {
      if (eqs == 4 && keyIsDown(40) || eqs == 5 && keyIsDown(40)) {
        eqs = 5;
        uks = 1;
      } else if (eqs == 5 && uks == 1) {
        eqs = 6;
      }
    }

    if (eqmn >= 5) {
      if (eqs == 6 && keyIsDown(40) || eqs == 7 && keyIsDown(40)) {
        eqs = 7;
        uks = 1;
      } else if (eqs == 7 && uks == 1) {
        eqs = 8;
      }
    }

    if (eqmn >= 6) {
      if (eqs == 8 && keyIsDown(40) || eqs == 9 && keyIsDown(40)) {
        eqs = 9;
        uks = 1;
      } else if (eqs == 9 && uks == 1) {
        eqs = 10;
      }
    }

    if (eqmn >= 7) {
      if (eqs == 10 && keyIsDown(40) || eqs == 11 && keyIsDown(40)) {
        eqs = 11;
        uks = 1;
      } else if (eqs == 11 && uks == 1) {
        eqs = 12;
      }
    }

    if (eqmn >= 8) {
      if (eqs == 12 && keyIsDown(40) || eqs == 13 && keyIsDown(40)) {
        eqs = 13;
        uks = 1;
      } else if (eqs == 13 && uks == 1) {
        eqs = 14;
      }
    }

    if (eqmn >= 9) {
      if (eqs == 14 && keyIsDown(40) || eqs == 15 && keyIsDown(40)) {
        eqs = 15;
        uks = 1;
      } else if (eqs == 15 && uks == 1) {
        eqs = 16;
      }
    }

    if (eqmn >= 10) {
      if (eqs == 16 && keyIsDown(40) || eqs == 17 && keyIsDown(40)) {
        eqs = 17;
        uks = 1;
      } else if (eqs == 17 && uks == 1) {
        eqs = 18;
      }
    }

    if (eqmn >= 11) {
      if (eqs == 18 && keyIsDown(40) || eqs == 19 && keyIsDown(40)) {
        eqs = 19;
        uks = 1;
      } else if (eqs == 19 && uks == 1) {
        eqs = 20;
      }
    }

    if (eqmn >= 12) {
      if (eqs == 20 && keyIsDown(40) || eqs == 21 && keyIsDown(40)) {
        eqs = 21;
        uks = 1;
      } else if (eqs == 21 && uks == 1) {
        eqs = 22;
      }
    }

    if (eqmn >= 13) {
      if (eqs == 22 && keyIsDown(40) || eqs == 23 && keyIsDown(40)) {
        eqs = 23;
        uks = 1;
      } else if (eqs == 23 && uks == 1) {
        eqs = 24;
      }
    }


    if (eqmn >= 13) {
      if (eqs == 24 && keyIsDown(38) || eqs == 21 && keyIsDown(38)) {
        eqs = 21;
        uks = 0;
      } else if (eqs == 21 && uks == 0) {
        eqs = 22;
      }
    }

    if (eqmn >= 12) {
      if (eqs == 22 && keyIsDown(38) || eqs == 19 && keyIsDown(38)) {
        eqs = 19;
        uks = 0;
      } else if (eqs == 19 && uks == 0) {
        eqs = 20;
      }
    }

    if (eqmn >= 11) {
      if (eqs == 20 && keyIsDown(38) || eqs == 17 && keyIsDown(38)) {
        eqs = 17;
        uks = 0;
      } else if (eqs == 17 && uks == 0) {
        eqs = 18;
      }
    }

    if (eqmn >= 10) {
      if (eqs == 18 && keyIsDown(38) || eqs == 15 && keyIsDown(38)) {
        eqs = 15;
        uks = 0;
      } else if (eqs == 15 && uks == 0) {
        eqs = 16;
      }
    }

    if (eqmn >= 9) {
      if (eqs == 16 && keyIsDown(38) || eqs == 13 && keyIsDown(38)) {
        eqs = 13;
        uks = 0;
      } else if (eqs == 13 && uks == 0) {
        eqs = 14;
      }
    }

    if (eqmn >= 8) {
      if (eqs == 14 && keyIsDown(38) || eqs == 11 && keyIsDown(38)) {
        eqs = 11;
        uks = 0;
      } else if (eqs == 11 && uks == 0) {
        eqs = 12;
      }
    }

    if (eqmn >= 7) {
      if (eqs == 12 && keyIsDown(38) || eqs == 9 && keyIsDown(38)) {
        eqs = 9;
        uks = 0;
      } else if (eqs == 9 && uks == 0) {
        eqs = 10;
      }
    }

    if (eqmn >= 6) {
      if (eqs == 10 && keyIsDown(38) || eqs == 7 && keyIsDown(38)) {
        eqs = 7;
        uks = 0;
      } else if (eqs == 7 && uks == 0) {
        eqs = 8;
      }
    }

    if (eqmn >= 5) {
      if (eqs == 8 && keyIsDown(38) || eqs == 5 && keyIsDown(38)) {
        eqs = 5;
        uks = 0;
      } else if (eqs == 5 && uks == 0) {
        eqs = 6;
      }
    }

    if (eqmn >= 4) {
      if (eqs == 6 && keyIsDown(38) || eqs == 3 && keyIsDown(38)) {
        eqs = 3;
        uks = 0;
      } else if (eqs == 3 && uks == 0) {
        eqs = 4;
      }
    }

    if (eqmn >= 3) {
      if (eqs == 4 && keyIsDown(38) || eqs == 1 && keyIsDown(38)) {
        eqs = 1;
        uks = 0;
      } else if (eqs == 1 && uks == 0) {
        eqs = 2;
      }
    }

    if (eqmn >= 2) {
      if (eqs == 2 && keyIsDown(38) || eqs == 25 && keyIsDown(38)) {
        eqs = 25;
        uks = 0;
      } else if (eqs == 25 && uks == 0) {
        eqs = 0;
      }
    }
  }
}

function equipHeart() {
  push();
  scale(0.8);

  if (eqmn > 0) {
    if (eqs == 0 || eqs == 25) {
      image(heart, 133, 61.5);
    }
    if (eqs == 1 || eqs == 2) {
      image(heart, 133, 74);
    }
    if (eqs == 3 || eqs == 4) {
      image(heart, 133, 86.5);
    }
    if (eqs == 5 || eqs == 6) {
      image(heart, 133, 99);
    }
    if (eqs == 7 || eqs == 8) {
      image(heart, 133, 111.5);
    }
    if (eqs == 9 || eqs == 10) {
      image(heart, 133, 124);
    }
    if (eqs == 11 || eqs == 12) {
      image(heart, 133, 136.5);
    }
    if (eqs == 13 || eqs == 14) {
      image(heart, 133, 149);
    }
    if (eqs == 15 || eqs == 16) {
      image(heart, 133, 161.5);
    }
    if (eqs == 17 || eqs == 18) {
      image(heart, 133, 174);
    }
    if (eqs == 19 || eqs == 20) {
      image(heart, 133, 186.5);
    }
    if (eqs == 21 || eqs == 22) {
      image(heart, 133, 199);
    }
    if (eqs == 23 || eqs == 24) {
      image(heart, 133, 211.5);
    }
  }

  pop();
}

function equipOptions() {
  if (eqis == 0 && eqmn > 0 || eqis == 5 && eqmn > 0) {
    push();
    scale(0.8);
    image(heart, 133.1, 229.55);
    pop();

    if (keyIsDown(90) && eqps == 2) {
      enw = 1;
    }
    if (enw == 1) {
      enw = 2;
    }

    if (enw == 1 || enw == 2) {
      text('USE', 112, 186);
      push();
      noStroke();
      fill(0);
      square(102, 179.5, 8);
      pop();
    }

    if (enw == 2 && keyIsDown(88) || enw == 3 && keyIsDown(88)) {
      enw = 3;
    } else if (enw == 3) {
      enw = 0;
    }
  }

  if (eqis == 1 || eqis == 2) {
    push();
    scale(0.8);
    image(heart, 176.4, 229.55);
    pop();

    if (keyIsDown(90) && eqps == 2) {
      enw = 1;
    }
    if (enw == 1) {
      enw = 2;
    }

    if (enw == 1 || enw == 2) {
      text('       INFO', 112, 186);
      push();
      noStroke();
      fill(0);
      square(136.5, 179.5, 8);
      pop();
    }

    if (enw == 2 && keyIsDown(88) || enw == 3 && keyIsDown(88)) {
      enw = 3;
    } else if (enw == 3) {
      enw = 0;
    }
  }

  if (eqis == 3 || eqis == 4) {
    push();
    scale(0.8);
    image(heart, 223.5, 229.55);
    pop();

    if (keyIsDown(90) && eqps == 2) {
      enw = 1;
    }
    if (enw == 1) {
      enw = 2;
    }

    if (enw == 1 || enw == 2) {
      text('               DROP', 112, 186);
      push();
      noStroke();
      fill(0);
      square(174.5, 179.5, 8);
      pop();
    }

    if (enw == 2 && keyIsDown(88) || enw == 3 && keyIsDown(88)) {
      enw = 3;
    } else if (enw == 3) {
      enw = 0;
    }
  }

  if (enw < 1) {
    if (eqis == 0 && keyIsDown(39) || eqis == 1 && keyIsDown(39)) {
      eqis = 1;
      eqiw = 1;
    } else if (eqis == 1 && eqiw == 1) {
      eqis = 2;
    }

    if (eqis == 2 && keyIsDown(39) || eqis == 3 && keyIsDown(39)) {
      eqis = 3;
      eqiw = 1;
    } else if (eqis == 3 && eqiw == 1) {
      eqis = 4;
    }

    if (eqis == 4 && keyIsDown(37) || eqis == 1 && keyIsDown(37)) {
      eqis = 1;
      eqiw = 0;
    } else if (eqis == 1 && eqiw == 0) {
      eqis = 2;
    }

    if (eqis == 2 && keyIsDown(37) || eqis == 5 && keyIsDown(37)) {
      eqis = 5;
      eqiw = 0;
    } else if (eqis == 5 && eqiw == 0) {
      eqis = 0;
    }
  }
}

function itemOptions() {
  if (itis == 0 && itmn > 0 || itis == 5 && itmn > 0) {
    push();
    scale(0.8);
    image(heart, 133.1, 229.55);
    pop();

    if (keyIsDown(90) && itps == 2) {
      itnw = 1;
    }
    if (itnw == 1) {
      itnw = 2;
    }

    if (itnw == 1 || itnw == 2) {
      text('USE', 112, 186);
      push();
      noStroke();
      fill(0);
      square(102, 179.5, 8);
      pop();
    }

    if (itnw == 2 && keyIsDown(88) || itnw == 3 && keyIsDown(88)) {
      itnw = 3;
    } else if (itnw == 3) {
      itnw = 0;
    }
  }

  if (itis == 1 || itis == 2) {
    push();
    scale(0.8);
    image(heart, 176.4, 229.55);
    pop();

    if (keyIsDown(90) && itps == 2) {
      itnw = 1;
    }
    if (itnw == 1) {
      itnw = 2;
    }

    if (itnw == 1 || itnw == 2) {
      text('       INFO', 112, 186);
      push();
      noStroke();
      fill(0);
      square(136.5, 179.5, 8);
      pop();
    }

    if (itnw == 2 && keyIsDown(88) || itnw == 3 && keyIsDown(88)) {
      itnw = 3;
    } else if (itnw == 3) {
      itnw = 0;
    }
  }

  if (itis == 3 || itis == 4) {
    push();
    scale(0.8);
    image(heart, 223.5, 229.55);
    pop();

    if (keyIsDown(90) && itps == 2) {
      itnw = 1;
    }
    if (itnw == 1) {
      itnw = 2;
    }

    if (itnw == 1 || itnw == 2) {
      text('               DROP', 112, 186);
      push();
      noStroke();
      fill(0);
      square(174.5, 179.5, 8);
      pop();
    }

    if (itnw == 2 && keyIsDown(88) || itnw == 3 && keyIsDown(88)) {
      itnw = 3;
    } else if (itnw == 3) {
      itnw = 0;
    }
  }

  if (itnw < 1) {
    if (itis == 0 && keyIsDown(39) || itis == 1 && keyIsDown(39)) {
      itis = 1;
      itiw = 1;
    } else if (itis == 1 && itiw == 1) {
      itis = 2;
    }

    if (itis == 2 && keyIsDown(39) || itis == 3 && keyIsDown(39)) {
      itis = 3;
      itiw = 1;
    } else if (itis == 3 && itiw == 1) {
      itis = 4;
    }

    if (itis == 4 && keyIsDown(37) || itis == 1 && keyIsDown(37)) {
      itis = 1;
      itiw = 0;
    } else if (itis == 1 && itiw == 0) {
      itis = 2;
    }

    if (itis == 2 && keyIsDown(37) || itis == 5 && keyIsDown(37)) {
      itis = 5;
      itiw = 0;
    } else if (itis == 5 && itiw == 0) {
      itis = 0;
    }
  }
}

function gui() {
  if (guid == 0 && keyCode == 67 || guid == 1 && keyCode == 67) {
    guid = 1;
    mnu = 5;
    itw = 0;
    eqw = 0;
    cnw = 0;
    its = 0;
    itps = 0;
    eqps = 0;
    cnps = 0;
    enw = 0;
    eqs = 0;
    itnw = 0;
  } else if (guid == 1) {
    guid = 2;
    mnu = 0;
  }

  if (guid == 1 || guid == 2) {
    push();
    translate(-1, 0);
    fill(0, 0, 0, 60);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, 300, 222);
    image(menu, 129, 115.5);
    fill(255);

    textFont(apple, 7);
    text('Ness', 44, 51.5);
    textFont(apple, 4.5);
    text('HP ' + health + '/6', 44, 61.5);
    textFont(apple, 4.5);
    text('GD ' + '0', 44, 69);

    menuScroll();

    //_______________________________________________________________________\\

    if (itw <= 1) {
      if (mnu == 0 && keyIsDown(90) || mnu == 5 && keyIsDown(90)) {
        itw = 1;
      } else if (itw == 1) {
        itw = 2;
      }
    }

    if (itw == 1 || itw == 2) {
      fill('#ffc306');
      stroke(0);
      textFont(apple, 5.5);
      text('ITEMS', 54, 96.7);
      fill(0);
      noStroke();
      rect(42, 85, 10, 45);
      image(menuu, 129, 115.5);

      itemScroll();
      itemHeart();

      textFont(apple, 5.5);
      fill(255);
      text('Skip Sandwich', 112.5, 51.5);

      text('Calorie Stick', 112.5, 61.5);
      text('Bandage', 112.5, 71.5);
      text('Horn of Life', 112.5, 81.5);
      text('Monster Candy', 112.5, 91.5);
      text('Magic Tart', 112.5, 101.5);
      text('Spider Donut', 112.5, 111.5);
      text('Luxury Jerky', 112.5, 121.5);
      text('Nice Cream', 112.5, 131.5);
      text('Trout Yogurt', 112.5, 141.5);
      text('Temmie Flakes', 112.5, 151.5);
      text('Fresh Egg', 112.5, 161.5);
      text('Glamburger', 112.5, 171.5);

      text('USE    INFO    DROP', 112, 186)

      if (itmn > 0) {
        if (keyIsDown(90) && itw == 2 && itps == 0 ||
          keyIsDown(90) && itw == 2 && itps == 1) {
          itps = 1;
          itis = 0;
        } else if (itps == 1) {
          itps = 2;
        }
      }

      if (itps == 1 && itmn > 0 || itps == 2 && itmn > 0) {
        fill('#ffc306');
        stroke(0);
        textFont(apple, 5.5);

        if (its == 0 || its == 25) {
          text('Skip Sandwich', 112.5, 51.5);
          itemOptions();
        }

        if (its == 1 || its == 2) {
          text('Calorie Stick', 112.5, 61.5);
          itemOptions();
        }

        if (its == 3 || its == 4) {
          text('Bandage', 112.5, 71.5);
          itemOptions();
        }

        if (its == 5 || its == 6) {
          text('Horn of Life', 112.5, 81.5);
          itemOptions();
        }

        if (its == 7 || its == 8) {
          text('Monster Candy', 112.5, 91.5);
          itemOptions();
        }

        if (its == 9 || its == 10) {
          text('Magic Tart', 112.5, 101.5);
          itemOptions();
        }

        if (its == 11 || its == 12) {
          text('Spider Donut', 112.5, 111.5);
          itemOptions();
        }

        if (its == 13 || its == 14) {
          text('Luxury Jerky', 112.5, 121.5);
          itemOptions();
        }

        if (its == 15 || its == 16) {
          text('Nice Cream', 112.5, 131.5);
          itemOptions();
        }

        if (its == 17 || its == 18) {
          text('Trout Yogurt', 112.5, 141.5);
          itemOptions();
        }

        if (its == 19 || its == 20) {
          text('Temmie Flakes', 112.5, 151.5);
          itemOptions();
        }

        if (its == 21 || its == 22) {
          text('Fresh Egg', 112.5, 161.5);
          itemOptions();
        }

        if (its == 23 || its == 24) {
          text('Glamburger', 112.5, 171.5);
          itemOptions();
        }

        fill(0);
        noStroke();
        rect(101, 45, 10, 130);
      }

      if (itps == 2 && keyIsDown(88) && itnw == 0 ||
        itps == 3 && keyIsDown(88) && itnw == 0) {
        itps = 3;
      } else if (itps == 3) {
        itps = 0;
      }
    }

    if (itw == 2 && keyIsDown(88) && itps == 0 ||
      itw == 3 && keyIsDown(88) && itps == 0) {
      itw = 3;
      its = 0;
    } else if (itw == 3) {
      itw = 0;
    }

    //_______________________________________________________________________\\

    if (eqw <= 1) {
      if (mnu == 1 && keyIsDown(90) || mnu == 2 && keyIsDown(90)) {
        eqw = 1;
      } else if (eqw == 1) {
        eqw = 2;
      }
    }

    if (eqw == 1 || eqw == 2) {
      fill('#ffc306');
      stroke(0);
      textFont(apple, 5.5);
      text('EQUIP', 54, 109.7);
      fill(0);
      noStroke();
      rect(42, 85, 10, 45);
      image(menuu, 129, 115.5);

      equipScroll();
      equipHeart();

      textFont(apple, 5.5);
      fill(255);
      text('Temmie Armor', 112.5, 51.5);

      text('Heart Locket', 112.5, 61.5);
      text('Baseball Cap', 112.5, 71.5);
      text('Faded Ribbon', 112.5, 81.5);
      text('Copper Bracelet', 112.5, 91.5);
      text('Cowboy Hat', 112.5, 101.5);
      text('Franklin Badge', 112.5, 111.5);
      text('Ballet Shoes', 112.5, 121.5);
      text('Slingshot', 112.5, 131.5);
      text('Tough Glove', 112.5, 141.5);
      text('Big League Bat', 112.5, 151.5);
      text('Burnt Pan', 112.5, 161.5);
      text('Holy Fry Pan', 112.5, 171.5);

      text('USE    INFO    DROP', 112, 186)

      if (eqmn > 0) {
        if (keyIsDown(90) && eqw == 2 && eqps == 0 ||
          keyIsDown(90) && eqw == 2 && eqps == 1) {
          eqps = 1;
          eqis = 0;
        } else if (eqps == 1) {
          eqps = 2;
        }
      }

      if (eqps == 1 && eqmn > 0 || eqps == 2 && eqmn > 0) {
        fill('#ffc306');
        stroke(0);
        textFont(apple, 5.5);

        if (eqs == 0 || eqs == 25) {
          text('Temmie Armor', 112.5, 51.5);
          equipOptions();
        }

        if (eqs == 1 || eqs == 2) {
          text('Heart Locket', 112.5, 61.5);
          equipOptions();
        }

        if (eqs == 3 || eqs == 4) {
          text('Baseball Cap', 112.5, 71.5);
          equipOptions();
        }

        if (eqs == 5 || eqs == 6) {
          text('Faded Ribbon', 112.5, 81.5);
          equipOptions();
        }

        if (eqs == 7 || eqs == 8) {
          text('Copper Bracelet', 112.5, 91.5);
          equipOptions();
        }

        if (eqs == 9 || eqs == 10) {
          text('Cowboy Hat', 112.5, 101.5);
          equipOptions();
        }

        if (eqs == 11 || eqs == 12) {
          text('Franklin Badge', 112.5, 111.5);
          equipOptions();
        }

        if (eqs == 13 || eqs == 14) {
          text('Ballet Shoes', 112.5, 121.5);
          equipOptions();
        }

        if (eqs == 15 || eqs == 16) {
          text('Slingshot', 112.5, 131.5);
          equipOptions();
        }

        if (eqs == 17 || eqs == 18) {
          text('Tough Glove', 112.5, 141.5);
          equipOptions();
        }

        if (eqs == 19 || eqs == 20) {
          text('Big League Bat', 112.5, 151.5);
          equipOptions();
        }

        if (eqs == 21 || eqs == 22) {
          text('Burnt Pan', 112.5, 161.5);
          equipOptions();
        }

        if (eqs == 23 || eqs == 24) {
          text('Holy Fry Pan', 112.5, 171.5);
          equipOptions();
        }

        fill(0);
        noStroke();
        rect(101, 45, 10, 130);
      }

      if (eqps == 2 && keyIsDown(88) && enw == 0 ||
        eqps == 3 && keyIsDown(88) && enw == 0) {
        eqps = 3;
      } else if (eqps == 3) {
        eqps = 0;
      }
    }

    if (eqw == 2 && keyIsDown(88) && eqps == 0 ||
      eqw == 3 && keyIsDown(88) && eqps == 0) {
      eqw = 3;
      eqs = 0;
    } else if (eqw == 3) {
      eqw = 0;
    }

    //_______________________________________________________________________\\

    if (cnw <= 1) {
      if (mnu == 3 && keyIsDown(90) || mnu == 4 && keyIsDown(90)) {
        cnw = 1;
      } else if (cnw == 1) {
        cnw = 2;
      }
    }

    if (cnw == 1 || cnw == 2) {
      fill('#ffc306');
      stroke(0);
      textFont(apple, 5.5);
      text('KITTY', 54, 122.7);
      fill(0);
      noStroke();
      rect(42, 85, 10, 45);
      image(menuu, 129, 115.5);
      push();
      scale(0.35);
      tint(255, kit);
      image(pkitty, 451, 345);
      pop();

      push();
      scale(0.8);
      image(heart, 133, 61.5);
      pop();
      textFont(apple, 5.5);
      fill(255);
      text('Master Volume', 112.5, 51.5);

      if (keyIsDown(90) && cnw == 2) {
        cnps = 1;
      }
      if (cnps == 1) {
        cnps = 2;
      }

      if (cnps == 1 || cnps == 2) {
        fill('#ffc306');
        stroke(0);
        textFont(apple, 5.5);
        text('Master Volume', 112.5, 51.5);
        fill(0);
        noStroke();
        rect(101, 45, 10, 130);

        if (volw == 0 || volw == 21) {
          fill('#ffc306');
          hvul = 1;
          text('100%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 294, 70.5);
          pop();
          kit = 255;
        }

        if (volw == 1 || volw == 2) {
          fill('#ffc306');
          hvul = 0.65;
          text('90%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 229.5;
        }

        if (volw == 3 || volw == 4) {
          fill('#ffc306');
          hvul = 0.43;
          text('80%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 204;
        }

        if (volw == 5 || volw == 6) {
          fill('#ffc306');
          hvul = 0.3;
          text('70%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 178.5;
        }

        if (volw == 7 || volw == 8) {
          fill('#ffc306');
          hvul = 0.22;
          text('60%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 153;
        }

        if (volw == 9 || volw == 10) {
          fill('#ffc306');
          hvul = 0.139;
          text('50%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 127.5;
        }

        if (volw == 11 || volw == 12) {
          fill('#ffc306');
          hvul = 0.095;
          text('40%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 102;
        }

        if (volw == 13 || volw == 14) {
          fill('#ffc306');
          hvul = 0.045;
          text('30%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 76.5;
        }

        if (volw == 15 || volw == 16) {
          fill('#ffc306');
          hvul = 0.023;
          text('20%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 51;
        }

        if (volw == 17 || volw == 18) {
          fill('#ffc306');
          hvul = 0.0129;
          text('10%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 286.8, 70.5);
          pop();
          kit = 25.5;
        }

        if (volw == 19 || volw == 20) {
          fill('#ffc306');
          hvul = 0;
          text('0%', 183.5, 51.5);
          push();
          scale(0.7);
          imageMode(CENTER);
          image(all, 257.85, 70.5);
          image(arr, 279.82, 70.5);
          pop();
          kit = 0;
        }


        if (volw == 0 && keyIsDown(37) || volw == 1 && keyIsDown(37)) {
          volw = 1;
          vuks = 1;
        } else if (volw == 1 && vuks == 1) {
          volw = 2;
        }

        if (volw == 2 && keyIsDown(37) || volw == 3 && keyIsDown(37)) {
          volw = 3;
          vuks = 1;
        } else if (volw == 3 && vuks == 1) {
          volw = 4;
        }

        if (volw == 4 && keyIsDown(37) || volw == 5 && keyIsDown(37)) {
          volw = 5;
          vuks = 1;
        } else if (volw == 5 && vuks == 1) {
          volw = 6;
        }

        if (volw == 6 && keyIsDown(37) || volw == 7 && keyIsDown(37)) {
          volw = 7;
          vuks = 1;
        } else if (volw == 7 && vuks == 1) {
          volw = 8;
        }

        if (volw == 8 && keyIsDown(37) || volw == 9 && keyIsDown(37)) {
          volw = 9;
          vuks = 1;
        } else if (volw == 9 && vuks == 1) {
          volw = 10;
        }

        if (volw == 10 && keyIsDown(37) || volw == 11 && keyIsDown(37)) {
          volw = 11;
          vuks = 1;
        } else if (volw == 11 && vuks == 1) {
          volw = 12;
        }

        if (volw == 12 && keyIsDown(37) || volw == 13 && keyIsDown(37)) {
          volw = 13;
          vuks = 1;
        } else if (volw == 13 && vuks == 1) {
          volw = 14;
        }

        if (volw == 14 && keyIsDown(37) || volw == 15 && keyIsDown(37)) {
          volw = 15;
          vuks = 1;
        } else if (volw == 15 && vuks == 1) {
          volw = 16;
        }

        if (volw == 16 && keyIsDown(37) || volw == 17 && keyIsDown(37)) {
          volw = 17;
          vuks = 1;
        } else if (volw == 17 && vuks == 1) {
          volw = 18;
        }

        if (volw == 18 && keyIsDown(37) || volw == 19 && keyIsDown(37)) {
          volw = 19;
          vuks = 1;
        } else if (volw == 19 && vuks == 1) {
          volw = 20;
        }


        if (volw == 20 && keyIsDown(39) || volw == 17 && keyIsDown(39)) {
          volw = 17;
          vuks = 0;
        } else if (volw == 17 && vuks == 0) {
          volw = 18;
        }

        if (volw == 18 && keyIsDown(39) || volw == 15 && keyIsDown(39)) {
          volw = 15;
          vuks = 0;
        } else if (volw == 15 && vuks == 0) {
          volw = 16;
        }

        if (volw == 16 && keyIsDown(39) || volw == 13 && keyIsDown(39)) {
          volw = 13;
          vuks = 0;
        } else if (volw == 13 && vuks == 0) {
          volw = 14;
        }

        if (volw == 14 && keyIsDown(39) || volw == 11 && keyIsDown(39)) {
          volw = 11;
          vuks = 0;
        } else if (volw == 11 && vuks == 0) {
          volw = 12;
        }

        if (volw == 12 && keyIsDown(39) || volw == 9 && keyIsDown(39)) {
          volw = 9;
          vuks = 0;
        } else if (volw == 9 && vuks == 0) {
          volw = 10;
        }

        if (volw == 10 && keyIsDown(39) || volw == 7 && keyIsDown(39)) {
          volw = 7;
          vuks = 0;
        } else if (volw == 7 && vuks == 0) {
          volw = 8;
        }

        if (volw == 8 && keyIsDown(39) || volw == 5 && keyIsDown(39)) {
          volw = 5;
          vuks = 0;
        } else if (volw == 5 && vuks == 0) {
          volw = 6;
        }

        if (volw == 6 && keyIsDown(39) || volw == 3 && keyIsDown(39)) {
          volw = 3;
          vuks = 0;
        } else if (volw == 3 && vuks == 0) {
          volw = 4;
        }

        if (volw == 4 && keyIsDown(39) || volw == 1 && keyIsDown(39)) {
          volw = 1;
          vuks = 0;
        } else if (volw == 1 && vuks == 0) {
          volw = 2;
        }

        if (volw == 2 && keyIsDown(39) || volw == 21 && keyIsDown(39)) {
          volw = 21;
          vuks = 0;
        } else if (volw == 21 && vuks == 0) {
          volw = 0;
        }
      }

      if (cnps == 2 && keyIsDown(88) || cnps == 3 && keyIsDown(88)) {
        cnps = 3;
      } else if (cnps == 3) {
        cnps = 0;
      }
    }

    if (cnw == 2 && keyIsDown(88) && cnps == 0 ||
      cnw == 3 && keyIsDown(88) && cnps == 0) {
      cnw = 3;
    } else if (cnw == 3) {
      cnw = 0;
    }

    //_______________________________________________________________________\\

    pop();
  }

  if (guid == 2 && unusable_menu == 7 || guid == 3 && unusable_menu == 7) {
    guid = 3;
  } else if (guid == 3) {
    guid = 0;
  } else if (itw == 0 && eqw == 0 && cnw == 0) {
    if (guid == 2 && keyIsDown(88) || guid == 3 && keyIsDown(88)) {
      guid = 3;
    } else if (guid == 3) {
      guid = 0;
    }
  }
}

function moveStop() {
  if (kd == 0) {
    imageMode(CENTER);
    image(downs[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 1) {
    imageMode(CENTER);
    image(ups[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 2) {
    imageMode(CENTER);
    image(rights[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 3) {
    imageMode(CENTER);
    image(lefts[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 4) {
    imageMode(CENTER);
    image(up_rights[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 5) {
    imageMode(CENTER);
    image(up_lefts[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 6) {
    imageMode(CENTER);
    image(down_rights[frameCount % 1], nessP.x, nessP.y);
  }

  if (kd == 7) {
    imageMode(CENTER);
    image(down_lefts[frameCount % 1], nessP.x, nessP.y);
  }
}

function treesTwo() {
  if (nessP.y < 130 + 33) {
    image(trees2, -10, 130);
    image(trees2, 22, 130);
  }

  if (nessP.y < 162 + 33) {
    image(trees2, 566, 162);
    image(trees2, 534, 162);
  }

  if (nessP.y < 226 + 33) {
    image(trees2, 502, 226);
  }

  if (nessP.y < 290 + 33) {
    image(trees2, 214, 290);
  }

  if (nessP.y < 418 + 33) {
    image(trees2, 598, 418);
  }

  if (nessP.y < 450 + 33) {
    image(trees2, 118, 450);
  }

  if (nessP.y < 483 + 33) {
    image(trees2, 502, 483);
  }

  if (nessP.y < 547 + 33) {
    image(trees2, 182, 547);
    image(trees2, 214, 547);
    image(trees2, 54, 547);
  }

  if (nessP.y < 579 + 33) {
    image(trees2, 22, 579);
  }

  if (nessP.y < 675 + 33) {
    image(trees2, 310, 675);
  }

  if (nessP.y < 707 + 33) {
    image(trees2, 278, 707);
    image(trees2, 441, 707);
  }
}

function treesOne() {
  if (nessP.y < 112 + 19) {
    image(trees1, 342, 112);
  }

  if (nessP.y < 144 + 19) {
    image(trees1, 278, 144);
  }

  if (nessP.y < 304 + 19) {
    image(trees1, 470, 304);
    image(trees1, 502, 304);
    image(trees1, 406, 304);
    image(trees1, 438, 304);
  }

  if (nessP.y < 336 + 19) {
    image(trees1, 214, 336);
    image(trees1, 406, 336);
    image(trees1, 438, 336);
    image(trees1, 470, 336);
  }

  if (nessP.y < 368 + 19) {
    image(trees1, 438, 368);
  }

  if (nessP.y < 400 + 19) {
    image(trees1, 406, 400);
    image(trees1, 86, 400);
    image(trees1, 118, 400);
  }

  if (nessP.y < 432 + 19) {
    image(trees1, 214, 432);
    image(trees1, 374, 432);
    image(trees1, 342, 432);
    image(trees1, 86, 432);
    image(trees1, 54, 432);
  }

  if (nessP.y < 497 + 19) {
    image(trees1, 182, 497);
    image(trees1, 214, 497);
    image(trees1, 246, 497);
    image(trees1, 278, 497);
    image(trees1, 310, 497);
    image(trees1, 470, 497);
  }

  if (nessP.y < 529 + 19) {
    image(trees1, 409, 529);
    image(trees1, 505, 529);
    image(trees1, 537, 529);
  }

  if (nessP.y < 561 + 19) {
    image(trees1, 441, 561);
    image(trees1, 505, 561);
    image(trees1, 633, 561);
  }

  if (nessP.y < 593 + 19) {
    image(trees1, 473, 593);
    image(trees1, 505, 593);
  }

  if (nessP.y < 657 + 19) {
    image(trees1, 569, 657);
    image(trees1, 601, 657);
    image(trees1, -10, 657);
  }

  if (nessP.y < 689 + 19) {
    image(trees1, -10, 689);
    image(trees1, 22, 689);
    image(trees1, 569, 689);
  }
}

function treesThree() {
  image(trees0, -202, -50);

  if (nessP.y < 561 + 41) {
    image(trees3, 310, 561);
    image(trees3, 537, 561);
  }
  if (nessP.y < 208 + 41) {
    image(trees6, -65, 208);
  }
  if (nessP.y < 304 + 41) {
    image(trees7, -34, 304);
  }
  if (nessP.y < 336 + 41) {
    image(trees8, -74, 336);
  }
  if (nessP.y < 400 + 41) {
    image(trees9, -66, 400);
  }
  if (nessP.y < 496 + 42) {
    image(trees4, -22, 496);
  }
  if (nessP.y < 561 + 41) {
    image(trees10, -34, 561);
  }
  if (nessP.y < 593 + 41) {
    image(trees11, -74, 593);
  }
  if (nessP.y < 657 + 41) {
    image(trees12, -66, 657);
  }
}

function collideHous1() {
  if (nessP.y <= 189 && nessP.y >= 187 &&
    nessP.x <= 268 && nessP.x >= 209) {
    nessP.y += 1;
  }

  if (nessP.x >= 208 && nessP.x <= 210 &&
    nessP.y <= 188 && nessP.y >= 169) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 && nessP.y <= 170 &&
    nessP.x >= 209 && nessP.x <= 283) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 && nessP.x >= 282 &&
    nessP.y <= 172 && nessP.y >= 169) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 && nessP.y >= 186 &&
      nessP.x <= 269 && nessP.x >= 269) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 && nessP.y >= 185 &&
      nessP.x <= 270 && nessP.x >= 270) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 && nessP.y >= 184 &&
      nessP.x <= 271 && nessP.x >= 271) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 && nessP.y >= 183 &&
      nessP.x <= 272 && nessP.x >= 272) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 && nessP.y >= 182 &&
      nessP.x <= 273 && nessP.x >= 273) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 && nessP.y >= 181 &&
      nessP.x <= 274 && nessP.x >= 274) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 && nessP.y >= 180 &&
      nessP.x <= 275 && nessP.x >= 275) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 && nessP.y >= 179 &&
      nessP.x <= 276 && nessP.x >= 276) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 && nessP.y >= 178 &&
      nessP.x <= 277 && nessP.x >= 277) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 && nessP.y >= 177 &&
      nessP.x <= 278 && nessP.x >= 278) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 && nessP.y >= 176 &&
      nessP.x <= 279 && nessP.x >= 279) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 && nessP.y >= 175 &&
      nessP.x <= 280 && nessP.x >= 280) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 && nessP.y >= 174 &&
      nessP.x <= 281 && nessP.x >= 281) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 && nessP.y >= 173 &&
      nessP.x <= 282 && nessP.x >= 282) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 && nessP.y >= 172 &&
      nessP.x <= 283 && nessP.x >= 280) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 && nessP.y >= 186 &&
      nessP.x <= 269 && nessP.x >= 269) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 && nessP.y >= 185 &&
      nessP.x <= 270 && nessP.x >= 270) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 && nessP.y >= 184 &&
      nessP.x <= 271 && nessP.x >= 271) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 && nessP.y >= 183 &&
      nessP.x <= 272 && nessP.x >= 272) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 && nessP.y >= 182 &&
      nessP.x <= 273 && nessP.x >= 273) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 && nessP.y >= 181 &&
      nessP.x <= 274 && nessP.x >= 274) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 && nessP.y >= 180 &&
      nessP.x <= 275 && nessP.x >= 275) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 && nessP.y >= 179 &&
      nessP.x <= 276 && nessP.x >= 276) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 && nessP.y >= 178 &&
      nessP.x <= 277 && nessP.x >= 277) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 && nessP.y >= 177 &&
      nessP.x <= 278 && nessP.x >= 278) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 && nessP.y >= 176 &&
      nessP.x <= 279 && nessP.x >= 279) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 && nessP.y >= 175 &&
      nessP.x <= 280 && nessP.x >= 280) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 && nessP.y >= 174 &&
      nessP.x <= 281 && nessP.x >= 281) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 && nessP.y >= 173 &&
      nessP.x <= 282 && nessP.x >= 282) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 && nessP.y >= 172 &&
      nessP.x <= 283 && nessP.x >= 283) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 && nessP.y >= 171 &&
      nessP.x <= 284 && nessP.x >= 281) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 && nessP.y >= 186 &&
      nessP.x <= 269 && nessP.x >= 269) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 && nessP.y >= 185 &&
      nessP.x <= 270 && nessP.x >= 270) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 && nessP.y >= 184 &&
      nessP.x <= 271 && nessP.x >= 271) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 && nessP.y >= 183 &&
      nessP.x <= 272 && nessP.x >= 272) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 && nessP.y >= 182 &&
      nessP.x <= 273 && nessP.x >= 273) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 && nessP.y >= 181 &&
      nessP.x <= 274 && nessP.x >= 274) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 && nessP.y >= 180 &&
      nessP.x <= 275 && nessP.x >= 275) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 && nessP.y >= 179 &&
      nessP.x <= 276 && nessP.x >= 276) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 && nessP.y >= 178 &&
      nessP.x <= 277 && nessP.x >= 277) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 && nessP.y >= 177 &&
      nessP.x <= 278 && nessP.x >= 278) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 && nessP.y >= 176 &&
      nessP.x <= 279 && nessP.x >= 279) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 && nessP.y >= 175 &&
      nessP.x <= 280 && nessP.x >= 280) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 && nessP.y >= 174 &&
      nessP.x <= 281 && nessP.x >= 281) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 && nessP.y >= 173 &&
      nessP.x <= 282 && nessP.x >= 282) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 && nessP.y >= 172 &&
      nessP.x <= 283 && nessP.x >= 283) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 && nessP.y >= 173 &&
      nessP.x <= 284 && nessP.x >= 281) {
      nessP.y += 1;
    }
  }
}

function collideHous6() {
  if (nessP.y <= 101 && nessP.x >= 529 && nessP.x <= 620) {
    nessP.y += 1;
  }

  if (nessP.y <= 100 && nessP.x >= 528 && nessP.x <= 530) {
    nessP.x -= 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 107 - 7 && nessP.y >= 107 - 7 - 2 &&
      nessP.x <= 614 + 7 && nessP.x >= 614 + 7)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 1 && nessP.y >= 107 - 7 - 1 - 2 &&
      nessP.x <= 614 + 7 + 1 && nessP.x >= 614 + 7 + 1)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 2 && nessP.y >= 107 - 7 - 2 - 2 &&
      nessP.x <= 614 + 7 + 2 && nessP.x >= 614 + 7 + 2)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 3 && nessP.y >= 107 - 7 - 3 - 2 &&
      nessP.x <= 614 + 7 + 3 && nessP.x >= 614 + 7 + 3)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 4 && nessP.y >= 107 - 7 - 4 - 2 &&
      nessP.x <= 614 + 7 + 4 && nessP.x >= 614 + 7 + 4)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 5 && nessP.y >= 107 - 7 - 5 - 2 &&
      nessP.x <= 614 + 7 + 5 && nessP.x >= 614 + 7 + 5)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 6 && nessP.y >= 107 - 7 - 6 - 2 &&
      nessP.x <= 614 + 7 + 6 && nessP.x >= 614 + 7 + 6)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 7 && nessP.y >= 107 - 7 - 7 - 2 &&
      nessP.x <= 614 + 7 + 7 && nessP.x >= 614 + 7 + 7)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 8 && nessP.y >= 107 - 7 - 8 - 2 &&
      nessP.x <= 614 + 7 + 8 && nessP.x >= 614 + 7 + 8)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 9 && nessP.y >= 107 - 7 - 9 - 2 &&
      nessP.x <= 614 + 7 + 9 && nessP.x >= 614 + 7 + 9)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 10 && nessP.y >= 107 - 7 - 10 - 2 &&
      nessP.x <= 614 + 7 + 10 && nessP.x >= 614 + 7 + 10)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 11 && nessP.y >= 107 - 7 - 11 - 2 &&
      nessP.x <= 614 + 7 + 11 && nessP.x >= 614 + 7 + 11)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 12 && nessP.y >= 107 - 7 - 12 - 2 &&
      nessP.x <= 614 + 7 + 12 && nessP.x >= 614 + 7 + 12)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 13 && nessP.y >= 107 - 7 - 13 - 2 &&
      nessP.x <= 614 + 7 + 13 && nessP.x >= 614 + 7 + 13)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 14 && nessP.y >= 107 - 7 - 14 - 2 &&
      nessP.x <= 614 + 7 + 14 && nessP.x >= 614 + 7 + 14)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 15 && nessP.y >= 107 - 7 - 15 - 2 &&
      nessP.x <= 614 + 7 + 15 && nessP.x >= 614 + 7 + 15)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 16 && nessP.y >= 107 - 7 - 16 - 2 &&
      nessP.x <= 614 + 7 + 16 && nessP.x >= 614 + 7 + 16)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 17 && nessP.y >= 107 - 7 - 17 - 2 &&
      nessP.x <= 614 + 7 + 17 && nessP.x >= 614 + 7 + 17)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 18 && nessP.y >= 107 - 7 - 18 - 2 &&
      nessP.x <= 614 + 7 + 18 && nessP.x >= 614 + 7 + 18)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 19 && nessP.y >= 107 - 7 - 19 - 2 &&
      nessP.x <= 614 + 7 + 19 && nessP.x >= 614 + 7 + 19)

    {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 107 - 7 && nessP.y >= 107 - 7 - 2 &&
      nessP.x <= 614 + 7 && nessP.x >= 614 + 7)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 1 && nessP.y >= 107 - 7 - 1 - 2 &&
      nessP.x <= 614 + 7 + 1 && nessP.x >= 614 + 7 + 1)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 2 && nessP.y >= 107 - 7 - 2 - 2 &&
      nessP.x <= 614 + 7 + 2 && nessP.x >= 614 + 7 + 2)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 3 && nessP.y >= 107 - 7 - 3 - 2 &&
      nessP.x <= 614 + 7 + 3 && nessP.x >= 614 + 7 + 3)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 4 && nessP.y >= 107 - 7 - 4 - 2 &&
      nessP.x <= 614 + 7 + 4 && nessP.x >= 614 + 7 + 4)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 5 && nessP.y >= 107 - 7 - 5 - 2 &&
      nessP.x <= 614 + 7 + 5 && nessP.x >= 614 + 7 + 5)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 6 && nessP.y >= 107 - 7 - 6 - 2 &&
      nessP.x <= 614 + 7 + 6 && nessP.x >= 614 + 7 + 6)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 7 && nessP.y >= 107 - 7 - 7 - 2 &&
      nessP.x <= 614 + 7 + 7 && nessP.x >= 614 + 7 + 7)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 8 && nessP.y >= 107 - 7 - 8 - 2 &&
      nessP.x <= 614 + 7 + 8 && nessP.x >= 614 + 7 + 8)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 9 && nessP.y >= 107 - 7 - 9 &&
      nessP.x <= 614 + 7 + 9 && nessP.x >= 614 + 7 + 9)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 10 && nessP.y >= 107 - 7 - 10 - 2 &&
      nessP.x <= 614 + 7 + 10 && nessP.x >= 614 + 7 + 10)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 11 && nessP.y >= 107 - 7 - 11 - 2 &&
      nessP.x <= 614 + 7 + 11 && nessP.x >= 614 + 7 + 11)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 12 && nessP.y >= 107 - 7 - 12 - 2 &&
      nessP.x <= 614 + 7 + 12 && nessP.x >= 614 + 7 + 12)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 13 && nessP.y >= 107 - 7 - 13 - 2 &&
      nessP.x <= 614 + 7 + 13 && nessP.x >= 614 + 7 + 13)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 14 && nessP.y >= 107 - 7 - 14 - 2 &&
      nessP.x <= 614 + 7 + 14 && nessP.x >= 614 + 7 + 14)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 15 && nessP.y >= 107 - 7 - 15 - 2 &&
      nessP.x <= 614 + 7 + 15 && nessP.x >= 614 + 7 + 15)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 16 && nessP.y >= 107 - 7 - 16 - 2 &&
      nessP.x <= 614 + 7 + 16 && nessP.x >= 614 + 7 + 16)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 17 && nessP.y >= 107 - 7 - 17 - 2 &&
      nessP.x <= 614 + 7 + 17 && nessP.x >= 614 + 7 + 17)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 18 && nessP.y >= 107 - 7 - 18 - 2 &&
      nessP.x <= 614 + 7 + 18 && nessP.x >= 614 + 7 + 18)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 107 - 7 - 19 && nessP.y >= 107 - 7 - 19 - 2 &&
      nessP.x <= 614 + 7 + 19 && nessP.x >= 614 + 7 + 19)

    {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 107 - 7 && nessP.y >= 107 - 7 - 2 &&
      nessP.x <= 614 + 7 && nessP.x >= 614 + 7)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 1 && nessP.y >= 107 - 7 - 1 - 2 &&
      nessP.x <= 614 + 7 + 1 && nessP.x >= 614 + 7 + 1)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 2 && nessP.y >= 107 - 7 - 2 - 2 &&
      nessP.x <= 614 + 7 + 2 && nessP.x >= 614 + 7 + 2)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 3 && nessP.y >= 107 - 7 - 3 - 2 &&
      nessP.x <= 614 + 7 + 3 && nessP.x >= 614 + 7 + 3)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 4 && nessP.y >= 107 - 7 - 4 - 2 &&
      nessP.x <= 614 + 7 + 4 && nessP.x >= 614 + 7 + 4)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 5 && nessP.y >= 107 - 7 - 5 - 2 &&
      nessP.x <= 614 + 7 + 5 && nessP.x >= 614 + 7 + 5)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 6 && nessP.y >= 107 - 7 - 6 - 2 &&
      nessP.x <= 614 + 7 + 6 && nessP.x >= 614 + 7 + 6)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 7 && nessP.y >= 107 - 7 - 7 - 2 &&
      nessP.x <= 614 + 7 + 7 && nessP.x >= 614 + 7 + 7)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 8 && nessP.y >= 107 - 7 - 8 - 2 &&
      nessP.x <= 614 + 7 + 8 && nessP.x >= 614 + 7 + 8)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 9 && nessP.y >= 107 - 7 - 9 - 2 &&
      nessP.x <= 614 + 7 + 9 && nessP.x >= 614 + 7 + 9)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 10 && nessP.y >= 107 - 7 - 10 - 2 &&
      nessP.x <= 614 + 7 + 10 && nessP.x >= 614 + 7 + 10)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 11 && nessP.y >= 107 - 7 - 11 - 2 &&
      nessP.x <= 614 + 7 + 11 && nessP.x >= 614 + 7 + 11)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 12 && nessP.y >= 107 - 7 - 12 - 2 &&
      nessP.x <= 614 + 7 + 12 && nessP.x >= 614 + 7 + 12)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 13 && nessP.y >= 107 - 7 - 13 - 2 &&
      nessP.x <= 614 + 7 + 13 && nessP.x >= 614 + 7 + 13)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 14 && nessP.y >= 107 - 7 - 14 - 2 &&
      nessP.x <= 614 + 7 + 14 && nessP.x >= 614 + 7 + 14)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 15 && nessP.y >= 107 - 7 - 15 - 2 &&
      nessP.x <= 614 + 7 + 15 && nessP.x >= 614 + 7 + 15)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 16 && nessP.y >= 107 - 7 - 16 - 2 &&
      nessP.x <= 614 + 7 + 16 && nessP.x >= 614 + 7 + 16)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 17 && nessP.y >= 107 - 7 - 17 - 2 &&
      nessP.x <= 614 + 7 + 17 && nessP.x >= 614 + 7 + 17)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 18 && nessP.y >= 107 - 7 - 18 - 2 &&
      nessP.x <= 614 + 7 + 18 && nessP.x >= 614 + 7 + 18)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 107 - 7 - 19 && nessP.y >= 107 - 7 - 19 - 2 &&
      nessP.x <= 614 + 7 + 19 && nessP.x >= 614 + 7 + 19)

    {
      nessP.y += 1;
    }
  }
}

function collideHous9() {
  if (nessP.y <= 389 && nessP.y >= 387 &&
    nessP.x <= 380 && nessP.x >= 249) {
    nessP.y += 1;
  }

  if (nessP.y <= 354 && nessP.y >= 352 &&
    nessP.x <= 404 && nessP.x >= 249) {
    nessP.y -= 1;
  }

  if (nessP.y <= 388 && nessP.y >= 353 &&
    nessP.x <= 250 && nessP.x >= 248) {
    nessP.x -= 1;
  }

  if (nessP.x <= 337 && nessP.x >= 335 &&
    nessP.y <= 396 && nessP.y >= 370) {
    nessP.x += 1;
  }

  if (nessP.x <= 314 && nessP.x >= 312 &&
    nessP.y <= 396 && nessP.y >= 370) {
    nessP.x -= 1;
  }

  if (nessP.x <= 336 && nessP.x >= 313 &&
    nessP.y <= 397 && nessP.y >= 395) {
    nessP.y += 1;
  }

  if (nessP.x <= 305 && nessP.x >= 303 &&
    nessP.y <= 396 && nessP.y >= 370) {
    nessP.x += 1;
  }

  if (nessP.x <= 282 && nessP.x >= 280 &&
    nessP.y <= 396 && nessP.y >= 370) {
    nessP.x -= 1;
  }

  if (nessP.x <= 304 && nessP.x >= 281 &&
    nessP.y <= 397 && nessP.y >= 395) {
    nessP.y += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 395 - 7 && nessP.y >= 395 - 7 - 2 &&
      nessP.x <= 374 + 7 && nessP.x >= 374 + 7)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 1 && nessP.y >= 395 - 7 - 1 - 2 &&
      nessP.x <= 374 + 7 + 1 && nessP.x >= 374 + 7 + 1)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 2 && nessP.y >= 395 - 7 - 2 - 2 &&
      nessP.x <= 374 + 7 + 2 && nessP.x >= 374 + 7 + 2)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 3 && nessP.y >= 395 - 7 - 3 - 2 &&
      nessP.x <= 374 + 7 + 3 && nessP.x >= 374 + 7 + 3)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 4 && nessP.y >= 395 - 7 - 4 - 2 &&
      nessP.x <= 374 + 7 + 4 && nessP.x >= 374 + 7 + 4)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 5 && nessP.y >= 395 - 7 - 5 - 2 &&
      nessP.x <= 374 + 7 + 5 && nessP.x >= 374 + 7 + 5)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 6 && nessP.y >= 395 - 7 - 6 - 2 &&
      nessP.x <= 374 + 7 + 6 && nessP.x >= 374 + 7 + 6)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 7 && nessP.y >= 395 - 7 - 7 - 2 &&
      nessP.x <= 374 + 7 + 7 && nessP.x >= 374 + 7 + 7)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 8 && nessP.y >= 395 - 7 - 8 - 2 &&
      nessP.x <= 374 + 7 + 8 && nessP.x >= 374 + 7 + 8)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 9 && nessP.y >= 395 - 7 - 9 - 2 &&
      nessP.x <= 374 + 7 + 9 && nessP.x >= 374 + 7 + 9)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 10 && nessP.y >= 395 - 7 - 10 - 2 &&
      nessP.x <= 374 + 7 + 10 && nessP.x >= 374 + 7 + 10)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 11 && nessP.y >= 395 - 7 - 11 - 2 &&
      nessP.x <= 374 + 7 + 11 && nessP.x >= 374 + 7 + 11)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 12 && nessP.y >= 395 - 7 - 12 - 2 &&
      nessP.x <= 374 + 7 + 12 && nessP.x >= 374 + 7 + 12)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 13 && nessP.y >= 395 - 7 - 13 - 2 &&
      nessP.x <= 374 + 7 + 13 && nessP.x >= 374 + 7 + 13)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 14 && nessP.y >= 395 - 7 - 14 - 2 &&
      nessP.x <= 374 + 7 + 14 && nessP.x >= 374 + 7 + 14)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 15 && nessP.y >= 395 - 7 - 15 - 2 &&
      nessP.x <= 374 + 7 + 15 && nessP.x >= 374 + 7 + 15)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 16 && nessP.y >= 395 - 7 - 16 - 2 &&
      nessP.x <= 374 + 7 + 16 && nessP.x >= 374 + 7 + 16)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 17 && nessP.y >= 395 - 7 - 17 - 2 &&
      nessP.x <= 374 + 7 + 17 && nessP.x >= 374 + 7 + 17)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 18 && nessP.y >= 395 - 7 - 18 - 2 &&
      nessP.x <= 374 + 7 + 18 && nessP.x >= 374 + 7 + 18)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 19 && nessP.y >= 395 - 7 - 19 - 2 &&
      nessP.x <= 374 + 7 + 19 && nessP.x >= 374 + 7 + 19)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 20 && nessP.y >= 395 - 7 - 20 - 2 &&
      nessP.x <= 374 + 7 + 20 && nessP.x >= 374 + 7 + 20)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 21 && nessP.y >= 395 - 7 - 21 - 2 &&
      nessP.x <= 374 + 7 + 21 && nessP.x >= 374 + 7 + 21)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 22 && nessP.y >= 395 - 7 - 22 - 2 &&
      nessP.x <= 374 + 7 + 22 && nessP.x >= 374 + 7 + 22)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 23 && nessP.y >= 395 - 7 - 23 - 2 &&
      nessP.x <= 374 + 7 + 23 && nessP.x >= 374 + 7 + 23)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 24 && nessP.y >= 395 - 7 - 24 - 2 &&
      nessP.x <= 374 + 7 + 24 && nessP.x >= 374 + 7 + 24)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 25 && nessP.y >= 395 - 7 - 25 - 2 &&
      nessP.x <= 374 + 7 + 25 && nessP.x >= 374 + 7 + 25)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 26 && nessP.y >= 395 - 7 - 26 - 2 &&
      nessP.x <= 374 + 7 + 26 && nessP.x >= 374 + 7 + 26)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 27 && nessP.y >= 395 - 7 - 27 - 2 &&
      nessP.x <= 374 + 7 + 27 && nessP.x >= 374 + 7 + 27)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 28 && nessP.y >= 395 - 7 - 28 - 2 &&
      nessP.x <= 374 + 7 + 28 && nessP.x >= 374 + 7 + 28)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 29 && nessP.y >= 395 - 7 - 29 - 2 &&
      nessP.x <= 374 + 7 + 29 && nessP.x >= 374 + 7 + 29)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 30 && nessP.y >= 395 - 7 - 30 - 2 &&
      nessP.x <= 374 + 7 + 30 && nessP.x >= 374 + 7 + 30)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 31 && nessP.y >= 395 - 7 - 31 - 2 &&
      nessP.x <= 374 + 7 + 31 && nessP.x >= 374 + 7 + 31)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 32 && nessP.y >= 395 - 7 - 32 - 2 &&
      nessP.x <= 374 + 7 + 32 && nessP.x >= 374 + 7 + 32)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 33 && nessP.y >= 395 - 7 - 33 - 2 &&
      nessP.x <= 374 + 7 + 33 && nessP.x >= 374 + 7 + 33)

    {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 34 && nessP.y >= 395 - 7 - 34 - 2 &&
      nessP.x <= 374 + 7 + 34 && nessP.x >= 374 + 7 + 34)

    {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 395 - 7 && nessP.y >= 395 - 7 - 2 &&
      nessP.x <= 374 + 7 && nessP.x >= 374 + 7)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 1 && nessP.y >= 395 - 7 - 1 - 2 &&
      nessP.x <= 374 + 7 + 1 && nessP.x >= 374 + 7 + 1)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 2 && nessP.y >= 395 - 7 - 2 - 2 &&
      nessP.x <= 374 + 7 + 2 && nessP.x >= 374 + 7 + 2)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 3 && nessP.y >= 395 - 7 - 3 - 2 &&
      nessP.x <= 374 + 7 + 3 && nessP.x >= 374 + 7 + 3)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 4 && nessP.y >= 395 - 7 - 4 - 2 &&
      nessP.x <= 374 + 7 + 4 && nessP.x >= 374 + 7 + 4)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 5 && nessP.y >= 395 - 7 - 5 - 2 &&
      nessP.x <= 374 + 7 + 5 && nessP.x >= 374 + 7 + 5)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 6 && nessP.y >= 395 - 7 - 6 - 2 &&
      nessP.x <= 374 + 7 + 6 && nessP.x >= 374 + 7 + 6)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 7 && nessP.y >= 395 - 7 - 7 - 2 &&
      nessP.x <= 374 + 7 + 7 && nessP.x >= 374 + 7 + 7)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 8 && nessP.y >= 395 - 7 - 8 - 2 &&
      nessP.x <= 374 + 7 + 8 && nessP.x >= 374 + 7 + 8)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 9 && nessP.y >= 395 - 7 - 9 &&
      nessP.x <= 374 + 7 + 9 && nessP.x >= 374 + 7 + 9)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 10 && nessP.y >= 395 - 7 - 10 - 2 &&
      nessP.x <= 374 + 7 + 10 && nessP.x >= 374 + 7 + 10)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 11 && nessP.y >= 395 - 7 - 11 - 2 &&
      nessP.x <= 374 + 7 + 11 && nessP.x >= 374 + 7 + 11)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 12 && nessP.y >= 395 - 7 - 12 - 2 &&
      nessP.x <= 374 + 7 + 12 && nessP.x >= 374 + 7 + 12)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 13 && nessP.y >= 395 - 7 - 13 - 2 &&
      nessP.x <= 374 + 7 + 13 && nessP.x >= 374 + 7 + 13)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 14 && nessP.y >= 395 - 7 - 14 - 2 &&
      nessP.x <= 374 + 7 + 14 && nessP.x >= 374 + 7 + 14)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 15 && nessP.y >= 395 - 7 - 15 - 2 &&
      nessP.x <= 374 + 7 + 15 && nessP.x >= 374 + 7 + 15)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 16 && nessP.y >= 395 - 7 - 16 - 2 &&
      nessP.x <= 374 + 7 + 16 && nessP.x >= 374 + 7 + 16)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 17 && nessP.y >= 395 - 7 - 17 - 2 &&
      nessP.x <= 374 + 7 + 17 && nessP.x >= 374 + 7 + 17)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 18 && nessP.y >= 395 - 7 - 18 - 2 &&
      nessP.x <= 374 + 7 + 18 && nessP.x >= 374 + 7 + 18)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 19 && nessP.y >= 395 - 7 - 19 - 2 &&
      nessP.x <= 374 + 7 + 19 && nessP.x >= 374 + 7 + 19)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 20 && nessP.y >= 395 - 7 - 20 - 2 &&
      nessP.x <= 374 + 7 + 20 && nessP.x >= 374 + 7 + 20)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 21 && nessP.y >= 395 - 7 - 21 - 2 &&
      nessP.x <= 374 + 7 + 21 && nessP.x >= 374 + 7 + 21)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 22 && nessP.y >= 395 - 7 - 22 - 2 &&
      nessP.x <= 374 + 7 + 22 && nessP.x >= 374 + 7 + 22)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 23 && nessP.y >= 395 - 7 - 23 - 2 &&
      nessP.x <= 374 + 7 + 23 && nessP.x >= 374 + 7 + 23)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 24 && nessP.y >= 395 - 7 - 24 - 2 &&
      nessP.x <= 374 + 7 + 24 && nessP.x >= 374 + 7 + 24)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 25 && nessP.y >= 395 - 7 - 25 - 2 &&
      nessP.x <= 374 + 7 + 25 && nessP.x >= 374 + 7 + 25)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 26 && nessP.y >= 395 - 7 - 26 - 2 &&
      nessP.x <= 374 + 7 + 26 && nessP.x >= 374 + 7 + 26)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 27 && nessP.y >= 395 - 7 - 27 - 2 &&
      nessP.x <= 374 + 7 + 27 && nessP.x >= 374 + 7 + 27)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 28 && nessP.y >= 395 - 7 - 28 - 2 &&
      nessP.x <= 374 + 7 + 28 && nessP.x >= 374 + 7 + 28)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 29 && nessP.y >= 395 - 7 - 29 - 2 &&
      nessP.x <= 374 + 7 + 29 && nessP.x >= 374 + 7 + 29)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 30 && nessP.y >= 395 - 7 - 30 - 2 &&
      nessP.x <= 374 + 7 + 30 && nessP.x >= 374 + 7 + 30)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 31 && nessP.y >= 395 - 7 - 31 - 2 &&
      nessP.x <= 374 + 7 + 31 && nessP.x >= 374 + 7 + 31)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 32 && nessP.y >= 395 - 7 - 32 - 2 &&
      nessP.x <= 374 + 7 + 32 && nessP.x >= 374 + 7 + 32)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 33 && nessP.y >= 395 - 7 - 33 - 2 &&
      nessP.x <= 374 + 7 + 33 && nessP.x >= 374 + 7 + 33)

    {
      nessP.x += 1;
    }

    if (nessP.y <= 395 - 7 - 34 && nessP.y >= 395 - 7 - 34 - 2 &&
      nessP.x <= 374 + 7 + 34 && nessP.x >= 374 + 7 + 34)

    {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 395 - 7 && nessP.y >= 395 - 7 - 2 &&
      nessP.x <= 374 + 7 && nessP.x >= 374 + 7)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 1 && nessP.y >= 395 - 7 - 1 - 2 &&
      nessP.x <= 374 + 7 + 1 && nessP.x >= 374 + 7 + 1)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 2 && nessP.y >= 395 - 7 - 2 - 2 &&
      nessP.x <= 374 + 7 + 2 && nessP.x >= 374 + 7 + 2)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 3 && nessP.y >= 395 - 7 - 3 - 2 &&
      nessP.x <= 374 + 7 + 3 && nessP.x >= 374 + 7 + 3)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 4 && nessP.y >= 395 - 7 - 4 - 2 &&
      nessP.x <= 374 + 7 + 4 && nessP.x >= 374 + 7 + 4)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 5 && nessP.y >= 395 - 7 - 5 - 2 &&
      nessP.x <= 374 + 7 + 5 && nessP.x >= 374 + 7 + 5)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 6 && nessP.y >= 395 - 7 - 6 - 2 &&
      nessP.x <= 374 + 7 + 6 && nessP.x >= 374 + 7 + 6)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 7 && nessP.y >= 395 - 7 - 7 - 2 &&
      nessP.x <= 374 + 7 + 7 && nessP.x >= 374 + 7 + 7)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 8 && nessP.y >= 395 - 7 - 8 - 2 &&
      nessP.x <= 374 + 7 + 8 && nessP.x >= 374 + 7 + 8)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 9 && nessP.y >= 395 - 7 - 9 - 2 &&
      nessP.x <= 374 + 7 + 9 && nessP.x >= 374 + 7 + 9)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 10 && nessP.y >= 395 - 7 - 10 - 2 &&
      nessP.x <= 374 + 7 + 10 && nessP.x >= 374 + 7 + 10)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 11 && nessP.y >= 395 - 7 - 11 - 2 &&
      nessP.x <= 374 + 7 + 11 && nessP.x >= 374 + 7 + 11)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 12 && nessP.y >= 395 - 7 - 12 - 2 &&
      nessP.x <= 374 + 7 + 12 && nessP.x >= 374 + 7 + 12)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 13 && nessP.y >= 395 - 7 - 13 - 2 &&
      nessP.x <= 374 + 7 + 13 && nessP.x >= 374 + 7 + 13)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 14 && nessP.y >= 395 - 7 - 14 - 2 &&
      nessP.x <= 374 + 7 + 14 && nessP.x >= 374 + 7 + 14)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 15 && nessP.y >= 395 - 7 - 15 - 2 &&
      nessP.x <= 374 + 7 + 15 && nessP.x >= 374 + 7 + 15)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 16 && nessP.y >= 395 - 7 - 16 - 2 &&
      nessP.x <= 374 + 7 + 16 && nessP.x >= 374 + 7 + 16)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 17 && nessP.y >= 395 - 7 - 17 - 2 &&
      nessP.x <= 374 + 7 + 17 && nessP.x >= 374 + 7 + 17)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 18 && nessP.y >= 395 - 7 - 18 - 2 &&
      nessP.x <= 374 + 7 + 18 && nessP.x >= 374 + 7 + 18)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 19 && nessP.y >= 395 - 7 - 19 - 2 &&
      nessP.x <= 374 + 7 + 19 && nessP.x >= 374 + 7 + 19)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 20 && nessP.y >= 395 - 7 - 20 - 2 &&
      nessP.x <= 374 + 7 + 20 && nessP.x >= 374 + 7 + 20)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 21 && nessP.y >= 395 - 7 - 21 - 2 &&
      nessP.x <= 374 + 7 + 21 && nessP.x >= 374 + 7 + 21)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 22 && nessP.y >= 395 - 7 - 22 - 2 &&
      nessP.x <= 374 + 7 + 22 && nessP.x >= 374 + 7 + 22)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 23 && nessP.y >= 395 - 7 - 23 - 2 &&
      nessP.x <= 374 + 7 + 23 && nessP.x >= 374 + 7 + 23)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 24 && nessP.y >= 395 - 7 - 24 - 2 &&
      nessP.x <= 374 + 7 + 24 && nessP.x >= 374 + 7 + 24)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 25 && nessP.y >= 395 - 7 - 25 - 2 &&
      nessP.x <= 374 + 7 + 25 && nessP.x >= 374 + 7 + 25)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 26 && nessP.y >= 395 - 7 - 26 - 2 &&
      nessP.x <= 374 + 7 + 26 && nessP.x >= 374 + 7 + 26)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 27 && nessP.y >= 395 - 7 - 27 - 2 &&
      nessP.x <= 374 + 7 + 27 && nessP.x >= 374 + 7 + 27)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 28 && nessP.y >= 395 - 7 - 28 - 2 &&
      nessP.x <= 374 + 7 + 28 && nessP.x >= 374 + 7 + 28)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 29 && nessP.y >= 395 - 7 - 29 - 2 &&
      nessP.x <= 374 + 7 + 29 && nessP.x >= 374 + 7 + 29)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 30 && nessP.y >= 395 - 7 - 30 - 2 &&
      nessP.x <= 374 + 7 + 30 && nessP.x >= 374 + 7 + 30)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 31 && nessP.y >= 395 - 7 - 31 - 2 &&
      nessP.x <= 374 + 7 + 31 && nessP.x >= 374 + 7 + 31)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 32 && nessP.y >= 395 - 7 - 32 - 2 &&
      nessP.x <= 374 + 7 + 32 && nessP.x >= 374 + 7 + 32)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 33 && nessP.y >= 395 - 7 - 33 - 2 &&
      nessP.x <= 374 + 7 + 33 && nessP.x >= 374 + 7 + 33)

    {
      nessP.y += 1;
    }

    if (nessP.y <= 395 - 7 - 34 && nessP.y >= 395 - 7 - 34 - 2 &&
      nessP.x <= 374 + 7 + 34 && nessP.x >= 374 + 7 + 34)

    {
      nessP.y += 1;
    }
  }
}

function talltreCollide() {
  if (nessP.x <= 587 && nessP.x >= 585 &&
    nessP.y >= 590 && nessP.y <= 604 ||
    nessP.x <= 587 - 227 && nessP.x >= 585 - 227 &&
    nessP.y >= 590 && nessP.y <= 604)

  {
    nessP.x += 1;
  }

  if (nessP.x <= 545 && nessP.x >= 543 &&
    nessP.y >= 590 && nessP.y <= 604 ||
    nessP.x <= 545 - 227 && nessP.x >= 543 - 227 &&
    nessP.y >= 590 && nessP.y <= 604)

  {
    nessP.x -= 1;
  }

  if (nessP.x <= 586 && nessP.x >= 544 &&
    nessP.y >= 603 && nessP.y <= 605 ||
    nessP.x <= 586 - 227 && nessP.x >= 544 - 227 &&
    nessP.y >= 603 && nessP.y <= 605)

  {
    nessP.y += 1;
  }

  if (nessP.x <= 586 && nessP.x >= 544 &&
    nessP.y >= 589 && nessP.y <= 591 ||
    nessP.x <= 586 - 227 && nessP.x >= 544 - 227 &&
    nessP.y >= 589 && nessP.y <= 591)

  {
    nessP.y -= 1;
  }
}

function treeCollisions() {
  tre1.collide();
  tre2.collide();
  tre3.collide();
  tre4.collide();
  tre5.collide();
  tre6.collide();
  tre7.collide();
  tre8.collide();
  tre9.collide();
  tre10.collide();
  tre11.collide();
  tre12.collide();
  tre13.collide();
  tre14.collide();
  tre15.collide();
  tre16.collide();
  utre1.collide();
  utre2.collide();
  utre3.collide();
  utre4.collide();
  utre5.collide();
  utre6.collide();
  utre7.collide();
  utre8.collide();
  utre9.collide();
  utre10.collide();
  utre11.collide();
  utre12.collide();
  utre13.collide();
  utre14.collide();
  utre15.collide();
  utre16.collide();
  utre17.collide();
  utre18.collide();
  utre19.collide();
  utre20.collide();
  utre21.collide();
  utre22.collide();
  utre23.collide();
  utre24.collide();
  utre25.collide();
  utre26.collide();
  utre27.collide();
  utre28.collide();
  utre29.collide();
  utre30.collide();
  utre31.collide();
  utre32.collide();
  utre33.collide();
  utre34.collide();
  utre35.collide();
  utre36.collide();
  utre37.collide();
  utre38.collide();
  utre39.collide();
  talltreCollide();
}

function topleftCollisions() {
  if (nessP.y <= 38 && nessP.x >= 380 && nessP.x <= 430 ||
    nessP.y <= 54 && nessP.x <= 395 || nessP.y <= 70 &&
    nessP.x <= 379 || nessP.y <= 86 && nessP.x <= 363 ||
    nessP.y <= 94 && nessP.x <= 347 && nessP.x >= 273 ||
    nessP.y <= 102 && nessP.x <= 331 && nessP.x >= 289 ||
    nessP.y <= 54 && nessP.x >= 417 || nessP.y <= 62 &&
    nessP.x >= 433 || nessP.y <= 70 && nessP.x >= 449 ||
    nessP.y <= 94 && nessP.x >= 465 || nessP.y <= 100 &&
    nessP.x >= 481 && nessP.x <= 523 || nessP.y <= 102 &&
    nessP.x >= 641 || nessP.x <= 261 && nessP.x >= -1 &&
    nessP.y <= 95 || nessP.x <= 218 && nessP.x >= 148 &&
    nessP.y <= 120 || nessP.x <= 182 && nessP.x >= 81 &&
    nessP.y <= 109 || nessP.x <= 113 && nessP.x >= 43 &&
    nessP.y <= 120 || nessP.x <= 10 && nessP.x >= -20 &&
    nessP.y <= 91 || nessP.x <= -5 && nessP.x >= -90 &&
    nessP.y <= 126 || nessP.x <= -21 && nessP.x >= -90 &&
    nessP.y <= 134 || nessP.x <= -37 && nessP.x >= -90 &&
    nessP.y <= 166 || nessP.x <= -53 && nessP.x >= -90 &&
    nessP.y <= 182 || nessP.x <= -69 && nessP.x >= -99 &&
    nessP.y <= 188 ||

    nessP.y <= 252 && nessP.y >= 250 && nessP.x <= -25 ||
    nessP.y <= 252 + 128 && nessP.y >= 250 + 128 && nessP.x <= -25 ||
    nessP.y <= 252 + 192 && nessP.y >= 250 + 192 && nessP.x <= -25 ||
    nessP.y <= 252 + 449 && nessP.y >= 250 + 449 && nessP.x <= -25 ||
    nessP.y <= 252 + 385 && nessP.y >= 250 + 385 && nessP.x <= -25 ||
    nessP.y <= 252 + 96 && nessP.y >= 250 + 96 && nessP.x <= -25 + 32 ||
    nessP.y <= 252 + 289 && nessP.y >= 250 + 289 && nessP.x <= -25 + 32 ||
    nessP.y <= 252 + 353 && nessP.y >= 250 + 353 && nessP.x <= -25 + 32)

  {
    nessP.y += 1;
  }

  if (nessP.x <= 396 && nessP.y <= 53 || nessP.x <= 380 &&
    nessP.y <= 69 || nessP.x <= 364 && nessP.y <= 85 ||
    nessP.x <= 348 && nessP.x >= 340 && nessP.y <= 93 ||
    nessP.x <= 332 && nessP.x >= 326 && nessP.y <= 101 ||
    nessP.x <= 524 && nessP.x >= 521 && nessP.y <= 99 ||
    nessP.x <= 262 && nessP.x >= 255 && nessP.y <= 94 ||
    nessP.x <= 219 && nessP.x >= 211 && nessP.y <= 119 ||
    nessP.x >= 106 && nessP.x <= 114 && nessP.y <= 119 ||
    nessP.x <= -4 && nessP.x >= -12 && nessP.y <= 125 ||
    nessP.x <= -20 && nessP.x >= -28 && nessP.y <= 133 ||
    nessP.x <= -36 && nessP.x >= -44 && nessP.y <= 165 ||
    nessP.x <= -52 && nessP.x >= -60 && nessP.y <= 181 ||
    nessP.x <= -68 && nessP.x >= -76 && nessP.y <= 187 ||
    nessP.x <= -81 && nessP.x >= -92 ||

    nessP.x <= -24 && nessP.y >= 237 && nessP.y <= 251 ||
    nessP.x <= -24 && nessP.y >= 299 && nessP.y <= 251 + 128 ||
    nessP.x <= -24 && nessP.y >= 237 + 192 && nessP.y <= 251 + 192 ||
    nessP.x <= -24 && nessP.y >= 237 + 449 && nessP.y <= 251 + 449 ||
    nessP.x <= -24 && nessP.y >= 491 && nessP.y <= 251 + 385 ||
    nessP.x <= -24 + 32 && nessP.y >= 237 + 96 && nessP.y <= 251 + 96 ||
    nessP.x <= -24 + 32 && nessP.y >= 237 + 289 && nessP.y <= 251 + 289 ||
    nessP.x <= -24 + 32 && nessP.y >= 237 + 353 && nessP.y <= 251 + 353 ||
    nessP.x <= -57 && nessP.y >= 212 && nessP.y <= 613 ||
    nessP.x <= -55 && nessP.y >= 370 && nessP.y <= 439 ||
    nessP.x <= -57 && nessP.y >= 695)

  {
    nessP.x += 1;
  }

  if (nessP.x >= 272 && nessP.x <= 280 && nessP.y <= 93 ||
    nessP.x >= 288 && nessP.x <= 297 && nessP.y <= 101 ||
    nessP.x >= 416 && nessP.y <= 53 || nessP.x >= 432 &&
    nessP.y <= 61 || nessP.x >= 448 && nessP.y <= 69 ||
    nessP.x >= 464 && nessP.y <= 93 || nessP.x >= 480 &&
    nessP.x <= 483 && nessP.y <= 99 || nessP.x >= 640 &&
    nessP.y <= 101 || nessP.x >= 147 && nessP.x <= 155 &&
    nessP.y <= 119 || nessP.x <= 50 && nessP.x >= 42 &&
    nessP.y <= 119 || nessP.x <= 6 && nessP.x >= -2 &&
    nessP.y <= 94)

  {
    nessP.x -= 1;
  }

  if (nessP.y >= 236 && nessP.y <= 238 && nessP.x <= -25 ||
    nessP.y >= 298 && nessP.y <= 300 && nessP.x <= -25 ||
    nessP.y >= 236 + 192 && nessP.y <= 238 + 192 && nessP.x <= -25 ||
    nessP.y >= 236 + 449 && nessP.y <= 238 + 449 && nessP.x <= -25 ||
    nessP.y >= 490 && nessP.y <= 492 && nessP.x <= -25 ||
    nessP.y >= 236 + 96 && nessP.y <= 238 + 96 && nessP.x <= -25 + 32 ||
    nessP.y >= 236 + 289 && nessP.y <= 238 + 289 && nessP.x <= -25 + 32 ||
    nessP.y >= 236 + 353 && nessP.y <= 238 + 353 && nessP.x <= -25 + 32 ||
    nessP.y >= 211 && nessP.y <= 213 && nessP.x <= -58)

  {
    nessP.y -= 1;
  }

  if (kfsp > 0) {
    if (nessP.x <= -55 && nessP.y >= 606 && nessP.y <= 694) {
      nessP.x += 1;
    }
  }
}

function secretCollisions() {
  if (nessP.y <= 59) {
    nessP.y += 1;
  }

  if (nessP.y >= 197 || nessP.y >= 163 && nessP.x <= 120 ||
    nessP.y >= 163 && nessP.x >= 137)

  {
    nessP.y -= 1;
  }

  if (nessP.x <= 57 || nessP.x <= 121 && nessP.y >= 164)

  {
    nessP.x += 1;
  }

  if (nessP.x >= 200 || nessP.x >= 136 && nessP.y >= 164)

  {
    nessP.x -= 1;
  }
}

function oldCollision() {
  if (ombi <= 0) {
    if (nessP.y <= 109 && nessP.y >= 107 && nessP.x >= 114 && nessP.x <= 144) {
      nessP.y += 1;
    }
    if (nessP.y >= 94 && nessP.y <= 96 && nessP.x >= 114 && nessP.x <= 144) {
      nessP.y -= 1;
    }

    if (nessP.x >= 113 && nessP.x <= 115 && nessP.y >= 95 && nessP.y <= 108) {
      nessP.x -= 1;
    }
    if (nessP.x <= 145 && nessP.x >= 143 && nessP.y >= 95 && nessP.y <= 108) {
      nessP.x += 1;
    }
  }
}

function secretText() {
  let fltxx = ['I', 't', '\'', 's', ' ', 'a', ' ', 's', 'e', 'c', 'r', 'e', 't', ' ', 't', 'o', 'e',
    'v', 'e', 'r', 'y', 'b', 'o', 'd', 'y', '.'
  ];

  fltx += 1;
  push();
  textAlign(LEFT);
  stroke(0);
  textFont(apple, 6);

  if (fltx <= 63) {
    if (fltx >= 10) {
      word = fltxx[0];
      text(word, 87, 78.5);
    }
    if (fltx >= 12) {
      word += fltxx[1];
      text(word, 87, 78.5);
    }
    if (fltx >= 14) {
      word += fltxx[2];
      text(word, 87, 78.5);
    }
    if (fltx >= 16) {
      word += fltxx[3];
      text(word, 87, 78.5);
    }
    if (fltx >= 18) {
      word += fltxx[4];
      text(word, 87, 78.5);
    }
    if (fltx >= 20) {
      word += fltxx[5];
      text(word, 87, 78.5);
    }
    if (fltx >= 22) {
      word += fltxx[6];
      text(word, 87, 78.5);
    }
    if (fltx >= 24) {
      word += fltxx[7];
      text(word, 87, 78.5);
    }
    if (fltx >= 26) {
      word += fltxx[8];
      text(word, 87, 78.5);
    }
    if (fltx >= 28) {
      word += fltxx[9];
      text(word, 87, 78.5);
    }
    if (fltx >= 30) {
      word += fltxx[10];
      text(word, 87, 78.5);
    }
    if (fltx >= 32) {
      word += fltxx[11];
      text(word, 87, 78.5);
    }
    if (fltx >= 34) {
      word += fltxx[12];
      text(word, 87, 78.5);
    }
    if (fltx >= 36) {
      word += fltxx[13];
      text(word, 87, 78.5);
    }
    if (fltx >= 38) {
      word += fltxx[14];
      text(word, 87, 78.5);
    }
    if (fltx >= 40) {
      word += fltxx[15];
      text(word, 87, 78.5);
    }

    if (fltx >= 44) {
      word = fltxx[16];
      text(word, 102.7, 89);
    }
    if (fltx >= 46) {
      word += fltxx[17];
      text(word, 102.7, 89);
    }
    if (fltx >= 48) {
      word += fltxx[18];
      text(word, 102.7, 89);
    }
    if (fltx >= 50) {
      word += fltxx[19];
      text(word, 102.7, 89);
    }
    if (fltx >= 52) {
      word += fltxx[20];
      text(word, 102.7, 89);
    }
    if (fltx >= 54) {
      word += fltxx[21];
      text(word, 102.7, 89);
    }
    if (fltx >= 56) {
      word += fltxx[22];
      text(word, 102.7, 89);
    }
    if (fltx >= 58) {
      word += fltxx[23];
      text(word, 102.7, 89);
    }
    if (fltx >= 60) {
      word += fltxx[24];
      text(word, 102.7, 89);
    }
    if (fltx >= 62) {
      word += fltxx[25];
      text(word, 102.7, 89);
    }
  }

  if (fltx >= 10 && fltx <= 62) {
    tt += 1;

    if (tt >= 1 && tt < 2) {
      ntxt.play();
    }
    if (tt >= 4) {
      tt = 0;
    }
  } else {
    tt = 0;
  }

  if (fltx > 63) {
    text('It\'s a secret to', 87, 78.5);
    text('everybody.', 102.7, 89);
  }

  pop();
}

function cliffsRight() {
  if (nessP.y <= 318) {
    image(mpr01, 630, 230);
  }
  if (nessP.y <= 470) {
    image(mpr02, 630, 360);
  }
  if (nessP.y <= 510) {
    image(mpr03, 662, 488);
  }
  if (nessP.y <= 671) {
    image(mpr04, 633, 583);
  }
  if (nessP.y <= 517) {
    image(mpr05, 672, 488);
  }
}

function bottomrightCollisions() {
  if (nessP.y >= 747 && nessP.x <= -30 ||
    nessP.y >= 755 && nessP.x <= 8 ||
    nessP.y >= 747 + 32 && nessP.x <= -30 + 64 ||
    nessP.y >= 755 + 32 && nessP.x <= 8 + 64 ||
    nessP.y >= 811 && nessP.x >= 50 && nessP.x <= 118 ||
    nessP.y >= 795 && nessP.x >= 94 && nessP.x <= 151 ||
    nessP.y >= 779 && nessP.x >= 132 && nessP.x <= 162 ||
    nessP.y >= 787 && nessP.x <= 211 && nessP.x >= 146 ||
    nessP.y >= 779 && nessP.x >= 132 + 64 && nessP.x <= 162 + 64 ||
    nessP.y >= 787 && nessP.x <= 200 + 64 && nessP.x >= 146 + 64 ||
    nessP.y >= 779 + 32 && nessP.x >= 132 + 128 && nessP.x <= 162 + 128 ||
    nessP.y >= 787 + 32 && nessP.x >= 146 + 128 ||
    nessP.y >= 779 + 32 && nessP.x >= 324 ||
    nessP.y >= 795 && nessP.x >= 350 && nessP.x <= 390 ||
    nessP.y >= 779 && nessP.x >= 388 && nessP.x <= 421 ||
    nessP.y >= 787 && nessP.x >= 407 && nessP.x <= 459 ||
    nessP.y >= 795 && nessP.x >= 350 + 131 && nessP.x <= 390 + 131 ||
    nessP.y >= 779 && nessP.x >= 388 + 131 && nessP.x <= 418 + 131 ||
    nessP.y >= 779 && nessP.x >= 388 + 195 && nessP.x <= 418 + 195 ||
    nessP.y >= 787 && nessP.x >= 407 + 131 ||
    nessP.y >= 779 && nessP.x >= 388 + 259 ||
    nessP.y >= 763 && nessP.x >= 673 ||

    nessP.y >= 229 && nessP.y <= 231 && nessP.x >= 672 ||
    nessP.y >= 237 && nessP.y <= 239 && nessP.x >= 664 ||
    nessP.y >= 261 && nessP.y <= 263 && nessP.x >= 640 ||
    nessP.y >= 229 + 64 && nessP.y <= 231 + 64 && nessP.x >= 672 - 40 ||
    nessP.y >= 237 + 64 && nessP.y <= 239 + 64 && nessP.x >= 664 - 40 ||
    nessP.y >= 367 && nessP.y <= 369 && nessP.x >= 696 ||
    nessP.y >= 367 + 22 && nessP.y <= 369 + 22 && nessP.x >= 696 - 8 ||
    nessP.y >= 367 + 30 && nessP.y <= 369 + 30 && nessP.x >= 696 - 32 ||
    nessP.y >= 367 + 54 && nessP.y <= 369 + 54 && nessP.x >= 696 - 56 ||
    nessP.y >= 367 + 62 && nessP.y <= 369 + 62 && nessP.x >= 696 - 64 ||
    nessP.y >= 367 + 84 && nessP.y <= 369 + 84 && nessP.x >= 696 - 72 ||
    nessP.y >= 518 && nessP.y <= 520 && nessP.x >= 688 ||
    nessP.y >= 495 && nessP.y <= 497 && nessP.x <= 692 &&
    nessP.x >= 656 || nessP.y >= 582 && nessP.y <= 584 &&
    nessP.x >= 675 || nessP.y >= 582 + 8 && nessP.y <= 584 + 8 &&
    nessP.x >= 675 - 8 || nessP.y >= 582 + 32 && nessP.y <= 584 + 32 &&
    nessP.x >= 675 - 32 || nessP.y >= 582 + 40 && nessP.y <= 584 + 40 &&
    nessP.x >= 675 - 40 || nessP.y >= 582 + 64 && nessP.y <= 584 + 64 &&
    nessP.x >= 675 - 48)

  {
    nessP.y -= 1;
  }

  if (nessP.x <= -29 && nessP.y >= 748 ||
    nessP.x <= 9 && nessP.y >= 756 ||
    nessP.x <= -29 + 64 && nessP.y >= 748 + 32 ||
    nessP.x <= 9 + 64 && nessP.y >= 756 + 32 ||
    nessP.x <= 163 && nessP.x >= 161 && nessP.y >= 780 ||
    nessP.x <= 163 + 64 && nessP.x >= 161 + 64 && nessP.y >= 780 ||
    nessP.x <= 201 + 64 && nessP.x >= 199 + 64 && nessP.y >= 788 ||
    nessP.x <= 163 + 128 && nessP.x >= 161 + 128 && nessP.y >= 780 + 32 ||
    nessP.x <= 200 + 128 && nessP.x >= 198 + 128 && nessP.y >= 788 + 32 ||
    nessP.x >= 420 && nessP.x <= 422 && nessP.y >= 780 ||
    nessP.x >= 458 && nessP.x <= 460 && nessP.y >= 788 ||
    nessP.x >= 417 + 131 && nessP.x <= 419 + 131 && nessP.y >= 780 ||
    nessP.x >= 458 + 131 && nessP.x <= 460 + 131 && nessP.y >= 788 ||
    nessP.x >= 417 + 195 && nessP.x <= 419 + 195 && nessP.y >= 780 ||

    nessP.x >= 698 && nessP.x <= 700 && nessP.y >= 307 + 32 &&
    nessP.y <= 332 + 32 || nessP.x <= 677 && nessP.x >= 675 &&
    nessP.y >= 463 && nessP.y <= 484 || nessP.x <= 677 - 9 &&
    nessP.x >= 675 - 9 && nessP.y >= 463 + 8 && nessP.y <= 484 + 8 ||
    nessP.x <= 693 && nessP.x >= 691 && nessP.y >= 496 &&
    nessP.y <= 518)

  {
    nessP.x += 1;
  }

  if (nessP.x >= 93 && nessP.x <= 95 && nessP.y >= 796 ||
    nessP.x >= 131 && nessP.x <= 133 && nessP.y >= 780 ||
    nessP.x >= 131 + 64 && nessP.x <= 133 + 64 && nessP.y >= 780 ||
    nessP.x >= 323 && nessP.x <= 325 && nessP.y >= 780 + 32 ||
    nessP.x >= 349 && nessP.x <= 351 && nessP.y >= 796 ||
    nessP.x >= 387 && nessP.x <= 389 && nessP.y >= 780 ||
    nessP.x >= 349 + 131 && nessP.x <= 351 + 131 && nessP.y >= 796 ||
    nessP.x >= 387 + 131 && nessP.x <= 389 + 131 && nessP.y >= 780 ||
    nessP.x >= 387 + 195 && nessP.x <= 389 + 195 && nessP.y >= 780 ||
    nessP.x >= 387 + 259 && nessP.x <= 389 + 259 && nessP.y >= 780 ||
    nessP.x >= 672 && nessP.y >= 764 ||
    nessP.x >= 709 ||

    nessP.x >= 655 && nessP.y <= 196 ||
    nessP.x >= 687 && nessP.y <= 295 ||
    nessP.x >= 671 && nessP.y >= 230 && nessP.y <= 297 ||
    nessP.x >= 663 && nessP.y >= 238 && nessP.y <= 297 ||
    nessP.x >= 639 && nessP.y >= 262 && nessP.y <= 297 ||
    nessP.x >= 671 - 40 && nessP.y >= 230 + 64 && nessP.y <= 310 ||
    nessP.x >= 663 - 40 && nessP.y >= 238 + 64 && nessP.y <= 324 ||
    nessP.x >= 631 && nessP.y >= 307 && nessP.y <= 332 ||
    nessP.x >= 631 + 8 && nessP.y >= 307 + 8 && nessP.y <= 332 + 8 ||
    nessP.x >= 631 + 24 && nessP.y >= 307 + 16 && nessP.y <= 332 + 16 ||
    nessP.x >= 631 + 32 && nessP.y >= 307 + 24 && nessP.y <= 332 + 24 ||
    nessP.x >= 631 + 40 && nessP.x <= 631 + 42 && nessP.y >= 307 + 32 &&
    nessP.y <= 332 + 32 || nessP.x >= 695 && nessP.y >= 368 &&
    nessP.y <= 419 || nessP.x >= 695 - 8 && nessP.y >= 368 + 22 &&
    nessP.y <= 419 + 22 || nessP.x >= 695 - 32 && nessP.y >= 368 + 30 &&
    nessP.y <= 473 || nessP.x >= 695 - 56 && nessP.y >= 368 + 54 &&
    nessP.y <= 474 || nessP.x >= 695 - 64 && nessP.y >= 368 + 62 &&
    nessP.y <= 475 || nessP.x >= 695 - 72 && nessP.y >= 368 + 84 &&
    nessP.y <= 476 || nessP.x >= 631 && nessP.x <= 633 &&
    nessP.y >= 463 && nessP.y <= 484 || nessP.x >= 631 + 8 &&
    nessP.x <= 633 + 8 && nessP.y >= 463 + 8 && nessP.y <= 484 + 8 ||
    nessP.x >= 688 && nessP.y >= 454 && nessP.y <= 484 ||
    nessP.x >= 702 && nessP.y >= 478 && nessP.y <= 546 ||
    nessP.x >= 655 && nessP.x <= 657 && nessP.y >= 496 &&
    nessP.y <= 516 || nessP.x >= 663 && nessP.x <= 665 &&
    nessP.y >= 516 && nessP.y <= 524 || nessP.x >= 663 + 11 &&
    nessP.x <= 665 + 11 && nessP.y >= 516 + 9 && nessP.y <= 524 + 9 ||
    nessP.x >= 690 && nessP.y >= 526 && nessP.y <= 622 ||
    nessP.x >= 674 && nessP.y >= 583 && nessP.y <= 609 ||
    nessP.x >= 674 - 8 && nessP.y >= 583 + 8 && nessP.y <= 609 + 8 ||
    nessP.x >= 674 - 32 && nessP.y >= 583 + 32 && nessP.y <= 609 + 32 ||
    nessP.x >= 674 - 40 && nessP.y >= 583 + 40 && nessP.y <= 609 + 40 ||
    nessP.x >= 674 - 48 && nessP.y >= 583 + 64 && nessP.y <= 677 ||
    nessP.x >= 634 && nessP.y >= 667 && nessP.y <= 685 ||
    nessP.x >= 634 + 8 && nessP.y >= 667 + 8 && nessP.y <= 685 + 8 ||
    nessP.x >= 634 + 24 && nessP.y >= 667 + 24 && nessP.y <= 685 + 24 ||
    nessP.x >= 634 + 32 && nessP.y >= 667 + 32 && nessP.y <= 685 + 32 ||
    nessP.x >= 634 + 40 && nessP.y >= 667 + 40 && nessP.y <= 685 + 40 ||
    nessP.x >= 634 + 56 && nessP.y >= 667 + 48 && nessP.y <= 685 + 48)

  {
    nessP.x -= 1;
  }

  if (nessP.y <= 197 && nessP.x >= 656 ||
    nessP.y <= 325 && nessP.y >= 323 && nessP.x >= 624 ||
    nessP.y <= 333 && nessP.y >= 331 && nessP.x >= 632 ||
    nessP.y <= 333 + 8 && nessP.y >= 331 + 8 && nessP.x >= 632 + 8 ||
    nessP.y <= 333 + 16 && nessP.y >= 331 + 16 && nessP.x >= 632 + 24 ||
    nessP.y <= 333 + 24 && nessP.y >= 331 + 24 && nessP.x >= 632 + 32 ||
    nessP.y <= 333 + 32 && nessP.y >= 331 + 32 && nessP.x >= 632 + 40 &&
    nessP.x <= 699 || nessP.y <= 477 && nessP.y >= 475 &&
    nessP.x >= 624 || nessP.y <= 485 && nessP.y >= 483 &&
    nessP.x >= 632 && nessP.x <= 676 || nessP.y <= 485 + 8 &&
    nessP.y >= 483 + 8 && nessP.x >= 632 + 8 && nessP.x <= 676 - 9 ||
    nessP.y <= 485 && nessP.y >= 483 && nessP.x >= 689 ||
    nessP.y <= 517 && nessP.y >= 515 && nessP.x >= 656 &&
    nessP.x <= 690 || nessP.y <= 525 && nessP.y >= 523 &&
    nessP.x >= 664 && nessP.x <= 679 || nessP.y <= 525 + 9 &&
    nessP.y >= 523 + 9 && nessP.x >= 664 + 11 && nessP.x <= 710 + 11 ||
    nessP.y <= 678 && nessP.y >= 676 && nessP.x >= 627 ||
    nessP.y <= 686 && nessP.y >= 684 && nessP.x >= 635 ||
    nessP.y <= 686 + 8 && nessP.y >= 684 + 8 && nessP.x >= 635 + 8 ||
    nessP.y <= 686 + 24 && nessP.y >= 684 + 24 && nessP.x >= 635 + 24 ||
    nessP.y <= 686 + 32 && nessP.y >= 684 + 32 && nessP.x >= 635 + 32 ||
    nessP.y <= 686 + 40 && nessP.y >= 684 + 40 && nessP.x >= 635 + 40 ||
    nessP.y <= 686 + 48 && nessP.y >= 684 + 48 && nessP.x >= 635 + 56)

  {
    nessP.y += 1;
  }
}

function secretOne() {
  // flame animation timer
  fltm += 1;
  if (fltm > 12) {
    fltm = 0;
  }

  // background and flame animation
  push();
  imageMode(CORNER);
  image(zelda01, 0, 0);
  pop();
  if (fltm >= 6 && fltm <= 12) {
    push();
    imageMode(CORNER);
    image(zelda02, 0, 0);
    pop();
  }

  // flame damage
  if (nessP.y <= 105 && nessP.y >= 95 && nessP.x >= 70 && nessP.x <= 92 &&
    timer >= 76 && health > 1) {
    timer = 0;
    health--;
  }

  if (nessP.y <= 105 && nessP.y >= 95 && nessP.x >= 166 && nessP.x <= 188 &&
    timer >= 76 && health > 1) {
    timer = 0;
    health--;
  }

  // key vanish
  if (kfsp > 79 || ssqu == 1) {
    push();
    fill(0);
    rect(125, 121, 10, 20);
    pop();

    zfam += 1;

    if (zfam >= 1 && zfam < 2) {
      zfan.play();
    }
    if (zfam >= 2) {
      zfam = 2;
    }
  }

  // old man vanish
  if (kfsp >= 130) {
    ombi += 1;
  }

  if (ombi >= 14 && ombi < 18) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }
  if (ombi >= 22 && ombi < 26) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }
  if (ombi >= 30 && ombi < 34) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }
  if (ombi >= 38 && ombi < 42) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }
  if (ombi >= 46 && ombi < 50) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }
  if (ombi >= 54) {
    push();
    fill(0);
    rect(120, 97, 18, 16);
    pop();
  }

  // secret text
  if (kfsp <= 0) {
    secretText();
  }

  // allows movement
  if (hmtm >= 7 && exdr == 0 && guid == 0 && kfstp == 0 ||
    hmtm >= 7 && exdr == 0 && guid == 3 && kfstp == 0) {
    if (keyIsDown(UP_ARROW)) {
      nessP.y -= 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      nessP.y += 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      nessP.x -= 1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      nessP.x += 1;
    }
  }

  // freezes sprite during spawn pause
  if (hmtm < 7) {
    nessP.x = 129;
    nessP.y = 186;
    kd = 1;
    timer = 76;
    imageMode(CENTER);
    image(ups[frameCount % 1], nessP.x, nessP.y);
  }

  // exit to overworld
  if (hmtwb <= 0 && exdr == 0) {
    hmtm += 1;
    hmtwb = 0;
  }
  if (hmtwb > 0 && exdr == 0) {
    hmtwb -= 9;
    guid = 0;
  }
  if (nessP.y >= 196) {
    exdr = 1;
  }

  if (exdr == 1) {
    hmtwb += 9;
    moveStop();
    if (hmtwb >= 360) {
      hmtm = 0;
      scene = 5;
      guid = 0;
    }
  }

  // map boundaries
  secretCollisions();
  oldCollision();

  // acquire key
  if (nessP.x <= 140 && nessP.x >= 118 && nessP.y >= 118 && nessP.y <= 138) {
    kfstp = 1;
    zitm += 1;

    if (zitm >= 1 && zitm < 2) {
      zite.play();
    }
    if (zitm >= 2) {
      zitm = 2;
    }
  }
  if (kfstp == 1) {
    if (kfsp < 220) {
      kfsp += 1;
    } else {
      kfstp = 0;
    }
  }

  if (kfsp >= 220) {
    if (skmu >= 2) {
      skmu = 2;
    } else {
      skmu += 1;
    }
  }
  if (skmu > 0 && skmu <= 1) {
    kd = 0;
  }

  // stops movement when menu is open or when key is acquired
  if (guid > 0 && guid < 3 || kfstp == 1) {
    if (kfsp >= 0 && kfsp <= 80) {
      moveStop();
    }
    if (kfsp > 80 && kfsp <= 220 && skmu == 0) {
      ssqu = 1;
      image(zelda07, nessP.x, nessP.y);
    } else if (kfsp == 220 && skmu > 0) {
      moveStop();
    }
  }

  // sprite animation after spawn pause
  else if (hmtm >= 7 && exdr == 0) {
    if (timer <= 2 && timer > 1) {
      hurt.play();
    }
    if (timer >= 8 && timer <= 16) {
      imageMode(CENTER);
      nessP.body();
    }
    if (timer >= 24 && timer <= 32) {
      imageMode(CENTER);
      nessP.body();
    }
    if (timer >= 40 && timer <= 48) {
      imageMode(CENTER);
      nessP.body();
    }
    if (timer >= 56) {
      imageMode(CENTER);
      nessP.body();
    }
  }

  // top layers
  if (nessP.y <= 125 && ssqu == 0) {
    image(zelda06, 129, 129);
  }

  if (nessP.y <= 101) {
    if (ombi <= 0) {
      image(zelda05, 129, 105);
    }
    if (fltm >= 0 && fltm <= 5) {
      push();
      imageMode(CORNER);
      image(zelda03, 0, 0);
      pop();
    }
    if (fltm >= 6 && fltm <= 12) {
      push();
      imageMode(CORNER);
      image(zelda04, 0, 0);
      pop();
    }
  }

  // menu
  if (hmtm >= 7 && exdr == 0 && kfsp <= 0 || hmtm >= 7 && exdr == 0 && kfsp >= 220) {
    push();
    textAlign(LEFT);
    gui();
    pop();
  }

  // hearts
  hearts4(236, 218);

  // black fade in + fade out
  background(0, 0, 0, hmtwb);
}

function collideHous5() {
  let chu5 = 248;
  let cho5 = 8;

  if (nessP.y <= 189 + cho5 && nessP.y >= 187 + cho5 &&
    nessP.x <= 268 + chu5 && nessP.x >= 185 + chu5) {
    nessP.y += 1;
  }

  if (nessP.x >= 184 + chu5 && nessP.x <= 186 + chu5 &&
    nessP.y <= 188 + cho5 && nessP.y >= 169 + cho5) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho5 && nessP.y <= 170 + cho5 &&
    nessP.x >= 185 + chu5 && nessP.x <= 283 + chu5) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu5 && nessP.x >= 282 + chu5 &&
    nessP.y <= 172 + cho5 && nessP.y >= 169 + cho5) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho5 && nessP.y >= 186 + cho5 &&
      nessP.x <= 269 + chu5 && nessP.x >= 269 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho5 && nessP.y >= 185 + cho5 &&
      nessP.x <= 270 + chu5 && nessP.x >= 270 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho5 && nessP.y >= 184 + cho5 &&
      nessP.x <= 271 + chu5 && nessP.x >= 271 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho5 && nessP.y >= 183 + cho5 &&
      nessP.x <= 272 + chu5 && nessP.x >= 272 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho5 && nessP.y >= 182 + cho5 &&
      nessP.x <= 273 + chu5 && nessP.x >= 273 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho5 && nessP.y >= 181 + cho5 &&
      nessP.x <= 274 + chu5 && nessP.x >= 274 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho5 && nessP.y >= 180 + cho5 &&
      nessP.x <= 275 + chu5 && nessP.x >= 275 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho5 && nessP.y >= 179 + cho5 &&
      nessP.x <= 276 + chu5 && nessP.x >= 276 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho5 && nessP.y >= 178 + cho5 &&
      nessP.x <= 277 + chu5 && nessP.x >= 277 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho5 && nessP.y >= 177 + cho5 &&
      nessP.x <= 278 + chu5 && nessP.x >= 278 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho5 && nessP.y >= 176 + cho5 &&
      nessP.x <= 279 + chu5 && nessP.x >= 279 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho5 && nessP.y >= 175 + cho5 &&
      nessP.x <= 280 + chu5 && nessP.x >= 280 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho5 && nessP.y >= 174 + cho5 &&
      nessP.x <= 281 + chu5 && nessP.x >= 281 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho5 && nessP.y >= 173 + cho5 &&
      nessP.x <= 282 + chu5 && nessP.x >= 282 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho5 && nessP.y >= 172 + cho5 &&
      nessP.x <= 283 + chu5 && nessP.x >= 283 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho5 && nessP.y >= 171 + cho5 &&
      nessP.x <= 284 + chu5 && nessP.x >= 281 + chu5) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho5 && nessP.y >= 186 + cho5 &&
      nessP.x <= 269 + chu5 && nessP.x >= 269 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho5 && nessP.y >= 185 + cho5 &&
      nessP.x <= 270 + chu5 && nessP.x >= 270 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho5 && nessP.y >= 184 + cho5 &&
      nessP.x <= 271 + chu5 && nessP.x >= 271 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho5 && nessP.y >= 183 + cho5 &&
      nessP.x <= 272 + chu5 && nessP.x >= 272 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho5 && nessP.y >= 182 + cho5 &&
      nessP.x <= 273 + chu5 && nessP.x >= 273 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho5 && nessP.y >= 181 + cho5 &&
      nessP.x <= 274 + chu5 && nessP.x >= 274 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho5 && nessP.y >= 180 + cho5 &&
      nessP.x <= 275 + chu5 && nessP.x >= 275 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho5 && nessP.y >= 179 + cho5 &&
      nessP.x <= 276 + chu5 && nessP.x >= 276 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho5 && nessP.y >= 178 + cho5 &&
      nessP.x <= 277 + chu5 && nessP.x >= 277 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho5 && nessP.y >= 177 + cho5 &&
      nessP.x <= 278 + chu5 && nessP.x >= 278 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho5 && nessP.y >= 176 + cho5 &&
      nessP.x <= 279 + chu5 && nessP.x >= 279 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho5 && nessP.y >= 175 + cho5 &&
      nessP.x <= 280 + chu5 && nessP.x >= 280 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho5 && nessP.y >= 174 + cho5 &&
      nessP.x <= 281 + chu5 && nessP.x >= 281 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho5 && nessP.y >= 173 + cho5 &&
      nessP.x <= 282 + chu5 && nessP.x >= 282 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho5 && nessP.y >= 172 + cho5 &&
      nessP.x <= 283 + chu5 && nessP.x >= 283 + chu5) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho5 && nessP.y >= 171 + cho5 &&
      nessP.x <= 284 + chu5 && nessP.x >= 281 + chu5) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho5 && nessP.y >= 186 + cho5 &&
      nessP.x <= 269 + chu5 && nessP.x >= 269 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho5 && nessP.y >= 185 + cho5 &&
      nessP.x <= 270 + chu5 && nessP.x >= 270 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho5 && nessP.y >= 184 + cho5 &&
      nessP.x <= 271 + chu5 && nessP.x >= 271 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho5 && nessP.y >= 183 + cho5 &&
      nessP.x <= 272 + chu5 && nessP.x >= 272 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho5 && nessP.y >= 182 + cho5 &&
      nessP.x <= 273 + chu5 && nessP.x >= 273 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho5 && nessP.y >= 181 + cho5 &&
      nessP.x <= 274 + chu5 && nessP.x >= 274 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho5 && nessP.y >= 180 + cho5 &&
      nessP.x <= 275 + chu5 && nessP.x >= 275 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho5 && nessP.y >= 179 + cho5 &&
      nessP.x <= 276 + chu5 && nessP.x >= 276 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho5 && nessP.y >= 178 + cho5 &&
      nessP.x <= 277 + chu5 && nessP.x >= 277 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho5 && nessP.y >= 177 + cho5 &&
      nessP.x <= 278 + chu5 && nessP.x >= 278 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho5 && nessP.y >= 176 + cho5 &&
      nessP.x <= 279 + chu5 && nessP.x >= 279 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho5 && nessP.y >= 175 + cho5 &&
      nessP.x <= 280 + chu5 && nessP.x >= 280 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho5 && nessP.y >= 174 + cho5 &&
      nessP.x <= 281 + chu5 && nessP.x >= 281 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho5 && nessP.y >= 173 + cho5 &&
      nessP.x <= 282 + chu5 && nessP.x >= 282 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho5 && nessP.y >= 172 + cho5 &&
      nessP.x <= 283 + chu5 && nessP.x >= 283 + chu5) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho5 && nessP.y >= 173 + cho5 &&
      nessP.x <= 284 + chu5 && nessP.x >= 281 + chu5) {
      nessP.y += 1;
    }
  }
}

function collideHous4() {
  let chu6 = 344;
  let cho6 = 328;

  if (nessP.y <= 189 + cho6 && nessP.y >= 187 + cho6 &&
    nessP.x <= 268 + chu6 && nessP.x >= 185 + chu6) {
    nessP.y += 1;
  }

  if (nessP.x >= 184 + chu6 && nessP.x <= 186 + chu6 &&
    nessP.y <= 188 + cho6 && nessP.y >= 169 + cho6) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho6 && nessP.y <= 170 + cho6 &&
    nessP.x >= 185 + chu6 && nessP.x <= 283 + chu6) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu6 && nessP.x >= 282 + chu6 &&
    nessP.y <= 172 + cho6 && nessP.y >= 169 + cho6) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho6 && nessP.y >= 186 + cho6 &&
      nessP.x <= 269 + chu6 && nessP.x >= 269 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho6 && nessP.y >= 185 + cho6 &&
      nessP.x <= 270 + chu6 && nessP.x >= 270 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho6 && nessP.y >= 184 + cho6 &&
      nessP.x <= 271 + chu6 && nessP.x >= 271 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho6 && nessP.y >= 183 + cho6 &&
      nessP.x <= 272 + chu6 && nessP.x >= 272 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho6 && nessP.y >= 182 + cho6 &&
      nessP.x <= 273 + chu6 && nessP.x >= 273 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho6 && nessP.y >= 181 + cho6 &&
      nessP.x <= 274 + chu6 && nessP.x >= 274 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho6 && nessP.y >= 180 + cho6 &&
      nessP.x <= 275 + chu6 && nessP.x >= 275 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho6 && nessP.y >= 179 + cho6 &&
      nessP.x <= 276 + chu6 && nessP.x >= 276 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho6 && nessP.y >= 178 + cho6 &&
      nessP.x <= 277 + chu6 && nessP.x >= 277 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho6 && nessP.y >= 177 + cho6 &&
      nessP.x <= 278 + chu6 && nessP.x >= 278 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho6 && nessP.y >= 176 + cho6 &&
      nessP.x <= 279 + chu6 && nessP.x >= 279 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho6 && nessP.y >= 175 + cho6 &&
      nessP.x <= 280 + chu6 && nessP.x >= 280 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho6 && nessP.y >= 174 + cho6 &&
      nessP.x <= 281 + chu6 && nessP.x >= 281 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho6 && nessP.y >= 173 + cho6 &&
      nessP.x <= 282 + chu6 && nessP.x >= 282 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho6 && nessP.y >= 172 + cho6 &&
      nessP.x <= 283 + chu6 && nessP.x >= 283 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho6 && nessP.y >= 171 + cho6 &&
      nessP.x <= 284 + chu6 && nessP.x >= 281 + chu6) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho6 && nessP.y >= 186 + cho6 &&
      nessP.x <= 269 + chu6 && nessP.x >= 269 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho6 && nessP.y >= 185 + cho6 &&
      nessP.x <= 270 + chu6 && nessP.x >= 270 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho6 && nessP.y >= 184 + cho6 &&
      nessP.x <= 271 + chu6 && nessP.x >= 271 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho6 && nessP.y >= 183 + cho6 &&
      nessP.x <= 272 + chu6 && nessP.x >= 272 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho6 && nessP.y >= 182 + cho6 &&
      nessP.x <= 273 + chu6 && nessP.x >= 273 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho6 && nessP.y >= 181 + cho6 &&
      nessP.x <= 274 + chu6 && nessP.x >= 274 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho6 && nessP.y >= 180 + cho6 &&
      nessP.x <= 275 + chu6 && nessP.x >= 275 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho6 && nessP.y >= 179 + cho6 &&
      nessP.x <= 276 + chu6 && nessP.x >= 276 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho6 && nessP.y >= 178 + cho6 &&
      nessP.x <= 277 + chu6 && nessP.x >= 277 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho6 && nessP.y >= 177 + cho6 &&
      nessP.x <= 278 + chu6 && nessP.x >= 278 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho6 && nessP.y >= 176 + cho6 &&
      nessP.x <= 279 + chu6 && nessP.x >= 279 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho6 && nessP.y >= 175 + cho6 &&
      nessP.x <= 280 + chu6 && nessP.x >= 280 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho6 && nessP.y >= 174 + cho6 &&
      nessP.x <= 281 + chu6 && nessP.x >= 281 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho6 && nessP.y >= 173 + cho6 &&
      nessP.x <= 282 + chu6 && nessP.x >= 282 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho6 && nessP.y >= 172 + cho6 &&
      nessP.x <= 283 + chu6 && nessP.x >= 283 + chu6) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho6 && nessP.y >= 171 + cho6 &&
      nessP.x <= 284 + chu6 && nessP.x >= 281 + chu6) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho6 && nessP.y >= 186 + cho6 &&
      nessP.x <= 269 + chu6 && nessP.x >= 269 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho6 && nessP.y >= 185 + cho6 &&
      nessP.x <= 270 + chu6 && nessP.x >= 270 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho6 && nessP.y >= 184 + cho6 &&
      nessP.x <= 271 + chu6 && nessP.x >= 271 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho6 && nessP.y >= 183 + cho6 &&
      nessP.x <= 272 + chu6 && nessP.x >= 272 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho6 && nessP.y >= 182 + cho6 &&
      nessP.x <= 273 + chu6 && nessP.x >= 273 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho6 && nessP.y >= 181 + cho6 &&
      nessP.x <= 274 + chu6 && nessP.x >= 274 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho6 && nessP.y >= 180 + cho6 &&
      nessP.x <= 275 + chu6 && nessP.x >= 275 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho6 && nessP.y >= 179 + cho6 &&
      nessP.x <= 276 + chu6 && nessP.x >= 276 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho6 && nessP.y >= 178 + cho6 &&
      nessP.x <= 277 + chu6 && nessP.x >= 277 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho6 && nessP.y >= 177 + cho6 &&
      nessP.x <= 278 + chu6 && nessP.x >= 278 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho6 && nessP.y >= 176 + cho6 &&
      nessP.x <= 279 + chu6 && nessP.x >= 279 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho6 && nessP.y >= 175 + cho6 &&
      nessP.x <= 280 + chu6 && nessP.x >= 280 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho6 && nessP.y >= 174 + cho6 &&
      nessP.x <= 281 + chu6 && nessP.x >= 281 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho6 && nessP.y >= 173 + cho6 &&
      nessP.x <= 282 + chu6 && nessP.x >= 282 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho6 && nessP.y >= 172 + cho6 &&
      nessP.x <= 283 + chu6 && nessP.x >= 283 + chu6) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho6 && nessP.y >= 173 + cho6 &&
      nessP.x <= 284 + chu6 && nessP.x >= 281 + chu6) {
      nessP.y += 1;
    }
  }
}

function collideHous2() {
  let chu2 = 155;
  let cho2 = 553;

  if (nessP.y <= 189 + cho2 && nessP.y >= 187 + cho2 &&
    nessP.x <= 268 + chu2 && nessP.x >= 182 + chu2) {
    nessP.y += 1;
  }

  if (nessP.x >= 181 + chu2 && nessP.x <= 183 + chu2 &&
    nessP.y <= 188 + cho2 && nessP.y >= 169 + cho2) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho2 && nessP.y <= 170 + cho2 &&
    nessP.x >= 182 + chu2 && nessP.x <= 283 + chu2) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu2 && nessP.x >= 282 + chu2 &&
    nessP.y <= 172 + cho2 && nessP.y >= 169 + cho2) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho2 && nessP.y >= 186 + cho2 &&
      nessP.x <= 269 + chu2 && nessP.x >= 269 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho2 && nessP.y >= 185 + cho2 &&
      nessP.x <= 270 + chu2 && nessP.x >= 270 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho2 && nessP.y >= 184 + cho2 &&
      nessP.x <= 271 + chu2 && nessP.x >= 271 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho2 && nessP.y >= 183 + cho2 &&
      nessP.x <= 272 + chu2 && nessP.x >= 272 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho2 && nessP.y >= 182 + cho2 &&
      nessP.x <= 273 + chu2 && nessP.x >= 273 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho2 && nessP.y >= 181 + cho2 &&
      nessP.x <= 274 + chu2 && nessP.x >= 274 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho2 && nessP.y >= 180 + cho2 &&
      nessP.x <= 275 + chu2 && nessP.x >= 275 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho2 && nessP.y >= 179 + cho2 &&
      nessP.x <= 276 + chu2 && nessP.x >= 276 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho2 && nessP.y >= 178 + cho2 &&
      nessP.x <= 277 + chu2 && nessP.x >= 277 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho2 && nessP.y >= 177 + cho2 &&
      nessP.x <= 278 + chu2 && nessP.x >= 278 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho2 && nessP.y >= 176 + cho2 &&
      nessP.x <= 279 + chu2 && nessP.x >= 279 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho2 && nessP.y >= 175 + cho2 &&
      nessP.x <= 280 + chu2 && nessP.x >= 280 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho2 && nessP.y >= 174 + cho2 &&
      nessP.x <= 281 + chu2 && nessP.x >= 281 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho2 && nessP.y >= 173 + cho2 &&
      nessP.x <= 282 + chu2 && nessP.x >= 282 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho2 && nessP.y >= 172 + cho2 &&
      nessP.x <= 283 + chu2 && nessP.x >= 283 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho2 && nessP.y >= 171 + cho2 &&
      nessP.x <= 284 + chu2 && nessP.x >= 281 + chu2) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho2 && nessP.y >= 186 + cho2 &&
      nessP.x <= 269 + chu2 && nessP.x >= 269 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho2 && nessP.y >= 185 + cho2 &&
      nessP.x <= 270 + chu2 && nessP.x >= 270 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho2 && nessP.y >= 184 + cho2 &&
      nessP.x <= 271 + chu2 && nessP.x >= 271 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho2 && nessP.y >= 183 + cho2 &&
      nessP.x <= 272 + chu2 && nessP.x >= 272 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho2 && nessP.y >= 182 + cho2 &&
      nessP.x <= 273 + chu2 && nessP.x >= 273 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho2 && nessP.y >= 181 + cho2 &&
      nessP.x <= 274 + chu2 && nessP.x >= 274 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho2 && nessP.y >= 180 + cho2 &&
      nessP.x <= 275 + chu2 && nessP.x >= 275 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho2 && nessP.y >= 179 + cho2 &&
      nessP.x <= 276 + chu2 && nessP.x >= 276 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho2 && nessP.y >= 178 + cho2 &&
      nessP.x <= 277 + chu2 && nessP.x >= 277 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho2 && nessP.y >= 177 + cho2 &&
      nessP.x <= 278 + chu2 && nessP.x >= 278 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho2 && nessP.y >= 176 + cho2 &&
      nessP.x <= 279 + chu2 && nessP.x >= 279 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho2 && nessP.y >= 175 + cho2 &&
      nessP.x <= 280 + chu2 && nessP.x >= 280 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho2 && nessP.y >= 174 + cho2 &&
      nessP.x <= 281 + chu2 && nessP.x >= 281 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho2 && nessP.y >= 173 + cho2 &&
      nessP.x <= 282 + chu2 && nessP.x >= 282 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho2 && nessP.y >= 172 + cho2 &&
      nessP.x <= 283 + chu2 && nessP.x >= 283 + chu2) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho2 && nessP.y >= 171 + cho2 &&
      nessP.x <= 284 + chu2 && nessP.x >= 281 + chu2) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho2 && nessP.y >= 186 + cho2 &&
      nessP.x <= 269 + chu2 && nessP.x >= 269 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho2 && nessP.y >= 185 + cho2 &&
      nessP.x <= 270 + chu2 && nessP.x >= 270 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho2 && nessP.y >= 184 + cho2 &&
      nessP.x <= 271 + chu2 && nessP.x >= 271 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho2 && nessP.y >= 183 + cho2 &&
      nessP.x <= 272 + chu2 && nessP.x >= 272 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho2 && nessP.y >= 182 + cho2 &&
      nessP.x <= 273 + chu2 && nessP.x >= 273 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho2 && nessP.y >= 181 + cho2 &&
      nessP.x <= 274 + chu2 && nessP.x >= 274 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho2 && nessP.y >= 180 + cho2 &&
      nessP.x <= 275 + chu2 && nessP.x >= 275 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho2 && nessP.y >= 179 + cho2 &&
      nessP.x <= 276 + chu2 && nessP.x >= 276 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho2 && nessP.y >= 178 + cho2 &&
      nessP.x <= 277 + chu2 && nessP.x >= 277 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho2 && nessP.y >= 177 + cho2 &&
      nessP.x <= 278 + chu2 && nessP.x >= 278 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho2 && nessP.y >= 176 + cho2 &&
      nessP.x <= 279 + chu2 && nessP.x >= 279 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho2 && nessP.y >= 175 + cho2 &&
      nessP.x <= 280 + chu2 && nessP.x >= 280 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho2 && nessP.y >= 174 + cho2 &&
      nessP.x <= 281 + chu2 && nessP.x >= 281 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho2 && nessP.y >= 173 + cho2 &&
      nessP.x <= 282 + chu2 && nessP.x >= 282 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho2 && nessP.y >= 172 + cho2 &&
      nessP.x <= 283 + chu2 && nessP.x >= 283 + chu2) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho2 && nessP.y >= 173 + cho2 &&
      nessP.x <= 284 + chu2 && nessP.x >= 281 + chu2) {
      nessP.y += 1;
    }
  }
}

function collideHous7() {
  let chu7 = -224;
  let cho7 = 264;

  if (nessP.y <= 447 && nessP.y >= 445 && nessP.x <= 67 && nessP.x >= 50) {
    nessP.y += 1;
  }
  if (nessP.y >= 442 && nessP.y <= 444 && nessP.x <= 67 && nessP.x >= 50) {
    nessP.y -= 1;
  }
  if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 442 && nessP.y >= 441) {
    nessP.x += 1;
  }

  if (nessP.y <= 189 + cho7 && nessP.y >= 187 + cho7 &&
    nessP.x <= 268 + chu7 && nessP.x >= 209 + chu7) {
    nessP.y += 1;
  }

  if (nessP.x >= 208 + chu7 && nessP.x <= 210 + chu7 &&
    nessP.y <= 188 + cho7 && nessP.y >= 169 + cho7) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho7 && nessP.y <= 170 + cho7 &&
    nessP.x >= 209 + chu7 && nessP.x <= 283 + chu7) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu7 && nessP.x >= 282 + chu7 &&
    nessP.y <= 172 + cho7 && nessP.y >= 169 + cho7) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho7 && nessP.y >= 186 + cho7 &&
      nessP.x <= 269 + chu7 && nessP.x >= 269 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho7 && nessP.y >= 185 + cho7 &&
      nessP.x <= 270 + chu7 && nessP.x >= 270 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho7 && nessP.y >= 184 + cho7 &&
      nessP.x <= 271 + chu7 && nessP.x >= 271 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho7 && nessP.y >= 183 + cho7 &&
      nessP.x <= 272 + chu7 && nessP.x >= 272 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho7 && nessP.y >= 182 + cho7 &&
      nessP.x <= 273 + chu7 && nessP.x >= 273 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho7 && nessP.y >= 181 + cho7 &&
      nessP.x <= 274 + chu7 && nessP.x >= 274 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho7 && nessP.y >= 180 + cho7 &&
      nessP.x <= 275 + chu7 && nessP.x >= 275 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho7 && nessP.y >= 179 + cho7 &&
      nessP.x <= 276 + chu7 && nessP.x >= 276 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho7 && nessP.y >= 178 + cho7 &&
      nessP.x <= 277 + chu7 && nessP.x >= 277 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho7 && nessP.y >= 177 + cho7 &&
      nessP.x <= 278 + chu7 && nessP.x >= 278 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho7 && nessP.y >= 176 + cho7 &&
      nessP.x <= 279 + chu7 && nessP.x >= 279 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho7 && nessP.y >= 175 + cho7 &&
      nessP.x <= 280 + chu7 && nessP.x >= 280 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho7 && nessP.y >= 174 + cho7 &&
      nessP.x <= 281 + chu7 && nessP.x >= 281 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho7 && nessP.y >= 173 + cho7 &&
      nessP.x <= 282 + chu7 && nessP.x >= 282 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho7 && nessP.y >= 172 + cho7 &&
      nessP.x <= 283 + chu7 && nessP.x >= 283 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho7 && nessP.y >= 171 + cho7 &&
      nessP.x <= 284 + chu7 && nessP.x >= 281 + chu7) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho7 && nessP.y >= 186 + cho7 &&
      nessP.x <= 269 + chu7 && nessP.x >= 269 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho7 && nessP.y >= 185 + cho7 &&
      nessP.x <= 270 + chu7 && nessP.x >= 270 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho7 && nessP.y >= 184 + cho7 &&
      nessP.x <= 271 + chu7 && nessP.x >= 271 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho7 && nessP.y >= 183 + cho7 &&
      nessP.x <= 272 + chu7 && nessP.x >= 272 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho7 && nessP.y >= 182 + cho7 &&
      nessP.x <= 273 + chu7 && nessP.x >= 273 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho7 && nessP.y >= 181 + cho7 &&
      nessP.x <= 274 + chu7 && nessP.x >= 274 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho7 && nessP.y >= 180 + cho7 &&
      nessP.x <= 275 + chu7 && nessP.x >= 275 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho7 && nessP.y >= 179 + cho7 &&
      nessP.x <= 276 + chu7 && nessP.x >= 276 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho7 && nessP.y >= 178 + cho7 &&
      nessP.x <= 277 + chu7 && nessP.x >= 277 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho7 && nessP.y >= 177 + cho7 &&
      nessP.x <= 278 + chu7 && nessP.x >= 278 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho7 && nessP.y >= 176 + cho7 &&
      nessP.x <= 279 + chu7 && nessP.x >= 279 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho7 && nessP.y >= 175 + cho7 &&
      nessP.x <= 280 + chu7 && nessP.x >= 280 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho7 && nessP.y >= 174 + cho7 &&
      nessP.x <= 281 + chu7 && nessP.x >= 281 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho7 && nessP.y >= 173 + cho7 &&
      nessP.x <= 282 + chu7 && nessP.x >= 282 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho7 && nessP.y >= 172 + cho7 &&
      nessP.x <= 283 + chu7 && nessP.x >= 283 + chu7) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho7 && nessP.y >= 171 + cho7 &&
      nessP.x <= 284 + chu7 && nessP.x >= 281 + chu7) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho7 && nessP.y >= 186 + cho7 &&
      nessP.x <= 269 + chu7 && nessP.x >= 269 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho7 && nessP.y >= 185 + cho7 &&
      nessP.x <= 270 + chu7 && nessP.x >= 270 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho7 && nessP.y >= 184 + cho7 &&
      nessP.x <= 271 + chu7 && nessP.x >= 271 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho7 && nessP.y >= 183 + cho7 &&
      nessP.x <= 272 + chu7 && nessP.x >= 272 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho7 && nessP.y >= 182 + cho7 &&
      nessP.x <= 273 + chu7 && nessP.x >= 273 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho7 && nessP.y >= 181 + cho7 &&
      nessP.x <= 274 + chu7 && nessP.x >= 274 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho7 && nessP.y >= 180 + cho7 &&
      nessP.x <= 275 + chu7 && nessP.x >= 275 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho7 && nessP.y >= 179 + cho7 &&
      nessP.x <= 276 + chu7 && nessP.x >= 276 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho7 && nessP.y >= 178 + cho7 &&
      nessP.x <= 277 + chu7 && nessP.x >= 277 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho7 && nessP.y >= 177 + cho7 &&
      nessP.x <= 278 + chu7 && nessP.x >= 278 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho7 && nessP.y >= 176 + cho7 &&
      nessP.x <= 279 + chu7 && nessP.x >= 279 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho7 && nessP.y >= 175 + cho7 &&
      nessP.x <= 280 + chu7 && nessP.x >= 280 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho7 && nessP.y >= 174 + cho7 &&
      nessP.x <= 281 + chu7 && nessP.x >= 281 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho7 && nessP.y >= 173 + cho7 &&
      nessP.x <= 282 + chu7 && nessP.x >= 282 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho7 && nessP.y >= 172 + cho7 &&
      nessP.x <= 283 + chu7 && nessP.x >= 283 + chu7) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho7 && nessP.y >= 173 + cho7 &&
      nessP.x <= 284 + chu7 && nessP.x >= 281 + chu7) {
      nessP.y += 1;
    }
  }
}

function collideHous8() {
  let chu8 = -96;
  let cho8 = 425;

  if (nessP.y <= 189 + cho8 && nessP.y >= 187 + cho8 &&
    nessP.x <= 268 + chu8 && nessP.x >= 177 + chu8) {
    nessP.y += 1;
  }

  if (nessP.x >= 176 + chu8 && nessP.x <= 178 + chu8 &&
    nessP.y <= 188 + cho8 && nessP.y >= 169 + cho8) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho8 && nessP.y <= 170 + cho8 &&
    nessP.x >= 177 + chu8 && nessP.x <= 283 + chu8) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu8 && nessP.x >= 282 + chu8 &&
    nessP.y <= 172 + cho8 && nessP.y >= 169 + cho8) {
    nessP.x += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho8 && nessP.y >= 186 + cho8 &&
      nessP.x <= 269 + chu8 && nessP.x >= 269 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho8 && nessP.y >= 185 + cho8 &&
      nessP.x <= 270 + chu8 && nessP.x >= 270 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho8 && nessP.y >= 184 + cho8 &&
      nessP.x <= 271 + chu8 && nessP.x >= 271 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho8 && nessP.y >= 183 + cho8 &&
      nessP.x <= 272 + chu8 && nessP.x >= 272 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho8 && nessP.y >= 182 + cho8 &&
      nessP.x <= 273 + chu8 && nessP.x >= 273 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho8 && nessP.y >= 181 + cho8 &&
      nessP.x <= 274 + chu8 && nessP.x >= 274 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho8 && nessP.y >= 180 + cho8 &&
      nessP.x <= 275 + chu8 && nessP.x >= 275 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho8 && nessP.y >= 179 + cho8 &&
      nessP.x <= 276 + chu8 && nessP.x >= 276 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho8 && nessP.y >= 178 + cho8 &&
      nessP.x <= 277 + chu8 && nessP.x >= 277 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho8 && nessP.y >= 177 + cho8 &&
      nessP.x <= 278 + chu8 && nessP.x >= 278 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho8 && nessP.y >= 176 + cho8 &&
      nessP.x <= 279 + chu8 && nessP.x >= 279 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho8 && nessP.y >= 175 + cho8 &&
      nessP.x <= 280 + chu8 && nessP.x >= 280 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho8 && nessP.y >= 174 + cho8 &&
      nessP.x <= 281 + chu8 && nessP.x >= 281 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho8 && nessP.y >= 173 + cho8 &&
      nessP.x <= 282 + chu8 && nessP.x >= 282 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho8 && nessP.y >= 172 + cho8 &&
      nessP.x <= 283 + chu8 && nessP.x >= 283 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho8 && nessP.y >= 171 + cho8 &&
      nessP.x <= 284 + chu8 && nessP.x >= 281 + chu8) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho8 && nessP.y >= 186 + cho8 &&
      nessP.x <= 269 + chu8 && nessP.x >= 269 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho8 && nessP.y >= 185 + cho8 &&
      nessP.x <= 270 + chu8 && nessP.x >= 270 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho8 && nessP.y >= 184 + cho8 &&
      nessP.x <= 271 + chu8 && nessP.x >= 271 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho8 && nessP.y >= 183 + cho8 &&
      nessP.x <= 272 + chu8 && nessP.x >= 272 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho8 && nessP.y >= 182 + cho8 &&
      nessP.x <= 273 + chu8 && nessP.x >= 273 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho8 && nessP.y >= 181 + cho8 &&
      nessP.x <= 274 + chu8 && nessP.x >= 274 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho8 && nessP.y >= 180 + cho8 &&
      nessP.x <= 275 + chu8 && nessP.x >= 275 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho8 && nessP.y >= 179 + cho8 &&
      nessP.x <= 276 + chu8 && nessP.x >= 276 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho8 && nessP.y >= 178 + cho8 &&
      nessP.x <= 277 + chu8 && nessP.x >= 277 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho8 && nessP.y >= 177 + cho8 &&
      nessP.x <= 278 + chu8 && nessP.x >= 278 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho8 && nessP.y >= 176 + cho8 &&
      nessP.x <= 279 + chu8 && nessP.x >= 279 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho8 && nessP.y >= 175 + cho8 &&
      nessP.x <= 280 + chu8 && nessP.x >= 280 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho8 && nessP.y >= 174 + cho8 &&
      nessP.x <= 281 + chu8 && nessP.x >= 281 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho8 && nessP.y >= 173 + cho8 &&
      nessP.x <= 282 + chu8 && nessP.x >= 282 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho8 && nessP.y >= 172 + cho8 &&
      nessP.x <= 283 + chu8 && nessP.x >= 283 + chu8) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho8 && nessP.y >= 171 + cho8 &&
      nessP.x <= 284 + chu8 && nessP.x >= 281 + chu8) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho8 && nessP.y >= 186 + cho8 &&
      nessP.x <= 269 + chu8 && nessP.x >= 269 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho8 && nessP.y >= 185 + cho8 &&
      nessP.x <= 270 + chu8 && nessP.x >= 270 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho8 && nessP.y >= 184 + cho8 &&
      nessP.x <= 271 + chu8 && nessP.x >= 271 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho8 && nessP.y >= 183 + cho8 &&
      nessP.x <= 272 + chu8 && nessP.x >= 272 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho8 && nessP.y >= 182 + cho8 &&
      nessP.x <= 273 + chu8 && nessP.x >= 273 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho8 && nessP.y >= 181 + cho8 &&
      nessP.x <= 274 + chu8 && nessP.x >= 274 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho8 && nessP.y >= 180 + cho8 &&
      nessP.x <= 275 + chu8 && nessP.x >= 275 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho8 && nessP.y >= 179 + cho8 &&
      nessP.x <= 276 + chu8 && nessP.x >= 276 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho8 && nessP.y >= 178 + cho8 &&
      nessP.x <= 277 + chu8 && nessP.x >= 277 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho8 && nessP.y >= 177 + cho8 &&
      nessP.x <= 278 + chu8 && nessP.x >= 278 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho8 && nessP.y >= 176 + cho8 &&
      nessP.x <= 279 + chu8 && nessP.x >= 279 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho8 && nessP.y >= 175 + cho8 &&
      nessP.x <= 280 + chu8 && nessP.x >= 280 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho8 && nessP.y >= 174 + cho8 &&
      nessP.x <= 281 + chu8 && nessP.x >= 281 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho8 && nessP.y >= 173 + cho8 &&
      nessP.x <= 282 + chu8 && nessP.x >= 282 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho8 && nessP.y >= 172 + cho8 &&
      nessP.x <= 283 + chu8 && nessP.x >= 283 + chu8) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho8 && nessP.y >= 173 + cho8 &&
      nessP.x <= 284 + chu8 && nessP.x >= 281 + chu8) {
      nessP.y += 1;
    }
  }
}

function collideHous3() {
  let chu3 = 290;
  let cho3 = 547;

  if (nessP.y <= 189 + cho3 && nessP.y >= 187 + cho3 &&
    nessP.x <= 268 + chu3 && nessP.x >= 192 + chu3) {
    nessP.y += 1;
  }

  if (nessP.x >= 191 + chu3 && nessP.x <= 193 + chu3 &&
    nessP.y <= 188 + cho3 && nessP.y >= 169 + cho3) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 + cho3 && nessP.y <= 170 + cho3 &&
    nessP.x >= 192 + chu3 && nessP.x <= 283 + chu3) {
    nessP.y -= 1;
  }

  if (nessP.x <= 284 + chu3 && nessP.x >= 282 + chu3 &&
    nessP.y <= 172 + cho3 && nessP.y >= 169 + cho3) {
    nessP.x += 1;
  }

  if (nessP.x >= 473 && nessP.x <= 475 && nessP.y >= 716 && nessP.y <= 727) {
    nessP.x -= 1;
  }
  if (nessP.y >= 715 && nessP.y <= 717 && nessP.x >= 474 && nessP.x <= 505) {
    nessP.y -= 1;
  }
  if (nessP.y <= 728 && nessP.y >= 726 && nessP.x >= 474 && nessP.x <= 505) {
    nessP.y += 1;
  }

  if (keyIsDown(37) && keyIsDown(38)) {
    if (nessP.y <= 188 + cho3 && nessP.y >= 186 + cho3 &&
      nessP.x <= 269 + chu3 && nessP.x >= 269 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho3 && nessP.y >= 185 + cho3 &&
      nessP.x <= 270 + chu3 && nessP.x >= 270 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho3 && nessP.y >= 184 + cho3 &&
      nessP.x <= 271 + chu3 && nessP.x >= 271 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho3 && nessP.y >= 183 + cho3 &&
      nessP.x <= 272 + chu3 && nessP.x >= 272 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho3 && nessP.y >= 182 + cho3 &&
      nessP.x <= 273 + chu3 && nessP.x >= 273 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho3 && nessP.y >= 181 + cho3 &&
      nessP.x <= 274 + chu3 && nessP.x >= 274 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho3 && nessP.y >= 180 + cho3 &&
      nessP.x <= 275 + chu3 && nessP.x >= 275 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho3 && nessP.y >= 179 + cho3 &&
      nessP.x <= 276 + chu3 && nessP.x >= 276 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho3 && nessP.y >= 178 + cho3 &&
      nessP.x <= 277 + chu3 && nessP.x >= 277 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho3 && nessP.y >= 177 + cho3 &&
      nessP.x <= 278 + chu3 && nessP.x >= 278 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho3 && nessP.y >= 176 + cho3 &&
      nessP.x <= 279 + chu3 && nessP.x >= 279 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho3 && nessP.y >= 175 + cho3 &&
      nessP.x <= 280 + chu3 && nessP.x >= 280 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho3 && nessP.y >= 174 + cho3 &&
      nessP.x <= 281 + chu3 && nessP.x >= 281 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho3 && nessP.y >= 173 + cho3 &&
      nessP.x <= 282 + chu3 && nessP.x >= 282 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho3 && nessP.y >= 172 + cho3 &&
      nessP.x <= 283 + chu3 && nessP.x >= 283 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho3 && nessP.y >= 171 + cho3 &&
      nessP.x <= 284 + chu3 && nessP.x >= 281 + chu3) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 188 + cho3 && nessP.y >= 186 + cho3 &&
      nessP.x <= 269 + chu3 && nessP.x >= 269 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 187 + cho3 && nessP.y >= 185 + cho3 &&
      nessP.x <= 270 + chu3 && nessP.x >= 270 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 186 + cho3 && nessP.y >= 184 + cho3 &&
      nessP.x <= 271 + chu3 && nessP.x >= 271 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 185 + cho3 && nessP.y >= 183 + cho3 &&
      nessP.x <= 272 + chu3 && nessP.x >= 272 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 184 + cho3 && nessP.y >= 182 + cho3 &&
      nessP.x <= 273 + chu3 && nessP.x >= 273 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 183 + cho3 && nessP.y >= 181 + cho3 &&
      nessP.x <= 274 + chu3 && nessP.x >= 274 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 182 + cho3 && nessP.y >= 180 + cho3 &&
      nessP.x <= 275 + chu3 && nessP.x >= 275 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 181 + cho3 && nessP.y >= 179 + cho3 &&
      nessP.x <= 276 + chu3 && nessP.x >= 276 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 180 + cho3 && nessP.y >= 178 + cho3 &&
      nessP.x <= 277 + chu3 && nessP.x >= 277 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 179 + cho3 && nessP.y >= 177 + cho3 &&
      nessP.x <= 278 + chu3 && nessP.x >= 278 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 178 + cho3 && nessP.y >= 176 + cho3 &&
      nessP.x <= 279 + chu3 && nessP.x >= 279 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 177 + cho3 && nessP.y >= 175 + cho3 &&
      nessP.x <= 280 + chu3 && nessP.x >= 280 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 176 + cho3 && nessP.y >= 174 + cho3 &&
      nessP.x <= 281 + chu3 && nessP.x >= 281 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 175 + cho3 && nessP.y >= 173 + cho3 &&
      nessP.x <= 282 + chu3 && nessP.x >= 282 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 174 + cho3 && nessP.y >= 172 + cho3 &&
      nessP.x <= 283 + chu3 && nessP.x >= 283 + chu3) {
      nessP.x += 1;
    }

    if (nessP.y <= 173 + cho3 && nessP.y >= 171 + cho3 &&
      nessP.x <= 284 + chu3 && nessP.x >= 281 + chu3) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y <= 188 + cho3 && nessP.y >= 186 + cho3 &&
      nessP.x <= 269 + chu3 && nessP.x >= 269 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 187 + cho3 && nessP.y >= 185 + cho3 &&
      nessP.x <= 270 + chu3 && nessP.x >= 270 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 186 + cho3 && nessP.y >= 184 + cho3 &&
      nessP.x <= 271 + chu3 && nessP.x >= 271 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 185 + cho3 && nessP.y >= 183 + cho3 &&
      nessP.x <= 272 + chu3 && nessP.x >= 272 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 184 + cho3 && nessP.y >= 182 + cho3 &&
      nessP.x <= 273 + chu3 && nessP.x >= 273 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 183 + cho3 && nessP.y >= 181 + cho3 &&
      nessP.x <= 274 + chu3 && nessP.x >= 274 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 182 + cho3 && nessP.y >= 180 + cho3 &&
      nessP.x <= 275 + chu3 && nessP.x >= 275 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 181 + cho3 && nessP.y >= 179 + cho3 &&
      nessP.x <= 276 + chu3 && nessP.x >= 276 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 180 + cho3 && nessP.y >= 178 + cho3 &&
      nessP.x <= 277 + chu3 && nessP.x >= 277 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 179 + cho3 && nessP.y >= 177 + cho3 &&
      nessP.x <= 278 + chu3 && nessP.x >= 278 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 178 + cho3 && nessP.y >= 176 + cho3 &&
      nessP.x <= 279 + chu3 && nessP.x >= 279 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 177 + cho3 && nessP.y >= 175 + cho3 &&
      nessP.x <= 280 + chu3 && nessP.x >= 280 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 176 + cho3 && nessP.y >= 174 + cho3 &&
      nessP.x <= 281 + chu3 && nessP.x >= 281 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 175 + cho3 && nessP.y >= 173 + cho3 &&
      nessP.x <= 282 + chu3 && nessP.x >= 282 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 174 + cho3 && nessP.y >= 172 + cho3 &&
      nessP.x <= 283 + chu3 && nessP.x >= 283 + chu3) {
      nessP.y += 1;
    }

    if (nessP.y <= 173 + cho3 && nessP.y >= 173 + cho3 &&
      nessP.x <= 284 + chu3 && nessP.x >= 281 + chu3) {
      nessP.y += 1;
    }
  }
}

function treeSpawn() {
  tre1 = new tree2(-10 + 2, 130 + 34);
  tre2 = new tree2(22 + 2, 130 + 34);
  tre3 = new tree2(566 + 2, 162 + 34);
  tre4 = new tree2(534 + 2, 162 + 34);
  tre5 = new tree2(502 + 2, 226 + 34);
  tre6 = new tree2(214 + 2, 290 + 34);
  tre7 = new tree2(598 + 2, 418 + 34);
  tre8 = new tree2(118 + 2, 450 + 34);
  tre9 = new tree2(502 + 2, 483 + 34);
  tre10 = new tree2(182 + 2, 547 + 34);
  tre11 = new tree2(214 + 2, 547 + 34);
  tre12 = new tree2(54 + 2, 547 + 34);
  tre13 = new tree2(22 + 2, 579 + 34);
  tre14 = new tree2(310 + 2, 675 + 34);
  tre15 = new tree2(278 + 2, 707 + 34);
  tre16 = new tree2(441 + 2, 707 + 34);

  utre1 = new tree2(342 + 2, 112 + 20);
  utre2 = new tree2(278 + 2, 144 + 20);
  utre3 = new tree2(470 + 2, 304 + 20);
  utre4 = new tree2(502 + 2, 304 + 20);
  utre5 = new tree2(406 + 2, 304 + 20);
  utre6 = new tree2(438 + 2, 304 + 20);
  utre7 = new tree2(214 + 2, 336 + 20);
  utre8 = new tree2(406 + 2, 336 + 20);
  utre9 = new tree2(438 + 2, 336 + 20);
  utre10 = new tree2(470 + 2, 336 + 20);
  utre11 = new tree2(438 + 2, 368 + 20);
  utre12 = new tree2(406 + 2, 400 + 20);
  utre13 = new tree2(86 + 2, 400 + 20);
  utre14 = new tree2(118 + 2, 400 + 20);
  utre15 = new tree2(214 + 2, 432 + 20);
  utre16 = new tree2(374 + 2, 432 + 20);
  utre17 = new tree2(342 + 2, 432 + 20);
  utre18 = new tree2(86 + 2, 432 + 20);
  utre19 = new tree2(54 + 2, 432 + 20);
  utre20 = new tree2(182 + 2, 497 + 20);
  utre21 = new tree2(214 + 2, 497 + 20);
  utre22 = new tree2(246 + 2, 497 + 20);
  utre23 = new tree2(278 + 2, 497 + 20);
  utre24 = new tree2(310 + 2, 497 + 20);
  utre25 = new tree2(470 + 2, 497 + 20);
  utre26 = new tree2(409 + 2, 529 + 20);
  utre27 = new tree2(505 + 2, 529 + 20);
  utre28 = new tree2(537 + 2, 529 + 20);
  utre29 = new tree2(441 + 2, 561 + 20);
  utre30 = new tree2(505 + 2, 561 + 20);
  utre31 = new tree2(633 + 2, 561 + 20);
  utre32 = new tree2(473 + 2, 593 + 20);
  utre33 = new tree2(505 + 2, 593 + 20);
  utre34 = new tree2(569 + 2, 657 + 20);
  utre35 = new tree2(601 + 2, 657 + 20);
  utre36 = new tree2(-10 + 2, 657 + 20);
  utre37 = new tree2(-10 + 2, 689 + 20);
  utre38 = new tree2(22 + 2, 689 + 20);
  utre39 = new tree2(569 + 2, 689 + 20);
}

function houseLayer() {
  if (nessP.y < 171) {
    image(hous1, 214, 134);
  }
  if (nessP.y < 724) {
    image(hous2, 342, 679);
  }
  if (nessP.y < 718) {
    image(hous3, 479, 664);
  }
  if (nessP.y < 499) {
    image(hous4, 534, 454);
  }
  if (nessP.y < 179) {
    image(hous5, 438, 134);
  }
  if (nessP.y < 435) {
    image(hous7, -10, 376);
  }
  if (nessP.y < 596) {
    image(hous8, 86, 519);
  }
  if (nessP.y < 354) {
    image(hous9, 254, 248);
  }
  image(housf, 495, 720);
}

function houseCollisions() {
  collideHous1();
  collideHous2();
  collideHous3();
  collideHous4();
  collideHous5();
  collideHous6();
  collideHous7();
  collideHous8();
  collideHous9();
}

function cameraMove() {
  if (nessP.x < 130 || nessP.x > 130) {
    translate(130 - nessP.x, 0);
  }
  if (nessP.y < 115 || nessP.y > 115) {
    translate(0, 115 - nessP.y);
  }
  if (nessP.y <= 59) {
    translate(0, nessP.y - 59);
  }
  if (nessP.y >= 724) {
    translate(0, nessP.y - 724);
  }
  if (nessP.x <= 35) {
    translate(nessP.x - 35, 0);
  }
  if (nessP.x >= 634) {
    translate(nessP.x - 634, 0);
  }
}

function signEggsBoard() {
  // sign
  if (nessP.x >= 239 && nessP.x <= 241 && nessP.y <= 221 && nessP.y >= 214) {
    nessP.x -= 1;
  }
  if (nessP.x <= 380 && nessP.x >= 378 && nessP.y <= 221 && nessP.y >= 214) {
    nessP.x += 1;
  }
  if (nessP.y >= 213 && nessP.y <= 215 && nessP.x >= 240 && nessP.x <= 379) {
    nessP.y -= 1;
  }
  if (nessP.y <= 222 && nessP.y >= 220 && nessP.x >= 240 && nessP.x <= 379) {
    nessP.y += 1;
  }
  if (nessP.x >= 255 && nessP.x <= 257 && nessP.y >= 216 && nessP.y <= 229) {
    nessP.x -= 1;
  }
  if (nessP.x <= 365 && nessP.x >= 363 && nessP.y >= 216 && nessP.y <= 229) {
    nessP.x += 1;
  }
  if (nessP.y <= 230 && nessP.y >= 228 && nessP.x >= 256 && nessP.x <= 364) {
    nessP.y += 1;
  }

  // eggs
  if (nessP.x >= 415 && nessP.x <= 417 && nessP.y <= 213 && nessP.y >= 206) {
    nessP.x -= 1;
  }
  if (nessP.x <= 453 && nessP.x >= 451 && nessP.y <= 213 && nessP.y >= 206) {
    nessP.x += 1;
  }
  if (nessP.y >= 205 && nessP.y <= 207 && nessP.x >= 416 && nessP.x <= 452) {
    nessP.y -= 1;
  }
  if (nessP.y >= 212 && nessP.y <= 214 && nessP.x >= 416 && nessP.x <= 452) {
    nessP.y += 1;
  }
  if (nessP.x >= 407 && nessP.x <= 409 && nessP.y >= 209 && nessP.y <= 213) {
    nessP.x -= 1;
  }
  if (nessP.y >= 208 && nessP.y <= 210 && nessP.x >= 408 && nessP.x <= 433) {
    nessP.y -= 1;
  }
  if (nessP.y <= 214 && nessP.y >= 212 && nessP.x >= 408 && nessP.x <= 433) {
    nessP.y += 1;
  }

  // bord
  if (nessP.x >= 207 && nessP.x <= 209 && nessP.y >= 650 && nessP.y <= 660) {
    nessP.x -= 1;
  }
  if (nessP.x <= 229 && nessP.x >= 227 && nessP.y >= 650 && nessP.y <= 660) {
    nessP.x += 1;
  }
  if (nessP.y >= 649 && nessP.y <= 651 && nessP.x >= 208 && nessP.x <= 228) {
    nessP.y -= 1;
  }
  if (nessP.y <= 661 && nessP.y >= 659 && nessP.x >= 208 && nessP.x <= 228) {
    nessP.y += 1;
  }

  if (nessP.x >= 231 && nessP.x <= 233 && nessP.y >= 650 && nessP.y <= 660) {
    nessP.x -= 1;
  }
  if (nessP.x <= 253 && nessP.x >= 251 && nessP.y >= 650 && nessP.y <= 660) {
    nessP.x += 1;
  }
  if (nessP.y >= 649 && nessP.y <= 651 && nessP.x >= 232 && nessP.x <= 252) {
    nessP.y -= 1;
  }
  if (nessP.y <= 661 && nessP.y >= 659 && nessP.x >= 232 && nessP.x <= 252) {
    nessP.y += 1;
  }

  // bord bottom
  if (nessP.y >= 655 && nessP.y <= 657 && nessP.x >= 220 && nessP.x <= 240) {
    nessP.y -= 1;
  }
  if (nessP.y <= 661 && nessP.y >= 659 && nessP.x >= 220 && nessP.x <= 240) {
    nessP.y += 1;
  }
}

function fenceHorizontal() {
  // fen01
  if (nessP.x <= -3 && nessP.x >= -5 && nessP.y >= 144 && nessP.y <= 149) {
    nessP.x += 1;
  }
  if (nessP.y >= 143 && nessP.y <= 145 && nessP.x <= -4) {
    nessP.y -= 1;
  }
  if (nessP.y <= 150 && nessP.y >= 148 && nessP.x <= -4) {
    nessP.y += 1;
  }

  // fen02
  if (nessP.y <= 182 && nessP.y >= 180 && nessP.x >= -48 && nessP.x <= 188) {
    nessP.y += 1;
  }
  if (nessP.y >= 175 && nessP.y <= 177 && nessP.x >= -48 && nessP.x <= 188) {
    nessP.y -= 1;
  }
  if (nessP.x >= -49 && nessP.x <= -47 && nessP.y >= 176 && nessP.y <= 181) {
    nessP.x -= 1;
  }
  if (nessP.x <= 189 && nessP.x >= 187 && nessP.y >= 176 && nessP.y <= 181) {
    nessP.x += 1;
  }

  if (nessP.y <= 182 && nessP.y >= 180 && nessP.x >= 222 && nessP.x <= 380) {
    nessP.y += 1;
  }
  if (nessP.y >= 175 && nessP.y <= 177 && nessP.x >= 222 && nessP.x <= 380) {
    nessP.y -= 1;
  }
  if (nessP.x >= 221 && nessP.x <= 223 && nessP.y >= 176 && nessP.y <= 181) {
    nessP.x -= 1;
  }
  if (nessP.x <= 381 && nessP.x >= 379 && nessP.y >= 176 && nessP.y <= 181) {
    nessP.x += 1;
  }
  if (nessP.x <= 284 && nessP.x >= 282 && nessP.y >= 173 && nessP.y <= 175) {
    nessP.x += 1;
  }

  // fen03
  if (nessP.x >= 593 && nessP.x <= 595 && nessP.y >= 128 && nessP.y <= 133) {
    nessP.x -= 1;
  }
  if (nessP.y >= 127 && nessP.y <= 129 && nessP.x >= 594) {
    nessP.y -= 1;
  }
  if (nessP.y <= 134 && nessP.y >= 132 && nessP.x >= 594) {
    nessP.y += 1;
  }

  // fen04
  if (nessP.x >= -15 && nessP.x <= -13 && nessP.y >= 288 && nessP.y <= 293) {
    nessP.x -= 1;
  }
  if (nessP.x <= 45 && nessP.x >= 43 && nessP.y >= 288 && nessP.y <= 293) {
    nessP.x += 1;
  }
  if (nessP.y >= 287 && nessP.y <= 289 && nessP.x >= -14 && nessP.x <= 44) {
    nessP.y -= 1;
  }
  if (nessP.y <= 294 && nessP.y >= 292 && nessP.x >= -14 && nessP.x <= 44) {
    nessP.y += 1;
  }

  // fen05
  if (nessP.x >= 175 && nessP.x <= 177 && nessP.y >= 593 && nessP.y <= 598) {
    nessP.x -= 1;
  }
  if (nessP.x <= 221 && nessP.x >= 219 && nessP.y >= 593 && nessP.y <= 598) {
    nessP.x += 1;
  }
  if (nessP.y >= 592 && nessP.y <= 594 && nessP.x >= 176 && nessP.x <= 220) {
    nessP.y -= 1;
  }
  if (nessP.y <= 599 && nessP.y >= 597 && nessP.x >= 176 && nessP.x <= 220) {
    nessP.y += 1;
  }

  if (nessP.x >= 239 && nessP.x <= 241 && nessP.y >= 593 && nessP.y <= 598) {
    nessP.x -= 1;
  }
  if (nessP.x <= 318 && nessP.x >= 316 && nessP.y >= 593 && nessP.y <= 598) {
    nessP.x += 1;
  }
  if (nessP.y >= 592 && nessP.y <= 594 && nessP.x >= 240 && nessP.x <= 317) {
    nessP.y -= 1;
  }
  if (nessP.y <= 599 && nessP.y >= 597 && nessP.x >= 240 && nessP.x <= 317) {
    nessP.y += 1;
  }

  // fen06
  if (nessP.x >= 25 && nessP.x <= 27 && nessP.y >= 641 && nessP.y <= 646) {
    nessP.x -= 1;
  }
  if (nessP.x <= 109 && nessP.x >= 107 && nessP.y >= 641 && nessP.y <= 646) {
    nessP.x += 1;
  }
  if (nessP.y >= 640 && nessP.y <= 642 && nessP.x >= 26 && nessP.x <= 108) {
    nessP.y -= 1;
  }
  if (nessP.y <= 647 && nessP.y >= 645 && nessP.x >= 26 && nessP.x <= 108) {
    nessP.y += 1;
  }

  if (nessP.x >= 145 && nessP.x <= 147 && nessP.y >= 641 && nessP.y <= 646) {
    nessP.x -= 1;
  }
  if (nessP.x <= 269 && nessP.x >= 267 && nessP.y >= 641 && nessP.y <= 646) {
    nessP.x += 1;
  }
  if (nessP.y >= 640 && nessP.y <= 642 && nessP.x >= 146 && nessP.x <= 268) {
    nessP.y -= 1;
  }
  if (nessP.y <= 647 && nessP.y >= 645 && nessP.x >= 146 && nessP.x <= 268) {
    nessP.y += 1;
  }

  // fen07
  if (nessP.x >= 79 && nessP.x <= 81 && nessP.y >= 689 && nessP.y <= 694) {
    nessP.x -= 1;
  }
  if (nessP.x <= 221 && nessP.x >= 219 && nessP.y >= 689 && nessP.y <= 694) {
    nessP.x += 1;
  }
  if (nessP.y >= 688 && nessP.y <= 690 && nessP.x >= 80 && nessP.x <= 220) {
    nessP.y -= 1;
  }
  if (nessP.y <= 695 && nessP.y >= 693 && nessP.x >= 80 && nessP.x <= 220) {
    nessP.y += 1;
  }

  // fen08
  if (nessP.x >= 25 && nessP.x <= 27 && nessP.y >= 737 && nessP.y <= 742) {
    nessP.x -= 1;
  }
  if (nessP.x <= 109 && nessP.x >= 107 && nessP.y >= 737 && nessP.y <= 742) {
    nessP.x += 1;
  }
  if (nessP.y >= 736 && nessP.y <= 738 && nessP.x >= 26 && nessP.x <= 108) {
    nessP.y -= 1;
  }
  if (nessP.y <= 743 && nessP.y >= 741 && nessP.x >= 26 && nessP.x <= 108) {
    nessP.y += 1;
  }

  if (nessP.x >= 113 && nessP.x <= 115 && nessP.y >= 737 && nessP.y <= 742) {
    nessP.x -= 1;
  }
  if (nessP.x <= 173 && nessP.x >= 171 && nessP.y >= 737 && nessP.y <= 742) {
    nessP.x += 1;
  }
  if (nessP.y >= 736 && nessP.y <= 738 && nessP.x >= 114 && nessP.x <= 172) {
    nessP.y -= 1;
  }
  if (nessP.y <= 743 && nessP.y >= 741 && nessP.x >= 114 && nessP.x <= 172) {
    nessP.y += 1;
  }
}

function fenceLayer() {
  if (nessP.y <= 146) {
    image(fen01, -45, 143);
  }
  if (nessP.y <= 178) {
    image(fen02, -42, 175);
  }
  if (nessP.y <= 130) {
    image(fen03, 599, 126);
  }
  if (nessP.y <= 290) {
    image(fen04, -9, 286);
  }
  if (nessP.y <= 595) {
    image(fen05, 182, 592);
  }
  if (nessP.y <= 643) {
    image(fen06, 31, 639);
  }
  if (nessP.y <= 691) {
    image(fen07, 86, 688);
  }
  if (nessP.y <= 739) {
    image(fen08, 31, 735);
  }

  if (nessP.y <= 148 && nessP.x <= -19 || nessP.y <= 149 && nessP.x <= -20 ||
    nessP.y <= 150 && nessP.x <= -21 || nessP.y <= 151 && nessP.x <= -22 ||
    nessP.y <= 152 && nessP.x <= -23 || nessP.y <= 153 && nessP.x <= -24 ||
    nessP.y <= 154 && nessP.x <= -25 || nessP.y <= 155 && nessP.x <= -26 ||
    nessP.y <= 156 && nessP.x <= -27 || nessP.y <= 157 && nessP.x <= -28 ||
    nessP.y <= 158 && nessP.x <= -29 || nessP.y <= 159 && nessP.x <= -30 ||
    nessP.y <= 160 && nessP.x <= -31 || nessP.y <= 161 && nessP.x <= -32 ||
    nessP.y <= 162 && nessP.x <= -33 || nessP.y <= 163 && nessP.x <= -34 ||
    nessP.y <= 164 && nessP.x <= -35 || nessP.y <= 165 && nessP.x <= -36 ||
    nessP.y <= 166 && nessP.x <= -37 || nessP.y <= 167 && nessP.x <= -38 ||
    nessP.y <= 168 && nessP.x <= -39 || nessP.y <= 169 && nessP.x <= -40 ||
    nessP.y <= 169 && nessP.x <= -41 || nessP.y <= 169 && nessP.x <= -42 ||
    nessP.y <= 170 && nessP.x <= -43 || nessP.y <= 171 && nessP.x <= -44 ||
    nessP.y <= 172 && nessP.x <= -45 || nessP.y <= 173 && nessP.x <= -46 ||
    nessP.y <= 174 && nessP.x <= -47 || nessP.y <= 175 && nessP.x <= -48)

  {
    image(dfe01, -41, 146);
  }

  let dfe2 = 416;

  if (nessP.y <= 78 && nessP.x <= 51 + dfe2 || nessP.y <= 79 && nessP.x <= 50 + dfe2 ||
    nessP.y <= 80 && nessP.x <= 49 + dfe2 || nessP.y <= 81 && nessP.x <= 48 + dfe2 ||
    nessP.y <= 82 && nessP.x <= 47 + dfe2 || nessP.y <= 83 && nessP.x <= 46 + dfe2 ||
    nessP.y <= 84 && nessP.x <= 45 + dfe2 || nessP.y <= 85 && nessP.x <= 44 + dfe2 ||
    nessP.y <= 86 && nessP.x <= 43 + dfe2 || nessP.y <= 87 && nessP.x <= 42 + dfe2 ||
    nessP.y <= 88 && nessP.x <= 41 + dfe2 || nessP.y <= 89 && nessP.x <= 40 + dfe2 ||
    nessP.y <= 90 && nessP.x <= 39 + dfe2 || nessP.y <= 91 && nessP.x <= 38 + dfe2 ||
    nessP.y <= 92 && nessP.x <= 37 + dfe2 || nessP.y <= 93 && nessP.x <= 36 + dfe2 ||
    nessP.y <= 94 && nessP.x <= 35 + dfe2 || nessP.y <= 95 && nessP.x <= 34 + dfe2 ||
    nessP.y <= 96 && nessP.x <= 33 + dfe2 || nessP.y <= 97 && nessP.x <= 32 + dfe2 ||
    nessP.y <= 98 && nessP.x <= 31 + dfe2 || nessP.y <= 99 && nessP.x <= 30 + dfe2 ||
    nessP.y <= 100 && nessP.x <= 29 + dfe2 || nessP.y <= 101 && nessP.x <= 28 + dfe2 ||
    nessP.y <= 102 && nessP.x <= 27 + dfe2 || nessP.y <= 103 && nessP.x <= 26 + dfe2 ||
    nessP.y <= 104 && nessP.x <= 25 + dfe2 || nessP.y <= 105 && nessP.x <= 24 + dfe2 ||
    nessP.y <= 106 && nessP.x <= 23 + dfe2 || nessP.y <= 107 && nessP.x <= 22 + dfe2 ||
    nessP.y <= 108 && nessP.x <= 21 + dfe2 || nessP.y <= 109 && nessP.x <= 20 + dfe2 ||
    nessP.y <= 110 && nessP.x <= 19 + dfe2 || nessP.y <= 111 && nessP.x <= 18 + dfe2 ||
    nessP.y <= 112 && nessP.x <= 17 + dfe2 || nessP.y <= 113 && nessP.x <= 16 + dfe2 ||
    nessP.y <= 114 && nessP.x <= 15 + dfe2 || nessP.y <= 115 && nessP.x <= 14 + dfe2 ||
    nessP.y <= 116 && nessP.x <= 13 + dfe2 || nessP.y <= 117 && nessP.x <= 12 + dfe2 ||
    nessP.y <= 118 && nessP.x <= 11 + dfe2 || nessP.y <= 119 && nessP.x <= 10 + dfe2 ||
    nessP.y <= 120 && nessP.x <= 9 + dfe2 || nessP.y <= 121 && nessP.x <= 8 + dfe2 ||
    nessP.y <= 122 && nessP.x <= 7 + dfe2 || nessP.y <= 123 && nessP.x <= 6 + dfe2 ||
    nessP.y <= 124 && nessP.x <= 5 + dfe2 || nessP.y <= 125 && nessP.x <= 4 + dfe2 ||
    nessP.y <= 126 && nessP.x <= 3 + dfe2 || nessP.y <= 127 && nessP.x <= 2 + dfe2 ||
    nessP.y <= 128 && nessP.x <= 1 + dfe2 || nessP.y <= 129 && nessP.x <= 0 + dfe2 ||
    nessP.y <= 130 && nessP.x <= -1 + dfe2 || nessP.y <= 131 && nessP.x <= -2 + dfe2 ||
    nessP.y <= 132 && nessP.x <= -3 + dfe2 || nessP.y <= 133 && nessP.x <= -4 + dfe2 ||
    nessP.y <= 134 && nessP.x <= -5 + dfe2 || nessP.y <= 135 && nessP.x <= -6 + dfe2 ||
    nessP.y <= 136 && nessP.x <= -7 + dfe2 || nessP.y <= 137 && nessP.x <= -8 + dfe2 ||
    nessP.y <= 138 && nessP.x <= -9 + dfe2 || nessP.y <= 139 && nessP.x <= -10 + dfe2 ||
    nessP.y <= 140 && nessP.x <= -11 + dfe2 || nessP.y <= 141 && nessP.x <= -12 + dfe2 ||
    nessP.y <= 142 && nessP.x <= -13 + dfe2 || nessP.y <= 143 && nessP.x <= -14 + dfe2 ||
    nessP.y <= 144 && nessP.x <= -15 + dfe2 || nessP.y <= 145 && nessP.x <= -16 + dfe2 ||
    nessP.y <= 146 && nessP.x <= -17 + dfe2 || nessP.y <= 147 && nessP.x <= -18 + dfe2 ||
    nessP.y <= 148 && nessP.x <= -19 + dfe2 || nessP.y <= 149 && nessP.x <= -20 + dfe2 ||
    nessP.y <= 150 && nessP.x <= -21 + dfe2 || nessP.y <= 151 && nessP.x <= -22 + dfe2 ||
    nessP.y <= 152 && nessP.x <= -23 + dfe2 || nessP.y <= 153 && nessP.x <= -24 + dfe2 ||
    nessP.y <= 154 && nessP.x <= -25 + dfe2 || nessP.y <= 155 && nessP.x <= -26 + dfe2 ||
    nessP.y <= 156 && nessP.x <= -27 + dfe2 || nessP.y <= 157 && nessP.x <= -28 + dfe2 ||
    nessP.y <= 158 && nessP.x <= -29 + dfe2 || nessP.y <= 159 && nessP.x <= -30 + dfe2 ||
    nessP.y <= 160 && nessP.x <= -31 + dfe2 || nessP.y <= 161 && nessP.x <= -32 + dfe2 ||
    nessP.y <= 162 && nessP.x <= -33 + dfe2 || nessP.y <= 163 && nessP.x <= -34 + dfe2 ||
    nessP.y <= 164 && nessP.x <= -35 + dfe2 || nessP.y <= 165 && nessP.x <= -36 + dfe2 ||
    nessP.y <= 166 && nessP.x <= -37 + dfe2 || nessP.y <= 167 && nessP.x <= -38 + dfe2 ||
    nessP.y <= 168 && nessP.x <= -39 + dfe2 || nessP.y <= 169 && nessP.x <= -40 + dfe2 ||
    nessP.y <= 169 && nessP.x <= -41 + dfe2 || nessP.y <= 169 && nessP.x <= -42 + dfe2 ||
    nessP.y <= 170 && nessP.x <= -43 + dfe2 || nessP.y <= 171 && nessP.x <= -44 + dfe2 ||
    nessP.y <= 172 && nessP.x <= -45 + dfe2 || nessP.y <= 173 && nessP.x <= -46 + dfe2 ||
    nessP.y <= 174 && nessP.x <= -47 + dfe2 || nessP.y <= 175 && nessP.x <= -48 + dfe2)

  {
    image(dfe02, 374, 82);
  }

  let dfn3 = 112;
  let dfe3 = 80;

  if (nessP.y <= 70 + dfn3 && nessP.x <= 59 + dfe3 || nessP.y <= 71 + dfn3 && nessP.x <= 58 + dfe3 ||
    nessP.y <= 72 + dfn3 && nessP.x <= 57 + dfe3 || nessP.y <= 73 + dfn3 && nessP.x <= 56 + dfe3 ||
    nessP.y <= 74 + dfn3 && nessP.x <= 55 + dfe3 || nessP.y <= 75 + dfn3 && nessP.x <= 54 + dfe3 ||
    nessP.y <= 76 + dfn3 && nessP.x <= 53 + dfe3 || nessP.y <= 77 + dfn3 && nessP.x <= 52 + dfe3 ||
    nessP.y <= 78 + dfn3 && nessP.x <= 51 + dfe3 || nessP.y <= 79 + dfn3 && nessP.x <= 50 + dfe3 ||
    nessP.y <= 80 + dfn3 && nessP.x <= 49 + dfe3 || nessP.y <= 81 + dfn3 && nessP.x <= 48 + dfe3 ||
    nessP.y <= 82 + dfn3 && nessP.x <= 47 + dfe3 || nessP.y <= 83 + dfn3 && nessP.x <= 46 + dfe3 ||
    nessP.y <= 84 + dfn3 && nessP.x <= 45 + dfe3 || nessP.y <= 85 + dfn3 && nessP.x <= 44 + dfe3 ||
    nessP.y <= 86 + dfn3 && nessP.x <= 43 + dfe3 || nessP.y <= 87 + dfn3 && nessP.x <= 42 + dfe3 ||
    nessP.y <= 88 + dfn3 && nessP.x <= 41 + dfe3 || nessP.y <= 89 + dfn3 && nessP.x <= 40 + dfe3 ||
    nessP.y <= 90 + dfn3 && nessP.x <= 39 + dfe3 || nessP.y <= 91 + dfn3 && nessP.x <= 38 + dfe3 ||
    nessP.y <= 92 + dfn3 && nessP.x <= 37 + dfe3 || nessP.y <= 93 + dfn3 && nessP.x <= 36 + dfe3 ||
    nessP.y <= 94 + dfn3 && nessP.x <= 35 + dfe3 || nessP.y <= 95 + dfn3 && nessP.x <= 34 + dfe3 ||
    nessP.y <= 96 + dfn3 && nessP.x <= 33 + dfe3 || nessP.y <= 97 + dfn3 && nessP.x <= 32 + dfe3 ||
    nessP.y <= 98 + dfn3 && nessP.x <= 31 + dfe3 || nessP.y <= 99 + dfn3 && nessP.x <= 30 + dfe3 ||
    nessP.y <= 100 + dfn3 && nessP.x <= 29 + dfe3 || nessP.y <= 101 + dfn3 && nessP.x <= 28 + dfe3 ||
    nessP.y <= 102 + dfn3 && nessP.x <= 27 + dfe3 || nessP.y <= 103 + dfn3 && nessP.x <= 26 + dfe3 ||
    nessP.y <= 104 + dfn3 && nessP.x <= 25 + dfe3 || nessP.y <= 105 + dfn3 && nessP.x <= 24 + dfe3 ||
    nessP.y <= 106 + dfn3 && nessP.x <= 23 + dfe3 || nessP.y <= 107 + dfn3 && nessP.x <= 22 + dfe3 ||
    nessP.y <= 108 + dfn3 && nessP.x <= 21 + dfe3 || nessP.y <= 109 + dfn3 && nessP.x <= 20 + dfe3 ||
    nessP.y <= 110 + dfn3 && nessP.x <= 19 + dfe3 || nessP.y <= 111 + dfn3 && nessP.x <= 18 + dfe3 ||
    nessP.y <= 112 + dfn3 && nessP.x <= 17 + dfe3 || nessP.y <= 113 + dfn3 && nessP.x <= 16 + dfe3 ||
    nessP.y <= 114 + dfn3 && nessP.x <= 15 + dfe3 || nessP.y <= 115 + dfn3 && nessP.x <= 14 + dfe3 ||
    nessP.y <= 116 + dfn3 && nessP.x <= 13 + dfe3 || nessP.y <= 117 + dfn3 && nessP.x <= 12 + dfe3 ||
    nessP.y <= 118 + dfn3 && nessP.x <= 11 + dfe3 || nessP.y <= 119 + dfn3 && nessP.x <= 10 + dfe3 ||
    nessP.y <= 120 + dfn3 && nessP.x <= 9 + dfe3 || nessP.y <= 121 + dfn3 && nessP.x <= 8 + dfe3 ||
    nessP.y <= 122 + dfn3 && nessP.x <= 7 + dfe3 || nessP.y <= 123 + dfn3 && nessP.x <= 6 + dfe3 ||
    nessP.y <= 124 + dfn3 && nessP.x <= 5 + dfe3 || nessP.y <= 125 + dfn3 && nessP.x <= 4 + dfe3 ||
    nessP.y <= 126 + dfn3 && nessP.x <= 3 + dfe3 || nessP.y <= 127 + dfn3 && nessP.x <= 2 + dfe3 ||
    nessP.y <= 128 + dfn3 && nessP.x <= 1 + dfe3 || nessP.y <= 129 + dfn3 && nessP.x <= 0 + dfe3 ||
    nessP.y <= 130 + dfn3 && nessP.x <= -1 + dfe3 || nessP.y <= 131 + dfn3 && nessP.x <= -2 + dfe3 ||
    nessP.y <= 132 + dfn3 && nessP.x <= -3 + dfe3 || nessP.y <= 133 + dfn3 && nessP.x <= -4 + dfe3 ||
    nessP.y <= 134 + dfn3 && nessP.x <= -5 + dfe3 || nessP.y <= 135 + dfn3 && nessP.x <= -6 + dfe3 ||
    nessP.y <= 136 + dfn3 && nessP.x <= -7 + dfe3 || nessP.y <= 137 + dfn3 && nessP.x <= -8 + dfe3 ||
    nessP.y <= 138 + dfn3 && nessP.x <= -9 + dfe3 || nessP.y <= 139 + dfn3 && nessP.x <= -10 + dfe3 ||
    nessP.y <= 140 + dfn3 && nessP.x <= -11 + dfe3 || nessP.y <= 141 + dfn3 && nessP.x <= -12 + dfe3 ||
    nessP.y <= 142 + dfn3 && nessP.x <= -13 + dfe3 || nessP.y <= 143 + dfn3 && nessP.x <= -14 + dfe3 ||
    nessP.y <= 144 + dfn3 && nessP.x <= -15 + dfe3 || nessP.y <= 145 + dfn3 && nessP.x <= -16 + dfe3 ||
    nessP.y <= 146 + dfn3 && nessP.x <= -17 + dfe3 || nessP.y <= 147 + dfn3 && nessP.x <= -18 + dfe3 ||
    nessP.y <= 148 + dfn3 && nessP.x <= -19 + dfe3 || nessP.y <= 149 + dfn3 && nessP.x <= -20 + dfe3 ||
    nessP.y <= 150 + dfn3 && nessP.x <= -21 + dfe3 || nessP.y <= 151 + dfn3 && nessP.x <= -22 + dfe3 ||
    nessP.y <= 152 + dfn3 && nessP.x <= -23 + dfe3 || nessP.y <= 153 + dfn3 && nessP.x <= -24 + dfe3 ||
    nessP.y <= 154 + dfn3 && nessP.x <= -25 + dfe3 || nessP.y <= 155 + dfn3 && nessP.x <= -26 + dfe3 ||
    nessP.y <= 156 + dfn3 && nessP.x <= -27 + dfe3 || nessP.y <= 157 + dfn3 && nessP.x <= -28 + dfe3 ||
    nessP.y <= 158 + dfn3 && nessP.x <= -29 + dfe3 || nessP.y <= 159 + dfn3 && nessP.x <= -30 + dfe3 ||
    nessP.y <= 160 + dfn3 && nessP.x <= -31 + dfe3 || nessP.y <= 161 + dfn3 && nessP.x <= -32 + dfe3 ||
    nessP.y <= 162 + dfn3 && nessP.x <= -33 + dfe3 || nessP.y <= 163 + dfn3 && nessP.x <= -34 + dfe3 ||
    nessP.y <= 164 + dfn3 && nessP.x <= -35 + dfe3 || nessP.y <= 165 + dfn3 && nessP.x <= -36 + dfe3 ||
    nessP.y <= 166 + dfn3 && nessP.x <= -37 + dfe3 || nessP.y <= 167 + dfn3 && nessP.x <= -38 + dfe3 ||
    nessP.y <= 168 + dfn3 && nessP.x <= -39 + dfe3 || nessP.y <= 169 + dfn3 && nessP.x <= -40 + dfe3 ||
    nessP.y <= 169 + dfn3 && nessP.x <= -41 + dfe3 || nessP.y <= 169 + dfn3 && nessP.x <= -42 + dfe3 ||
    nessP.y <= 170 + dfn3 && nessP.x <= -43 + dfe3 || nessP.y <= 171 + dfn3 && nessP.x <= -44 + dfe3 ||
    nessP.y <= 172 + dfn3 && nessP.x <= -45 + dfe3 || nessP.y <= 173 + dfn3 && nessP.x <= -46 + dfe3 ||
    nessP.y <= 174 + dfn3 && nessP.x <= -47 + dfe3 || nessP.y <= 175 + dfn3 && nessP.x <= -48 + dfe3)

  {
    image(dfe03, 38, 178);
  }

  let dfn4 = 465;
  let dfe4 = 80;

  if (nessP.y <= 124 + dfn4 && nessP.x <= 5 + dfe4 || nessP.y <= 125 + dfn4 && nessP.x <= 4 + dfe4 ||
    nessP.y <= 126 + dfn4 && nessP.x <= 3 + dfe4 || nessP.y <= 127 + dfn4 && nessP.x <= 2 + dfe4 ||
    nessP.y <= 128 + dfn4 && nessP.x <= 1 + dfe4 || nessP.y <= 129 + dfn4 && nessP.x <= 0 + dfe4 ||
    nessP.y <= 130 + dfn4 && nessP.x <= -1 + dfe4 || nessP.y <= 131 + dfn4 && nessP.x <= -2 + dfe4 ||
    nessP.y <= 132 + dfn4 && nessP.x <= -3 + dfe4 || nessP.y <= 133 + dfn4 && nessP.x <= -4 + dfe4 ||
    nessP.y <= 134 + dfn4 && nessP.x <= -5 + dfe4 || nessP.y <= 135 + dfn4 && nessP.x <= -6 + dfe4 ||
    nessP.y <= 136 + dfn4 && nessP.x <= -7 + dfe4 || nessP.y <= 137 + dfn4 && nessP.x <= -8 + dfe4 ||
    nessP.y <= 138 + dfn4 && nessP.x <= -9 + dfe4 || nessP.y <= 139 + dfn4 && nessP.x <= -10 + dfe4 ||
    nessP.y <= 140 + dfn4 && nessP.x <= -11 + dfe4 || nessP.y <= 141 + dfn4 && nessP.x <= -12 + dfe4 ||
    nessP.y <= 142 + dfn4 && nessP.x <= -13 + dfe4 || nessP.y <= 143 + dfn4 && nessP.x <= -14 + dfe4 ||
    nessP.y <= 144 + dfn4 && nessP.x <= -15 + dfe4 || nessP.y <= 145 + dfn4 && nessP.x <= -16 + dfe4 ||
    nessP.y <= 146 + dfn4 && nessP.x <= -17 + dfe4 || nessP.y <= 147 + dfn4 && nessP.x <= -18 + dfe4 ||
    nessP.y <= 148 + dfn4 && nessP.x <= -19 + dfe4 || nessP.y <= 149 + dfn4 && nessP.x <= -20 + dfe4 ||
    nessP.y <= 150 + dfn4 && nessP.x <= -21 + dfe4 || nessP.y <= 151 + dfn4 && nessP.x <= -22 + dfe4 ||
    nessP.y <= 152 + dfn4 && nessP.x <= -23 + dfe4 || nessP.y <= 153 + dfn4 && nessP.x <= -24 + dfe4 ||
    nessP.y <= 154 + dfn4 && nessP.x <= -25 + dfe4 || nessP.y <= 155 + dfn4 && nessP.x <= -26 + dfe4 ||
    nessP.y <= 156 + dfn4 && nessP.x <= -27 + dfe4 || nessP.y <= 157 + dfn4 && nessP.x <= -28 + dfe4 ||
    nessP.y <= 158 + dfn4 && nessP.x <= -29 + dfe4 || nessP.y <= 159 + dfn4 && nessP.x <= -30 + dfe4 ||
    nessP.y <= 160 + dfn4 && nessP.x <= -31 + dfe4 || nessP.y <= 161 + dfn4 && nessP.x <= -32 + dfe4 ||
    nessP.y <= 162 + dfn4 && nessP.x <= -33 + dfe4 || nessP.y <= 163 + dfn4 && nessP.x <= -34 + dfe4 ||
    nessP.y <= 164 + dfn4 && nessP.x <= -35 + dfe4 || nessP.y <= 165 + dfn4 && nessP.x <= -36 + dfe4 ||
    nessP.y <= 166 + dfn4 && nessP.x <= -37 + dfe4 || nessP.y <= 167 + dfn4 && nessP.x <= -38 + dfe4 ||
    nessP.y <= 168 + dfn4 && nessP.x <= -39 + dfe4 || nessP.y <= 169 + dfn4 && nessP.x <= -40 + dfe4 ||
    nessP.y <= 169 + dfn4 && nessP.x <= -41 + dfe4 || nessP.y <= 169 + dfn4 && nessP.x <= -42 + dfe4 ||
    nessP.y <= 170 + dfn4 && nessP.x <= -43 + dfe4 || nessP.y <= 171 + dfn4 && nessP.x <= -44 + dfe4 ||
    nessP.y <= 172 + dfn4 && nessP.x <= -45 + dfe4 || nessP.y <= 173 + dfn4 && nessP.x <= -46 + dfe4 ||
    nessP.y <= 174 + dfn4 && nessP.x <= -47 + dfe4 || nessP.y <= 175 + dfn4 && nessP.x <= -48 + dfe4 ||
    nessP.y <= 593)

  {
    image(dfe04, 39, 595);
  }

  let dfn5 = 465;
  let dfe5 = 304;

  if (nessP.y <= 124 + dfn5 && nessP.x <= 5 + dfe5 || nessP.y <= 125 + dfn5 && nessP.x <= 4 + dfe5 ||
    nessP.y <= 126 + dfn5 && nessP.x <= 3 + dfe5 || nessP.y <= 127 + dfn5 && nessP.x <= 2 + dfe5 ||
    nessP.y <= 128 + dfn5 && nessP.x <= 1 + dfe5 || nessP.y <= 129 + dfn5 && nessP.x <= 0 + dfe5 ||
    nessP.y <= 130 + dfn5 && nessP.x <= -1 + dfe5 || nessP.y <= 131 + dfn5 && nessP.x <= -2 + dfe5 ||
    nessP.y <= 132 + dfn5 && nessP.x <= -3 + dfe5 || nessP.y <= 133 + dfn5 && nessP.x <= -4 + dfe5 ||
    nessP.y <= 134 + dfn5 && nessP.x <= -5 + dfe5 || nessP.y <= 135 + dfn5 && nessP.x <= -6 + dfe5 ||
    nessP.y <= 136 + dfn5 && nessP.x <= -7 + dfe5 || nessP.y <= 137 + dfn5 && nessP.x <= -8 + dfe5 ||
    nessP.y <= 138 + dfn5 && nessP.x <= -9 + dfe5 || nessP.y <= 139 + dfn5 && nessP.x <= -10 + dfe5 ||
    nessP.y <= 140 + dfn5 && nessP.x <= -11 + dfe5 || nessP.y <= 141 + dfn5 && nessP.x <= -12 + dfe5 ||
    nessP.y <= 142 + dfn5 && nessP.x <= -13 + dfe5 || nessP.y <= 143 + dfn5 && nessP.x <= -14 + dfe5 ||
    nessP.y <= 144 + dfn5 && nessP.x <= -15 + dfe5 || nessP.y <= 145 + dfn5 && nessP.x <= -16 + dfe5 ||
    nessP.y <= 146 + dfn5 && nessP.x <= -17 + dfe5 || nessP.y <= 147 + dfn5 && nessP.x <= -18 + dfe5 ||
    nessP.y <= 148 + dfn5 && nessP.x <= -19 + dfe5 || nessP.y <= 149 + dfn5 && nessP.x <= -20 + dfe5 ||
    nessP.y <= 150 + dfn5 && nessP.x <= -21 + dfe5 || nessP.y <= 151 + dfn5 && nessP.x <= -22 + dfe5 ||
    nessP.y <= 152 + dfn5 && nessP.x <= -23 + dfe5 || nessP.y <= 153 + dfn5 && nessP.x <= -24 + dfe5 ||
    nessP.y <= 154 + dfn5 && nessP.x <= -25 + dfe5 || nessP.y <= 155 + dfn5 && nessP.x <= -26 + dfe5 ||
    nessP.y <= 156 + dfn5 && nessP.x <= -27 + dfe5 || nessP.y <= 157 + dfn5 && nessP.x <= -28 + dfe5 ||
    nessP.y <= 158 + dfn5 && nessP.x <= -29 + dfe5 || nessP.y <= 159 + dfn5 && nessP.x <= -30 + dfe5 ||
    nessP.y <= 160 + dfn5 && nessP.x <= -31 + dfe5 || nessP.y <= 161 + dfn5 && nessP.x <= -32 + dfe5 ||
    nessP.y <= 162 + dfn5 && nessP.x <= -33 + dfe5 || nessP.y <= 163 + dfn5 && nessP.x <= -34 + dfe5 ||
    nessP.y <= 164 + dfn5 && nessP.x <= -35 + dfe5 || nessP.y <= 165 + dfn5 && nessP.x <= -36 + dfe5 ||
    nessP.y <= 166 + dfn5 && nessP.x <= -37 + dfe5 || nessP.y <= 167 + dfn5 && nessP.x <= -38 + dfe5 ||
    nessP.y <= 168 + dfn5 && nessP.x <= -39 + dfe5 || nessP.y <= 169 + dfn5 && nessP.x <= -40 + dfe5 ||
    nessP.y <= 169 + dfn5 && nessP.x <= -41 + dfe5 || nessP.y <= 169 + dfn5 && nessP.x <= -42 + dfe5 ||
    nessP.y <= 170 + dfn5 && nessP.x <= -43 + dfe5 || nessP.y <= 171 + dfn5 && nessP.x <= -44 + dfe5 ||
    nessP.y <= 172 + dfn5 && nessP.x <= -45 + dfe5 || nessP.y <= 173 + dfn5 && nessP.x <= -46 + dfe5 ||
    nessP.y <= 174 + dfn5 && nessP.x <= -47 + dfe5 || nessP.y <= 175 + dfn5 && nessP.x <= -48 + dfe5)

  {
    image(dfe05, 262, 595);
  }

  let dfn6 = 561;
  let dfe6 = 80;

  if (nessP.y <= 124 + dfn6 && nessP.x <= 5 + dfe6 || nessP.y <= 125 + dfn6 && nessP.x <= 4 + dfe6 ||
    nessP.y <= 126 + dfn6 && nessP.x <= 3 + dfe6 || nessP.y <= 127 + dfn6 && nessP.x <= 2 + dfe6 ||
    nessP.y <= 128 + dfn6 && nessP.x <= 1 + dfe6 || nessP.y <= 129 + dfn6 && nessP.x <= 0 + dfe6 ||
    nessP.y <= 130 + dfn6 && nessP.x <= -1 + dfe6 || nessP.y <= 131 + dfn6 && nessP.x <= -2 + dfe6 ||
    nessP.y <= 132 + dfn6 && nessP.x <= -3 + dfe6 || nessP.y <= 133 + dfn6 && nessP.x <= -4 + dfe6 ||
    nessP.y <= 134 + dfn6 && nessP.x <= -5 + dfe6 || nessP.y <= 135 + dfn6 && nessP.x <= -6 + dfe6 ||
    nessP.y <= 136 + dfn6 && nessP.x <= -7 + dfe6 || nessP.y <= 137 + dfn6 && nessP.x <= -8 + dfe6 ||
    nessP.y <= 138 + dfn6 && nessP.x <= -9 + dfe6 || nessP.y <= 139 + dfn6 && nessP.x <= -10 + dfe6 ||
    nessP.y <= 140 + dfn6 && nessP.x <= -11 + dfe6 || nessP.y <= 141 + dfn6 && nessP.x <= -12 + dfe6 ||
    nessP.y <= 142 + dfn6 && nessP.x <= -13 + dfe6 || nessP.y <= 143 + dfn6 && nessP.x <= -14 + dfe6 ||
    nessP.y <= 144 + dfn6 && nessP.x <= -15 + dfe6 || nessP.y <= 145 + dfn6 && nessP.x <= -16 + dfe6 ||
    nessP.y <= 146 + dfn6 && nessP.x <= -17 + dfe6 || nessP.y <= 147 + dfn6 && nessP.x <= -18 + dfe6 ||
    nessP.y <= 148 + dfn6 && nessP.x <= -19 + dfe6 || nessP.y <= 149 + dfn6 && nessP.x <= -20 + dfe6 ||
    nessP.y <= 150 + dfn6 && nessP.x <= -21 + dfe6 || nessP.y <= 151 + dfn6 && nessP.x <= -22 + dfe6 ||
    nessP.y <= 152 + dfn6 && nessP.x <= -23 + dfe6 || nessP.y <= 153 + dfn6 && nessP.x <= -24 + dfe6 ||
    nessP.y <= 154 + dfn6 && nessP.x <= -25 + dfe6 || nessP.y <= 155 + dfn6 && nessP.x <= -26 + dfe6 ||
    nessP.y <= 156 + dfn6 && nessP.x <= -27 + dfe6 || nessP.y <= 157 + dfn6 && nessP.x <= -28 + dfe6 ||
    nessP.y <= 158 + dfn6 && nessP.x <= -29 + dfe6 || nessP.y <= 159 + dfn6 && nessP.x <= -30 + dfe6 ||
    nessP.y <= 160 + dfn6 && nessP.x <= -31 + dfe6 || nessP.y <= 161 + dfn6 && nessP.x <= -32 + dfe6 ||
    nessP.y <= 162 + dfn6 && nessP.x <= -33 + dfe6 || nessP.y <= 163 + dfn6 && nessP.x <= -34 + dfe6 ||
    nessP.y <= 164 + dfn6 && nessP.x <= -35 + dfe6 || nessP.y <= 165 + dfn6 && nessP.x <= -36 + dfe6 ||
    nessP.y <= 166 + dfn6 && nessP.x <= -37 + dfe6 || nessP.y <= 167 + dfn6 && nessP.x <= -38 + dfe6 ||
    nessP.y <= 168 + dfn6 && nessP.x <= -39 + dfe6 || nessP.y <= 169 + dfn6 && nessP.x <= -40 + dfe6 ||
    nessP.y <= 169 + dfn6 && nessP.x <= -41 + dfe6 || nessP.y <= 169 + dfn6 && nessP.x <= -42 + dfe6 ||
    nessP.y <= 170 + dfn6 && nessP.x <= -43 + dfe6 || nessP.y <= 171 + dfn6 && nessP.x <= -44 + dfe6 ||
    nessP.y <= 172 + dfn6 && nessP.x <= -45 + dfe6 || nessP.y <= 173 + dfn6 && nessP.x <= -46 + dfe6 ||
    nessP.y <= 174 + dfn6 && nessP.x <= -47 + dfe6 || nessP.y <= 175 + dfn6 && nessP.x <= -48 + dfe6 ||
    nessP.y <= 688)

  {
    image(dfe06, 39, 691);
  }

  let dfn7 = 561;
  let dfe7 = 208;

  if (nessP.y <= 124 + dfn7 && nessP.x <= 5 + dfe7 || nessP.y <= 125 + dfn7 && nessP.x <= 4 + dfe7 ||
    nessP.y <= 126 + dfn7 && nessP.x <= 3 + dfe7 || nessP.y <= 127 + dfn7 && nessP.x <= 2 + dfe7 ||
    nessP.y <= 128 + dfn7 && nessP.x <= 1 + dfe7 || nessP.y <= 129 + dfn7 && nessP.x <= 0 + dfe7 ||
    nessP.y <= 130 + dfn7 && nessP.x <= -1 + dfe7 || nessP.y <= 131 + dfn7 && nessP.x <= -2 + dfe7 ||
    nessP.y <= 132 + dfn7 && nessP.x <= -3 + dfe7 || nessP.y <= 133 + dfn7 && nessP.x <= -4 + dfe7 ||
    nessP.y <= 134 + dfn7 && nessP.x <= -5 + dfe7 || nessP.y <= 135 + dfn7 && nessP.x <= -6 + dfe7 ||
    nessP.y <= 136 + dfn7 && nessP.x <= -7 + dfe7 || nessP.y <= 137 + dfn7 && nessP.x <= -8 + dfe7 ||
    nessP.y <= 138 + dfn7 && nessP.x <= -9 + dfe7 || nessP.y <= 139 + dfn7 && nessP.x <= -10 + dfe7 ||
    nessP.y <= 140 + dfn7 && nessP.x <= -11 + dfe7 || nessP.y <= 141 + dfn7 && nessP.x <= -12 + dfe7 ||
    nessP.y <= 142 + dfn7 && nessP.x <= -13 + dfe7 || nessP.y <= 143 + dfn7 && nessP.x <= -14 + dfe7 ||
    nessP.y <= 144 + dfn7 && nessP.x <= -15 + dfe7 || nessP.y <= 145 + dfn7 && nessP.x <= -16 + dfe7 ||
    nessP.y <= 146 + dfn7 && nessP.x <= -17 + dfe7 || nessP.y <= 147 + dfn7 && nessP.x <= -18 + dfe7 ||
    nessP.y <= 148 + dfn7 && nessP.x <= -19 + dfe7 || nessP.y <= 149 + dfn7 && nessP.x <= -20 + dfe7 ||
    nessP.y <= 150 + dfn7 && nessP.x <= -21 + dfe7 || nessP.y <= 151 + dfn7 && nessP.x <= -22 + dfe7 ||
    nessP.y <= 152 + dfn7 && nessP.x <= -23 + dfe7 || nessP.y <= 153 + dfn7 && nessP.x <= -24 + dfe7 ||
    nessP.y <= 154 + dfn7 && nessP.x <= -25 + dfe7 || nessP.y <= 155 + dfn7 && nessP.x <= -26 + dfe7 ||
    nessP.y <= 156 + dfn7 && nessP.x <= -27 + dfe7 || nessP.y <= 157 + dfn7 && nessP.x <= -28 + dfe7 ||
    nessP.y <= 158 + dfn7 && nessP.x <= -29 + dfe7 || nessP.y <= 159 + dfn7 && nessP.x <= -30 + dfe7 ||
    nessP.y <= 160 + dfn7 && nessP.x <= -31 + dfe7 || nessP.y <= 161 + dfn7 && nessP.x <= -32 + dfe7 ||
    nessP.y <= 162 + dfn7 && nessP.x <= -33 + dfe7 || nessP.y <= 163 + dfn7 && nessP.x <= -34 + dfe7 ||
    nessP.y <= 164 + dfn7 && nessP.x <= -35 + dfe7 || nessP.y <= 165 + dfn7 && nessP.x <= -36 + dfe7 ||
    nessP.y <= 166 + dfn7 && nessP.x <= -37 + dfe7 || nessP.y <= 167 + dfn7 && nessP.x <= -38 + dfe7 ||
    nessP.y <= 168 + dfn7 && nessP.x <= -39 + dfe7 || nessP.y <= 169 + dfn7 && nessP.x <= -40 + dfe7 ||
    nessP.y <= 169 + dfn7 && nessP.x <= -41 + dfe7 || nessP.y <= 169 + dfn7 && nessP.x <= -42 + dfe7 ||
    nessP.y <= 170 + dfn7 && nessP.x <= -43 + dfe7 || nessP.y <= 171 + dfn7 && nessP.x <= -44 + dfe7 ||
    nessP.y <= 172 + dfn7 && nessP.x <= -45 + dfe7 || nessP.y <= 173 + dfn7 && nessP.x <= -46 + dfe7 ||
    nessP.y <= 174 + dfn7 && nessP.x <= -47 + dfe7 || nessP.y <= 175 + dfn7 && nessP.x <= -48 + dfe7 ||
    nessP.y <= 688)

  {
    image(dfe07, 166, 691);
  }
}

function miscLayer() {
  if (nessP.y <= 218) {
    image(sign, 246, 206);
  }
  if (nessP.y <= 210) {
    image(eggs, 414, 206);
  }
  if (nessP.y <= 657) {
    image(bord, 214, 639);
  }
  if (nessP.y <= 84) {
    image(wlle, 470, 78);
  }

  image(hotes, 105, 576);
}

function fenceCollide3() {
  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 46 && nessP.x >= 44 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 47 && nessP.x >= 45 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 48 && nessP.x >= 46 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 49 && nessP.x >= 47 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 50 && nessP.x >= 48 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 51 && nessP.x >= 49 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 93 && nessP.x >= 91 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 94 && nessP.x >= 92 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 95 && nessP.x >= 93 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 96 && nessP.x >= 94 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 97 && nessP.x >= 95 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 98 && nessP.x >= 96 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 99 && nessP.x >= 97 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 100 && nessP.x >= 98 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 101 && nessP.x >= 99 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 102 && nessP.x >= 100 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 103 && nessP.x >= 101 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 104 && nessP.x >= 102 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 105 && nessP.x >= 103 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 106 && nessP.x >= 104 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 107 && nessP.x >= 105 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 108 && nessP.x >= 106 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 109 && nessP.x >= 107 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 110 && nessP.x >= 108 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 111 && nessP.x >= 109 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 112 && nessP.x >= 110 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 113 && nessP.x >= 111 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 114 && nessP.x >= 112 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 115 && nessP.x >= 113 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 116 && nessP.x >= 114 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 117 && nessP.x >= 115 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 118 && nessP.x >= 116 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 119 && nessP.x >= 117 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 120 && nessP.x >= 118 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 121 && nessP.x >= 119 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 122 && nessP.x >= 120 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 123 && nessP.x >= 121 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 124 && nessP.x >= 122 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 125 && nessP.x >= 123 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 126 && nessP.x >= 124 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 127 && nessP.x >= 125 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 128 && nessP.x >= 126 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 129 && nessP.x >= 127 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 130 && nessP.x >= 128 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 131 && nessP.x >= 129 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 132 && nessP.x >= 130 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 133 && nessP.x >= 131 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 134 && nessP.x >= 132 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 135 && nessP.x >= 133 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 136 && nessP.x >= 134 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 137 && nessP.x >= 135 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 138 && nessP.x >= 136 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 139 && nessP.x >= 137 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 140 && nessP.x >= 138 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 141 && nessP.x >= 139 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 142 && nessP.x >= 140 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 143 && nessP.x >= 141 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 144 && nessP.x >= 142 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 145 && nessP.x >= 143 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 146 && nessP.x >= 144 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 147 && nessP.x >= 145 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 148 && nessP.x >= 146 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 149 && nessP.x >= 147 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 150 && nessP.x >= 148 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 151 && nessP.x >= 149 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 152 && nessP.x >= 150 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 153 && nessP.x >= 151 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 154 && nessP.x >= 152 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 155 && nessP.x >= 153 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 156 && nessP.x >= 154 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.x += 1;
      nessP.y += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 46 && nessP.x >= 44 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.y += 1;
    }
    if (nessP.x <= 47 && nessP.x >= 45 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.y += 1;
    }
    if (nessP.x <= 48 && nessP.x >= 46 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.y += 1;
    }
    if (nessP.x <= 49 && nessP.x >= 47 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.y += 1;
    }
    if (nessP.x <= 50 && nessP.x >= 48 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.y += 1;
    }
    if (nessP.x <= 51 && nessP.x >= 49 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.y += 1;
    }
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.y += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.y += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.y += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.y += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.y += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.y += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.y += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.y += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.y += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.y += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.y += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.y += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.y += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.y += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.y += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.y += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.y += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.y += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.y += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.y += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.y += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.y += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.y += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.y += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.y += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.y += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.y += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.y += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.y += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.y += 1;
    }
    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.y += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.y += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.y += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.y += 1;
    }

    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.y += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.y += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.y += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.y += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.y += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.y += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.y += 1;
    }
    if (nessP.x <= 93 && nessP.x >= 91 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.y += 1;
    }
    if (nessP.x <= 94 && nessP.x >= 92 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.y += 1;
    }
    if (nessP.x <= 95 && nessP.x >= 93 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.y += 1;
    }
    if (nessP.x <= 96 && nessP.x >= 94 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.y += 1;
    }
    if (nessP.x <= 97 && nessP.x >= 95 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.y += 1;
    }
    if (nessP.x <= 98 && nessP.x >= 96 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.y += 1;
    }
    if (nessP.x <= 99 && nessP.x >= 97 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.y += 1;
    }
    if (nessP.x <= 100 && nessP.x >= 98 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.y += 1;
    }
    if (nessP.x <= 101 && nessP.x >= 99 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.y += 1;
    }
    if (nessP.x <= 102 && nessP.x >= 100 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.y += 1;
    }
    if (nessP.x <= 103 && nessP.x >= 101 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.y += 1;
    }
    if (nessP.x <= 104 && nessP.x >= 102 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.y += 1;
    }
    if (nessP.x <= 105 && nessP.x >= 103 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.y += 1;
    }
    if (nessP.x <= 106 && nessP.x >= 104 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.y += 1;
    }
    if (nessP.x <= 107 && nessP.x >= 105 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.y += 1;
    }
    if (nessP.x <= 108 && nessP.x >= 106 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.y += 1;
    }
    if (nessP.x <= 109 && nessP.x >= 107 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.y += 1;
    }
    if (nessP.x <= 110 && nessP.x >= 108 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.y += 1;
    }
    if (nessP.x <= 111 && nessP.x >= 109 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.y += 1;
    }
    if (nessP.x <= 112 && nessP.x >= 110 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.y += 1;
    }
    if (nessP.x <= 113 && nessP.x >= 111 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.y += 1;
    }
    if (nessP.x <= 114 && nessP.x >= 112 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.y += 1;
    }
    if (nessP.x <= 115 && nessP.x >= 113 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.y += 1;
    }
    if (nessP.x <= 116 && nessP.x >= 114 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.y += 1;
    }
    if (nessP.x <= 117 && nessP.x >= 115 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.y += 1;
    }
    if (nessP.x <= 118 && nessP.x >= 116 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.y += 1;
    }
    if (nessP.x <= 119 && nessP.x >= 117 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.y += 1;
    }
    if (nessP.x <= 120 && nessP.x >= 118 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.y += 1;
    }
    if (nessP.x <= 121 && nessP.x >= 119 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.y += 1;
    }
    if (nessP.x <= 122 && nessP.x >= 120 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.y += 1;
    }
    if (nessP.x <= 123 && nessP.x >= 121 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.y += 1;
    }
    if (nessP.x <= 124 && nessP.x >= 122 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.y += 1;
    }
    if (nessP.x <= 125 && nessP.x >= 123 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.y += 1;
    }

    if (nessP.x <= 126 && nessP.x >= 124 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.y += 1;
    }
    if (nessP.x <= 127 && nessP.x >= 125 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.y += 1;
    }
    if (nessP.x <= 128 && nessP.x >= 126 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.y += 1;
    }
    if (nessP.x <= 129 && nessP.x >= 127 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.y += 1;
    }
    if (nessP.x <= 130 && nessP.x >= 128 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.y += 1;
    }
    if (nessP.x <= 131 && nessP.x >= 129 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.y += 1;
    }
    if (nessP.x <= 132 && nessP.x >= 130 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.y += 1;
    }
    if (nessP.x <= 133 && nessP.x >= 131 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.y += 1;
    }
    if (nessP.x <= 134 && nessP.x >= 132 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.y += 1;
    }
    if (nessP.x <= 135 && nessP.x >= 133 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.y += 1;
    }
    if (nessP.x <= 136 && nessP.x >= 134 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.y += 1;
    }
    if (nessP.x <= 137 && nessP.x >= 135 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.y += 1;
    }
    if (nessP.x <= 138 && nessP.x >= 136 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.y += 1;
    }
    if (nessP.x <= 139 && nessP.x >= 137 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.y += 1;
    }
    if (nessP.x <= 140 && nessP.x >= 138 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.y += 1;
    }
    if (nessP.x <= 141 && nessP.x >= 139 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.y += 1;
    }
    if (nessP.x <= 142 && nessP.x >= 140 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.y += 1;
    }
    if (nessP.x <= 143 && nessP.x >= 141 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.y += 1;
    }
    if (nessP.x <= 144 && nessP.x >= 142 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.y += 1;
    }
    if (nessP.x <= 145 && nessP.x >= 143 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.y += 1;
    }
    if (nessP.x <= 146 && nessP.x >= 144 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.y += 1;
    }
    if (nessP.x <= 147 && nessP.x >= 145 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.y += 1;
    }
    if (nessP.x <= 148 && nessP.x >= 146 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.y += 1;
    }
    if (nessP.x <= 149 && nessP.x >= 147 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.y += 1;
    }
    if (nessP.x <= 150 && nessP.x >= 148 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.y += 1;
    }
    if (nessP.x <= 151 && nessP.x >= 149 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.y += 1;
    }
    if (nessP.x <= 152 && nessP.x >= 150 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.y += 1;
    }
    if (nessP.x <= 153 && nessP.x >= 151 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.y += 1;
    }
    if (nessP.x <= 154 && nessP.x >= 152 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.y += 1;
    }
    if (nessP.x <= 155 && nessP.x >= 153 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.y += 1;
    }
    if (nessP.x <= 156 && nessP.x >= 154 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 46 && nessP.x >= 44 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.x += 1;
    }
    if (nessP.x <= 47 && nessP.x >= 45 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.x += 1;
    }
    if (nessP.x <= 48 && nessP.x >= 46 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.x += 1;
    }
    if (nessP.x <= 49 && nessP.x >= 47 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.x += 1;
    }
    if (nessP.x <= 50 && nessP.x >= 48 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.x += 1;
    }
    if (nessP.x <= 51 && nessP.x >= 49 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.x += 1;
    }
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.x += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.x += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.x += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.x += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.x += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.x += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.x += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.x += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.x += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.x += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.x += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.x += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.x += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.x += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.x += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.x += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.x += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.x += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.x += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.x += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.x += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.x += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.x += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.x += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.x += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.x += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.x += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.x += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.x += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.x += 1;
    }
    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.x += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.x += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.x += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.x += 1;
    }

    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.x += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.x += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.x += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.x += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.x += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.x += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.x += 1;
    }
    if (nessP.x <= 93 && nessP.x >= 91 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.x += 1;
    }
    if (nessP.x <= 94 && nessP.x >= 92 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.x += 1;
    }
    if (nessP.x <= 95 && nessP.x >= 93 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.x += 1;
    }
    if (nessP.x <= 96 && nessP.x >= 94 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.x += 1;
    }
    if (nessP.x <= 97 && nessP.x >= 95 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.x += 1;
    }
    if (nessP.x <= 98 && nessP.x >= 96 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.x += 1;
    }
    if (nessP.x <= 99 && nessP.x >= 97 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.x += 1;
    }
    if (nessP.x <= 100 && nessP.x >= 98 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.x += 1;
    }
    if (nessP.x <= 101 && nessP.x >= 99 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.x += 1;
    }
    if (nessP.x <= 102 && nessP.x >= 100 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.x += 1;
    }
    if (nessP.x <= 103 && nessP.x >= 101 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.x += 1;
    }
    if (nessP.x <= 104 && nessP.x >= 102 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.x += 1;
    }
    if (nessP.x <= 105 && nessP.x >= 103 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.x += 1;
    }
    if (nessP.x <= 106 && nessP.x >= 104 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.x += 1;
    }
    if (nessP.x <= 107 && nessP.x >= 105 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.x += 1;
    }
    if (nessP.x <= 108 && nessP.x >= 106 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.x += 1;
    }
    if (nessP.x <= 109 && nessP.x >= 107 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.x += 1;
    }
    if (nessP.x <= 110 && nessP.x >= 108 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.x += 1;
    }
    if (nessP.x <= 111 && nessP.x >= 109 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.x += 1;
    }
    if (nessP.x <= 112 && nessP.x >= 110 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.x += 1;
    }
    if (nessP.x <= 113 && nessP.x >= 111 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.x += 1;
    }
    if (nessP.x <= 114 && nessP.x >= 112 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.x += 1;
    }
    if (nessP.x <= 115 && nessP.x >= 113 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.x += 1;
    }
    if (nessP.x <= 116 && nessP.x >= 114 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.x += 1;
    }
    if (nessP.x <= 117 && nessP.x >= 115 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.x += 1;
    }
    if (nessP.x <= 118 && nessP.x >= 116 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.x += 1;
    }
    if (nessP.x <= 119 && nessP.x >= 117 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.x += 1;
    }
    if (nessP.x <= 120 && nessP.x >= 118 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.x += 1;
    }
    if (nessP.x <= 121 && nessP.x >= 119 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.x += 1;
    }
    if (nessP.x <= 122 && nessP.x >= 120 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.x += 1;
    }
    if (nessP.x <= 123 && nessP.x >= 121 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.x += 1;
    }
    if (nessP.x <= 124 && nessP.x >= 122 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.x += 1;
    }
    if (nessP.x <= 125 && nessP.x >= 123 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.x += 1;
    }

    if (nessP.x <= 126 && nessP.x >= 124 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.x += 1;
    }
    if (nessP.x <= 127 && nessP.x >= 125 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.x += 1;
    }
    if (nessP.x <= 128 && nessP.x >= 126 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.x += 1;
    }
    if (nessP.x <= 129 && nessP.x >= 127 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.x += 1;
    }
    if (nessP.x <= 130 && nessP.x >= 128 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.x += 1;
    }
    if (nessP.x <= 131 && nessP.x >= 129 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.x += 1;
    }
    if (nessP.x <= 132 && nessP.x >= 130 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.x += 1;
    }
    if (nessP.x <= 133 && nessP.x >= 131 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.x += 1;
    }
    if (nessP.x <= 134 && nessP.x >= 132 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.x += 1;
    }
    if (nessP.x <= 135 && nessP.x >= 133 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.x += 1;
    }
    if (nessP.x <= 136 && nessP.x >= 134 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.x += 1;
    }
    if (nessP.x <= 137 && nessP.x >= 135 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.x += 1;
    }
    if (nessP.x <= 138 && nessP.x >= 136 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.x += 1;
    }
    if (nessP.x <= 139 && nessP.x >= 137 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.x += 1;
    }
    if (nessP.x <= 140 && nessP.x >= 138 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.x += 1;
    }
    if (nessP.x <= 141 && nessP.x >= 139 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.x += 1;
    }
    if (nessP.x <= 142 && nessP.x >= 140 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.x += 1;
    }
    if (nessP.x <= 143 && nessP.x >= 141 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.x += 1;
    }
    if (nessP.x <= 144 && nessP.x >= 142 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.x += 1;
    }
    if (nessP.x <= 145 && nessP.x >= 143 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.x += 1;
    }
    if (nessP.x <= 146 && nessP.x >= 144 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.x += 1;
    }
    if (nessP.x <= 147 && nessP.x >= 145 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.x += 1;
    }
    if (nessP.x <= 148 && nessP.x >= 146 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.x += 1;
    }
    if (nessP.x <= 149 && nessP.x >= 147 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.x += 1;
    }
    if (nessP.x <= 150 && nessP.x >= 148 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.x += 1;
    }
    if (nessP.x <= 151 && nessP.x >= 149 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.x += 1;
    }
    if (nessP.x <= 152 && nessP.x >= 150 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.x += 1;
    }
    if (nessP.x <= 153 && nessP.x >= 151 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.x += 1;
    }
    if (nessP.x <= 154 && nessP.x >= 152 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.x += 1;
    }
    if (nessP.x <= 155 && nessP.x >= 153 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.x += 1;
    }
    if (nessP.x <= 156 && nessP.x >= 154 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.x += 1;
    }
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 46 - 17 && nessP.x >= 44 - 17 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 47 - 17 && nessP.x >= 45 - 17 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 48 - 17 && nessP.x >= 46 - 17 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 49 - 17 && nessP.x >= 47 - 17 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 50 - 17 && nessP.x >= 48 - 17 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 51 - 17 && nessP.x >= 49 - 17 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 99 - 17 && nessP.x >= 97 - 17 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 100 - 17 && nessP.x >= 98 - 17 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 101 - 17 && nessP.x >= 99 - 17 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 102 - 17 && nessP.x >= 100 - 17 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 103 - 17 && nessP.x >= 101 - 17 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 104 - 17 && nessP.x >= 102 - 17 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 105 - 17 && nessP.x >= 103 - 17 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 106 - 17 && nessP.x >= 104 - 17 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 107 - 17 && nessP.x >= 105 - 17 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 108 - 17 && nessP.x >= 106 - 17 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 109 - 17 && nessP.x >= 107 - 17 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 110 - 17 && nessP.x >= 108 - 17 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 111 - 17 && nessP.x >= 109 - 17 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 112 - 17 && nessP.x >= 110 - 17 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 113 - 17 && nessP.x >= 111 - 17 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 114 - 17 && nessP.x >= 112 - 17 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 115 - 17 && nessP.x >= 113 - 17 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 116 - 17 && nessP.x >= 114 - 17 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 117 - 17 && nessP.x >= 115 - 17 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 118 - 17 && nessP.x >= 116 - 17 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 119 - 17 && nessP.x >= 117 - 17 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 120 - 17 && nessP.x >= 118 - 17 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 121 - 17 && nessP.x >= 119 - 17 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 122 - 17 && nessP.x >= 120 - 17 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 123 - 17 && nessP.x >= 121 - 17 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 124 - 17 && nessP.x >= 122 - 17 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 125 - 17 && nessP.x >= 123 - 17 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 126 - 17 && nessP.x >= 124 - 17 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 127 - 17 && nessP.x >= 125 - 17 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 128 - 17 && nessP.x >= 126 - 17 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 129 - 17 && nessP.x >= 127 - 17 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 130 - 17 && nessP.x >= 128 - 17 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 131 - 17 && nessP.x >= 129 - 17 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 132 - 17 && nessP.x >= 130 - 17 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 133 - 17 && nessP.x >= 131 - 17 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 134 - 17 && nessP.x >= 132 - 17 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 135 - 17 && nessP.x >= 133 - 17 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 136 - 17 && nessP.x >= 134 - 17 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 137 - 17 && nessP.x >= 135 - 17 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 138 - 17 && nessP.x >= 136 - 17 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 139 - 17 && nessP.x >= 137 - 17 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 140 - 17 && nessP.x >= 138 - 17 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 141 - 17 && nessP.x >= 139 - 17 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 142 - 17 && nessP.x >= 140 - 17 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 143 - 17 && nessP.x >= 141 - 17 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 144 - 17 && nessP.x >= 142 - 17 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 145 - 17 && nessP.x >= 143 - 17 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 146 - 17 && nessP.x >= 144 - 17 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 147 - 17 && nessP.x >= 145 - 17 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 148 - 17 && nessP.x >= 146 - 17 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 149 - 17 && nessP.x >= 147 - 17 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 150 - 17 && nessP.x >= 148 - 17 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 151 - 17 && nessP.x >= 149 - 17 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 152 - 17 && nessP.x >= 150 - 17 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 153 - 17 && nessP.x >= 151 - 17 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 154 - 17 && nessP.x >= 152 - 17 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 155 - 17 && nessP.x >= 153 - 17 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 156 - 17 && nessP.x >= 154 - 17 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 46 - 17 && nessP.x >= 44 - 17 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.y -= 1;
    }
    if (nessP.x <= 47 - 17 && nessP.x >= 45 - 17 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.y -= 1;
    }
    if (nessP.x <= 48 - 17 && nessP.x >= 46 - 17 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.y -= 1;
    }
    if (nessP.x <= 49 - 17 && nessP.x >= 47 - 17 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.y -= 1;
    }
    if (nessP.x <= 50 - 17 && nessP.x >= 48 - 17 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.y -= 1;
    }
    if (nessP.x <= 51 - 17 && nessP.x >= 49 - 17 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.y -= 1;
    }
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.y -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.y -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.y -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.y -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.y -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.y -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.y -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.y -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.y -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.y -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.y -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.y -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.y -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.y -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.y -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.y -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.y -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.y -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.y -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.y -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.y -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.y -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.y -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.y -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.y -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.y -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.y -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.y -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.y -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.y -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.y -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.y -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.y -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.y -= 1;
    }

    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.y -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.y -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.y -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.y -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.y -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.y -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.y -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.y -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.y -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.y -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.y -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.y -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.y -= 1;
    }
    if (nessP.x <= 99 - 17 && nessP.x >= 97 - 17 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.y -= 1;
    }
    if (nessP.x <= 100 - 17 && nessP.x >= 98 - 17 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.y -= 1;
    }
    if (nessP.x <= 101 - 17 && nessP.x >= 99 - 17 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.y -= 1;
    }
    if (nessP.x <= 102 - 17 && nessP.x >= 100 - 17 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.y -= 1;
    }
    if (nessP.x <= 103 - 17 && nessP.x >= 101 - 17 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.y -= 1;
    }
    if (nessP.x <= 104 - 17 && nessP.x >= 102 - 17 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.y -= 1;
    }
    if (nessP.x <= 105 - 17 && nessP.x >= 103 - 17 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.y -= 1;
    }
    if (nessP.x <= 106 - 17 && nessP.x >= 104 - 17 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.y -= 1;
    }
    if (nessP.x <= 107 - 17 && nessP.x >= 105 - 17 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.y -= 1;
    }
    if (nessP.x <= 108 - 17 && nessP.x >= 106 - 17 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.y -= 1;
    }
    if (nessP.x <= 109 - 17 && nessP.x >= 107 - 17 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.y -= 1;
    }
    if (nessP.x <= 110 - 17 && nessP.x >= 108 - 17 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.y -= 1;
    }
    if (nessP.x <= 111 - 17 && nessP.x >= 109 - 17 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.y -= 1;
    }
    if (nessP.x <= 112 - 17 && nessP.x >= 110 - 17 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.y -= 1;
    }
    if (nessP.x <= 113 - 17 && nessP.x >= 111 - 17 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.y -= 1;
    }
    if (nessP.x <= 114 - 17 && nessP.x >= 112 - 17 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.y -= 1;
    }
    if (nessP.x <= 115 - 17 && nessP.x >= 113 - 17 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.y -= 1;
    }
    if (nessP.x <= 116 - 17 && nessP.x >= 114 - 17 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.y -= 1;
    }
    if (nessP.x <= 117 - 17 && nessP.x >= 115 - 17 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.y -= 1;
    }
    if (nessP.x <= 118 - 17 && nessP.x >= 116 - 17 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.y -= 1;
    }
    if (nessP.x <= 119 - 17 && nessP.x >= 117 - 17 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.y -= 1;
    }
    if (nessP.x <= 120 - 17 && nessP.x >= 118 - 17 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.y -= 1;
    }
    if (nessP.x <= 121 - 17 && nessP.x >= 119 - 17 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.y -= 1;
    }
    if (nessP.x <= 122 - 17 && nessP.x >= 120 - 17 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.y -= 1;
    }
    if (nessP.x <= 123 - 17 && nessP.x >= 121 - 17 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.y -= 1;
    }
    if (nessP.x <= 124 - 17 && nessP.x >= 122 - 17 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.y -= 1;
    }
    if (nessP.x <= 125 - 17 && nessP.x >= 123 - 17 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.y -= 1;
    }

    if (nessP.x <= 126 - 17 && nessP.x >= 124 - 17 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.y -= 1;
    }
    if (nessP.x <= 127 - 17 && nessP.x >= 125 - 17 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.y -= 1;
    }
    if (nessP.x <= 128 - 17 && nessP.x >= 126 - 17 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.y -= 1;
    }
    if (nessP.x <= 129 - 17 && nessP.x >= 127 - 17 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.y -= 1;
    }
    if (nessP.x <= 130 - 17 && nessP.x >= 128 - 17 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.y -= 1;
    }
    if (nessP.x <= 131 - 17 && nessP.x >= 129 - 17 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.y -= 1;
    }
    if (nessP.x <= 132 - 17 && nessP.x >= 130 - 17 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.y -= 1;
    }
    if (nessP.x <= 133 - 17 && nessP.x >= 131 - 17 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.y -= 1;
    }
    if (nessP.x <= 134 - 17 && nessP.x >= 132 - 17 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.y -= 1;
    }
    if (nessP.x <= 135 - 17 && nessP.x >= 133 - 17 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.y -= 1;
    }
    if (nessP.x <= 136 - 17 && nessP.x >= 134 - 17 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.y -= 1;
    }
    if (nessP.x <= 137 - 17 && nessP.x >= 135 - 17 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.y -= 1;
    }
    if (nessP.x <= 138 - 17 && nessP.x >= 136 - 17 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.y -= 1;
    }
    if (nessP.x <= 139 - 17 && nessP.x >= 137 - 17 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.y -= 1;
    }
    if (nessP.x <= 140 - 17 && nessP.x >= 138 - 17 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.y -= 1;
    }
    if (nessP.x <= 141 - 17 && nessP.x >= 139 - 17 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.y -= 1;
    }
    if (nessP.x <= 142 - 17 && nessP.x >= 140 - 17 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.y -= 1;
    }
    if (nessP.x <= 143 - 17 && nessP.x >= 141 - 17 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.y -= 1;
    }
    if (nessP.x <= 144 - 17 && nessP.x >= 142 - 17 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.y -= 1;
    }
    if (nessP.x <= 145 - 17 && nessP.x >= 143 - 17 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.y -= 1;
    }
    if (nessP.x <= 146 - 17 && nessP.x >= 144 - 17 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.y -= 1;
    }
    if (nessP.x <= 147 - 17 && nessP.x >= 145 - 17 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.y -= 1;
    }
    if (nessP.x <= 148 - 17 && nessP.x >= 146 - 17 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.y -= 1;
    }
    if (nessP.x <= 149 - 17 && nessP.x >= 147 - 17 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.y -= 1;
    }
    if (nessP.x <= 150 - 17 && nessP.x >= 148 - 17 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.y -= 1;
    }
    if (nessP.x <= 151 - 17 && nessP.x >= 149 - 17 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.y -= 1;
    }
    if (nessP.x <= 152 - 17 && nessP.x >= 150 - 17 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.y -= 1;
    }
    if (nessP.x <= 153 - 17 && nessP.x >= 151 - 17 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.y -= 1;
    }
    if (nessP.x <= 154 - 17 && nessP.x >= 152 - 17 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.y -= 1;
    }
    if (nessP.x <= 155 - 17 && nessP.x >= 153 - 17 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.y -= 1;
    }
    if (nessP.x <= 156 - 17 && nessP.x >= 154 - 17 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 46 - 17 && nessP.x >= 44 - 17 && nessP.y <= 293 && nessP.y >= 292) {
      nessP.x -= 1;
    }
    if (nessP.x <= 47 - 17 && nessP.x >= 45 - 17 && nessP.y <= 292 && nessP.y >= 291) {
      nessP.x -= 1;
    }
    if (nessP.x <= 48 - 17 && nessP.x >= 46 - 17 && nessP.y <= 291 && nessP.y >= 290) {
      nessP.x -= 1;
    }
    if (nessP.x <= 49 - 17 && nessP.x >= 47 - 17 && nessP.y <= 290 && nessP.y >= 289) {
      nessP.x -= 1;
    }
    if (nessP.x <= 50 - 17 && nessP.x >= 48 - 17 && nessP.y <= 289 && nessP.y >= 288) {
      nessP.x -= 1;
    }
    if (nessP.x <= 51 - 17 && nessP.x >= 49 - 17 && nessP.y <= 288 && nessP.y >= 287) {
      nessP.x -= 1;
    }
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 287 && nessP.y >= 286) {
      nessP.x -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 286 && nessP.y >= 285) {
      nessP.x -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 285 && nessP.y >= 284) {
      nessP.x -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 284 && nessP.y >= 283) {
      nessP.x -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 283 && nessP.y >= 282) {
      nessP.x -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 282 && nessP.y >= 281) {
      nessP.x -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 281 && nessP.y >= 280) {
      nessP.x -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 280 && nessP.y >= 279) {
      nessP.x -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 279 && nessP.y >= 278) {
      nessP.x -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 278 && nessP.y >= 277) {
      nessP.x -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 277 && nessP.y >= 276) {
      nessP.x -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 276 && nessP.y >= 275) {
      nessP.x -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 275 && nessP.y >= 274) {
      nessP.x -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 274 && nessP.y >= 273) {
      nessP.x -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 273 && nessP.y >= 272) {
      nessP.x -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 272 && nessP.y >= 271) {
      nessP.x -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 271 && nessP.y >= 270) {
      nessP.x -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 270 && nessP.y >= 269) {
      nessP.x -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 269 && nessP.y >= 268) {
      nessP.x -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 268 && nessP.y >= 267) {
      nessP.x -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 267 && nessP.y >= 266) {
      nessP.x -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 266 && nessP.y >= 265) {
      nessP.x -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 265 && nessP.y >= 264) {
      nessP.x -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 264 && nessP.y >= 263) {
      nessP.x -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 263 && nessP.y >= 262) {
      nessP.x -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 262 && nessP.y >= 261) {
      nessP.x -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 261 && nessP.y >= 260) {
      nessP.x -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 260 && nessP.y >= 259) {
      nessP.x -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 259 && nessP.y >= 258) {
      nessP.x -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 258 && nessP.y >= 257) {
      nessP.x -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 257 && nessP.y >= 256) {
      nessP.x -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 256 && nessP.y >= 255) {
      nessP.x -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 255 && nessP.y >= 254) {
      nessP.x -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 254 && nessP.y >= 253) {
      nessP.x -= 1;
    }

    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 253 && nessP.y >= 252) {
      nessP.x -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 252 && nessP.y >= 251) {
      nessP.x -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 251 && nessP.y >= 250) {
      nessP.x -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 250 && nessP.y >= 249) {
      nessP.x -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 249 && nessP.y >= 248) {
      nessP.x -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 248 && nessP.y >= 247) {
      nessP.x -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 247 && nessP.y >= 246) {
      nessP.x -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 246 && nessP.y >= 245) {
      nessP.x -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 245 && nessP.y >= 244) {
      nessP.x -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 244 && nessP.y >= 243) {
      nessP.x -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 243 && nessP.y >= 242) {
      nessP.x -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 242 && nessP.y >= 241) {
      nessP.x -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 241 && nessP.y >= 240) {
      nessP.x -= 1;
    }
    if (nessP.x <= 99 - 17 && nessP.x >= 97 - 17 && nessP.y <= 240 && nessP.y >= 239) {
      nessP.x -= 1;
    }
    if (nessP.x <= 100 - 17 && nessP.x >= 98 - 17 && nessP.y <= 239 && nessP.y >= 238) {
      nessP.x -= 1;
    }
    if (nessP.x <= 101 - 17 && nessP.x >= 99 - 17 && nessP.y <= 238 && nessP.y >= 237) {
      nessP.x -= 1;
    }
    if (nessP.x <= 102 - 17 && nessP.x >= 100 - 17 && nessP.y <= 237 && nessP.y >= 236) {
      nessP.x -= 1;
    }
    if (nessP.x <= 103 - 17 && nessP.x >= 101 - 17 && nessP.y <= 236 && nessP.y >= 235) {
      nessP.x -= 1;
    }
    if (nessP.x <= 104 - 17 && nessP.x >= 102 - 17 && nessP.y <= 235 && nessP.y >= 234) {
      nessP.x -= 1;
    }
    if (nessP.x <= 105 - 17 && nessP.x >= 103 - 17 && nessP.y <= 234 && nessP.y >= 233) {
      nessP.x -= 1;
    }
    if (nessP.x <= 106 - 17 && nessP.x >= 104 - 17 && nessP.y <= 233 && nessP.y >= 232) {
      nessP.x -= 1;
    }
    if (nessP.x <= 107 - 17 && nessP.x >= 105 - 17 && nessP.y <= 232 && nessP.y >= 231) {
      nessP.x -= 1;
    }
    if (nessP.x <= 108 - 17 && nessP.x >= 106 - 17 && nessP.y <= 231 && nessP.y >= 230) {
      nessP.x -= 1;
    }
    if (nessP.x <= 109 - 17 && nessP.x >= 107 - 17 && nessP.y <= 230 && nessP.y >= 229) {
      nessP.x -= 1;
    }
    if (nessP.x <= 110 - 17 && nessP.x >= 108 - 17 && nessP.y <= 229 && nessP.y >= 228) {
      nessP.x -= 1;
    }
    if (nessP.x <= 111 - 17 && nessP.x >= 109 - 17 && nessP.y <= 228 && nessP.y >= 227) {
      nessP.x -= 1;
    }
    if (nessP.x <= 112 - 17 && nessP.x >= 110 - 17 && nessP.y <= 227 && nessP.y >= 226) {
      nessP.x -= 1;
    }
    if (nessP.x <= 113 - 17 && nessP.x >= 111 - 17 && nessP.y <= 226 && nessP.y >= 225) {
      nessP.x -= 1;
    }
    if (nessP.x <= 114 - 17 && nessP.x >= 112 - 17 && nessP.y <= 225 && nessP.y >= 224) {
      nessP.x -= 1;
    }
    if (nessP.x <= 115 - 17 && nessP.x >= 113 - 17 && nessP.y <= 224 && nessP.y >= 223) {
      nessP.x -= 1;
    }
    if (nessP.x <= 116 - 17 && nessP.x >= 114 - 17 && nessP.y <= 223 && nessP.y >= 222) {
      nessP.x -= 1;
    }
    if (nessP.x <= 117 - 17 && nessP.x >= 115 - 17 && nessP.y <= 222 && nessP.y >= 221) {
      nessP.x -= 1;
    }
    if (nessP.x <= 118 - 17 && nessP.x >= 116 - 17 && nessP.y <= 221 && nessP.y >= 220) {
      nessP.x -= 1;
    }
    if (nessP.x <= 119 - 17 && nessP.x >= 117 - 17 && nessP.y <= 220 && nessP.y >= 219) {
      nessP.x -= 1;
    }
    if (nessP.x <= 120 - 17 && nessP.x >= 118 - 17 && nessP.y <= 219 && nessP.y >= 218) {
      nessP.x -= 1;
    }
    if (nessP.x <= 121 - 17 && nessP.x >= 119 - 17 && nessP.y <= 218 && nessP.y >= 217) {
      nessP.x -= 1;
    }
    if (nessP.x <= 122 - 17 && nessP.x >= 120 - 17 && nessP.y <= 217 && nessP.y >= 216) {
      nessP.x -= 1;
    }
    if (nessP.x <= 123 - 17 && nessP.x >= 121 - 17 && nessP.y <= 216 && nessP.y >= 215) {
      nessP.x -= 1;
    }
    if (nessP.x <= 124 - 17 && nessP.x >= 122 - 17 && nessP.y <= 215 && nessP.y >= 214) {
      nessP.x -= 1;
    }
    if (nessP.x <= 125 - 17 && nessP.x >= 123 - 17 && nessP.y <= 214 && nessP.y >= 213) {
      nessP.x -= 1;
    }

    if (nessP.x <= 126 - 17 && nessP.x >= 124 - 17 && nessP.y <= 213 && nessP.y >= 212) {
      nessP.x -= 1;
    }
    if (nessP.x <= 127 - 17 && nessP.x >= 125 - 17 && nessP.y <= 212 && nessP.y >= 211) {
      nessP.x -= 1;
    }
    if (nessP.x <= 128 - 17 && nessP.x >= 126 - 17 && nessP.y <= 211 && nessP.y >= 210) {
      nessP.x -= 1;
    }
    if (nessP.x <= 129 - 17 && nessP.x >= 127 - 17 && nessP.y <= 210 && nessP.y >= 209) {
      nessP.x -= 1;
    }
    if (nessP.x <= 130 - 17 && nessP.x >= 128 - 17 && nessP.y <= 209 && nessP.y >= 208) {
      nessP.x -= 1;
    }
    if (nessP.x <= 131 - 17 && nessP.x >= 129 - 17 && nessP.y <= 208 && nessP.y >= 207) {
      nessP.x -= 1;
    }
    if (nessP.x <= 132 - 17 && nessP.x >= 130 - 17 && nessP.y <= 207 && nessP.y >= 206) {
      nessP.x -= 1;
    }
    if (nessP.x <= 133 - 17 && nessP.x >= 131 - 17 && nessP.y <= 206 && nessP.y >= 205) {
      nessP.x -= 1;
    }
    if (nessP.x <= 134 - 17 && nessP.x >= 132 - 17 && nessP.y <= 205 && nessP.y >= 204) {
      nessP.x -= 1;
    }
    if (nessP.x <= 135 - 17 && nessP.x >= 133 - 17 && nessP.y <= 204 && nessP.y >= 203) {
      nessP.x -= 1;
    }
    if (nessP.x <= 136 - 17 && nessP.x >= 134 - 17 && nessP.y <= 203 && nessP.y >= 202) {
      nessP.x -= 1;
    }
    if (nessP.x <= 137 - 17 && nessP.x >= 135 - 17 && nessP.y <= 202 && nessP.y >= 201) {
      nessP.x -= 1;
    }
    if (nessP.x <= 138 - 17 && nessP.x >= 136 - 17 && nessP.y <= 201 && nessP.y >= 200) {
      nessP.x -= 1;
    }
    if (nessP.x <= 139 - 17 && nessP.x >= 137 - 17 && nessP.y <= 200 && nessP.y >= 199) {
      nessP.x -= 1;
    }
    if (nessP.x <= 140 - 17 && nessP.x >= 138 - 17 && nessP.y <= 199 && nessP.y >= 198) {
      nessP.x -= 1;
    }
    if (nessP.x <= 141 - 17 && nessP.x >= 139 - 17 && nessP.y <= 198 && nessP.y >= 197) {
      nessP.x -= 1;
    }
    if (nessP.x <= 142 - 17 && nessP.x >= 140 - 17 && nessP.y <= 197 && nessP.y >= 196) {
      nessP.x -= 1;
    }
    if (nessP.x <= 143 - 17 && nessP.x >= 141 - 17 && nessP.y <= 196 && nessP.y >= 195) {
      nessP.x -= 1;
    }
    if (nessP.x <= 144 - 17 && nessP.x >= 142 - 17 && nessP.y <= 195 && nessP.y >= 194) {
      nessP.x -= 1;
    }
    if (nessP.x <= 145 - 17 && nessP.x >= 143 - 17 && nessP.y <= 194 && nessP.y >= 193) {
      nessP.x -= 1;
    }
    if (nessP.x <= 146 - 17 && nessP.x >= 144 - 17 && nessP.y <= 193 && nessP.y >= 192) {
      nessP.x -= 1;
    }
    if (nessP.x <= 147 - 17 && nessP.x >= 145 - 17 && nessP.y <= 192 && nessP.y >= 191) {
      nessP.x -= 1;
    }
    if (nessP.x <= 148 - 17 && nessP.x >= 146 - 17 && nessP.y <= 191 && nessP.y >= 190) {
      nessP.x -= 1;
    }
    if (nessP.x <= 149 - 17 && nessP.x >= 147 - 17 && nessP.y <= 190 && nessP.y >= 189) {
      nessP.x -= 1;
    }
    if (nessP.x <= 150 - 17 && nessP.x >= 148 - 17 && nessP.y <= 189 && nessP.y >= 188) {
      nessP.x -= 1;
    }
    if (nessP.x <= 151 - 17 && nessP.x >= 149 - 17 && nessP.y <= 188 && nessP.y >= 187) {
      nessP.x -= 1;
    }
    if (nessP.x <= 152 - 17 && nessP.x >= 150 - 17 && nessP.y <= 187 && nessP.y >= 186) {
      nessP.x -= 1;
    }
    if (nessP.x <= 153 - 17 && nessP.x >= 151 - 17 && nessP.y <= 186 && nessP.y >= 185) {
      nessP.x -= 1;
    }
    if (nessP.x <= 154 - 17 && nessP.x >= 152 - 17 && nessP.y <= 185 && nessP.y >= 184) {
      nessP.x -= 1;
    }
    if (nessP.x <= 155 - 17 && nessP.x >= 153 - 17 && nessP.y <= 184 && nessP.y >= 183) {
      nessP.x -= 1;
    }
    if (nessP.x <= 156 - 17 && nessP.x >= 154 - 17 && nessP.y <= 183 && nessP.y >= 182) {
      nessP.x -= 1;
    }
  }

  if (nessP.x >= 136 && nessP.x <= 138 && nessP.y >= 181 && nessP.y <= 185) {
    nessP.x -= 1;
  }
}

function fenceCollide2() {
  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 382 && nessP.x >= 380 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 383 && nessP.x >= 381 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 384 && nessP.x >= 382 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 385 && nessP.x >= 383 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 386 && nessP.x >= 384 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 387 && nessP.x >= 385 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 388 && nessP.x >= 386 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 389 && nessP.x >= 387 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 390 && nessP.x >= 388 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 391 && nessP.x >= 389 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 392 && nessP.x >= 390 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 393 && nessP.x >= 391 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 394 && nessP.x >= 392 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 395 && nessP.x >= 393 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 396 && nessP.x >= 394 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 397 && nessP.x >= 395 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 398 && nessP.x >= 396 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 399 && nessP.x >= 397 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 400 && nessP.x >= 398 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 401 && nessP.x >= 399 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 402 && nessP.x >= 400 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 403 && nessP.x >= 401 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 404 && nessP.x >= 402 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 405 && nessP.x >= 403 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 406 && nessP.x >= 404 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 407 && nessP.x >= 405 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 408 && nessP.x >= 406 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 409 && nessP.x >= 407 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 410 && nessP.x >= 408 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 411 && nessP.x >= 409 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 412 && nessP.x >= 410 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 413 && nessP.x >= 411 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 414 && nessP.x >= 412 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 415 && nessP.x >= 413 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 416 && nessP.x >= 414 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 417 && nessP.x >= 415 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 418 && nessP.x >= 416 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 419 && nessP.x >= 417 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 420 && nessP.x >= 418 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 421 && nessP.x >= 419 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 422 && nessP.x >= 420 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 423 && nessP.x >= 421 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 424 && nessP.x >= 422 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 425 && nessP.x >= 423 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 426 && nessP.x >= 424 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 427 && nessP.x >= 425 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 428 && nessP.x >= 426 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 429 && nessP.x >= 427 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 430 && nessP.x >= 428 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 431 && nessP.x >= 429 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 432 && nessP.x >= 430 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 433 && nessP.x >= 431 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 434 && nessP.x >= 432 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 435 && nessP.x >= 433 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 436 && nessP.x >= 434 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 437 && nessP.x >= 435 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 438 && nessP.x >= 436 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 439 && nessP.x >= 437 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 440 && nessP.x >= 438 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 441 && nessP.x >= 439 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 442 && nessP.x >= 440 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 443 && nessP.x >= 441 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 444 && nessP.x >= 442 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 445 && nessP.x >= 443 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 446 && nessP.x >= 444 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 447 && nessP.x >= 445 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 448 && nessP.x >= 446 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 449 && nessP.x >= 447 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 450 && nessP.x >= 448 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 451 && nessP.x >= 449 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 452 && nessP.x >= 450 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 453 && nessP.x >= 451 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 454 && nessP.x >= 452 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 455 && nessP.x >= 453 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 456 && nessP.x >= 454 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 457 && nessP.x >= 455 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 458 && nessP.x >= 456 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 459 && nessP.x >= 457 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 460 && nessP.x >= 458 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 461 && nessP.x >= 459 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 462 && nessP.x >= 460 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 463 && nessP.x >= 461 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 464 && nessP.x >= 462 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 465 && nessP.x >= 463 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 466 && nessP.x >= 464 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 467 && nessP.x >= 465 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 468 && nessP.x >= 466 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 469 && nessP.x >= 467 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 470 && nessP.x >= 468 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 471 && nessP.x >= 469 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 472 && nessP.x >= 470 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 473 && nessP.x >= 471 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 474 && nessP.x >= 472 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 475 && nessP.x >= 473 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 476 && nessP.x >= 474 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 477 && nessP.x >= 475 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 478 && nessP.x >= 476 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 479 && nessP.x >= 477 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 480 && nessP.x >= 478 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 481 && nessP.x >= 479 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 382 && nessP.x >= 380 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.y += 1;
    }
    if (nessP.x <= 383 && nessP.x >= 381 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.y += 1;
    }
    if (nessP.x <= 384 && nessP.x >= 382 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.y += 1;
    }
    if (nessP.x <= 385 && nessP.x >= 383 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.y += 1;
    }
    if (nessP.x <= 386 && nessP.x >= 384 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.y += 1;
    }
    if (nessP.x <= 387 && nessP.x >= 385 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.y += 1;
    }
    if (nessP.x <= 388 && nessP.x >= 386 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y += 1;
    }
    if (nessP.x <= 389 && nessP.x >= 387 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y += 1;
    }
    if (nessP.x <= 390 && nessP.x >= 388 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y += 1;
    }
    if (nessP.x <= 391 && nessP.x >= 389 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y += 1;
    }
    if (nessP.x <= 392 && nessP.x >= 390 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y += 1;
    }
    if (nessP.x <= 393 && nessP.x >= 391 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y += 1;
    }
    if (nessP.x <= 394 && nessP.x >= 392 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y += 1;
    }
    if (nessP.x <= 395 && nessP.x >= 393 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y += 1;
    }
    if (nessP.x <= 396 && nessP.x >= 394 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y += 1;
    }
    if (nessP.x <= 397 && nessP.x >= 395 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y += 1;
    }
    if (nessP.x <= 398 && nessP.x >= 396 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y += 1;
    }
    if (nessP.x <= 399 && nessP.x >= 397 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y += 1;
    }
    if (nessP.x <= 400 && nessP.x >= 398 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.y += 1;
    }
    if (nessP.x <= 401 && nessP.x >= 399 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.y += 1;
    }
    if (nessP.x <= 402 && nessP.x >= 400 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.y += 1;
    }
    if (nessP.x <= 403 && nessP.x >= 401 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.y += 1;
    }
    if (nessP.x <= 404 && nessP.x >= 402 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.y += 1;
    }
    if (nessP.x <= 405 && nessP.x >= 403 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.y += 1;
    }
    if (nessP.x <= 406 && nessP.x >= 404 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.y += 1;
    }
    if (nessP.x <= 407 && nessP.x >= 405 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.y += 1;
    }
    if (nessP.x <= 408 && nessP.x >= 406 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.y += 1;
    }
    if (nessP.x <= 409 && nessP.x >= 407 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.y += 1;
    }
    if (nessP.x <= 410 && nessP.x >= 408 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.y += 1;
    }
    if (nessP.x <= 411 && nessP.x >= 409 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.y += 1;
    }
    if (nessP.x <= 412 && nessP.x >= 410 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.y += 1;
    }
    if (nessP.x <= 413 && nessP.x >= 411 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.y += 1;
    }
    if (nessP.x <= 414 && nessP.x >= 412 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.y += 1;
    }
    if (nessP.x <= 415 && nessP.x >= 413 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.y += 1;
    }
    if (nessP.x <= 416 && nessP.x >= 414 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.y += 1;
    }
    if (nessP.x <= 417 && nessP.x >= 415 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.y += 1;
    }
    if (nessP.x <= 418 && nessP.x >= 416 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.y += 1;
    }
    if (nessP.x <= 419 && nessP.x >= 417 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.y += 1;
    }
    if (nessP.x <= 420 && nessP.x >= 418 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.y += 1;
    }
    if (nessP.x <= 421 && nessP.x >= 419 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.y += 1;
    }
    if (nessP.x <= 422 && nessP.x >= 420 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.y += 1;
    }
    if (nessP.x <= 423 && nessP.x >= 421 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.y += 1;
    }
    if (nessP.x <= 424 && nessP.x >= 422 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.y += 1;
    }
    if (nessP.x <= 425 && nessP.x >= 423 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.y += 1;
    }
    if (nessP.x <= 426 && nessP.x >= 424 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.y += 1;
    }
    if (nessP.x <= 427 && nessP.x >= 425 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.y += 1;
    }
    if (nessP.x <= 428 && nessP.x >= 426 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.y += 1;
    }
    if (nessP.x <= 429 && nessP.x >= 427 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.y += 1;
    }
    if (nessP.x <= 430 && nessP.x >= 428 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.y += 1;
    }
    if (nessP.x <= 431 && nessP.x >= 429 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.y += 1;
    }
    if (nessP.x <= 432 && nessP.x >= 430 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 433 && nessP.x >= 431 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.y += 1;
    }
    if (nessP.x <= 434 && nessP.x >= 432 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.y += 1;
    }
    if (nessP.x <= 435 && nessP.x >= 433 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.y += 1;
    }
    if (nessP.x <= 436 && nessP.x >= 434 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.y += 1;
    }
    if (nessP.x <= 437 && nessP.x >= 435 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.y += 1;
    }
    if (nessP.x <= 438 && nessP.x >= 436 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.y += 1;
    }
    if (nessP.x <= 439 && nessP.x >= 437 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.y += 1;
    }
    if (nessP.x <= 440 && nessP.x >= 438 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.y += 1;
    }
    if (nessP.x <= 441 && nessP.x >= 439 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.y += 1;
    }
    if (nessP.x <= 442 && nessP.x >= 440 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.y += 1;
    }
    if (nessP.x <= 443 && nessP.x >= 441 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.y += 1;
    }
    if (nessP.x <= 444 && nessP.x >= 442 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.y += 1;
    }
    if (nessP.x <= 445 && nessP.x >= 443 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.y += 1;
    }
    if (nessP.x <= 446 && nessP.x >= 444 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.y += 1;
    }
    if (nessP.x <= 447 && nessP.x >= 445 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.y += 1;
    }
    if (nessP.x <= 448 && nessP.x >= 446 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.y += 1;
    }
    if (nessP.x <= 449 && nessP.x >= 447 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.y += 1;
    }
    if (nessP.x <= 450 && nessP.x >= 448 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.y += 1;
    }
    if (nessP.x <= 451 && nessP.x >= 449 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.y += 1;
    }
    if (nessP.x <= 452 && nessP.x >= 450 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.y += 1;
    }
    if (nessP.x <= 453 && nessP.x >= 451 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.y += 1;
    }
    if (nessP.x <= 454 && nessP.x >= 452 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.y += 1;
    }
    if (nessP.x <= 455 && nessP.x >= 453 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.y += 1;
    }
    if (nessP.x <= 456 && nessP.x >= 454 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.y += 1;
    }
    if (nessP.x <= 457 && nessP.x >= 455 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.y += 1;
    }
    if (nessP.x <= 458 && nessP.x >= 456 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.y += 1;
    }
    if (nessP.x <= 459 && nessP.x >= 457 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.y += 1;
    }
    if (nessP.x <= 460 && nessP.x >= 458 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.y += 1;
    }
    if (nessP.x <= 461 && nessP.x >= 459 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.y += 1;
    }
    if (nessP.x <= 462 && nessP.x >= 460 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.y += 1;
    }
    if (nessP.x <= 463 && nessP.x >= 461 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.y += 1;
    }
    if (nessP.x <= 464 && nessP.x >= 462 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.y += 1;
    }
    if (nessP.x <= 465 && nessP.x >= 463 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.y += 1;
    }
    if (nessP.x <= 466 && nessP.x >= 464 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.y += 1;
    }
    if (nessP.x <= 467 && nessP.x >= 465 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.y += 1;
    }
    if (nessP.x <= 468 && nessP.x >= 466 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.y += 1;
    }
    if (nessP.x <= 469 && nessP.x >= 467 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.y += 1;
    }
    if (nessP.x <= 470 && nessP.x >= 468 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.y += 1;
    }
    if (nessP.x <= 471 && nessP.x >= 469 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.y += 1;
    }
    if (nessP.x <= 472 && nessP.x >= 470 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.y += 1;
    }
    if (nessP.x <= 473 && nessP.x >= 471 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.y += 1;
    }
    if (nessP.x <= 474 && nessP.x >= 472 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.y += 1;
    }
    if (nessP.x <= 475 && nessP.x >= 473 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.y += 1;
    }
    if (nessP.x <= 476 && nessP.x >= 474 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.y += 1;
    }
    if (nessP.x <= 477 && nessP.x >= 475 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.y += 1;
    }
    if (nessP.x <= 478 && nessP.x >= 476 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.y += 1;
    }
    if (nessP.x <= 479 && nessP.x >= 477 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.y += 1;
    }
    if (nessP.x <= 480 && nessP.x >= 478 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.y += 1;
    }
    if (nessP.x <= 481 && nessP.x >= 479 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 382 && nessP.x >= 380 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.x += 1;
    }
    if (nessP.x <= 383 && nessP.x >= 381 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.x += 1;
    }
    if (nessP.x <= 384 && nessP.x >= 382 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.x += 1;
    }
    if (nessP.x <= 385 && nessP.x >= 383 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.x += 1;
    }
    if (nessP.x <= 386 && nessP.x >= 384 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.x += 1;
    }
    if (nessP.x <= 387 && nessP.x >= 385 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.x += 1;
    }
    if (nessP.x <= 388 && nessP.x >= 386 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.x += 1;
    }
    if (nessP.x <= 389 && nessP.x >= 387 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.x += 1;
    }
    if (nessP.x <= 390 && nessP.x >= 388 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.x += 1;
    }
    if (nessP.x <= 391 && nessP.x >= 389 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.x += 1;
    }
    if (nessP.x <= 392 && nessP.x >= 390 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.x += 1;
    }
    if (nessP.x <= 393 && nessP.x >= 391 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.x += 1;
    }
    if (nessP.x <= 394 && nessP.x >= 392 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.x += 1;
    }
    if (nessP.x <= 395 && nessP.x >= 393 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.x += 1;
    }
    if (nessP.x <= 396 && nessP.x >= 394 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.x += 1;
    }
    if (nessP.x <= 397 && nessP.x >= 395 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.x += 1;
    }
    if (nessP.x <= 398 && nessP.x >= 396 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.x += 1;
    }
    if (nessP.x <= 399 && nessP.x >= 397 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.x += 1;
    }
    if (nessP.x <= 400 && nessP.x >= 398 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.x += 1;
    }
    if (nessP.x <= 401 && nessP.x >= 399 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.x += 1;
    }
    if (nessP.x <= 402 && nessP.x >= 400 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.x += 1;
    }
    if (nessP.x <= 403 && nessP.x >= 401 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.x += 1;
    }
    if (nessP.x <= 404 && nessP.x >= 402 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.x += 1;
    }
    if (nessP.x <= 405 && nessP.x >= 403 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.x += 1;
    }
    if (nessP.x <= 406 && nessP.x >= 404 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.x += 1;
    }
    if (nessP.x <= 407 && nessP.x >= 405 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.x += 1;
    }
    if (nessP.x <= 408 && nessP.x >= 406 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.x += 1;
    }
    if (nessP.x <= 409 && nessP.x >= 407 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.x += 1;
    }
    if (nessP.x <= 410 && nessP.x >= 408 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.x += 1;
    }
    if (nessP.x <= 411 && nessP.x >= 409 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.x += 1;
    }
    if (nessP.x <= 412 && nessP.x >= 410 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.x += 1;
    }
    if (nessP.x <= 413 && nessP.x >= 411 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.x += 1;
    }
    if (nessP.x <= 414 && nessP.x >= 412 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.x += 1;
    }
    if (nessP.x <= 415 && nessP.x >= 413 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.x += 1;
    }
    if (nessP.x <= 416 && nessP.x >= 414 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.x += 1;
    }
    if (nessP.x <= 417 && nessP.x >= 415 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.x += 1;
    }
    if (nessP.x <= 418 && nessP.x >= 416 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.x += 1;
    }
    if (nessP.x <= 419 && nessP.x >= 417 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.x += 1;
    }
    if (nessP.x <= 420 && nessP.x >= 418 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.x += 1;
    }
    if (nessP.x <= 421 && nessP.x >= 419 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.x += 1;
    }
    if (nessP.x <= 422 && nessP.x >= 420 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.x += 1;
    }
    if (nessP.x <= 423 && nessP.x >= 421 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.x += 1;
    }
    if (nessP.x <= 424 && nessP.x >= 422 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.x += 1;
    }
    if (nessP.x <= 425 && nessP.x >= 423 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.x += 1;
    }
    if (nessP.x <= 426 && nessP.x >= 424 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.x += 1;
    }
    if (nessP.x <= 427 && nessP.x >= 425 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.x += 1;
    }
    if (nessP.x <= 428 && nessP.x >= 426 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.x += 1;
    }
    if (nessP.x <= 429 && nessP.x >= 427 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.x += 1;
    }
    if (nessP.x <= 430 && nessP.x >= 428 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.x += 1;
    }
    if (nessP.x <= 431 && nessP.x >= 429 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.x += 1;
    }
    if (nessP.x <= 432 && nessP.x >= 430 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 433 && nessP.x >= 431 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.x += 1;
    }
    if (nessP.x <= 434 && nessP.x >= 432 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.x += 1;
    }
    if (nessP.x <= 435 && nessP.x >= 433 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.x += 1;
    }
    if (nessP.x <= 436 && nessP.x >= 434 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.x += 1;
    }
    if (nessP.x <= 437 && nessP.x >= 435 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.x += 1;
    }
    if (nessP.x <= 438 && nessP.x >= 436 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.x += 1;
    }
    if (nessP.x <= 439 && nessP.x >= 437 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.x += 1;
    }
    if (nessP.x <= 440 && nessP.x >= 438 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.x += 1;
    }
    if (nessP.x <= 441 && nessP.x >= 439 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.x += 1;
    }
    if (nessP.x <= 442 && nessP.x >= 440 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.x += 1;
    }
    if (nessP.x <= 443 && nessP.x >= 441 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.x += 1;
    }
    if (nessP.x <= 444 && nessP.x >= 442 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.x += 1;
    }
    if (nessP.x <= 445 && nessP.x >= 443 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.x += 1;
    }
    if (nessP.x <= 446 && nessP.x >= 444 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.x += 1;
    }
    if (nessP.x <= 447 && nessP.x >= 445 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.x += 1;
    }
    if (nessP.x <= 448 && nessP.x >= 446 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.x += 1;
    }
    if (nessP.x <= 449 && nessP.x >= 447 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.x += 1;
    }
    if (nessP.x <= 450 && nessP.x >= 448 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.x += 1;
    }
    if (nessP.x <= 451 && nessP.x >= 449 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.x += 1;
    }
    if (nessP.x <= 452 && nessP.x >= 450 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.x += 1;
    }
    if (nessP.x <= 453 && nessP.x >= 451 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.x += 1;
    }
    if (nessP.x <= 454 && nessP.x >= 452 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.x += 1;
    }
    if (nessP.x <= 455 && nessP.x >= 453 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.x += 1;
    }
    if (nessP.x <= 456 && nessP.x >= 454 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.x += 1;
    }
    if (nessP.x <= 457 && nessP.x >= 455 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.x += 1;
    }
    if (nessP.x <= 458 && nessP.x >= 456 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.x += 1;
    }
    if (nessP.x <= 459 && nessP.x >= 457 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.x += 1;
    }
    if (nessP.x <= 460 && nessP.x >= 458 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.x += 1;
    }
    if (nessP.x <= 461 && nessP.x >= 459 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.x += 1;
    }
    if (nessP.x <= 462 && nessP.x >= 460 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.x += 1;
    }
    if (nessP.x <= 463 && nessP.x >= 461 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.x += 1;
    }
    if (nessP.x <= 464 && nessP.x >= 462 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.x += 1;
    }
    if (nessP.x <= 465 && nessP.x >= 463 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.x += 1;
    }
    if (nessP.x <= 466 && nessP.x >= 464 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.x += 1;
    }
    if (nessP.x <= 467 && nessP.x >= 465 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.x += 1;
    }
    if (nessP.x <= 468 && nessP.x >= 466 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.x += 1;
    }
    if (nessP.x <= 469 && nessP.x >= 467 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.x += 1;
    }
    if (nessP.x <= 470 && nessP.x >= 468 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.x += 1;
    }
    if (nessP.x <= 471 && nessP.x >= 469 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.x += 1;
    }
    if (nessP.x <= 472 && nessP.x >= 470 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.x += 1;
    }
    if (nessP.x <= 473 && nessP.x >= 471 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.x += 1;
    }
    if (nessP.x <= 474 && nessP.x >= 472 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.x += 1;
    }
    if (nessP.x <= 475 && nessP.x >= 473 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.x += 1;
    }
    if (nessP.x <= 476 && nessP.x >= 474 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.x += 1;
    }
    if (nessP.x <= 477 && nessP.x >= 475 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.x += 1;
    }
    if (nessP.x <= 478 && nessP.x >= 476 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.x += 1;
    }
    if (nessP.x <= 479 && nessP.x >= 477 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.x += 1;
    }
    if (nessP.x <= 480 && nessP.x >= 478 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.x += 1;
    }
    if (nessP.x <= 481 && nessP.x >= 479 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.x += 1;
    }
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 382 - 17 && nessP.x >= 380 - 17 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 383 - 17 && nessP.x >= 381 - 17 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 384 - 17 && nessP.x >= 382 - 17 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 385 - 17 && nessP.x >= 383 - 17 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 386 - 17 && nessP.x >= 384 - 17 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 387 - 17 && nessP.x >= 385 - 17 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 388 - 17 && nessP.x >= 386 - 17 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 389 - 17 && nessP.x >= 387 - 17 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 390 - 17 && nessP.x >= 388 - 17 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 391 - 17 && nessP.x >= 389 - 17 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 392 - 17 && nessP.x >= 390 - 17 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 393 - 17 && nessP.x >= 391 - 17 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 394 - 17 && nessP.x >= 392 - 17 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 395 - 17 && nessP.x >= 393 - 17 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 396 - 17 && nessP.x >= 394 - 17 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 397 - 17 && nessP.x >= 395 - 17 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 398 - 17 && nessP.x >= 396 - 17 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 399 - 17 && nessP.x >= 397 - 17 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 400 - 17 && nessP.x >= 398 - 17 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 401 - 17 && nessP.x >= 399 - 17 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 402 - 17 && nessP.x >= 400 - 17 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 403 - 17 && nessP.x >= 401 - 17 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 404 - 17 && nessP.x >= 402 - 17 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 405 - 17 && nessP.x >= 403 - 17 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 406 - 17 && nessP.x >= 404 - 17 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 407 - 17 && nessP.x >= 405 - 17 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 408 - 17 && nessP.x >= 406 - 17 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 409 - 17 && nessP.x >= 407 - 17 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 410 - 17 && nessP.x >= 408 - 17 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 411 - 17 && nessP.x >= 409 - 17 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 412 - 17 && nessP.x >= 410 - 17 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 413 - 17 && nessP.x >= 411 - 17 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 414 - 17 && nessP.x >= 412 - 17 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 415 - 17 && nessP.x >= 413 - 17 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 416 - 17 && nessP.x >= 414 - 17 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 417 - 17 && nessP.x >= 415 - 17 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 418 - 17 && nessP.x >= 416 - 17 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 419 - 17 && nessP.x >= 417 - 17 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 420 - 17 && nessP.x >= 418 - 17 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 421 - 17 && nessP.x >= 419 - 17 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 422 - 17 && nessP.x >= 420 - 17 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 423 - 17 && nessP.x >= 421 - 17 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 424 - 17 && nessP.x >= 422 - 17 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 425 - 17 && nessP.x >= 423 - 17 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 426 - 17 && nessP.x >= 424 - 17 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 427 - 17 && nessP.x >= 425 - 17 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 428 - 17 && nessP.x >= 426 - 17 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 429 - 17 && nessP.x >= 427 - 17 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 430 - 17 && nessP.x >= 428 - 17 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 431 - 17 && nessP.x >= 429 - 17 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 432 - 17 && nessP.x >= 430 - 17 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 433 - 17 && nessP.x >= 431 - 17 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 434 - 17 && nessP.x >= 432 - 17 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 435 - 17 && nessP.x >= 433 - 17 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 436 - 17 && nessP.x >= 434 - 17 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 437 - 17 && nessP.x >= 435 - 17 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 438 - 17 && nessP.x >= 436 - 17 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 439 - 17 && nessP.x >= 437 - 17 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 440 - 17 && nessP.x >= 438 - 17 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 441 - 17 && nessP.x >= 439 - 17 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 442 - 17 && nessP.x >= 440 - 17 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 443 - 17 && nessP.x >= 441 - 17 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 444 - 17 && nessP.x >= 442 - 17 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 445 - 17 && nessP.x >= 443 - 17 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 446 - 17 && nessP.x >= 444 - 17 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 447 - 17 && nessP.x >= 445 - 17 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 448 - 17 && nessP.x >= 446 - 17 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 449 - 17 && nessP.x >= 447 - 17 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 450 - 17 && nessP.x >= 448 - 17 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 451 - 17 && nessP.x >= 449 - 17 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 452 - 17 && nessP.x >= 450 - 17 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 453 - 17 && nessP.x >= 451 - 17 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 454 - 17 && nessP.x >= 452 - 17 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 455 - 17 && nessP.x >= 453 - 17 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 456 - 17 && nessP.x >= 454 - 17 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 457 - 17 && nessP.x >= 455 - 17 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 458 - 17 && nessP.x >= 456 - 17 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 459 - 17 && nessP.x >= 457 - 17 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 460 - 17 && nessP.x >= 458 - 17 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 461 - 17 && nessP.x >= 459 - 17 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 462 - 17 && nessP.x >= 460 - 17 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 463 - 17 && nessP.x >= 461 - 17 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 464 - 17 && nessP.x >= 462 - 17 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 465 - 17 && nessP.x >= 463 - 17 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 466 - 17 && nessP.x >= 464 - 17 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 467 - 17 && nessP.x >= 465 - 17 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 468 - 17 && nessP.x >= 466 - 17 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 469 - 17 && nessP.x >= 467 - 17 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 470 - 17 && nessP.x >= 468 - 17 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 471 - 17 && nessP.x >= 469 - 17 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 472 - 17 && nessP.x >= 470 - 17 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 473 - 17 && nessP.x >= 471 - 17 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 474 - 17 && nessP.x >= 472 - 17 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 475 - 17 && nessP.x >= 473 - 17 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 476 - 17 && nessP.x >= 474 - 17 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 477 - 17 && nessP.x >= 475 - 17 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 478 - 17 && nessP.x >= 476 - 17 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 479 - 17 && nessP.x >= 477 - 17 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 480 - 17 && nessP.x >= 478 - 17 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 481 - 17 && nessP.x >= 479 - 17 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 482 - 17 && nessP.x >= 480 - 17 && nessP.y <= 81 && nessP.y >= 80) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 483 - 17 && nessP.x >= 481 - 17 && nessP.y <= 80 && nessP.y >= 79) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 484 - 17 && nessP.x >= 482 - 17 && nessP.y <= 79 && nessP.y >= 78) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 485 - 17 && nessP.x >= 483 - 17 && nessP.y <= 78 && nessP.y >= 77) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 486 - 17 && nessP.x >= 484 - 17 && nessP.y <= 77 && nessP.y >= 76) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 487 - 17 && nessP.x >= 485 - 17 && nessP.y <= 76 && nessP.y >= 75) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 488 - 17 && nessP.x >= 486 - 17 && nessP.y <= 75 && nessP.y >= 74) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 489 - 17 && nessP.x >= 487 - 17 && nessP.y <= 74 && nessP.y >= 73) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 490 - 17 && nessP.x >= 488 - 17 && nessP.y <= 73 && nessP.y >= 72) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 491 - 17 && nessP.x >= 489 - 17 && nessP.y <= 72 && nessP.y >= 71) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 382 - 17 && nessP.x >= 380 - 17 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.y -= 1;
    }
    if (nessP.x <= 383 - 17 && nessP.x >= 381 - 17 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.y -= 1;
    }
    if (nessP.x <= 384 - 17 && nessP.x >= 382 - 17 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.y -= 1;
    }
    if (nessP.x <= 385 - 17 && nessP.x >= 383 - 17 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.y -= 1;
    }
    if (nessP.x <= 386 - 17 && nessP.x >= 384 - 17 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.y -= 1;
    }
    if (nessP.x <= 387 - 17 && nessP.x >= 385 - 17 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.y -= 1;
    }
    if (nessP.x <= 388 - 17 && nessP.x >= 386 - 17 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y -= 1;
    }
    if (nessP.x <= 389 - 17 && nessP.x >= 387 - 17 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y -= 1;
    }
    if (nessP.x <= 390 - 17 && nessP.x >= 388 - 17 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y -= 1;
    }
    if (nessP.x <= 391 - 17 && nessP.x >= 389 - 17 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y -= 1;
    }
    if (nessP.x <= 392 - 17 && nessP.x >= 390 - 17 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y -= 1;
    }
    if (nessP.x <= 393 - 17 && nessP.x >= 391 - 17 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y -= 1;
    }
    if (nessP.x <= 394 - 17 && nessP.x >= 392 - 17 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y -= 1;
    }
    if (nessP.x <= 395 - 17 && nessP.x >= 393 - 17 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y -= 1;
    }
    if (nessP.x <= 396 - 17 && nessP.x >= 394 - 17 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y -= 1;
    }
    if (nessP.x <= 397 - 17 && nessP.x >= 395 - 17 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y -= 1;
    }
    if (nessP.x <= 398 - 17 && nessP.x >= 396 - 17 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y -= 1;
    }
    if (nessP.x <= 399 - 17 && nessP.x >= 397 - 17 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y -= 1;
    }
    if (nessP.x <= 400 - 17 && nessP.x >= 398 - 17 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.y -= 1;
    }
    if (nessP.x <= 401 - 17 && nessP.x >= 399 - 17 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.y -= 1;
    }
    if (nessP.x <= 402 - 17 && nessP.x >= 400 - 17 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.y -= 1;
    }
    if (nessP.x <= 403 - 17 && nessP.x >= 401 - 17 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.y -= 1;
    }
    if (nessP.x <= 404 - 17 && nessP.x >= 402 - 17 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.y -= 1;
    }
    if (nessP.x <= 405 - 17 && nessP.x >= 403 - 17 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.y -= 1;
    }
    if (nessP.x <= 406 - 17 && nessP.x >= 404 - 17 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.y -= 1;
    }
    if (nessP.x <= 407 - 17 && nessP.x >= 405 - 17 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.y -= 1;
    }
    if (nessP.x <= 408 - 17 && nessP.x >= 406 - 17 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.y -= 1;
    }
    if (nessP.x <= 409 - 17 && nessP.x >= 407 - 17 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.y -= 1;
    }
    if (nessP.x <= 410 - 17 && nessP.x >= 408 - 17 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.y -= 1;
    }
    if (nessP.x <= 411 - 17 && nessP.x >= 409 - 17 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.y -= 1;
    }
    if (nessP.x <= 412 - 17 && nessP.x >= 410 - 17 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.y -= 1;
    }
    if (nessP.x <= 413 - 17 && nessP.x >= 411 - 17 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.y -= 1;
    }
    if (nessP.x <= 414 - 17 && nessP.x >= 412 - 17 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.y -= 1;
    }
    if (nessP.x <= 415 - 17 && nessP.x >= 413 - 17 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.y -= 1;
    }
    if (nessP.x <= 416 - 17 && nessP.x >= 414 - 17 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.y -= 1;
    }
    if (nessP.x <= 417 - 17 && nessP.x >= 415 - 17 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.y -= 1;
    }
    if (nessP.x <= 418 - 17 && nessP.x >= 416 - 17 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.y -= 1;
    }
    if (nessP.x <= 419 - 17 && nessP.x >= 417 - 17 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.y -= 1;
    }
    if (nessP.x <= 420 - 17 && nessP.x >= 418 - 17 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.y -= 1;
    }
    if (nessP.x <= 421 - 17 && nessP.x >= 419 - 17 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.y -= 1;
    }
    if (nessP.x <= 422 - 17 && nessP.x >= 420 - 17 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.y -= 1;
    }
    if (nessP.x <= 423 - 17 && nessP.x >= 421 - 17 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.y -= 1;
    }
    if (nessP.x <= 424 - 17 && nessP.x >= 422 - 17 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.y -= 1;
    }
    if (nessP.x <= 425 - 17 && nessP.x >= 423 - 17 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.y -= 1;
    }
    if (nessP.x <= 426 - 17 && nessP.x >= 424 - 17 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.y -= 1;
    }
    if (nessP.x <= 427 - 17 && nessP.x >= 425 - 17 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.y -= 1;
    }
    if (nessP.x <= 428 - 17 && nessP.x >= 426 - 17 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.y -= 1;
    }
    if (nessP.x <= 429 - 17 && nessP.x >= 427 - 17 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.y -= 1;
    }
    if (nessP.x <= 430 - 17 && nessP.x >= 428 - 17 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.y -= 1;
    }
    if (nessP.x <= 431 - 17 && nessP.x >= 429 - 17 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.y -= 1;
    }
    if (nessP.x <= 432 - 17 && nessP.x >= 430 - 17 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.y -= 1;
    }
    if (nessP.x <= 433 - 17 && nessP.x >= 431 - 17 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.y -= 1;
    }
    if (nessP.x <= 434 - 17 && nessP.x >= 432 - 17 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.y -= 1;
    }
    if (nessP.x <= 435 - 17 && nessP.x >= 433 - 17 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.y -= 1;
    }
    if (nessP.x <= 436 - 17 && nessP.x >= 434 - 17 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.y -= 1;
    }
    if (nessP.x <= 437 - 17 && nessP.x >= 435 - 17 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.y -= 1;
    }
    if (nessP.x <= 438 - 17 && nessP.x >= 436 - 17 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.y -= 1;
    }
    if (nessP.x <= 439 - 17 && nessP.x >= 437 - 17 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.y -= 1;
    }
    if (nessP.x <= 440 - 17 && nessP.x >= 438 - 17 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.y -= 1;
    }
    if (nessP.x <= 441 - 17 && nessP.x >= 439 - 17 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.y -= 1;
    }
    if (nessP.x <= 442 - 17 && nessP.x >= 440 - 17 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.y -= 1;
    }
    if (nessP.x <= 443 - 17 && nessP.x >= 441 - 17 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.y -= 1;
    }
    if (nessP.x <= 444 - 17 && nessP.x >= 442 - 17 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.y -= 1;
    }
    if (nessP.x <= 445 - 17 && nessP.x >= 443 - 17 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.y -= 1;
    }
    if (nessP.x <= 446 - 17 && nessP.x >= 444 - 17 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.y -= 1;
    }
    if (nessP.x <= 447 - 17 && nessP.x >= 445 - 17 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.y -= 1;
    }
    if (nessP.x <= 448 - 17 && nessP.x >= 446 - 17 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.y -= 1;
    }
    if (nessP.x <= 449 - 17 && nessP.x >= 447 - 17 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.y -= 1;
    }
    if (nessP.x <= 450 - 17 && nessP.x >= 448 - 17 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.y -= 1;
    }
    if (nessP.x <= 451 - 17 && nessP.x >= 449 - 17 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.y -= 1;
    }
    if (nessP.x <= 452 - 17 && nessP.x >= 450 - 17 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.y -= 1;
    }
    if (nessP.x <= 453 - 17 && nessP.x >= 451 - 17 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.y -= 1;
    }
    if (nessP.x <= 454 - 17 && nessP.x >= 452 - 17 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.y -= 1;
    }
    if (nessP.x <= 455 - 17 && nessP.x >= 453 - 17 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.y -= 1;
    }
    if (nessP.x <= 456 - 17 && nessP.x >= 454 - 17 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.y -= 1;
    }
    if (nessP.x <= 457 - 17 && nessP.x >= 455 - 17 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.y -= 1;
    }
    if (nessP.x <= 458 - 17 && nessP.x >= 456 - 17 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.y -= 1;
    }
    if (nessP.x <= 459 - 17 && nessP.x >= 457 - 17 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.y -= 1;
    }
    if (nessP.x <= 460 - 17 && nessP.x >= 458 - 17 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.y -= 1;
    }
    if (nessP.x <= 461 - 17 && nessP.x >= 459 - 17 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.y -= 1;
    }
    if (nessP.x <= 462 - 17 && nessP.x >= 460 - 17 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.y -= 1;
    }
    if (nessP.x <= 463 - 17 && nessP.x >= 461 - 17 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.y -= 1;
    }
    if (nessP.x <= 464 - 17 && nessP.x >= 462 - 17 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.y -= 1;
    }
    if (nessP.x <= 465 - 17 && nessP.x >= 463 - 17 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.y -= 1;
    }
    if (nessP.x <= 466 - 17 && nessP.x >= 464 - 17 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.y -= 1;
    }
    if (nessP.x <= 467 - 17 && nessP.x >= 465 - 17 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.y -= 1;
    }
    if (nessP.x <= 468 - 17 && nessP.x >= 466 - 17 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.y -= 1;
    }
    if (nessP.x <= 469 - 17 && nessP.x >= 467 - 17 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.y -= 1;
    }
    if (nessP.x <= 470 - 17 && nessP.x >= 468 - 17 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.y -= 1;
    }
    if (nessP.x <= 471 - 17 && nessP.x >= 469 - 17 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.y -= 1;
    }
    if (nessP.x <= 472 - 17 && nessP.x >= 470 - 17 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.y -= 1;
    }
    if (nessP.x <= 473 - 17 && nessP.x >= 471 - 17 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.y -= 1;
    }
    if (nessP.x <= 474 - 17 && nessP.x >= 472 - 17 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.y -= 1;
    }
    if (nessP.x <= 475 - 17 && nessP.x >= 473 - 17 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.y -= 1;
    }
    if (nessP.x <= 476 - 17 && nessP.x >= 474 - 17 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.y -= 1;
    }
    if (nessP.x <= 477 - 17 && nessP.x >= 475 - 17 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.y -= 1;
    }
    if (nessP.x <= 478 - 17 && nessP.x >= 476 - 17 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.y -= 1;
    }
    if (nessP.x <= 479 - 17 && nessP.x >= 477 - 17 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.y -= 1;
    }
    if (nessP.x <= 480 - 17 && nessP.x >= 478 - 17 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.y -= 1;
    }
    if (nessP.x <= 481 - 17 && nessP.x >= 479 - 17 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.y -= 1;
    }
    if (nessP.x <= 482 - 17 && nessP.x >= 480 - 17 && nessP.y <= 81 && nessP.y >= 80) {
      nessP.y -= 1;
    }
    if (nessP.x <= 483 - 17 && nessP.x >= 481 - 17 && nessP.y <= 80 && nessP.y >= 79) {
      nessP.y -= 1;
    }
    if (nessP.x <= 484 - 17 && nessP.x >= 482 - 17 && nessP.y <= 79 && nessP.y >= 78) {
      nessP.y -= 1;
    }
    if (nessP.x <= 485 - 17 && nessP.x >= 483 - 17 && nessP.y <= 78 && nessP.y >= 77) {
      nessP.y -= 1;
    }
    if (nessP.x <= 486 - 17 && nessP.x >= 484 - 17 && nessP.y <= 77 && nessP.y >= 76) {
      nessP.y -= 1;
    }
    if (nessP.x <= 487 - 17 && nessP.x >= 485 - 17 && nessP.y <= 76 && nessP.y >= 75) {
      nessP.y -= 1;
    }
    if (nessP.x <= 488 - 17 && nessP.x >= 486 - 17 && nessP.y <= 75 && nessP.y >= 74) {
      nessP.y -= 1;
    }
    if (nessP.x <= 489 - 17 && nessP.x >= 487 - 17 && nessP.y <= 74 && nessP.y >= 73) {
      nessP.y -= 1;
    }
    if (nessP.x <= 490 - 17 && nessP.x >= 488 - 17 && nessP.y <= 73 && nessP.y >= 72) {
      nessP.y -= 1;
    }
    if (nessP.x <= 491 - 17 && nessP.x >= 489 - 17 && nessP.y <= 72 && nessP.y >= 71) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 382 - 17 && nessP.x >= 380 - 17 && nessP.y <= 181 && nessP.y >= 180) {
      nessP.x -= 1;
    }
    if (nessP.x <= 383 - 17 && nessP.x >= 381 - 17 && nessP.y <= 180 && nessP.y >= 179) {
      nessP.x -= 1;
    }
    if (nessP.x <= 384 - 17 && nessP.x >= 382 - 17 && nessP.y <= 179 && nessP.y >= 178) {
      nessP.x -= 1;
    }
    if (nessP.x <= 385 - 17 && nessP.x >= 383 - 17 && nessP.y <= 178 && nessP.y >= 177) {
      nessP.x -= 1;
    }
    if (nessP.x <= 386 - 17 && nessP.x >= 384 - 17 && nessP.y <= 177 && nessP.y >= 176) {
      nessP.x -= 1;
    }
    if (nessP.x <= 387 - 17 && nessP.x >= 385 - 17 && nessP.y <= 176 && nessP.y >= 175) {
      nessP.x -= 1;
    }
    if (nessP.x <= 388 - 17 && nessP.x >= 386 - 17 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.x -= 1;
    }
    if (nessP.x <= 389 - 17 && nessP.x >= 387 - 17 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.x -= 1;
    }
    if (nessP.x <= 390 - 17 && nessP.x >= 388 - 17 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.x -= 1;
    }
    if (nessP.x <= 391 - 17 && nessP.x >= 389 - 17 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.x -= 1;
    }
    if (nessP.x <= 392 - 17 && nessP.x >= 390 - 17 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.x -= 1;
    }
    if (nessP.x <= 393 - 17 && nessP.x >= 391 - 17 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.x -= 1;
    }
    if (nessP.x <= 394 - 17 && nessP.x >= 392 - 17 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.x -= 1;
    }
    if (nessP.x <= 395 - 17 && nessP.x >= 393 - 17 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.x -= 1;
    }
    if (nessP.x <= 396 - 17 && nessP.x >= 394 - 17 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.x -= 1;
    }
    if (nessP.x <= 397 - 17 && nessP.x >= 395 - 17 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.x -= 1;
    }
    if (nessP.x <= 398 - 17 && nessP.x >= 396 - 17 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.x -= 1;
    }
    if (nessP.x <= 399 - 17 && nessP.x >= 397 - 17 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.x -= 1;
    }
    if (nessP.x <= 400 - 17 && nessP.x >= 398 - 17 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.x -= 1;
    }
    if (nessP.x <= 401 - 17 && nessP.x >= 399 - 17 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.x -= 1;
    }
    if (nessP.x <= 402 - 17 && nessP.x >= 400 - 17 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.x -= 1;
    }
    if (nessP.x <= 403 - 17 && nessP.x >= 401 - 17 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.x -= 1;
    }
    if (nessP.x <= 404 - 17 && nessP.x >= 402 - 17 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.x -= 1;
    }
    if (nessP.x <= 405 - 17 && nessP.x >= 403 - 17 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.x -= 1;
    }
    if (nessP.x <= 406 - 17 && nessP.x >= 404 - 17 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.x -= 1;
    }
    if (nessP.x <= 407 - 17 && nessP.x >= 405 - 17 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.x -= 1;
    }
    if (nessP.x <= 408 - 17 && nessP.x >= 406 - 17 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.x -= 1;
    }
    if (nessP.x <= 409 - 17 && nessP.x >= 407 - 17 && nessP.y <= 154 && nessP.y >= 153) {
      nessP.x -= 1;
    }
    if (nessP.x <= 410 - 17 && nessP.x >= 408 - 17 && nessP.y <= 153 && nessP.y >= 152) {
      nessP.x -= 1;
    }
    if (nessP.x <= 411 - 17 && nessP.x >= 409 - 17 && nessP.y <= 152 && nessP.y >= 151) {
      nessP.x -= 1;
    }
    if (nessP.x <= 412 - 17 && nessP.x >= 410 - 17 && nessP.y <= 151 && nessP.y >= 150) {
      nessP.x -= 1;
    }
    if (nessP.x <= 413 - 17 && nessP.x >= 411 - 17 && nessP.y <= 150 && nessP.y >= 149) {
      nessP.x -= 1;
    }
    if (nessP.x <= 414 - 17 && nessP.x >= 412 - 17 && nessP.y <= 149 && nessP.y >= 148) {
      nessP.x -= 1;
    }
    if (nessP.x <= 415 - 17 && nessP.x >= 413 - 17 && nessP.y <= 148 && nessP.y >= 147) {
      nessP.x -= 1;
    }
    if (nessP.x <= 416 - 17 && nessP.x >= 414 - 17 && nessP.y <= 147 && nessP.y >= 146) {
      nessP.x -= 1;
    }
    if (nessP.x <= 417 - 17 && nessP.x >= 415 - 17 && nessP.y <= 146 && nessP.y >= 145) {
      nessP.x -= 1;
    }
    if (nessP.x <= 418 - 17 && nessP.x >= 416 - 17 && nessP.y <= 145 && nessP.y >= 144) {
      nessP.x -= 1;
    }
    if (nessP.x <= 419 - 17 && nessP.x >= 417 - 17 && nessP.y <= 144 && nessP.y >= 143) {
      nessP.x -= 1;
    }
    if (nessP.x <= 420 - 17 && nessP.x >= 418 - 17 && nessP.y <= 143 && nessP.y >= 142) {
      nessP.x -= 1;
    }
    if (nessP.x <= 421 - 17 && nessP.x >= 419 - 17 && nessP.y <= 142 && nessP.y >= 141) {
      nessP.x -= 1;
    }
    if (nessP.x <= 422 - 17 && nessP.x >= 420 - 17 && nessP.y <= 141 && nessP.y >= 140) {
      nessP.x -= 1;
    }
    if (nessP.x <= 423 - 17 && nessP.x >= 421 - 17 && nessP.y <= 140 && nessP.y >= 139) {
      nessP.x -= 1;
    }
    if (nessP.x <= 424 - 17 && nessP.x >= 422 - 17 && nessP.y <= 139 && nessP.y >= 138) {
      nessP.x -= 1;
    }
    if (nessP.x <= 425 - 17 && nessP.x >= 423 - 17 && nessP.y <= 138 && nessP.y >= 137) {
      nessP.x -= 1;
    }
    if (nessP.x <= 426 - 17 && nessP.x >= 424 - 17 && nessP.y <= 137 && nessP.y >= 136) {
      nessP.x -= 1;
    }
    if (nessP.x <= 427 - 17 && nessP.x >= 425 - 17 && nessP.y <= 136 && nessP.y >= 135) {
      nessP.x -= 1;
    }
    if (nessP.x <= 428 - 17 && nessP.x >= 426 - 17 && nessP.y <= 135 && nessP.y >= 134) {
      nessP.x -= 1;
    }
    if (nessP.x <= 429 - 17 && nessP.x >= 427 - 17 && nessP.y <= 134 && nessP.y >= 133) {
      nessP.x -= 1;
    }
    if (nessP.x <= 430 - 17 && nessP.x >= 428 - 17 && nessP.y <= 133 && nessP.y >= 132) {
      nessP.x -= 1;
    }
    if (nessP.x <= 431 - 17 && nessP.x >= 429 - 17 && nessP.y <= 132 && nessP.y >= 131) {
      nessP.x -= 1;
    }
    if (nessP.x <= 432 - 17 && nessP.x >= 430 - 17 && nessP.y <= 131 && nessP.y >= 130) {
      nessP.x -= 1;
    }
    if (nessP.x <= 433 - 17 && nessP.x >= 431 - 17 && nessP.y <= 130 && nessP.y >= 129) {
      nessP.x -= 1;
    }
    if (nessP.x <= 434 - 17 && nessP.x >= 432 - 17 && nessP.y <= 129 && nessP.y >= 128) {
      nessP.x -= 1;
    }
    if (nessP.x <= 435 - 17 && nessP.x >= 433 - 17 && nessP.y <= 128 && nessP.y >= 127) {
      nessP.x -= 1;
    }
    if (nessP.x <= 436 - 17 && nessP.x >= 434 - 17 && nessP.y <= 127 && nessP.y >= 126) {
      nessP.x -= 1;
    }
    if (nessP.x <= 437 - 17 && nessP.x >= 435 - 17 && nessP.y <= 126 && nessP.y >= 125) {
      nessP.x -= 1;
    }
    if (nessP.x <= 438 - 17 && nessP.x >= 436 - 17 && nessP.y <= 125 && nessP.y >= 124) {
      nessP.x -= 1;
    }
    if (nessP.x <= 439 - 17 && nessP.x >= 437 - 17 && nessP.y <= 124 && nessP.y >= 123) {
      nessP.x -= 1;
    }
    if (nessP.x <= 440 - 17 && nessP.x >= 438 - 17 && nessP.y <= 123 && nessP.y >= 122) {
      nessP.x -= 1;
    }
    if (nessP.x <= 441 - 17 && nessP.x >= 439 - 17 && nessP.y <= 122 && nessP.y >= 121) {
      nessP.x -= 1;
    }
    if (nessP.x <= 442 - 17 && nessP.x >= 440 - 17 && nessP.y <= 121 && nessP.y >= 120) {
      nessP.x -= 1;
    }
    if (nessP.x <= 443 - 17 && nessP.x >= 441 - 17 && nessP.y <= 120 && nessP.y >= 119) {
      nessP.x -= 1;
    }
    if (nessP.x <= 444 - 17 && nessP.x >= 442 - 17 && nessP.y <= 119 && nessP.y >= 118) {
      nessP.x -= 1;
    }
    if (nessP.x <= 445 - 17 && nessP.x >= 443 - 17 && nessP.y <= 118 && nessP.y >= 117) {
      nessP.x -= 1;
    }
    if (nessP.x <= 446 - 17 && nessP.x >= 444 - 17 && nessP.y <= 117 && nessP.y >= 116) {
      nessP.x -= 1;
    }
    if (nessP.x <= 447 - 17 && nessP.x >= 445 - 17 && nessP.y <= 116 && nessP.y >= 115) {
      nessP.x -= 1;
    }
    if (nessP.x <= 448 - 17 && nessP.x >= 446 - 17 && nessP.y <= 115 && nessP.y >= 114) {
      nessP.x -= 1;
    }
    if (nessP.x <= 449 - 17 && nessP.x >= 447 - 17 && nessP.y <= 114 && nessP.y >= 113) {
      nessP.x -= 1;
    }
    if (nessP.x <= 450 - 17 && nessP.x >= 448 - 17 && nessP.y <= 113 && nessP.y >= 112) {
      nessP.x -= 1;
    }
    if (nessP.x <= 451 - 17 && nessP.x >= 449 - 17 && nessP.y <= 112 && nessP.y >= 111) {
      nessP.x -= 1;
    }
    if (nessP.x <= 452 - 17 && nessP.x >= 450 - 17 && nessP.y <= 111 && nessP.y >= 110) {
      nessP.x -= 1;
    }
    if (nessP.x <= 453 - 17 && nessP.x >= 451 - 17 && nessP.y <= 110 && nessP.y >= 109) {
      nessP.x -= 1;
    }
    if (nessP.x <= 454 - 17 && nessP.x >= 452 - 17 && nessP.y <= 109 && nessP.y >= 108) {
      nessP.x -= 1;
    }
    if (nessP.x <= 455 - 17 && nessP.x >= 453 - 17 && nessP.y <= 108 && nessP.y >= 107) {
      nessP.x -= 1;
    }
    if (nessP.x <= 456 - 17 && nessP.x >= 454 - 17 && nessP.y <= 107 && nessP.y >= 106) {
      nessP.x -= 1;
    }
    if (nessP.x <= 457 - 17 && nessP.x >= 455 - 17 && nessP.y <= 106 && nessP.y >= 105) {
      nessP.x -= 1;
    }
    if (nessP.x <= 458 - 17 && nessP.x >= 456 - 17 && nessP.y <= 105 && nessP.y >= 104) {
      nessP.x -= 1;
    }
    if (nessP.x <= 459 - 17 && nessP.x >= 457 - 17 && nessP.y <= 104 && nessP.y >= 103) {
      nessP.x -= 1;
    }
    if (nessP.x <= 460 - 17 && nessP.x >= 458 - 17 && nessP.y <= 103 && nessP.y >= 102) {
      nessP.x -= 1;
    }
    if (nessP.x <= 461 - 17 && nessP.x >= 459 - 17 && nessP.y <= 102 && nessP.y >= 101) {
      nessP.x -= 1;
    }
    if (nessP.x <= 462 - 17 && nessP.x >= 460 - 17 && nessP.y <= 101 && nessP.y >= 100) {
      nessP.x -= 1;
    }
    if (nessP.x <= 463 - 17 && nessP.x >= 461 - 17 && nessP.y <= 100 && nessP.y >= 99) {
      nessP.x -= 1;
    }
    if (nessP.x <= 464 - 17 && nessP.x >= 462 - 17 && nessP.y <= 99 && nessP.y >= 98) {
      nessP.x -= 1;
    }
    if (nessP.x <= 465 - 17 && nessP.x >= 463 - 17 && nessP.y <= 98 && nessP.y >= 97) {
      nessP.x -= 1;
    }
    if (nessP.x <= 466 - 17 && nessP.x >= 464 - 17 && nessP.y <= 97 && nessP.y >= 96) {
      nessP.x -= 1;
    }
    if (nessP.x <= 467 - 17 && nessP.x >= 465 - 17 && nessP.y <= 96 && nessP.y >= 95) {
      nessP.x -= 1;
    }
    if (nessP.x <= 468 - 17 && nessP.x >= 466 - 17 && nessP.y <= 95 && nessP.y >= 94) {
      nessP.x -= 1;
    }
    if (nessP.x <= 469 - 17 && nessP.x >= 467 - 17 && nessP.y <= 94 && nessP.y >= 93) {
      nessP.x -= 1;
    }
    if (nessP.x <= 470 - 17 && nessP.x >= 468 - 17 && nessP.y <= 93 && nessP.y >= 92) {
      nessP.x -= 1;
    }
    if (nessP.x <= 471 - 17 && nessP.x >= 469 - 17 && nessP.y <= 92 && nessP.y >= 91) {
      nessP.x -= 1;
    }
    if (nessP.x <= 472 - 17 && nessP.x >= 470 - 17 && nessP.y <= 91 && nessP.y >= 90) {
      nessP.x -= 1;
    }
    if (nessP.x <= 473 - 17 && nessP.x >= 471 - 17 && nessP.y <= 90 && nessP.y >= 89) {
      nessP.x -= 1;
    }
    if (nessP.x <= 474 - 17 && nessP.x >= 472 - 17 && nessP.y <= 89 && nessP.y >= 88) {
      nessP.x -= 1;
    }
    if (nessP.x <= 475 - 17 && nessP.x >= 473 - 17 && nessP.y <= 88 && nessP.y >= 87) {
      nessP.x -= 1;
    }
    if (nessP.x <= 476 - 17 && nessP.x >= 474 - 17 && nessP.y <= 87 && nessP.y >= 86) {
      nessP.x -= 1;
    }
    if (nessP.x <= 477 - 17 && nessP.x >= 475 - 17 && nessP.y <= 86 && nessP.y >= 85) {
      nessP.x -= 1;
    }
    if (nessP.x <= 478 - 17 && nessP.x >= 476 - 17 && nessP.y <= 85 && nessP.y >= 84) {
      nessP.x -= 1;
    }
    if (nessP.x <= 479 - 17 && nessP.x >= 477 - 17 && nessP.y <= 84 && nessP.y >= 83) {
      nessP.x -= 1;
    }
    if (nessP.x <= 480 - 17 && nessP.x >= 478 - 17 && nessP.y <= 83 && nessP.y >= 82) {
      nessP.x -= 1;
    }
    if (nessP.x <= 481 - 17 && nessP.x >= 479 - 17 && nessP.y <= 82 && nessP.y >= 81) {
      nessP.x -= 1;
    }
    if (nessP.x <= 482 - 17 && nessP.x >= 480 - 17 && nessP.y <= 81 && nessP.y >= 80) {
      nessP.x -= 1;
    }
    if (nessP.x <= 483 - 17 && nessP.x >= 481 - 17 && nessP.y <= 80 && nessP.y >= 79) {
      nessP.x -= 1;
    }
    if (nessP.x <= 484 - 17 && nessP.x >= 482 - 17 && nessP.y <= 79 && nessP.y >= 78) {
      nessP.x -= 1;
    }
    if (nessP.x <= 485 - 17 && nessP.x >= 483 - 17 && nessP.y <= 78 && nessP.y >= 77) {
      nessP.x -= 1;
    }
    if (nessP.x <= 486 - 17 && nessP.x >= 484 - 17 && nessP.y <= 77 && nessP.y >= 76) {
      nessP.x -= 1;
    }
    if (nessP.x <= 487 - 17 && nessP.x >= 485 - 17 && nessP.y <= 76 && nessP.y >= 75) {
      nessP.x -= 1;
    }
    if (nessP.x <= 488 - 17 && nessP.x >= 486 - 17 && nessP.y <= 75 && nessP.y >= 74) {
      nessP.x -= 1;
    }
    if (nessP.x <= 489 - 17 && nessP.x >= 487 - 17 && nessP.y <= 74 && nessP.y >= 73) {
      nessP.x -= 1;
    }
    if (nessP.x <= 490 - 17 && nessP.x >= 488 - 17 && nessP.y <= 73 && nessP.y >= 72) {
      nessP.x -= 1;
    }
    if (nessP.x <= 491 - 17 && nessP.x >= 489 - 17 && nessP.y <= 72 && nessP.y >= 71) {
      nessP.x -= 1;
    }
  }
}

function fenceCollide1() {
  if (nessP.x >= -49 && nessP.x <= -47 && nessP.y >= 166 && nessP.y <= 176) {
    nessP.x -= 1;
  }
  if (nessP.x <= -3 && nessP.x >= -5 && nessP.y >= 149 && nessP.y <= 154) {
    nessP.x += 1;
  }
  if (nessP.y <= 161 && nessP.y >= 159 && nessP.x <= -12 && nessP.x >= -16) {
    nessP.y += 1;
  }
  if (nessP.x <= -27 && nessP.x >= -29 && nessP.y <= 176 && nessP.y >= 172) {
    nessP.x += 1;
  }

  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= -28 && nessP.x >= -30 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -27 && nessP.x >= -29 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -26 && nessP.x >= -28 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -25 && nessP.x >= -27 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -24 && nessP.x >= -26 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -23 && nessP.x >= -25 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -22 && nessP.x >= -24 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -21 && nessP.x >= -23 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -20 && nessP.x >= -22 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -19 && nessP.x >= -21 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -18 && nessP.x >= -20 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -17 && nessP.x >= -19 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= -16 && nessP.x >= -18 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= -28 && nessP.x >= -30 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.y += 1;
    }
    if (nessP.x <= -27 && nessP.x >= -29 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.y += 1;
    }
    if (nessP.x <= -26 && nessP.x >= -28 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.y += 1;
    }
    if (nessP.x <= -25 && nessP.x >= -27 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.y += 1;
    }
    if (nessP.x <= -24 && nessP.x >= -26 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.y += 1;
    }
    if (nessP.x <= -23 && nessP.x >= -25 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.y += 1;
    }
    if (nessP.x <= -22 && nessP.x >= -24 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.y += 1;
    }
    if (nessP.x <= -21 && nessP.x >= -23 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.y += 1;
    }
    if (nessP.x <= -20 && nessP.x >= -22 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.y += 1;
    }
    if (nessP.x <= -19 && nessP.x >= -21 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.y += 1;
    }
    if (nessP.x <= -18 && nessP.x >= -20 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.y += 1;
    }
    if (nessP.x <= -17 && nessP.x >= -19 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.y += 1;
    }
    if (nessP.x <= -16 && nessP.x >= -18 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.y += 1;
    }
    if (nessP.x <= -15 && nessP.x >= -17 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.y += 1;
    }
    if (nessP.x <= -14 && nessP.x >= -16 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.y += 1;
    }
    if (nessP.x <= -13 && nessP.x >= -15 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.y += 1;
    }
    if (nessP.x <= -12 && nessP.x >= -14 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.y += 1;
    }
    if (nessP.x <= -11 && nessP.x >= -13 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.y += 1;
    }
    if (nessP.x <= -10 && nessP.x >= -12 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.y += 1;
    }
    if (nessP.x <= -9 && nessP.x >= -11 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.y += 1;
    }
    if (nessP.x <= -8 && nessP.x >= -10 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= -28 && nessP.x >= -30 && nessP.y <= 175 && nessP.y >= 174) {
      nessP.x += 1;
    }
    if (nessP.x <= -27 && nessP.x >= -29 && nessP.y <= 174 && nessP.y >= 173) {
      nessP.x += 1;
    }
    if (nessP.x <= -26 && nessP.x >= -28 && nessP.y <= 173 && nessP.y >= 172) {
      nessP.x += 1;
    }
    if (nessP.x <= -25 && nessP.x >= -27 && nessP.y <= 172 && nessP.y >= 171) {
      nessP.x += 1;
    }
    if (nessP.x <= -24 && nessP.x >= -26 && nessP.y <= 171 && nessP.y >= 170) {
      nessP.x += 1;
    }
    if (nessP.x <= -23 && nessP.x >= -25 && nessP.y <= 170 && nessP.y >= 169) {
      nessP.x += 1;
    }
    if (nessP.x <= -22 && nessP.x >= -24 && nessP.y <= 169 && nessP.y >= 168) {
      nessP.x += 1;
    }
    if (nessP.x <= -21 && nessP.x >= -23 && nessP.y <= 168 && nessP.y >= 167) {
      nessP.x += 1;
    }
    if (nessP.x <= -20 && nessP.x >= -22 && nessP.y <= 167 && nessP.y >= 166) {
      nessP.x += 1;
    }
    if (nessP.x <= -19 && nessP.x >= -21 && nessP.y <= 166 && nessP.y >= 165) {
      nessP.x += 1;
    }
    if (nessP.x <= -18 && nessP.x >= -20 && nessP.y <= 165 && nessP.y >= 164) {
      nessP.x += 1;
    }
    if (nessP.x <= -17 && nessP.x >= -19 && nessP.y <= 164 && nessP.y >= 163) {
      nessP.x += 1;
    }
    if (nessP.x <= -16 && nessP.x >= -18 && nessP.y <= 163 && nessP.y >= 162) {
      nessP.x += 1;
    }
    if (nessP.x <= -15 && nessP.x >= -17 && nessP.y <= 162 && nessP.y >= 161) {
      nessP.x += 1;
    }
    if (nessP.x <= -14 && nessP.x >= -16 && nessP.y <= 161 && nessP.y >= 160) {
      nessP.x += 1;
    }
    if (nessP.x <= -13 && nessP.x >= -15 && nessP.y <= 160 && nessP.y >= 159) {
      nessP.x += 1;
    }
    if (nessP.x <= -12 && nessP.x >= -14 && nessP.y <= 159 && nessP.y >= 158) {
      nessP.x += 1;
    }
    if (nessP.x <= -11 && nessP.x >= -13 && nessP.y <= 158 && nessP.y >= 157) {
      nessP.x += 1;
    }
    if (nessP.x <= -10 && nessP.x >= -12 && nessP.y <= 157 && nessP.y >= 156) {
      nessP.x += 1;
    }
    if (nessP.x <= -9 && nessP.x >= -11 && nessP.y <= 156 && nessP.y >= 155) {
      nessP.x += 1;
    }
    if (nessP.x <= -8 && nessP.x >= -10 && nessP.y <= 155 && nessP.y >= 154) {
      nessP.x += 1;
    }
  }
}

function fenceCollide4() {
  if (nessP.y <= 614 && nessP.y >= 612 && nessP.x >= 77 && nessP.x <= 81) {
    nessP.y += 1;
  }

  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.y += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.y += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.y += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x += 1;
    }
    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x += 1;
    }
    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x += 1;
    }
  }

  if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 641 && nessP.y >= 637) {
    nessP.x += 1;
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 599 && nessP.y >= 598) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 598 && nessP.y >= 597) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 597 && nessP.y >= 596) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 596 && nessP.y >= 595) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 595 && nessP.y >= 594) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.y -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.y -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.y -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.y -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.y -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.y -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.y -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.y -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.y -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.y -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.y -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.y -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.y -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.y -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.y -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.y -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 599 && nessP.y >= 598) {
      nessP.y -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 598 && nessP.y >= 597) {
      nessP.y -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 597 && nessP.y >= 596) {
      nessP.y -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 596 && nessP.y >= 595) {
      nessP.y -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 595 && nessP.y >= 594) {
      nessP.y -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 594 && nessP.y >= 593) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x -= 1;
    }
    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x -= 1;
    }
    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.x -= 1;
    }
    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.x -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.x -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.x -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.x -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.x -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.x -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.x -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.x -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.x -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.x -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.x -= 1;
    }
    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 599 && nessP.y >= 598) {
      nessP.x -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 598 && nessP.y >= 597) {
      nessP.x -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 597 && nessP.y >= 596) {
      nessP.x -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 596 && nessP.y >= 595) {
      nessP.x -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 595 && nessP.y >= 594) {
      nessP.x -= 1;
    }
  }

  if (nessP.y >= 593 && nessP.y <= 595 && nessP.x >= 79 && nessP.x <= 102) {
    nessP.y -= 1;
  }
}

function fenceCollide5() {
  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 270 && nessP.x >= 268 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 271 && nessP.x >= 269 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 272 && nessP.x >= 270 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 273 && nessP.x >= 271 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 274 && nessP.x >= 272 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 275 && nessP.x >= 273 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 276 && nessP.x >= 274 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 277 && nessP.x >= 275 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 278 && nessP.x >= 276 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 279 && nessP.x >= 277 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 280 && nessP.x >= 278 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 281 && nessP.x >= 279 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 282 && nessP.x >= 280 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 283 && nessP.x >= 281 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 284 && nessP.x >= 282 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 285 && nessP.x >= 283 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 286 && nessP.x >= 284 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 287 && nessP.x >= 285 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 288 && nessP.x >= 286 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 289 && nessP.x >= 287 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 290 && nessP.x >= 288 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 291 && nessP.x >= 289 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 292 && nessP.x >= 290 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 293 && nessP.x >= 291 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 294 && nessP.x >= 292 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 295 && nessP.x >= 293 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 296 && nessP.x >= 294 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 297 && nessP.x >= 295 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 298 && nessP.x >= 296 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 299 && nessP.x >= 297 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 300 && nessP.x >= 298 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 301 && nessP.x >= 299 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 302 && nessP.x >= 300 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 303 && nessP.x >= 301 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 304 && nessP.x >= 302 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 305 && nessP.x >= 303 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 306 && nessP.x >= 304 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 307 && nessP.x >= 305 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 308 && nessP.x >= 306 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 309 && nessP.x >= 307 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.x += 1;
      nessP.y += 1;
    }

    if (nessP.x <= 310 && nessP.x >= 308 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 311 && nessP.x >= 309 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 312 && nessP.x >= 310 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 313 && nessP.x >= 311 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 314 && nessP.x >= 312 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 315 && nessP.x >= 313 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.x += 1;
      nessP.y += 1;
    }
    if (nessP.x <= 316 && nessP.x >= 314 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.x += 1;
      nessP.y += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 270 && nessP.x >= 268 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.y += 1;
    }
    if (nessP.x <= 271 && nessP.x >= 269 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.y += 1;
    }
    if (nessP.x <= 272 && nessP.x >= 270 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.y += 1;
    }
    if (nessP.x <= 273 && nessP.x >= 271 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.y += 1;
    }
    if (nessP.x <= 274 && nessP.x >= 272 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.y += 1;
    }
    if (nessP.x <= 275 && nessP.x >= 273 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.y += 1;
    }
    if (nessP.x <= 276 && nessP.x >= 274 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y += 1;
    }
    if (nessP.x <= 277 && nessP.x >= 275 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y += 1;
    }
    if (nessP.x <= 278 && nessP.x >= 276 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y += 1;
    }
    if (nessP.x <= 279 && nessP.x >= 277 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y += 1;
    }

    if (nessP.x <= 280 && nessP.x >= 278 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y += 1;
    }
    if (nessP.x <= 281 && nessP.x >= 279 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y += 1;
    }
    if (nessP.x <= 282 && nessP.x >= 280 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y += 1;
    }
    if (nessP.x <= 283 && nessP.x >= 281 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y += 1;
    }
    if (nessP.x <= 284 && nessP.x >= 282 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y += 1;
    }
    if (nessP.x <= 285 && nessP.x >= 283 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y += 1;
    }
    if (nessP.x <= 286 && nessP.x >= 284 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y += 1;
    }
    if (nessP.x <= 287 && nessP.x >= 285 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y += 1;
    }
    if (nessP.x <= 288 && nessP.x >= 286 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y += 1;
    }
    if (nessP.x <= 289 && nessP.x >= 287 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y += 1;
    }

    if (nessP.x <= 290 && nessP.x >= 288 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y += 1;
    }
    if (nessP.x <= 291 && nessP.x >= 289 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y += 1;
    }
    if (nessP.x <= 292 && nessP.x >= 290 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y += 1;
    }
    if (nessP.x <= 293 && nessP.x >= 291 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y += 1;
    }
    if (nessP.x <= 294 && nessP.x >= 292 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y += 1;
    }
    if (nessP.x <= 295 && nessP.x >= 293 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y += 1;
    }
    if (nessP.x <= 296 && nessP.x >= 294 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y += 1;
    }
    if (nessP.x <= 297 && nessP.x >= 295 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y += 1;
    }
    if (nessP.x <= 298 && nessP.x >= 296 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y += 1;
    }
    if (nessP.x <= 299 && nessP.x >= 297 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y += 1;
    }

    if (nessP.x <= 300 && nessP.x >= 298 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y += 1;
    }
    if (nessP.x <= 301 && nessP.x >= 299 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.y += 1;
    }
    if (nessP.x <= 302 && nessP.x >= 300 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.y += 1;
    }
    if (nessP.x <= 303 && nessP.x >= 301 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.y += 1;
    }
    if (nessP.x <= 304 && nessP.x >= 302 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.y += 1;
    }
    if (nessP.x <= 305 && nessP.x >= 303 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.y += 1;
    }
    if (nessP.x <= 306 && nessP.x >= 304 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.y += 1;
    }
    if (nessP.x <= 307 && nessP.x >= 305 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.y += 1;
    }
    if (nessP.x <= 308 && nessP.x >= 306 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.y += 1;
    }
    if (nessP.x <= 309 && nessP.x >= 307 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.y += 1;
    }

    if (nessP.x <= 310 && nessP.x >= 308 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.y += 1;
    }
    if (nessP.x <= 311 && nessP.x >= 309 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.y += 1;
    }
    if (nessP.x <= 312 && nessP.x >= 310 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.y += 1;
    }
    if (nessP.x <= 313 && nessP.x >= 311 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.y += 1;
    }
    if (nessP.x <= 314 && nessP.x >= 312 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.y += 1;
    }
    if (nessP.x <= 315 && nessP.x >= 313 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.y += 1;
    }
    if (nessP.x <= 316 && nessP.x >= 314 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 270 && nessP.x >= 268 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.x += 1;
    }
    if (nessP.x <= 271 && nessP.x >= 269 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.x += 1;
    }
    if (nessP.x <= 272 && nessP.x >= 270 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.x += 1;
    }
    if (nessP.x <= 273 && nessP.x >= 271 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.x += 1;
    }
    if (nessP.x <= 274 && nessP.x >= 272 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.x += 1;
    }
    if (nessP.x <= 275 && nessP.x >= 273 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.x += 1;
    }
    if (nessP.x <= 276 && nessP.x >= 274 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x += 1;
    }
    if (nessP.x <= 277 && nessP.x >= 275 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x += 1;
    }
    if (nessP.x <= 278 && nessP.x >= 276 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x += 1;
    }
    if (nessP.x <= 279 && nessP.x >= 277 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x += 1;
    }

    if (nessP.x <= 280 && nessP.x >= 278 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x += 1;
    }
    if (nessP.x <= 281 && nessP.x >= 279 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x += 1;
    }
    if (nessP.x <= 282 && nessP.x >= 280 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x += 1;
    }
    if (nessP.x <= 283 && nessP.x >= 281 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x += 1;
    }
    if (nessP.x <= 284 && nessP.x >= 282 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x += 1;
    }
    if (nessP.x <= 285 && nessP.x >= 283 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x += 1;
    }
    if (nessP.x <= 286 && nessP.x >= 284 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x += 1;
    }
    if (nessP.x <= 287 && nessP.x >= 285 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x += 1;
    }
    if (nessP.x <= 288 && nessP.x >= 286 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x += 1;
    }
    if (nessP.x <= 289 && nessP.x >= 287 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x += 1;
    }

    if (nessP.x <= 290 && nessP.x >= 288 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x += 1;
    }
    if (nessP.x <= 291 && nessP.x >= 289 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x += 1;
    }
    if (nessP.x <= 292 && nessP.x >= 290 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x += 1;
    }
    if (nessP.x <= 293 && nessP.x >= 291 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x += 1;
    }
    if (nessP.x <= 294 && nessP.x >= 292 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x += 1;
    }
    if (nessP.x <= 295 && nessP.x >= 293 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x += 1;
    }
    if (nessP.x <= 296 && nessP.x >= 294 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x += 1;
    }
    if (nessP.x <= 297 && nessP.x >= 295 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x += 1;
    }
    if (nessP.x <= 298 && nessP.x >= 296 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x += 1;
    }
    if (nessP.x <= 299 && nessP.x >= 297 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x += 1;
    }

    if (nessP.x <= 300 && nessP.x >= 298 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x += 1;
    }
    if (nessP.x <= 301 && nessP.x >= 299 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x += 1;
    }
    if (nessP.x <= 302 && nessP.x >= 300 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x += 1;
    }
    if (nessP.x <= 303 && nessP.x >= 301 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x += 1;
    }
    if (nessP.x <= 304 && nessP.x >= 302 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x += 1;
    }
    if (nessP.x <= 305 && nessP.x >= 303 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.x += 1;
    }
    if (nessP.x <= 306 && nessP.x >= 304 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.x += 1;
    }
    if (nessP.x <= 307 && nessP.x >= 305 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.x += 1;
    }
    if (nessP.x <= 308 && nessP.x >= 306 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.x += 1;
    }
    if (nessP.x <= 309 && nessP.x >= 307 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.x += 1;
    }

    if (nessP.x <= 310 && nessP.x >= 308 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.x += 1;
    }
    if (nessP.x <= 311 && nessP.x >= 309 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.x += 1;
    }
    if (nessP.x <= 312 && nessP.x >= 310 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.x += 1;
    }
    if (nessP.x <= 313 && nessP.x >= 311 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.x += 1;
    }
    if (nessP.x <= 314 && nessP.x >= 312 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.x += 1;
    }
    if (nessP.x <= 315 && nessP.x >= 313 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.x += 1;
    }
    if (nessP.x <= 316 && nessP.x >= 314 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.x += 1;
    }
  }

  if (nessP.y <= 601 && nessP.y >= 599 && nessP.x >= 314 && nessP.x <= 318) {
    nessP.y += 1;
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 270 - 17 && nessP.x >= 268 - 17 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 271 - 17 && nessP.x >= 269 - 17 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 272 - 17 && nessP.x >= 270 - 17 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 273 - 17 && nessP.x >= 271 - 17 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 274 - 17 && nessP.x >= 272 - 17 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 275 - 17 && nessP.x >= 273 - 17 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 276 - 17 && nessP.x >= 274 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 277 - 17 && nessP.x >= 275 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 278 - 17 && nessP.x >= 276 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 279 - 17 && nessP.x >= 277 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 280 - 17 && nessP.x >= 278 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 281 - 17 && nessP.x >= 279 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 282 - 17 && nessP.x >= 280 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 283 - 17 && nessP.x >= 281 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 284 - 17 && nessP.x >= 282 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 285 - 17 && nessP.x >= 283 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 286 - 17 && nessP.x >= 284 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 287 - 17 && nessP.x >= 285 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 288 - 17 && nessP.x >= 286 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 289 - 17 && nessP.x >= 287 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 290 - 17 && nessP.x >= 288 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 291 - 17 && nessP.x >= 289 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 292 - 17 && nessP.x >= 290 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 293 - 17 && nessP.x >= 291 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 294 - 17 && nessP.x >= 292 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 295 - 17 && nessP.x >= 293 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 296 - 17 && nessP.x >= 294 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 297 - 17 && nessP.x >= 295 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 298 - 17 && nessP.x >= 296 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 299 - 17 && nessP.x >= 297 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 300 - 17 && nessP.x >= 298 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 301 - 17 && nessP.x >= 299 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 302 - 17 && nessP.x >= 300 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 303 - 17 && nessP.x >= 301 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 304 - 17 && nessP.x >= 302 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 305 - 17 && nessP.x >= 303 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 306 - 17 && nessP.x >= 304 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 307 - 17 && nessP.x >= 305 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 308 - 17 && nessP.x >= 306 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 309 - 17 && nessP.x >= 307 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.x -= 1;
      nessP.y -= 1;
    }

    if (nessP.x <= 310 - 17 && nessP.x >= 308 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 311 - 17 && nessP.x >= 309 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 312 - 17 && nessP.x >= 310 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 313 - 17 && nessP.x >= 311 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 314 - 17 && nessP.x >= 312 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 315 - 17 && nessP.x >= 313 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.x <= 316 - 17 && nessP.x >= 314 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 270 - 17 && nessP.x >= 268 - 17 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.y -= 1;
    }
    if (nessP.x <= 271 - 17 && nessP.x >= 269 - 17 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.y -= 1;
    }
    if (nessP.x <= 272 - 17 && nessP.x >= 270 - 17 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.y -= 1;
    }
    if (nessP.x <= 273 - 17 && nessP.x >= 271 - 17 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.y -= 1;
    }
    if (nessP.x <= 274 - 17 && nessP.x >= 272 - 17 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.y -= 1;
    }
    if (nessP.x <= 275 - 17 && nessP.x >= 273 - 17 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.y -= 1;
    }
    if (nessP.x <= 276 - 17 && nessP.x >= 274 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.y -= 1;
    }
    if (nessP.x <= 277 - 17 && nessP.x >= 275 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.y -= 1;
    }
    if (nessP.x <= 278 - 17 && nessP.x >= 276 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.y -= 1;
    }
    if (nessP.x <= 279 - 17 && nessP.x >= 277 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.y -= 1;
    }

    if (nessP.x <= 280 - 17 && nessP.x >= 278 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.y -= 1;
    }
    if (nessP.x <= 281 - 17 && nessP.x >= 279 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.y -= 1;
    }
    if (nessP.x <= 282 - 17 && nessP.x >= 280 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.y -= 1;
    }
    if (nessP.x <= 283 - 17 && nessP.x >= 281 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.y -= 1;
    }
    if (nessP.x <= 284 - 17 && nessP.x >= 282 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.y -= 1;
    }
    if (nessP.x <= 285 - 17 && nessP.x >= 283 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.y -= 1;
    }
    if (nessP.x <= 286 - 17 && nessP.x >= 284 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.y -= 1;
    }
    if (nessP.x <= 287 - 17 && nessP.x >= 285 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.y -= 1;
    }
    if (nessP.x <= 288 - 17 && nessP.x >= 286 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.y -= 1;
    }
    if (nessP.x <= 289 - 17 && nessP.x >= 287 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.y -= 1;
    }

    if (nessP.x <= 290 - 17 && nessP.x >= 288 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.y -= 1;
    }
    if (nessP.x <= 291 - 17 && nessP.x >= 289 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.y -= 1;
    }
    if (nessP.x <= 292 - 17 && nessP.x >= 290 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.y -= 1;
    }
    if (nessP.x <= 293 - 17 && nessP.x >= 291 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.y -= 1;
    }
    if (nessP.x <= 294 - 17 && nessP.x >= 292 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.y -= 1;
    }
    if (nessP.x <= 295 - 17 && nessP.x >= 293 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.y -= 1;
    }
    if (nessP.x <= 296 - 17 && nessP.x >= 294 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.y -= 1;
    }
    if (nessP.x <= 297 - 17 && nessP.x >= 295 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.y -= 1;
    }
    if (nessP.x <= 298 - 17 && nessP.x >= 296 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.y -= 1;
    }
    if (nessP.x <= 299 - 17 && nessP.x >= 297 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.y -= 1;
    }

    if (nessP.x <= 300 - 17 && nessP.x >= 298 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.y -= 1;
    }
    if (nessP.x <= 301 - 17 && nessP.x >= 299 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.y -= 1;
    }
    if (nessP.x <= 302 - 17 && nessP.x >= 300 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.y -= 1;
    }
    if (nessP.x <= 303 - 17 && nessP.x >= 301 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.y -= 1;
    }
    if (nessP.x <= 304 - 17 && nessP.x >= 302 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.y -= 1;
    }
    if (nessP.x <= 305 - 17 && nessP.x >= 303 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.y -= 1;
    }
    if (nessP.x <= 306 - 17 && nessP.x >= 304 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.y -= 1;
    }
    if (nessP.x <= 307 - 17 && nessP.x >= 305 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.y -= 1;
    }
    if (nessP.x <= 308 - 17 && nessP.x >= 306 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.y -= 1;
    }
    if (nessP.x <= 309 - 17 && nessP.x >= 307 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.y -= 1;
    }

    if (nessP.x <= 310 - 17 && nessP.x >= 308 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.y -= 1;
    }
    if (nessP.x <= 311 - 17 && nessP.x >= 309 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.y -= 1;
    }
    if (nessP.x <= 312 - 17 && nessP.x >= 310 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.y -= 1;
    }
    if (nessP.x <= 313 - 17 && nessP.x >= 311 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.y -= 1;
    }
    if (nessP.x <= 314 - 17 && nessP.x >= 312 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.y -= 1;
    }
    if (nessP.x <= 315 - 17 && nessP.x >= 313 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.y -= 1;
    }
    if (nessP.x <= 316 - 17 && nessP.x >= 314 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 270 - 17 && nessP.x >= 268 - 17 && nessP.y <= 646 && nessP.y >= 645) {
      nessP.x -= 1;
    }
    if (nessP.x <= 271 - 17 && nessP.x >= 269 - 17 && nessP.y <= 645 && nessP.y >= 644) {
      nessP.x -= 1;
    }
    if (nessP.x <= 272 - 17 && nessP.x >= 270 - 17 && nessP.y <= 644 && nessP.y >= 643) {
      nessP.x -= 1;
    }
    if (nessP.x <= 273 - 17 && nessP.x >= 271 - 17 && nessP.y <= 643 && nessP.y >= 642) {
      nessP.x -= 1;
    }
    if (nessP.x <= 274 - 17 && nessP.x >= 272 - 17 && nessP.y <= 642 && nessP.y >= 641) {
      nessP.x -= 1;
    }
    if (nessP.x <= 275 - 17 && nessP.x >= 273 - 17 && nessP.y <= 641 && nessP.y >= 640) {
      nessP.x -= 1;
    }
    if (nessP.x <= 276 - 17 && nessP.x >= 274 - 17 && nessP.y <= 640 && nessP.y >= 639) {
      nessP.x -= 1;
    }
    if (nessP.x <= 277 - 17 && nessP.x >= 275 - 17 && nessP.y <= 639 && nessP.y >= 638) {
      nessP.x -= 1;
    }
    if (nessP.x <= 278 - 17 && nessP.x >= 276 - 17 && nessP.y <= 638 && nessP.y >= 637) {
      nessP.x -= 1;
    }
    if (nessP.x <= 279 - 17 && nessP.x >= 277 - 17 && nessP.y <= 637 && nessP.y >= 636) {
      nessP.x -= 1;
    }

    if (nessP.x <= 280 - 17 && nessP.x >= 278 - 17 && nessP.y <= 636 && nessP.y >= 635) {
      nessP.x -= 1;
    }
    if (nessP.x <= 281 - 17 && nessP.x >= 279 - 17 && nessP.y <= 635 && nessP.y >= 634) {
      nessP.x -= 1;
    }
    if (nessP.x <= 282 - 17 && nessP.x >= 280 - 17 && nessP.y <= 634 && nessP.y >= 633) {
      nessP.x -= 1;
    }
    if (nessP.x <= 283 - 17 && nessP.x >= 281 - 17 && nessP.y <= 633 && nessP.y >= 632) {
      nessP.x -= 1;
    }
    if (nessP.x <= 284 - 17 && nessP.x >= 282 - 17 && nessP.y <= 632 && nessP.y >= 631) {
      nessP.x -= 1;
    }
    if (nessP.x <= 285 - 17 && nessP.x >= 283 - 17 && nessP.y <= 631 && nessP.y >= 630) {
      nessP.x -= 1;
    }
    if (nessP.x <= 286 - 17 && nessP.x >= 284 - 17 && nessP.y <= 630 && nessP.y >= 629) {
      nessP.x -= 1;
    }
    if (nessP.x <= 287 - 17 && nessP.x >= 285 - 17 && nessP.y <= 629 && nessP.y >= 628) {
      nessP.x -= 1;
    }
    if (nessP.x <= 288 - 17 && nessP.x >= 286 - 17 && nessP.y <= 628 && nessP.y >= 627) {
      nessP.x -= 1;
    }
    if (nessP.x <= 289 - 17 && nessP.x >= 287 - 17 && nessP.y <= 627 && nessP.y >= 626) {
      nessP.x -= 1;
    }

    if (nessP.x <= 290 - 17 && nessP.x >= 288 - 17 && nessP.y <= 626 && nessP.y >= 625) {
      nessP.x -= 1;
    }
    if (nessP.x <= 291 - 17 && nessP.x >= 289 - 17 && nessP.y <= 625 && nessP.y >= 624) {
      nessP.x -= 1;
    }
    if (nessP.x <= 292 - 17 && nessP.x >= 290 - 17 && nessP.y <= 624 && nessP.y >= 623) {
      nessP.x -= 1;
    }
    if (nessP.x <= 293 - 17 && nessP.x >= 291 - 17 && nessP.y <= 623 && nessP.y >= 622) {
      nessP.x -= 1;
    }
    if (nessP.x <= 294 - 17 && nessP.x >= 292 - 17 && nessP.y <= 622 && nessP.y >= 621) {
      nessP.x -= 1;
    }
    if (nessP.x <= 295 - 17 && nessP.x >= 293 - 17 && nessP.y <= 621 && nessP.y >= 620) {
      nessP.x -= 1;
    }
    if (nessP.x <= 296 - 17 && nessP.x >= 294 - 17 && nessP.y <= 620 && nessP.y >= 619) {
      nessP.x -= 1;
    }
    if (nessP.x <= 297 - 17 && nessP.x >= 295 - 17 && nessP.y <= 619 && nessP.y >= 618) {
      nessP.x -= 1;
    }
    if (nessP.x <= 298 - 17 && nessP.x >= 296 - 17 && nessP.y <= 618 && nessP.y >= 617) {
      nessP.x -= 1;
    }
    if (nessP.x <= 299 - 17 && nessP.x >= 297 - 17 && nessP.y <= 617 && nessP.y >= 616) {
      nessP.x -= 1;
    }

    if (nessP.x <= 300 - 17 && nessP.x >= 298 - 17 && nessP.y <= 616 && nessP.y >= 615) {
      nessP.x -= 1;
    }
    if (nessP.x <= 301 - 17 && nessP.x >= 299 - 17 && nessP.y <= 615 && nessP.y >= 614) {
      nessP.x -= 1;
    }
    if (nessP.x <= 302 - 17 && nessP.x >= 300 - 17 && nessP.y <= 614 && nessP.y >= 613) {
      nessP.x -= 1;
    }
    if (nessP.x <= 303 - 17 && nessP.x >= 301 - 17 && nessP.y <= 613 && nessP.y >= 612) {
      nessP.x -= 1;
    }
    if (nessP.x <= 304 - 17 && nessP.x >= 302 - 17 && nessP.y <= 612 && nessP.y >= 611) {
      nessP.x -= 1;
    }
    if (nessP.x <= 305 - 17 && nessP.x >= 303 - 17 && nessP.y <= 611 && nessP.y >= 610) {
      nessP.x -= 1;
    }
    if (nessP.x <= 306 - 17 && nessP.x >= 304 - 17 && nessP.y <= 610 && nessP.y >= 609) {
      nessP.x -= 1;
    }
    if (nessP.x <= 307 - 17 && nessP.x >= 305 - 17 && nessP.y <= 609 && nessP.y >= 608) {
      nessP.x -= 1;
    }
    if (nessP.x <= 308 - 17 && nessP.x >= 306 - 17 && nessP.y <= 608 && nessP.y >= 607) {
      nessP.x -= 1;
    }
    if (nessP.x <= 309 - 17 && nessP.x >= 307 - 17 && nessP.y <= 607 && nessP.y >= 606) {
      nessP.x -= 1;
    }

    if (nessP.x <= 310 - 17 && nessP.x >= 308 - 17 && nessP.y <= 606 && nessP.y >= 605) {
      nessP.x -= 1;
    }
    if (nessP.x <= 311 - 17 && nessP.x >= 309 - 17 && nessP.y <= 605 && nessP.y >= 604) {
      nessP.x -= 1;
    }
    if (nessP.x <= 312 - 17 && nessP.x >= 310 - 17 && nessP.y <= 604 && nessP.y >= 603) {
      nessP.x -= 1;
    }
    if (nessP.x <= 313 - 17 && nessP.x >= 311 - 17 && nessP.y <= 603 && nessP.y >= 602) {
      nessP.x -= 1;
    }
    if (nessP.x <= 314 - 17 && nessP.x >= 312 - 17 && nessP.y <= 602 && nessP.y >= 601) {
      nessP.x -= 1;
    }
    if (nessP.x <= 315 - 17 && nessP.x >= 313 - 17 && nessP.y <= 601 && nessP.y >= 600) {
      nessP.x -= 1;
    }
    if (nessP.x <= 316 - 17 && nessP.x >= 314 - 17 && nessP.y <= 600 && nessP.y >= 599) {
      nessP.x -= 1;
    }
  }

  if (nessP.x >= 296 && nessP.x <= 298 && nessP.y >= 598 && nessP.y <= 602) {
    nessP.x -= 1;
  }
}

function fenceCollide6() {
  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y += 1;
    }

    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y += 1;
    }

    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y += 1;
    }

    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y += 1;
    }
    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 52 && nessP.x >= 50 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.x += 1;
    }
    if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.x += 1;
    }
    if (nessP.x <= 54 && nessP.x >= 52 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.x += 1;
    }
    if (nessP.x <= 55 && nessP.x >= 53 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.x += 1;
    }
    if (nessP.x <= 56 && nessP.x >= 54 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.x += 1;
    }
    if (nessP.x <= 57 && nessP.x >= 55 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.x += 1;
    }
    if (nessP.x <= 58 && nessP.x >= 56 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.x += 1;
    }
    if (nessP.x <= 59 && nessP.x >= 57 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.x += 1;
    }
    if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.x += 1;
    }
    if (nessP.x <= 61 && nessP.x >= 59 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.x += 1;
    }

    if (nessP.x <= 62 && nessP.x >= 60 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.x += 1;
    }
    if (nessP.x <= 63 && nessP.x >= 61 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.x += 1;
    }
    if (nessP.x <= 64 && nessP.x >= 62 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.x += 1;
    }
    if (nessP.x <= 65 && nessP.x >= 63 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.x += 1;
    }
    if (nessP.x <= 66 && nessP.x >= 64 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.x += 1;
    }
    if (nessP.x <= 67 && nessP.x >= 65 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.x += 1;
    }
    if (nessP.x <= 68 && nessP.x >= 66 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.x += 1;
    }
    if (nessP.x <= 69 && nessP.x >= 67 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.x += 1;
    }
    if (nessP.x <= 70 && nessP.x >= 68 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.x += 1;
    }
    if (nessP.x <= 71 && nessP.x >= 69 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.x += 1;
    }

    if (nessP.x <= 72 && nessP.x >= 70 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.x += 1;
    }
    if (nessP.x <= 73 && nessP.x >= 71 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.x += 1;
    }
    if (nessP.x <= 74 && nessP.x >= 72 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.x += 1;
    }
    if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.x += 1;
    }
    if (nessP.x <= 76 && nessP.x >= 74 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.x += 1;
    }
    if (nessP.x <= 77 && nessP.x >= 75 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.x += 1;
    }
    if (nessP.x <= 78 && nessP.x >= 76 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.x += 1;
    }
    if (nessP.x <= 79 && nessP.x >= 77 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.x += 1;
    }
    if (nessP.x <= 80 && nessP.x >= 78 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.x += 1;
    }
    if (nessP.x <= 81 && nessP.x >= 79 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.x += 1;
    }

    if (nessP.x <= 82 && nessP.x >= 80 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.x += 1;
    }
    if (nessP.x <= 83 && nessP.x >= 81 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.x += 1;
    }
    if (nessP.x <= 84 && nessP.x >= 82 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.x += 1;
    }
    if (nessP.x <= 85 && nessP.x >= 83 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.x += 1;
    }
    if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.x += 1;
    }
    if (nessP.x <= 87 && nessP.x >= 85 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.x += 1;
    }
    if (nessP.x <= 88 && nessP.x >= 86 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.x += 1;
    }
    if (nessP.x <= 89 && nessP.x >= 87 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.x += 1;
    }
    if (nessP.x <= 90 && nessP.x >= 88 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.x += 1;
    }
    if (nessP.x <= 91 && nessP.x >= 89 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.x += 1;
    }
    if (nessP.x <= 92 && nessP.x >= 90 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.x += 1;
    }
  }

  if (nessP.x <= 53 && nessP.x >= 51 && nessP.y <= 737 && nessP.y >= 733) {
    nessP.x += 1;
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 694 && nessP.y >= 693) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 693 && nessP.y >= 692) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 692 && nessP.y >= 691) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 691 && nessP.y >= 690) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 690 && nessP.y >= 689) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y -= 1;
    }

    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y -= 1;
    }

    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y -= 1;
    }

    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y -= 1;
    }

    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 694 && nessP.y >= 693) {
      nessP.y -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 693 && nessP.y >= 692) {
      nessP.y -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 692 && nessP.y >= 691) {
      nessP.y -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 691 && nessP.y >= 690) {
      nessP.y -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 690 && nessP.y >= 689) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 52 - 17 && nessP.x >= 50 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.x -= 1;
    }
    if (nessP.x <= 53 - 17 && nessP.x >= 51 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.x -= 1;
    }
    if (nessP.x <= 54 - 17 && nessP.x >= 52 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.x -= 1;
    }
    if (nessP.x <= 55 - 17 && nessP.x >= 53 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.x -= 1;
    }
    if (nessP.x <= 56 - 17 && nessP.x >= 54 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.x -= 1;
    }
    if (nessP.x <= 57 - 17 && nessP.x >= 55 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.x -= 1;
    }
    if (nessP.x <= 58 - 17 && nessP.x >= 56 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.x -= 1;
    }
    if (nessP.x <= 59 - 17 && nessP.x >= 57 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.x -= 1;
    }
    if (nessP.x <= 60 - 17 && nessP.x >= 58 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.x -= 1;
    }
    if (nessP.x <= 61 - 17 && nessP.x >= 59 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.x -= 1;
    }

    if (nessP.x <= 62 - 17 && nessP.x >= 60 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.x -= 1;
    }
    if (nessP.x <= 63 - 17 && nessP.x >= 61 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.x -= 1;
    }
    if (nessP.x <= 64 - 17 && nessP.x >= 62 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.x -= 1;
    }
    if (nessP.x <= 65 - 17 && nessP.x >= 63 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.x -= 1;
    }
    if (nessP.x <= 66 - 17 && nessP.x >= 64 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.x -= 1;
    }
    if (nessP.x <= 67 - 17 && nessP.x >= 65 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.x -= 1;
    }
    if (nessP.x <= 68 - 17 && nessP.x >= 66 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.x -= 1;
    }
    if (nessP.x <= 69 - 17 && nessP.x >= 67 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.x -= 1;
    }
    if (nessP.x <= 70 - 17 && nessP.x >= 68 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.x -= 1;
    }
    if (nessP.x <= 71 - 17 && nessP.x >= 69 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.x -= 1;
    }

    if (nessP.x <= 72 - 17 && nessP.x >= 70 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.x -= 1;
    }
    if (nessP.x <= 73 - 17 && nessP.x >= 71 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.x -= 1;
    }
    if (nessP.x <= 74 - 17 && nessP.x >= 72 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.x -= 1;
    }
    if (nessP.x <= 75 - 17 && nessP.x >= 73 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.x -= 1;
    }
    if (nessP.x <= 76 - 17 && nessP.x >= 74 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.x -= 1;
    }
    if (nessP.x <= 77 - 17 && nessP.x >= 75 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.x -= 1;
    }
    if (nessP.x <= 78 - 17 && nessP.x >= 76 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.x -= 1;
    }
    if (nessP.x <= 79 - 17 && nessP.x >= 77 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.x -= 1;
    }
    if (nessP.x <= 80 - 17 && nessP.x >= 78 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.x -= 1;
    }
    if (nessP.x <= 81 - 17 && nessP.x >= 79 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.x -= 1;
    }

    if (nessP.x <= 82 - 17 && nessP.x >= 80 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.x -= 1;
    }
    if (nessP.x <= 83 - 17 && nessP.x >= 81 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.x -= 1;
    }
    if (nessP.x <= 84 - 17 && nessP.x >= 82 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.x -= 1;
    }
    if (nessP.x <= 85 - 17 && nessP.x >= 83 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.x -= 1;
    }
    if (nessP.x <= 86 - 17 && nessP.x >= 84 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.x -= 1;
    }
    if (nessP.x <= 87 - 17 && nessP.x >= 85 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.x -= 1;
    }
    if (nessP.x <= 88 - 17 && nessP.x >= 86 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.x -= 1;
    }
    if (nessP.x <= 89 - 17 && nessP.x >= 87 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.x -= 1;
    }
    if (nessP.x <= 90 - 17 && nessP.x >= 88 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.x -= 1;
    }
    if (nessP.x <= 91 - 17 && nessP.x >= 89 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.x -= 1;
    }
    if (nessP.x <= 92 - 17 && nessP.x >= 90 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.x -= 1;
    }

    if (nessP.x <= 93 - 17 && nessP.x >= 91 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.x -= 1;
    }
    if (nessP.x <= 94 - 17 && nessP.x >= 92 - 17 && nessP.y <= 694 && nessP.y >= 693) {
      nessP.x -= 1;
    }
    if (nessP.x <= 95 - 17 && nessP.x >= 93 - 17 && nessP.y <= 693 && nessP.y >= 692) {
      nessP.x -= 1;
    }
    if (nessP.x <= 96 - 17 && nessP.x >= 94 - 17 && nessP.y <= 692 && nessP.y >= 691) {
      nessP.x -= 1;
    }
    if (nessP.x <= 97 - 17 && nessP.x >= 95 - 17 && nessP.y <= 691 && nessP.y >= 690) {
      nessP.x -= 1;
    }
    if (nessP.x <= 98 - 17 && nessP.x >= 96 - 17 && nessP.y <= 690 && nessP.y >= 689) {
      nessP.x -= 1;
    }
  }
}

function fenceCollide7() {
  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 174 && nessP.x >= 172 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 175 && nessP.x >= 173 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 176 && nessP.x >= 174 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 177 && nessP.x >= 175 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 178 && nessP.x >= 176 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 179 && nessP.x >= 177 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 180 && nessP.x >= 178 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 181 && nessP.x >= 179 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 182 && nessP.x >= 180 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 183 && nessP.x >= 181 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 184 && nessP.x >= 182 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 185 && nessP.x >= 183 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 186 && nessP.x >= 184 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 187 && nessP.x >= 185 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 188 && nessP.x >= 186 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 189 && nessP.x >= 187 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 190 && nessP.x >= 188 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 191 && nessP.x >= 189 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 192 && nessP.x >= 190 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 193 && nessP.x >= 191 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 194 && nessP.x >= 192 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 195 && nessP.x >= 193 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 196 && nessP.x >= 194 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 197 && nessP.x >= 195 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 198 && nessP.x >= 196 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 199 && nessP.x >= 197 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 200 && nessP.x >= 198 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 201 && nessP.x >= 199 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 202 && nessP.x >= 200 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 203 && nessP.x >= 201 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 204 && nessP.x >= 202 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 205 && nessP.x >= 203 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 206 && nessP.x >= 204 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 207 && nessP.x >= 205 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 208 && nessP.x >= 206 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 209 && nessP.x >= 207 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 210 && nessP.x >= 208 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 211 && nessP.x >= 209 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 212 && nessP.x >= 210 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 213 && nessP.x >= 211 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y += 1;
      nessP.x += 1;
    }

    if (nessP.x <= 214 && nessP.x >= 212 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 215 && nessP.x >= 213 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 216 && nessP.x >= 214 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 217 && nessP.x >= 215 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 218 && nessP.x >= 216 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 219 && nessP.x >= 217 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 220 && nessP.x >= 218 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 221 && nessP.x >= 219 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 174 && nessP.x >= 172 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.y += 1;
    }
    if (nessP.x <= 175 && nessP.x >= 173 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.y += 1;
    }
    if (nessP.x <= 176 && nessP.x >= 174 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.y += 1;
    }
    if (nessP.x <= 177 && nessP.x >= 175 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.y += 1;
    }
    if (nessP.x <= 178 && nessP.x >= 176 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.y += 1;
    }
    if (nessP.x <= 179 && nessP.x >= 177 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.y += 1;
    }
    if (nessP.x <= 180 && nessP.x >= 178 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y += 1;
    }
    if (nessP.x <= 181 && nessP.x >= 179 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y += 1;
    }
    if (nessP.x <= 182 && nessP.x >= 180 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y += 1;
    }
    if (nessP.x <= 183 && nessP.x >= 181 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y += 1;
    }

    if (nessP.x <= 184 && nessP.x >= 182 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y += 1;
    }
    if (nessP.x <= 185 && nessP.x >= 183 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y += 1;
    }
    if (nessP.x <= 186 && nessP.x >= 184 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y += 1;
    }
    if (nessP.x <= 187 && nessP.x >= 185 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y += 1;
    }
    if (nessP.x <= 188 && nessP.x >= 186 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y += 1;
    }
    if (nessP.x <= 189 && nessP.x >= 187 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y += 1;
    }
    if (nessP.x <= 190 && nessP.x >= 188 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y += 1;
    }
    if (nessP.x <= 191 && nessP.x >= 189 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y += 1;
    }
    if (nessP.x <= 192 && nessP.x >= 190 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y += 1;
    }
    if (nessP.x <= 193 && nessP.x >= 191 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y += 1;
    }

    if (nessP.x <= 194 && nessP.x >= 192 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y += 1;
    }
    if (nessP.x <= 195 && nessP.x >= 193 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y += 1;
    }
    if (nessP.x <= 196 && nessP.x >= 194 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y += 1;
    }
    if (nessP.x <= 197 && nessP.x >= 195 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y += 1;
    }
    if (nessP.x <= 198 && nessP.x >= 196 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y += 1;
    }
    if (nessP.x <= 199 && nessP.x >= 197 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y += 1;
    }
    if (nessP.x <= 200 && nessP.x >= 198 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y += 1;
    }
    if (nessP.x <= 201 && nessP.x >= 199 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y += 1;
    }
    if (nessP.x <= 202 && nessP.x >= 200 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y += 1;
    }
    if (nessP.x <= 203 && nessP.x >= 201 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y += 1;
    }

    if (nessP.x <= 204 && nessP.x >= 202 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y += 1;
    }
    if (nessP.x <= 205 && nessP.x >= 203 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y += 1;
    }
    if (nessP.x <= 206 && nessP.x >= 204 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y += 1;
    }
    if (nessP.x <= 207 && nessP.x >= 205 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y += 1;
    }
    if (nessP.x <= 208 && nessP.x >= 206 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y += 1;
    }
    if (nessP.x <= 209 && nessP.x >= 207 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y += 1;
    }
    if (nessP.x <= 210 && nessP.x >= 208 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y += 1;
    }
    if (nessP.x <= 211 && nessP.x >= 209 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y += 1;
    }
    if (nessP.x <= 212 && nessP.x >= 210 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y += 1;
    }
    if (nessP.x <= 213 && nessP.x >= 211 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y += 1;
    }

    if (nessP.x <= 214 && nessP.x >= 212 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y += 1;
    }
    if (nessP.x <= 215 && nessP.x >= 213 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y += 1;
    }
    if (nessP.x <= 216 && nessP.x >= 214 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y += 1;
    }
    if (nessP.x <= 217 && nessP.x >= 215 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y += 1;
    }
    if (nessP.x <= 218 && nessP.x >= 216 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y += 1;
    }
    if (nessP.x <= 219 && nessP.x >= 217 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y += 1;
    }
    if (nessP.x <= 220 && nessP.x >= 218 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y += 1;
    }
    if (nessP.x <= 221 && nessP.x >= 219 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 174 && nessP.x >= 172 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.x += 1;
    }
    if (nessP.x <= 175 && nessP.x >= 173 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.x += 1;
    }
    if (nessP.x <= 176 && nessP.x >= 174 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.x += 1;
    }
    if (nessP.x <= 177 && nessP.x >= 175 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.x += 1;
    }
    if (nessP.x <= 178 && nessP.x >= 176 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.x += 1;
    }
    if (nessP.x <= 179 && nessP.x >= 177 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.x += 1;
    }
    if (nessP.x <= 180 && nessP.x >= 178 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.x += 1;
    }
    if (nessP.x <= 181 && nessP.x >= 179 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.x += 1;
    }
    if (nessP.x <= 182 && nessP.x >= 180 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.x += 1;
    }
    if (nessP.x <= 183 && nessP.x >= 181 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.x += 1;
    }

    if (nessP.x <= 184 && nessP.x >= 182 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.x += 1;
    }
    if (nessP.x <= 185 && nessP.x >= 183 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.x += 1;
    }
    if (nessP.x <= 186 && nessP.x >= 184 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.x += 1;
    }
    if (nessP.x <= 187 && nessP.x >= 185 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.x += 1;
    }
    if (nessP.x <= 188 && nessP.x >= 186 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.x += 1;
    }
    if (nessP.x <= 189 && nessP.x >= 187 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.x += 1;
    }
    if (nessP.x <= 190 && nessP.x >= 188 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.x += 1;
    }
    if (nessP.x <= 191 && nessP.x >= 189 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.x += 1;
    }
    if (nessP.x <= 192 && nessP.x >= 190 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.x += 1;
    }
    if (nessP.x <= 193 && nessP.x >= 191 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.x += 1;
    }

    if (nessP.x <= 194 && nessP.x >= 192 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.x += 1;
    }
    if (nessP.x <= 195 && nessP.x >= 193 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.x += 1;
    }
    if (nessP.x <= 196 && nessP.x >= 194 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.x += 1;
    }
    if (nessP.x <= 197 && nessP.x >= 195 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.x += 1;
    }
    if (nessP.x <= 198 && nessP.x >= 196 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.x += 1;
    }
    if (nessP.x <= 199 && nessP.x >= 197 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.x += 1;
    }
    if (nessP.x <= 200 && nessP.x >= 198 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.x += 1;
    }
    if (nessP.x <= 201 && nessP.x >= 199 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.x += 1;
    }
    if (nessP.x <= 202 && nessP.x >= 200 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.x += 1;
    }
    if (nessP.x <= 203 && nessP.x >= 201 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.x += 1;
    }

    if (nessP.x <= 204 && nessP.x >= 202 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.x += 1;
    }
    if (nessP.x <= 205 && nessP.x >= 203 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.x += 1;
    }
    if (nessP.x <= 206 && nessP.x >= 204 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.x += 1;
    }
    if (nessP.x <= 207 && nessP.x >= 205 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.x += 1;
    }
    if (nessP.x <= 208 && nessP.x >= 206 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.x += 1;
    }
    if (nessP.x <= 209 && nessP.x >= 207 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.x += 1;
    }
    if (nessP.x <= 210 && nessP.x >= 208 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.x += 1;
    }
    if (nessP.x <= 211 && nessP.x >= 209 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.x += 1;
    }
    if (nessP.x <= 212 && nessP.x >= 210 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.x += 1;
    }
    if (nessP.x <= 213 && nessP.x >= 211 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.x += 1;
    }

    if (nessP.x <= 214 && nessP.x >= 212 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.x += 1;
    }
    if (nessP.x <= 215 && nessP.x >= 213 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.x += 1;
    }
    if (nessP.x <= 216 && nessP.x >= 214 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.x += 1;
    }
    if (nessP.x <= 217 && nessP.x >= 215 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.x += 1;
    }
    if (nessP.x <= 218 && nessP.x >= 216 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.x += 1;
    }
    if (nessP.x <= 219 && nessP.x >= 217 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.x += 1;
    }
    if (nessP.x <= 220 && nessP.x >= 218 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.x += 1;
    }
    if (nessP.x <= 221 && nessP.x >= 219 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.x += 1;
    }
  }

  if (keyIsDown(40) && keyIsDown(39)) {
    if (nessP.x <= 174 - 17 && nessP.x >= 172 - 17 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 175 - 17 && nessP.x >= 173 - 17 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 176 - 17 && nessP.x >= 174 - 17 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 177 - 17 && nessP.x >= 175 - 17 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 178 - 17 && nessP.x >= 176 - 17 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 179 - 17 && nessP.x >= 177 - 17 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 180 - 17 && nessP.x >= 178 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 181 - 17 && nessP.x >= 179 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 182 - 17 && nessP.x >= 180 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 183 - 17 && nessP.x >= 181 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 184 - 17 && nessP.x >= 182 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 185 - 17 && nessP.x >= 183 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 186 - 17 && nessP.x >= 184 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 187 - 17 && nessP.x >= 185 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 188 - 17 && nessP.x >= 186 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 189 - 17 && nessP.x >= 187 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 190 - 17 && nessP.x >= 188 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 191 - 17 && nessP.x >= 189 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 192 - 17 && nessP.x >= 190 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 193 - 17 && nessP.x >= 191 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 194 - 17 && nessP.x >= 192 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 195 - 17 && nessP.x >= 193 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 196 - 17 && nessP.x >= 194 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 197 - 17 && nessP.x >= 195 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 198 - 17 && nessP.x >= 196 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 199 - 17 && nessP.x >= 197 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 200 - 17 && nessP.x >= 198 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 201 - 17 && nessP.x >= 199 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 202 - 17 && nessP.x >= 200 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 203 - 17 && nessP.x >= 201 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 204 - 17 && nessP.x >= 202 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 205 - 17 && nessP.x >= 203 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 206 - 17 && nessP.x >= 204 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 207 - 17 && nessP.x >= 205 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 208 - 17 && nessP.x >= 206 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 209 - 17 && nessP.x >= 207 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 210 - 17 && nessP.x >= 208 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 211 - 17 && nessP.x >= 209 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 212 - 17 && nessP.x >= 210 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 213 - 17 && nessP.x >= 211 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y -= 1;
      nessP.x -= 1;
    }

    if (nessP.x <= 214 - 17 && nessP.x >= 212 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 215 - 17 && nessP.x >= 213 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 216 - 17 && nessP.x >= 214 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 217 - 17 && nessP.x >= 215 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 218 - 17 && nessP.x >= 216 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 219 - 17 && nessP.x >= 217 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 220 - 17 && nessP.x >= 218 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
    if (nessP.x <= 221 - 17 && nessP.x >= 219 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y -= 1;
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.x <= 174 - 17 && nessP.x >= 172 - 17 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.y -= 1;
    }
    if (nessP.x <= 175 - 17 && nessP.x >= 173 - 17 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.y -= 1;
    }
    if (nessP.x <= 176 - 17 && nessP.x >= 174 - 17 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.y -= 1;
    }
    if (nessP.x <= 177 - 17 && nessP.x >= 175 - 17 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.y -= 1;
    }
    if (nessP.x <= 178 - 17 && nessP.x >= 176 - 17 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.y -= 1;
    }
    if (nessP.x <= 179 - 17 && nessP.x >= 177 - 17 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.y -= 1;
    }
    if (nessP.x <= 180 - 17 && nessP.x >= 178 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.y -= 1;
    }
    if (nessP.x <= 181 - 17 && nessP.x >= 179 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.y -= 1;
    }
    if (nessP.x <= 182 - 17 && nessP.x >= 180 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.y -= 1;
    }
    if (nessP.x <= 183 - 17 && nessP.x >= 181 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.y -= 1;
    }

    if (nessP.x <= 184 - 17 && nessP.x >= 182 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.y -= 1;
    }
    if (nessP.x <= 185 - 17 && nessP.x >= 183 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.y -= 1;
    }
    if (nessP.x <= 186 - 17 && nessP.x >= 184 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.y -= 1;
    }
    if (nessP.x <= 187 - 17 && nessP.x >= 185 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.y -= 1;
    }
    if (nessP.x <= 188 - 17 && nessP.x >= 186 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.y -= 1;
    }
    if (nessP.x <= 189 - 17 && nessP.x >= 187 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.y -= 1;
    }
    if (nessP.x <= 190 - 17 && nessP.x >= 188 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.y -= 1;
    }
    if (nessP.x <= 191 - 17 && nessP.x >= 189 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.y -= 1;
    }
    if (nessP.x <= 192 - 17 && nessP.x >= 190 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.y -= 1;
    }
    if (nessP.x <= 193 - 17 && nessP.x >= 191 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.y -= 1;
    }

    if (nessP.x <= 194 - 17 && nessP.x >= 192 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.y -= 1;
    }
    if (nessP.x <= 195 - 17 && nessP.x >= 193 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.y -= 1;
    }
    if (nessP.x <= 196 - 17 && nessP.x >= 194 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.y -= 1;
    }
    if (nessP.x <= 197 - 17 && nessP.x >= 195 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.y -= 1;
    }
    if (nessP.x <= 198 - 17 && nessP.x >= 196 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.y -= 1;
    }
    if (nessP.x <= 199 - 17 && nessP.x >= 197 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.y -= 1;
    }
    if (nessP.x <= 200 - 17 && nessP.x >= 198 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.y -= 1;
    }
    if (nessP.x <= 201 - 17 && nessP.x >= 199 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.y -= 1;
    }
    if (nessP.x <= 202 - 17 && nessP.x >= 200 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.y -= 1;
    }
    if (nessP.x <= 203 - 17 && nessP.x >= 201 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.y -= 1;
    }

    if (nessP.x <= 204 - 17 && nessP.x >= 202 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.y -= 1;
    }
    if (nessP.x <= 205 - 17 && nessP.x >= 203 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.y -= 1;
    }
    if (nessP.x <= 206 - 17 && nessP.x >= 204 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.y -= 1;
    }
    if (nessP.x <= 207 - 17 && nessP.x >= 205 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.y -= 1;
    }
    if (nessP.x <= 208 - 17 && nessP.x >= 206 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.y -= 1;
    }
    if (nessP.x <= 209 - 17 && nessP.x >= 207 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.y -= 1;
    }
    if (nessP.x <= 210 - 17 && nessP.x >= 208 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.y -= 1;
    }
    if (nessP.x <= 211 - 17 && nessP.x >= 209 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.y -= 1;
    }
    if (nessP.x <= 212 - 17 && nessP.x >= 210 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.y -= 1;
    }
    if (nessP.x <= 213 - 17 && nessP.x >= 211 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.y -= 1;
    }

    if (nessP.x <= 214 - 17 && nessP.x >= 212 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.y -= 1;
    }
    if (nessP.x <= 215 - 17 && nessP.x >= 213 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.y -= 1;
    }
    if (nessP.x <= 216 - 17 && nessP.x >= 214 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.y -= 1;
    }
    if (nessP.x <= 217 - 17 && nessP.x >= 215 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.y -= 1;
    }
    if (nessP.x <= 218 - 17 && nessP.x >= 216 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.y -= 1;
    }
    if (nessP.x <= 219 - 17 && nessP.x >= 217 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.y -= 1;
    }
    if (nessP.x <= 220 - 17 && nessP.x >= 218 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.y -= 1;
    }
    if (nessP.x <= 221 - 17 && nessP.x >= 219 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.x <= 174 - 17 && nessP.x >= 172 - 17 && nessP.y <= 742 && nessP.y >= 741) {
      nessP.x -= 1;
    }
    if (nessP.x <= 175 - 17 && nessP.x >= 173 - 17 && nessP.y <= 741 && nessP.y >= 740) {
      nessP.x -= 1;
    }
    if (nessP.x <= 176 - 17 && nessP.x >= 174 - 17 && nessP.y <= 740 && nessP.y >= 739) {
      nessP.x -= 1;
    }
    if (nessP.x <= 177 - 17 && nessP.x >= 175 - 17 && nessP.y <= 739 && nessP.y >= 738) {
      nessP.x -= 1;
    }
    if (nessP.x <= 178 - 17 && nessP.x >= 176 - 17 && nessP.y <= 738 && nessP.y >= 737) {
      nessP.x -= 1;
    }
    if (nessP.x <= 179 - 17 && nessP.x >= 177 - 17 && nessP.y <= 737 && nessP.y >= 736) {
      nessP.x -= 1;
    }
    if (nessP.x <= 180 - 17 && nessP.x >= 178 - 17 && nessP.y <= 736 && nessP.y >= 735) {
      nessP.x -= 1;
    }
    if (nessP.x <= 181 - 17 && nessP.x >= 179 - 17 && nessP.y <= 735 && nessP.y >= 734) {
      nessP.x -= 1;
    }
    if (nessP.x <= 182 - 17 && nessP.x >= 180 - 17 && nessP.y <= 734 && nessP.y >= 733) {
      nessP.x -= 1;
    }
    if (nessP.x <= 183 - 17 && nessP.x >= 181 - 17 && nessP.y <= 733 && nessP.y >= 732) {
      nessP.x -= 1;
    }

    if (nessP.x <= 184 - 17 && nessP.x >= 182 - 17 && nessP.y <= 732 && nessP.y >= 731) {
      nessP.x -= 1;
    }
    if (nessP.x <= 185 - 17 && nessP.x >= 183 - 17 && nessP.y <= 731 && nessP.y >= 730) {
      nessP.x -= 1;
    }
    if (nessP.x <= 186 - 17 && nessP.x >= 184 - 17 && nessP.y <= 730 && nessP.y >= 729) {
      nessP.x -= 1;
    }
    if (nessP.x <= 187 - 17 && nessP.x >= 185 - 17 && nessP.y <= 729 && nessP.y >= 728) {
      nessP.x -= 1;
    }
    if (nessP.x <= 188 - 17 && nessP.x >= 186 - 17 && nessP.y <= 728 && nessP.y >= 727) {
      nessP.x -= 1;
    }
    if (nessP.x <= 189 - 17 && nessP.x >= 187 - 17 && nessP.y <= 727 && nessP.y >= 726) {
      nessP.x -= 1;
    }
    if (nessP.x <= 190 - 17 && nessP.x >= 188 - 17 && nessP.y <= 726 && nessP.y >= 725) {
      nessP.x -= 1;
    }
    if (nessP.x <= 191 - 17 && nessP.x >= 189 - 17 && nessP.y <= 725 && nessP.y >= 724) {
      nessP.x -= 1;
    }
    if (nessP.x <= 192 - 17 && nessP.x >= 190 - 17 && nessP.y <= 724 && nessP.y >= 723) {
      nessP.x -= 1;
    }
    if (nessP.x <= 193 - 17 && nessP.x >= 191 - 17 && nessP.y <= 723 && nessP.y >= 722) {
      nessP.x -= 1;
    }

    if (nessP.x <= 194 - 17 && nessP.x >= 192 - 17 && nessP.y <= 722 && nessP.y >= 721) {
      nessP.x -= 1;
    }
    if (nessP.x <= 195 - 17 && nessP.x >= 193 - 17 && nessP.y <= 721 && nessP.y >= 720) {
      nessP.x -= 1;
    }
    if (nessP.x <= 196 - 17 && nessP.x >= 194 - 17 && nessP.y <= 720 && nessP.y >= 719) {
      nessP.x -= 1;
    }
    if (nessP.x <= 197 - 17 && nessP.x >= 195 - 17 && nessP.y <= 719 && nessP.y >= 718) {
      nessP.x -= 1;
    }
    if (nessP.x <= 198 - 17 && nessP.x >= 196 - 17 && nessP.y <= 718 && nessP.y >= 717) {
      nessP.x -= 1;
    }
    if (nessP.x <= 199 - 17 && nessP.x >= 197 - 17 && nessP.y <= 717 && nessP.y >= 716) {
      nessP.x -= 1;
    }
    if (nessP.x <= 200 - 17 && nessP.x >= 198 - 17 && nessP.y <= 716 && nessP.y >= 715) {
      nessP.x -= 1;
    }
    if (nessP.x <= 201 - 17 && nessP.x >= 199 - 17 && nessP.y <= 715 && nessP.y >= 714) {
      nessP.x -= 1;
    }
    if (nessP.x <= 202 - 17 && nessP.x >= 200 - 17 && nessP.y <= 714 && nessP.y >= 713) {
      nessP.x -= 1;
    }
    if (nessP.x <= 203 - 17 && nessP.x >= 201 - 17 && nessP.y <= 713 && nessP.y >= 712) {
      nessP.x -= 1;
    }

    if (nessP.x <= 204 - 17 && nessP.x >= 202 - 17 && nessP.y <= 712 && nessP.y >= 711) {
      nessP.x -= 1;
    }
    if (nessP.x <= 205 - 17 && nessP.x >= 203 - 17 && nessP.y <= 711 && nessP.y >= 710) {
      nessP.x -= 1;
    }
    if (nessP.x <= 206 - 17 && nessP.x >= 204 - 17 && nessP.y <= 710 && nessP.y >= 709) {
      nessP.x -= 1;
    }
    if (nessP.x <= 207 - 17 && nessP.x >= 205 - 17 && nessP.y <= 709 && nessP.y >= 708) {
      nessP.x -= 1;
    }
    if (nessP.x <= 208 - 17 && nessP.x >= 206 - 17 && nessP.y <= 708 && nessP.y >= 707) {
      nessP.x -= 1;
    }
    if (nessP.x <= 209 - 17 && nessP.x >= 207 - 17 && nessP.y <= 707 && nessP.y >= 706) {
      nessP.x -= 1;
    }
    if (nessP.x <= 210 - 17 && nessP.x >= 208 - 17 && nessP.y <= 706 && nessP.y >= 705) {
      nessP.x -= 1;
    }
    if (nessP.x <= 211 - 17 && nessP.x >= 209 - 17 && nessP.y <= 705 && nessP.y >= 704) {
      nessP.x -= 1;
    }
    if (nessP.x <= 212 - 17 && nessP.x >= 210 - 17 && nessP.y <= 704 && nessP.y >= 703) {
      nessP.x -= 1;
    }
    if (nessP.x <= 213 - 17 && nessP.x >= 211 - 17 && nessP.y <= 703 && nessP.y >= 702) {
      nessP.x -= 1;
    }

    if (nessP.x <= 214 - 17 && nessP.x >= 212 - 17 && nessP.y <= 702 && nessP.y >= 701) {
      nessP.x -= 1;
    }
    if (nessP.x <= 215 - 17 && nessP.x >= 213 - 17 && nessP.y <= 701 && nessP.y >= 700) {
      nessP.x -= 1;
    }
    if (nessP.x <= 216 - 17 && nessP.x >= 214 - 17 && nessP.y <= 700 && nessP.y >= 699) {
      nessP.x -= 1;
    }
    if (nessP.x <= 217 - 17 && nessP.x >= 215 - 17 && nessP.y <= 699 && nessP.y >= 698) {
      nessP.x -= 1;
    }
    if (nessP.x <= 218 - 17 && nessP.x >= 216 - 17 && nessP.y <= 698 && nessP.y >= 697) {
      nessP.x -= 1;
    }
    if (nessP.x <= 219 - 17 && nessP.x >= 217 - 17 && nessP.y <= 697 && nessP.y >= 696) {
      nessP.x -= 1;
    }
    if (nessP.x <= 220 - 17 && nessP.x >= 218 - 17 && nessP.y <= 696 && nessP.y >= 695) {
      nessP.x -= 1;
    }
    if (nessP.x <= 221 - 17 && nessP.x >= 219 - 17 && nessP.y <= 695 && nessP.y >= 694) {
      nessP.x -= 1;
    }
  }

  if (nessP.x >= 200 && nessP.x <= 202 && nessP.y >= 694 && nessP.y <= 698) {
    nessP.x -= 1;
  }
}

function cavesCollide() {
  if (keyIsDown(39) && keyIsDown(38)) {
    if (nessP.y <= 198 && nessP.y >= 196 && nessP.x >= 669 && nessP.x <= 670) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 199 && nessP.y >= 197 && nessP.x >= 670 && nessP.x <= 671) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 200 && nessP.y >= 198 && nessP.x >= 671 && nessP.x <= 672) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 201 && nessP.y >= 199 && nessP.x >= 672 && nessP.x <= 673) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 202 && nessP.y >= 200 && nessP.x >= 673 && nessP.x <= 674) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 203 && nessP.y >= 201 && nessP.x >= 674 && nessP.x <= 675) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 204 && nessP.y >= 202 && nessP.x >= 675 && nessP.x <= 676) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 205 && nessP.y >= 203 && nessP.x >= 676 && nessP.x <= 677) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 206 && nessP.y >= 204 && nessP.x >= 677 && nessP.x <= 678) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 207 && nessP.y >= 205 && nessP.x >= 678 && nessP.x <= 679) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 208 && nessP.y >= 206 && nessP.x >= 679 && nessP.x <= 680) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 209 && nessP.y >= 207 && nessP.x >= 680 && nessP.x <= 681) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 210 && nessP.y >= 208 && nessP.x >= 681 && nessP.x <= 682) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 211 && nessP.y >= 209 && nessP.x >= 682 && nessP.x <= 683) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 212 && nessP.y >= 210 && nessP.x >= 683 && nessP.x <= 684) {
      nessP.x -= 1;
      nessP.y += 1;
    }
  }

  if (keyIsDown(38)) {
    if (nessP.y <= 198 && nessP.y >= 196 && nessP.x >= 669 && nessP.x <= 670) {
      nessP.x -= 1;
    }
    if (nessP.y <= 199 && nessP.y >= 197 && nessP.x >= 670 && nessP.x <= 671) {
      nessP.x -= 1;
    }
    if (nessP.y <= 200 && nessP.y >= 198 && nessP.x >= 671 && nessP.x <= 672) {
      nessP.x -= 1;
    }
    if (nessP.y <= 201 && nessP.y >= 199 && nessP.x >= 672 && nessP.x <= 673) {
      nessP.x -= 1;
    }
    if (nessP.y <= 202 && nessP.y >= 200 && nessP.x >= 673 && nessP.x <= 674) {
      nessP.x -= 1;
    }
    if (nessP.y <= 203 && nessP.y >= 201 && nessP.x >= 674 && nessP.x <= 675) {
      nessP.x -= 1;
    }
    if (nessP.y <= 204 && nessP.y >= 202 && nessP.x >= 675 && nessP.x <= 676) {
      nessP.x -= 1;
    }
    if (nessP.y <= 205 && nessP.y >= 203 && nessP.x >= 676 && nessP.x <= 677) {
      nessP.x -= 1;
    }
    if (nessP.y <= 206 && nessP.y >= 204 && nessP.x >= 677 && nessP.x <= 678) {
      nessP.x -= 1;
    }
    if (nessP.y <= 207 && nessP.y >= 205 && nessP.x >= 678 && nessP.x <= 679) {
      nessP.x -= 1;
    }
    if (nessP.y <= 208 && nessP.y >= 206 && nessP.x >= 679 && nessP.x <= 680) {
      nessP.x -= 1;
    }
    if (nessP.y <= 209 && nessP.y >= 207 && nessP.x >= 680 && nessP.x <= 681) {
      nessP.x -= 1;
    }
    if (nessP.y <= 210 && nessP.y >= 208 && nessP.x >= 681 && nessP.x <= 682) {
      nessP.x -= 1;
    }
    if (nessP.y <= 211 && nessP.y >= 209 && nessP.x >= 682 && nessP.x <= 683) {
      nessP.x -= 1;
    }
    if (nessP.y <= 212 && nessP.y >= 210 && nessP.x >= 683 && nessP.x <= 684) {
      nessP.x -= 1;
    }
  }

  if (keyIsDown(39)) {
    if (nessP.y <= 198 && nessP.y >= 196 && nessP.x >= 669 && nessP.x <= 670) {
      nessP.y += 1;
    }
    if (nessP.y <= 199 && nessP.y >= 197 && nessP.x >= 670 && nessP.x <= 671) {
      nessP.y += 1;
    }
    if (nessP.y <= 200 && nessP.y >= 198 && nessP.x >= 671 && nessP.x <= 672) {
      nessP.y += 1;
    }
    if (nessP.y <= 201 && nessP.y >= 199 && nessP.x >= 672 && nessP.x <= 673) {
      nessP.y += 1;
    }
    if (nessP.y <= 202 && nessP.y >= 200 && nessP.x >= 673 && nessP.x <= 674) {
      nessP.y += 1;
    }
    if (nessP.y <= 203 && nessP.y >= 201 && nessP.x >= 674 && nessP.x <= 675) {
      nessP.y += 1;
    }
    if (nessP.y <= 204 && nessP.y >= 202 && nessP.x >= 675 && nessP.x <= 676) {
      nessP.y += 1;
    }
    if (nessP.y <= 205 && nessP.y >= 203 && nessP.x >= 676 && nessP.x <= 677) {
      nessP.y += 1;
    }
    if (nessP.y <= 206 && nessP.y >= 204 && nessP.x >= 677 && nessP.x <= 678) {
      nessP.y += 1;
    }
    if (nessP.y <= 207 && nessP.y >= 205 && nessP.x >= 678 && nessP.x <= 679) {
      nessP.y += 1;
    }
    if (nessP.y <= 208 && nessP.y >= 206 && nessP.x >= 679 && nessP.x <= 680) {
      nessP.y += 1;
    }
    if (nessP.y <= 209 && nessP.y >= 207 && nessP.x >= 680 && nessP.x <= 681) {
      nessP.y += 1;
    }
    if (nessP.y <= 210 && nessP.y >= 208 && nessP.x >= 681 && nessP.x <= 682) {
      nessP.y += 1;
    }
    if (nessP.y <= 211 && nessP.y >= 209 && nessP.x >= 682 && nessP.x <= 683) {
      nessP.y += 1;
    }
    if (nessP.y <= 212 && nessP.y >= 210 && nessP.x >= 683 && nessP.x <= 684) {
      nessP.y += 1;
    }
  }

  if (nessP.x >= 679 && nessP.x <= 681 && nessP.y >= 206 && nessP.y <= 219) {
    nessP.x -= 1;
  }
  if (nessP.y <= 220 && nessP.y >= 218 && nessP.x >= 680 && nessP.x <= 696) {
    nessP.y += 1;
  }

  if (nessP.y <= 198 + 1 && nessP.y >= 196 + 1 && nessP.x >= 669 - 1 && nessP.x <= 670 - 1 ||
    nessP.y <= 199 + 1 && nessP.y >= 197 + 1 && nessP.x >= 670 - 1 && nessP.x <= 671 - 1 ||
    nessP.y <= 200 + 1 && nessP.y >= 198 + 1 && nessP.x >= 671 - 1 && nessP.x <= 672 - 1 ||
    nessP.y <= 201 + 1 && nessP.y >= 199 + 1 && nessP.x >= 672 - 1 && nessP.x <= 673 - 1 ||
    nessP.y <= 202 + 1 && nessP.y >= 200 + 1 && nessP.x >= 673 - 1 && nessP.x <= 674 - 1 ||
    nessP.y <= 203 + 1 && nessP.y >= 201 + 1 && nessP.x >= 674 - 1 && nessP.x <= 675 - 1 ||
    nessP.y <= 204 + 1 && nessP.y >= 202 + 1 && nessP.x >= 675 - 1 && nessP.x <= 676 - 1 ||
    nessP.y <= 205 + 1 && nessP.y >= 203 + 1 && nessP.x >= 676 - 1 && nessP.x <= 677 - 1 ||
    nessP.y <= 206 + 1 && nessP.y >= 204 + 1 && nessP.x >= 677 - 1 && nessP.x <= 678 - 1 ||
    nessP.y <= 207 + 1 && nessP.y >= 205 + 1 && nessP.x >= 678 - 1 && nessP.x <= 679 - 1 ||
    nessP.y <= 208 + 1 && nessP.y >= 206 + 1 && nessP.x >= 679 - 1 && nessP.x <= 680 - 1 ||
    nessP.y <= 209 + 1 && nessP.y >= 207 + 1 && nessP.x >= 680 - 1 && nessP.x <= 681 - 1 ||
    nessP.y <= 210 + 1 && nessP.y >= 208 + 1 && nessP.x >= 681 - 1 && nessP.x <= 682 - 1 ||
    nessP.y <= 211 + 1 && nessP.y >= 209 + 1 && nessP.x >= 682 - 1 && nessP.x <= 683 - 1 ||
    nessP.y <= 212 + 1 && nessP.y >= 210 + 1 && nessP.x >= 683 - 1 && nessP.x <= 684 - 1 ||
    nessP.x >= 678 && nessP.y >= 209 && nessP.y <= 211) {
    guid = 11;
    hmtwb += 9;
    exdr = 0;
    if (hmtwb >= 360) {
      hmtm = 0;
      scene = 7;
      hmtwb = 255;
    }

    htwn.volume(hvul);
    hvul -= 0.03;
    if (hvul <= 0) {
      hvul = 0;
      htwn.stop();
      mu = 0;
    }
  }
}

function hotelOneCollisions() {
  if (nessP.x <= 46) {
    nessP.x += 1;
  }
  if (nessP.y <= 53 && nessP.x <= 70) {
    nessP.y += 1;
  }

  if (nessP.x >= 212 || nessP.x >= 195 && nessP.y >= 115 ||
    nessP.x >= 152 && nessP.y >= 170) {
    nessP.x -= 1;
  }

  if (nessP.y >= 114 && nessP.x >= 196 || nessP.y >= 169 &&
    nessP.x >= 153 || nessP.y >= 209) {
    nessP.y -= 1;
  }

  if (nessP.x <= 126 && nessP.y >= 170) {
    nessP.x += 1;
  }
  if (nessP.y >= 169 && nessP.x <= 125) {
    nessP.y -= 1;
  }
  if (nessP.x <= 106 && nessP.y >= 130) {
    nessP.x += 1;
  }
  if (nessP.y >= 129 && nessP.x <= 105) {
    nessP.y -= 1;
  }
  if (nessP.x <= 47 && nessP.y <= 54) {
    nessP.x += 1;
  }
  if (nessP.y <= 52 && nessP.x >= 79) {
    nessP.y += 1;
  }
  if (nessP.x >= 201 && nessP.y <= 57) {
    nessP.x -= 1;
  }
  if (nessP.y <= 58 && nessP.x >= 202) {
    nessP.y += 1;
  }

  if (nessP.x >= 67 && nessP.x <= 69 && nessP.y <= 54) {
    nessP.x -= 1;
  }
  if (nessP.y <= 55 && nessP.x >= 68 && nessP.x <= 85) {
    nessP.y += 1;
  }
  if (nessP.x <= 86 && nessP.x >= 84 && nessP.y <= 54) {
    nessP.x += 1;
  }

  if (nessP.y >= 65 && nessP.y <= 67 && nessP.x >= 73 && nessP.x <= 104) {
    nessP.y -= 1;
  }
  if (nessP.y <= 92 && nessP.y >= 90 && nessP.x >= 73 && nessP.x <= 104) {
    nessP.y += 1;
  }
  if (nessP.x >= 72 && nessP.x <= 74 && nessP.y >= 66 && nessP.y <= 91) {
    nessP.x -= 1;
  }
  if (nessP.x <= 105 && nessP.x >= 103 && nessP.y >= 66 && nessP.y <= 91) {
    nessP.x += 1;
  }

  if (nessP.y >= 76 && nessP.y <= 78 && nessP.x >= 90) {
    nessP.y -= 1;
  }
  if (nessP.y <= 92 && nessP.y >= 90 && nessP.x >= 90) {
    nessP.y += 1;
  }

  if (nessP.x >= 184 && nessP.x <= 186 && nessP.y <= 83 && nessP.y >= 72) {
    nessP.x -= 1;
  }
  if (nessP.x <= 210 && nessP.x >= 208 && nessP.y <= 83 && nessP.y >= 72) {
    nessP.x += 1;
  }
  if (nessP.y >= 71 && nessP.y <= 73 && nessP.x >= 185 && nessP.x <= 209) {
    nessP.y -= 1;
  }
}

function kirbySecretCollisions() {
  if (nessP.x >= 244 || nessP.x >= 138 && nessP.y >= 204) {
    nessP.x -= 1;
  }
  if (nessP.x <= 13 || nessP.x <= 120 && nessP.y >= 204) {
    nessP.x += 1;
  }
  if (nessP.y >= 203 && nessP.x >= 139 || nessP.y >= 203 && nessP.x <= 119 ||
    nessP.y >= 211) {
    nessP.y -= 1;
  }
  if (nessP.y <= 178) {
    nessP.y += 1;
  }
}

function houseOneCollisions() {
  if (nessP.y >= 211) {
    nessP.y -= 1;
  }
  if (nessP.y <= 51) {
    nessP.y += 1;
  }
  if (nessP.x <= 46) {
    nessP.x += 1;
  }
  if (nessP.x >= 212) {
    nessP.x -= 1;
  }

  if (nessP.y >= 168 && nessP.x >= 73) {
    nessP.y -= 1;
  }
  if (nessP.x >= 72 && nessP.y >= 169) {
    nessP.x -= 1;
  }
  if (nessP.y <= 70 && nessP.x <= 92) {
    nessP.y += 1;
  }
  if (nessP.x <= 93 && nessP.y <= 69) {
    nessP.x += 1;
  }
  if (nessP.y <= 62 && nessP.x <= 138) {
    nessP.y += 1;
  }
  if (nessP.x <= 139 && nessP.y <= 61) {
    nessP.x += 1;
  }
  if (nessP.x >= 152 && nessP.y <= 72) {
    nessP.x -= 1;
  }
  if (nessP.y <= 73 && nessP.x >= 153) {
    nessP.y += 1;
  }

  if (nessP.x >= 98 && nessP.x <= 100 && nessP.y >= 155) {
    nessP.x -= 1;
  }
  if (nessP.x <= 123 && nessP.x >= 121 && nessP.y >= 155) {
    nessP.x += 1;
  }
  if (nessP.y >= 154 && nessP.x >= 99 && nessP.x <= 122) {
    nessP.y -= 1;
  }

  if (nessP.x >= 98 + 35 && nessP.x <= 100 + 35 && nessP.y >= 155) {
    nessP.x -= 1;
  }
  if (nessP.x <= 123 + 35 && nessP.x >= 121 + 35 && nessP.y >= 155) {
    nessP.x += 1;
  }
  if (nessP.y >= 154 && nessP.x >= 99 + 35 && nessP.x <= 122 + 35) {
    nessP.y -= 1;
  }

  if (nessP.x >= 98 + 70 && nessP.x <= 100 + 70 && nessP.y >= 155) {
    nessP.x -= 1;
  }
  if (nessP.x <= 123 + 70 && nessP.x >= 121 + 70 && nessP.y >= 155) {
    nessP.x += 1;
  }
  if (nessP.y >= 154 && nessP.x >= 99 + 70 && nessP.x <= 122 + 70) {
    nessP.y -= 1;
  }
}

function tombCollisions() {
  if (keyIsDown(39) && keyIsDown(38)) {
    if (nessP.y <= 131 && nessP.x >= 204 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 132 && nessP.x >= 205 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 133 && nessP.x >= 206 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 134 && nessP.x >= 207 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 135 && nessP.x >= 208 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 136 && nessP.x >= 209 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 137 && nessP.x >= 210 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 138 && nessP.x >= 211 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 139 && nessP.x >= 212 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 140 && nessP.x >= 213 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 141 && nessP.x >= 214 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 142 && nessP.x >= 215 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 143 && nessP.x >= 216 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 144 && nessP.x >= 217 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
    if (nessP.y <= 145 && nessP.x >= 218 - 1) {
      nessP.x -= 1;
      nessP.y += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.y <= 131 && nessP.x >= 204 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 132 && nessP.x >= 205 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 133 && nessP.x >= 206 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 134 && nessP.x >= 207 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 135 && nessP.x >= 208 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 136 && nessP.x >= 209 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 137 && nessP.x >= 210 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 138 && nessP.x >= 211 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 139 && nessP.x >= 212 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 140 && nessP.x >= 213 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 141 && nessP.x >= 214 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 142 && nessP.x >= 215 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 143 && nessP.x >= 216 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 144 && nessP.x >= 217 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y <= 145 && nessP.x >= 218 - 1) {
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.y <= 131 && nessP.x >= 204 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 132 && nessP.x >= 205 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 133 && nessP.x >= 206 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 134 && nessP.x >= 207 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 135 && nessP.x >= 208 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 136 && nessP.x >= 209 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 137 && nessP.x >= 210 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 138 && nessP.x >= 211 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 139 && nessP.x >= 212 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 140 && nessP.x >= 213 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 141 && nessP.x >= 214 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 142 && nessP.x >= 215 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 143 && nessP.x >= 216 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 144 && nessP.x >= 217 - 1) {
      nessP.y += 1;
    }
    if (nessP.y <= 145 && nessP.x >= 218 - 1) {
      nessP.y += 1;
    }
  }

  if (keyIsDown(39) && keyIsDown(40)) {
    if (nessP.y >= 147 + 6 && nessP.x >= 218 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 148 + 6 && nessP.x >= 217 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 149 + 6 && nessP.x >= 216 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 150 + 6 && nessP.x >= 215 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 151 + 6 && nessP.x >= 214 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 152 + 6 && nessP.x >= 213 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 153 + 6 && nessP.x >= 212 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 154 + 6 && nessP.x >= 211 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 155 + 6 && nessP.x >= 210 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 156 + 6 && nessP.x >= 209 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 157 + 6 && nessP.x >= 208 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 158 + 6 && nessP.x >= 207 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 159 + 6 && nessP.x >= 206 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 160 + 6 && nessP.x >= 205 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 161 + 6 && nessP.x >= 204 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 162 + 6 && nessP.x >= 203 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 163 + 6 && nessP.x >= 202 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 164 + 6 && nessP.x >= 201 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 165 + 6 && nessP.x >= 200 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 166 + 6 && nessP.x >= 199 - 1) {
      nessP.x -= 1;
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.y >= 147 + 6 && nessP.x >= 218 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 148 + 6 && nessP.x >= 217 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 149 + 6 && nessP.x >= 216 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 150 + 6 && nessP.x >= 215 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 151 + 6 && nessP.x >= 214 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 152 + 6 && nessP.x >= 213 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 153 + 6 && nessP.x >= 212 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 154 + 6 && nessP.x >= 211 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 155 + 6 && nessP.x >= 210 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 156 + 6 && nessP.x >= 209 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 157 + 6 && nessP.x >= 208 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 158 + 6 && nessP.x >= 207 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 159 + 6 && nessP.x >= 206 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 160 + 6 && nessP.x >= 205 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 161 + 6 && nessP.x >= 204 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 162 + 6 && nessP.x >= 203 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 163 + 6 && nessP.x >= 202 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 164 + 6 && nessP.x >= 201 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 165 + 6 && nessP.x >= 200 - 1) {
      nessP.x -= 1;
    }
    if (nessP.y >= 166 + 6 && nessP.x >= 199 - 1) {
      nessP.x -= 1;
    }
  } else if (keyIsDown(39)) {
    if (nessP.y >= 147 + 6 && nessP.x >= 218 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 148 + 6 && nessP.x >= 217 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 149 + 6 && nessP.x >= 216 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 150 + 6 && nessP.x >= 215 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 151 + 6 && nessP.x >= 214 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 152 + 6 && nessP.x >= 213 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 153 + 6 && nessP.x >= 212 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 154 + 6 && nessP.x >= 211 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 155 + 6 && nessP.x >= 210 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 156 + 6 && nessP.x >= 209 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 157 + 6 && nessP.x >= 208 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 158 + 6 && nessP.x >= 207 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 159 + 6 && nessP.x >= 206 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 160 + 6 && nessP.x >= 205 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 161 + 6 && nessP.x >= 204 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 162 + 6 && nessP.x >= 203 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 163 + 6 && nessP.x >= 202 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 164 + 6 && nessP.x >= 201 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 165 + 6 && nessP.x >= 200 - 1) {
      nessP.y -= 1;
    }
    if (nessP.y >= 166 + 6 && nessP.x >= 199 - 1) {
      nessP.y -= 1;
    }
  }

  if (keyIsDown(37) && keyIsDown(40)) {
    if (nessP.y >= 147 + 5 && nessP.x <= 199 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 148 + 5 && nessP.x <= 200 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 149 + 5 && nessP.x <= 201 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 150 + 5 && nessP.x <= 202 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 151 + 5 && nessP.x <= 203 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 152 + 5 && nessP.x <= 204 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 153 + 5 && nessP.x <= 205 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 154 + 5 && nessP.x <= 206 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 155 + 5 && nessP.x <= 207 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 156 + 5 && nessP.x <= 208 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 157 + 5 && nessP.x <= 209 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 158 + 5 && nessP.x <= 210 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 159 + 5 && nessP.x <= 211 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 160 + 5 && nessP.x <= 212 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 161 + 5 && nessP.x <= 213 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 162 + 5 && nessP.x <= 214 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 163 + 5 && nessP.x <= 215 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 164 + 5 && nessP.x <= 216 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 165 + 5 && nessP.x <= 217 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
    if (nessP.y >= 166 + 5 && nessP.x <= 218 - 160) {
      nessP.x += 1;
      nessP.y -= 1;
    }
  } else if (keyIsDown(40)) {
    if (nessP.y >= 147 + 5 && nessP.x <= 199 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 148 + 5 && nessP.x <= 200 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 149 + 5 && nessP.x <= 201 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 150 + 5 && nessP.x <= 202 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 151 + 5 && nessP.x <= 203 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 152 + 5 && nessP.x <= 204 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 153 + 5 && nessP.x <= 205 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 154 + 5 && nessP.x <= 206 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 155 + 5 && nessP.x <= 207 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 156 + 5 && nessP.x <= 208 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 157 + 5 && nessP.x <= 209 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 158 + 5 && nessP.x <= 210 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 159 + 5 && nessP.x <= 211 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 160 + 5 && nessP.x <= 212 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 161 + 5 && nessP.x <= 213 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 162 + 5 && nessP.x <= 214 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 163 + 5 && nessP.x <= 215 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 164 + 5 && nessP.x <= 216 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 165 + 5 && nessP.x <= 217 - 160) {
      nessP.x += 1;
    }
    if (nessP.y >= 166 + 5 && nessP.x <= 218 - 160) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.y >= 147 + 5 && nessP.x <= 199 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 148 + 5 && nessP.x <= 200 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 149 + 5 && nessP.x <= 201 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 150 + 5 && nessP.x <= 202 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 151 + 5 && nessP.x <= 203 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 152 + 5 && nessP.x <= 204 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 153 + 5 && nessP.x <= 205 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 154 + 5 && nessP.x <= 206 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 155 + 5 && nessP.x <= 207 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 156 + 5 && nessP.x <= 208 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 157 + 5 && nessP.x <= 209 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 158 + 5 && nessP.x <= 210 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 159 + 5 && nessP.x <= 211 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 160 + 5 && nessP.x <= 212 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 161 + 5 && nessP.x <= 213 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 162 + 5 && nessP.x <= 214 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 163 + 5 && nessP.x <= 215 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 164 + 5 && nessP.x <= 216 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 165 + 5 && nessP.x <= 217 - 160) {
      nessP.y -= 1;
    }
    if (nessP.y >= 166 + 5 && nessP.x <= 218 - 160) {
      nessP.y -= 1;
    }
  }

  if (keyIsDown(38) && keyIsDown(37)) {
    if (nessP.x <= 48 + 1 && nessP.y <= 137 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 47 + 1 && nessP.y <= 138 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 46 + 1 && nessP.y <= 139 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 45 + 1 && nessP.y <= 140 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 44 + 1 && nessP.y <= 141 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 43 + 1 && nessP.y <= 142 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 42 + 1 && nessP.y <= 143 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 41 + 1 && nessP.y <= 144 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 40 + 1 && nessP.y <= 145 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 39 + 1 && nessP.y <= 146 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
    if (nessP.x <= 38 + 1 && nessP.y <= 147 && nessP.y >= 130) {
      nessP.y += 1;
      nessP.x += 1;
    }
  } else if (keyIsDown(38)) {
    if (nessP.x <= 48 + 1 && nessP.y <= 137 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 47 + 1 && nessP.y <= 138 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 46 + 1 && nessP.y <= 139 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 45 + 1 && nessP.y <= 140 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 44 + 1 && nessP.y <= 141 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 43 + 1 && nessP.y <= 142 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 42 + 1 && nessP.y <= 143 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 41 + 1 && nessP.y <= 144 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 40 + 1 && nessP.y <= 145 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 39 + 1 && nessP.y <= 146 && nessP.y >= 130) {
      nessP.x += 1;
    }
    if (nessP.x <= 38 + 1 && nessP.y <= 147 && nessP.y >= 130) {
      nessP.x += 1;
    }
  } else if (keyIsDown(37)) {
    if (nessP.x <= 48 + 1 && nessP.y <= 137 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 47 + 1 && nessP.y <= 138 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 46 + 1 && nessP.y <= 139 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 45 + 1 && nessP.y <= 140 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 44 + 1 && nessP.y <= 141 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 43 + 1 && nessP.y <= 142 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 42 + 1 && nessP.y <= 143 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 41 + 1 && nessP.y <= 144 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 40 + 1 && nessP.y <= 145 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 39 + 1 && nessP.y <= 146 && nessP.y >= 130) {
      nessP.y += 1;
    }
    if (nessP.x <= 38 + 1 && nessP.y <= 147 && nessP.y >= 130) {
      nessP.y += 1;
    }
  }

  if (nessP.y <= 122) {
    nessP.y += 1;
  }
  if (nessP.y >= 166) {
    nessP.y -= 1;
  }
  if (nessP.x <= 40) {
    nessP.x += 1;
  }
  if (nessP.x >= 218) {
    nessP.x -= 1;
  }

  if (nessP.x >= 202 && nessP.y <= 129) {
    nessP.x -= 1;
  }
  if (nessP.y <= 130 && nessP.x >= 203) {
    nessP.y += 1;
  }

  if (nessP.x >= 157 && nessP.x <= 159 && nessP.y <= 134) {
    nessP.x -= 1;
  }
  if (nessP.x <= 193 && nessP.x >= 191 && nessP.y <= 134) {
    nessP.x += 1;
  }
  if (nessP.y <= 135 && nessP.x >= 158 && nessP.x <= 192) {
    nessP.y += 1;
  }

  if (nessP.y >= 128 && nessP.y <= 130 && nessP.x <= 49) {
    nessP.y -= 1;
  }
  if (nessP.y <= 136 && nessP.y >= 134 && nessP.x <= 49) {
    nessP.y += 1;
  }
  if (nessP.x <= 50 && nessP.y >= 129 && nessP.y <= 135) {
    nessP.x += 1;
  }

  if (nessP.x <= 45 && nessP.y <= 134) {
    nessP.x += 1;
  }
}

function houseTwoCollisions() {
  if (nessP.y <= 50) {
    nessP.y += 1;
  }
  if (nessP.y >= 212) {
    nessP.y -= 1;
  }
  if (nessP.x <= 16) {
    nessP.x += 1;
  }
  if (nessP.x >= 242) {
    nessP.x -= 1;
  }

  if (nessP.x <= 116 && nessP.y >= 188) {
    nessP.x += 1;
  }
  if (nessP.y >= 187 && nessP.x <= 115) {
    nessP.y -= 1;
  }
  if (nessP.x >= 142 && nessP.y >= 188) {
    nessP.x -= 1;
  }
  if (nessP.y >= 187 && nessP.x >= 143) {
    nessP.y -= 1;
  }

  if (nessP.y >= 119 && nessP.y <= 121 && nessP.x >= 225) {
    nessP.y -= 1;
  }
  if (nessP.y <= 132 && nessP.y >= 130 && nessP.x >= 225) {
    nessP.y += 1;
  }
  if (nessP.x >= 224 && nessP.y >= 120 && nessP.y <= 131) {
    nessP.x -= 1;
  }

  if (nessP.x >= 42 && nessP.x <= 44 && nessP.y <= 69) {
    nessP.x -= 1;
  }
  if (nessP.x >= 216 && nessP.x <= 218 && nessP.y <= 69) {
    nessP.x += 1;
  }
  if (nessP.y <= 70 && nessP.x >= 43 && nessP.x <= 217) {
    nessP.y += 1;
  }
  if (nessP.y <= 68 && nessP.x >= 200 && nessP.x <= 250) {
    nessP.y += 1;
  }

  if (nessP.x >= 139 && nessP.x <= 141 && nessP.y <= 155 && nessP.y >= 111) {
    nessP.x -= 1;
  }
  if (nessP.x <= 219 && nessP.x >= 217 && nessP.y <= 155 && nessP.y >= 111) {
    nessP.x += 1;
  }
  if (nessP.y >= 110 && nessP.y <= 112 && nessP.x >= 140 && nessP.x <= 218) {
    nessP.y -= 1;
  }
  if (nessP.y <= 156 && nessP.y >= 154 && nessP.x >= 140 && nessP.x <= 218) {
    nessP.y += 1;
  }

  if (nessP.x >= 24 && nessP.x <= 26 && nessP.y <= 128 && nessP.y >= 96) {
    nessP.x -= 1;
  }
  if (nessP.x <= 60 && nessP.x >= 58 && nessP.y <= 116 && nessP.y >= 96) {
    nessP.x += 1;
  }
  if (nessP.x <= 75 && nessP.x >= 73 && nessP.y <= 128 && nessP.y >= 107) {
    nessP.x += 1;
  }
  if (nessP.y >= 106 && nessP.y <= 108 && nessP.x >= 25 && nessP.x <= 74) {
    nessP.y -= 1;
  }
  if (nessP.y >= 95 && nessP.y <= 97 && nessP.x >= 25 && nessP.x <= 59) {
    nessP.y -= 1;
  }
  if (nessP.y <= 129 && nessP.y >= 127 && nessP.x >= 25 && nessP.x <= 74) {
    nessP.y += 1;
  }

  if (nessP.x >= 164 && nessP.x <= 166 && nessP.y >= 163 && nessP.y <= 169) {
    nessP.x -= 1;
  }
  if (nessP.x <= 194 && nessP.x >= 192 && nessP.y >= 163 && nessP.y <= 169) {
    nessP.x += 1;
  }
  if (nessP.y >= 162 && nessP.y <= 164 && nessP.x >= 165 && nessP.x <= 193) {
    nessP.y -= 1;
  }
  if (nessP.y <= 170 && nessP.y >= 168 && nessP.x >= 165 && nessP.x <= 193) {
    nessP.y += 1;
  }
}

function chronoSecretCollisions() {
  if (nessP.y >= 193) {
    nessP.y -= 1;
  }
  if (nessP.y <= 85) {
    nessP.y += 1;
  }
  if (nessP.x >= 161) {
    nessP.x -= 1;
  }
  if (nessP.x <= 64) {
    nessP.x += 1;
  }

  if (nessP.y <= 91 && nessP.x <= 85) {
    nessP.y += 1;
  }
  if (nessP.y >= 189 && nessP.x >= 83) {
    nessP.y -= 1;
  }
  if (nessP.x >= 82 && nessP.y >= 190) {
    nessP.x -= 1;
  }
  if (nessP.x >= 91 && nessP.y >= 160) {
    nessP.x -= 1;
  }

  if (nessP.y >= 99 && nessP.x >= 155) {
    nessP.y -= 1;
  }
  if (nessP.x >= 154 && nessP.y >= 100) {
    nessP.x -= 1;
  }
  if (nessP.y >= 129 && nessP.x >= 131) {
    nessP.y -= 1;
  }
  if (nessP.x >= 130 && nessP.y >= 130) {
    nessP.x -= 1;
  }

  if (nessP.y >= 153 && nessP.y <= 155 && nessP.x >= 83) {
    nessP.y -= 1;
  }
  if (nessP.y <= 164 && nessP.y >= 162 && nessP.x >= 83) {
    nessP.y += 1;
  }
  if (nessP.x >= 82 && nessP.y >= 154 && nessP.y <= 163) {
    nessP.x -= 1;
  }

  if (nessP.y <= 101 && nessP.x >= 67 && nessP.x <= 142) {
    nessP.y += 1;
  }
  if (nessP.x >= 66 && nessP.x <= 68 && nessP.y <= 100) {
    nessP.x -= 1;
  }
  if (nessP.x <= 143 && nessP.x >= 141 && nessP.y <= 100) {
    nessP.x += 1;
  }

  if (nessP.x >= 92 && nessP.x <= 94 && nessP.y <= 116) {
    nessP.x -= 1;
  }
  if (nessP.x <= 118 && nessP.x >= 116 && nessP.y <= 116) {
    nessP.x += 1;
  }
  if (nessP.y <= 117 && nessP.x >= 93 && nessP.x <= 117) {
    nessP.y += 1;
  }
}

function hRoomCollisions() {
  if (nessP.y >= 199) {
    nessP.y -= 1;
  }
  if (nessP.y <= 94) {
    nessP.y += 1;
  }
  if (nessP.x >= 172) {
    nessP.x -= 1;
  }
  if (nessP.x <= 86) {
    nessP.x += 1;
  }

  if (nessP.x <= 126 && nessP.y <= 119) {
    nessP.x += 1;
  }
  if (nessP.y <= 120 && nessP.x <= 125) {
    nessP.y += 1;
  }
  if (nessP.x >= 145 && nessP.y <= 129) {
    nessP.x -= 1;
  }
  if (nessP.y <= 130 && nessP.x >= 146) {
    nessP.y += 1;
  }
  if (nessP.x >= 132 && nessP.y >= 180) {
    nessP.x -= 1;
  }
  if (nessP.y >= 179 && nessP.x >= 133) {
    nessP.y -= 1;
  }
  if (nessP.x <= 106 && nessP.y >= 180) {
    nessP.x += 1;
  }
  if (nessP.y >= 179 && nessP.x <= 105) {
    nessP.y -= 1;
  }
}

function schooldoorDialogue() {
  if (wt >= 2 + spu) {
    word += sdd[1];
    text(word, 31, 186);
  }
  if (wt >= 4 + spu) {
    word += sdd[2];
    text(word, 31, 186);
  }
  if (wt >= 6 + spu) {
    word += sdd[3];
    text(word, 31, 186);
  }
  if (wt >= 8 + spu) {
    word += sdd[4];
    text(word, 31, 186);
  }
  if (wt >= 10 + spu) {
    word += sdd[5];
    text(word, 31, 186);
  }
  if (wt >= 12 + spu) {
    word += sdd[6];
    text(word, 31, 186);
  }
  if (wt >= 14 + spu) {
    word += sdd[7];
    text(word, 31, 186);
  }
  if (wt >= 16 + spu) {
    word += sdd[8];
    text(word, 31, 186);
  }
  if (wt >= 18 + spu) {
    word += sdd[9];
    text(word, 31, 186);
  }
  if (wt >= 20 + spu) {
    word += sdd[10];
    text(word, 31, 186);
  }
  if (wt >= 22 + spu) {
    word += sdd[11];
    text(word, 31, 186);
  }
  if (wt >= 24 + spu) {
    word += sdd[12];
    text(word, 31, 186);
  }
  if (wt >= 26 + spu) {
    word += sdd[13];
    text(word, 31, 186);
  }
  if (wt >= 28 + spu) {
    word += sdd[14];
    text(word, 31, 186);
  }
  if (wt >= 30 + spu) {
    word += sdd[15];
    text(word, 31, 186);
  }
  if (wt >= 40 + spu) {
    word += sdd[16];
    text(word, 31, 186);
  }
  if (wt >= 42 + spu) {
    word += sdd[17];
    text(word, 31, 186);
  }
  if (wt >= 44 + spu) {
    word += sdd[18];
    text(word, 31, 186);
  }
  if (wt >= 46 + spu) {
    word += sdd[19];
    text(word, 31, 186);
  }
  if (wt >= 48 + spu) {
    word += sdd[20];
    text(word, 31, 186);
  }
  if (wt >= 50 + spu) {
    word += sdd[21];
    text(word, 31, 186);
  }

  if (wt >= 74 + spu) {
    word = sdw[0];
    text(word, 31, 198);
  }
  if (wt >= 76 + spu) {
    word += sdw[1];
    text(word, 31, 198);
  }
  if (wt >= 78 + spu) {
    word += sdw[2];
    text(word, 31, 198);
  }
  if (wt >= 80 + spu) {
    word += sdw[3];
    text(word, 31, 198);
  }
  if (wt >= 82 + spu) {
    word += sdw[4];
    text(word, 31, 198);
  }
  if (wt >= 84 + spu) {
    word += sdw[5];
    text(word, 31, 198);
  }
  if (wt >= 86 + spu) {
    word += sdw[6];
    text(word, 31, 198);
  }
  if (wt >= 88 + spu) {
    word += sdw[7];
    text(word, 31, 198);
  }
  if (wt >= 90 + spu) {
    word += sdw[8];
    text(word, 31, 198);
  }
  if (wt >= 92 + spu) {
    word += sdw[9];
    text(word, 31, 198);
  }
  if (wt >= 94 + spu) {
    word += sdw[10];
    text(word, 31, 198);
  }
  if (wt >= 96 + spu) {
    word += sdw[11];
    text(word, 31, 198);
  }
  if (wt >= 98 + spu) {
    word += sdw[12];
    text(word, 31, 198);
  }
  if (wt >= 100 + spu) {
    word += sdw[13];
    text(word, 31, 198);
  }
  if (wt >= 102 + spu) {
    word += sdw[14];
    text(word, 31, 198);
  }
  if (wt >= 104 + spu) {
    word += sdw[15];
    text(word, 31, 198);
  }
  if (wt >= 106 + spu) {
    word += sdw[16];
    text(word, 31, 198);
  }
  if (wt >= 108 + spu) {
    word += sdw[17];
    text(word, 31, 198);
  }
  if (wt >= 110 + spu) {
    word += sdw[18];
    text(word, 31, 198);
  }
  if (wt >= 112 + spu) {
    word += sdw[19];
    text(word, 31, 198);
  }
  if (wt >= 114 + spu) {
    word += sdw[20];
    text(word, 31, 198);
  }
  if (wt >= 116 + spu) {
    word += sdw[21];
    text(word, 31, 198);
  }
  if (wt >= 118 + spu) {
    word += sdw[22];
    text(word, 31, 198);
  }
  if (wt >= 120 + spu) {
    word += sdw[23];
    text(word, 31, 198);
  }
  if (wt >= 122 + spu) {
    word += sdw[24];
    text(word, 31, 198);
  }
  if (wt >= 124 + spu) {
    word += sdw[25];
    text(word, 31, 198);
  }
  if (wt >= 126 + spu) {
    word += sdw[26];
    text(word, 31, 198);
  }
  if (wt >= 128 + spu) {
    word += sdw[27];
    text(word, 31, 198);
  }
}