// arrow keys to move, z to select
// play fullscreen: https://smoltanuki.itch.io/deltabound

// undyne house needs locked door sound + dialogue + music.
// ghost house needs music.
// chrono trigger room needs music.
// kirby room needs music.
// game over system.

// top shack, top tunnel, top house, large house, 
// and red house need rooms or text.

let health = 5;
let kd = 0;
let scene = 0;

let res = 3;
let f = 0;
let ff = 255;
let dt = 0;
let timer = 76;
let width = 257;
let height = 240;
let counter = 9;

let mu = 0;
let mut = 0;
let gofv = 1;
let apv = 1;
let kcv = 1;
let nlv = 1;
let stv = 1;
let tcd = 0;
let stmt = 0;
let hvul = 1;
let rvul = 1;
let ztsn = 0;
let zitm = 0;
let zfam = 0;
let tt = 0;
let dknm = 0;
let spu = 40;
let sddp = 0;
let ghmu = 0;
let mord = 0;
let mpau = 0;
let jl = 255;
let naa = 92;
let nabl = 0;
let nati = 0;
let flmu = 0;

function setup() {
  createCanvas(771, 720);
  noSmooth();

  nessAnim();
  bananaAnim();
  spriteSpawn();
  loadNPC();
  kd = 0;
  kdtt = 0;
  thirdNPC();
  thirdBullets();
  thirdScenes();
  goe = 0;

  treeSpawn();

  nessP = new ness();
}

function draw() {
  translate(0, 0);
  scale(res);
  background(0);
  timer += 1;

  switch (scene) {
    case 0:

      gof.stop();
      gofv = 1;
      tcd = 0;
      stmt = 0;

      if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) ||
        keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
        flmu = 1;
      }

      if (flmu >= 1) {
        mu += 1;
      }

      if (mu <= 6 && mu > 5) {
        schm.loop();
      }
      if (mu >= 7) {
        mu = 7;
      }

      imageMode(CORNER);
      image(school, -2, 15);
      chalkboard();
      mostBodies();
      healthStuffs();
      moveLayerCollision();
      changeScenesOne();

      break;
    case 1:

      mu += 1;

      if (mu <= 11 && mu > 10) {
        gof.loop();
        gof.volume(gofv);
      }
      if (mu >= 12) {
        mu = 12;
      }

      background(0);
      dt += 1;
      gameOverText();
      startGameOver();

      break;
    case 2:

      mu += 1;

      if (mu <= 11 && mu > 10) {
        dcls.play();
      }
      if (mu <= 35 && mu > 34) {
        apm.loop();
      }
      if (mu >= 36) {
        mu = 36;
      }

      background(0);
      hearts(246, 197);
      spriteDirection();
      twoDialogue();
      starmanSwitch();
      sceneTwo();
      background(0, 0, 0, ff);
      ff -= 9;

      break;
    case 3:

      mu += 1;

      if (mu <= 11 && mu > 10) {
        dcls.play();
      }
      if (mu <= 45 && mu > 44) {
        kcr.loop();
        kcr.volume(kcv);
      }
      if (mu >= 46) {
        mu = 46;
      }

      background(0);
      hearts(246, 229);
      bngtm += 1;
      startNull();
      sceneThree();
      background(0, 0, 0, fff);
      fff -= 9;

      break;
    case 4:

      mu += 1;

      if (mu <= 51 && mu > 50) {
        megalo.play();
      }
      if (mu >= 52) {
        mu = 52;
      }
      if (cswt >= 1) {
        megalo.stop();
      }

      background(0);
      frameShake();
      oldBattle();
      noelleCutscene();
      heartTransition();
      playerControlsThree();

      break;
    case 5:

      if (exdr == 0) {
        hmtm += 1;
      } else if (hmtwb <= 0) {
        hmtm += 1;
      }

      mu += 1;
      htwn.volume(hvul);

      if (exdr == 0) {
        if (mu <= 1 && mu > 0) {
          htwn.loop();
        }
        if (mu >= 2) {
          mu = 2;
        }
      } else {
        if (mu <= 26 && mu > 25) {
          htwn.loop();
        }
        if (mu >= 27) {
          mu = 27;
        }
      }

      //_______________________________________________________________________\\

      push();

      // allows movement (after spawn pause + when menu is closed)
      if (guid == 0 && hmtm >= 7 && ztsn <= 0 ||
        guid == 3 && hmtm >= 7 && ztsn <= 0) {
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

      // transition to zelda secret
      if (nessP.x <= -75 && nessP.y >= 617 && nessP.y <= 695) {
        ztsn += 1;

        if (ztsn >= 90) {
          guid = 10;
          hmtwb += 9;
          exdr = 0;
          if (hmtwb >= 360) {
            hmtm = 0;
            fltx = 0;
            scene = 6;
            hmtwb = 255;
          }
        }

        htwn.volume(hvul);
        hvul -= 0.03;
        if (hvul < 1 && hvul >= 1 - 0.03) {
          zent.play();
        }
        if (hvul <= 0.97) {
          hvul = 0;
          htwn.stop();
          mu = 0;
        }
      }

      // returning from zelda secret
      if (hmtwb > 0 && exdr == 1) {
        hmtwb -= 9;
        hvul = 1;
        ztsn = 0;
      }
      if (hmtwb <= 0 && exdr == 1) {
        hmtwb = 0;
      }

      // returning from tomb
      if (hmtwb > 0 && exdr == 3) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 3) {
        hmtwb = 0;
      }

      // transition to home one
      if (nessP.x >= 1 && nessP.x <= 12 && nessP.y >= 452 && nessP.y <= 454) {
        guid = 12;
        hmtwb += 9;
        exdr = 0;
        rvul = 1;
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 8;
          hmtwb = 255;
        }

        htwn.volume(hvul);
        hvul -= 0.03;
        if (hvul < 1 && hvul >= 1 - 0.03) {
          dopn.play();
        }
        if (hvul <= 0) {
          hvul = 0;
          htwn.stop();
          mu = 0;
        }
      }

      // returning from home one
      if (hmtwb > 0 && exdr == 2) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 2) {
        hmtwb = 0;
      }

      // transition to home two
      if (nessP.x >= 585 && nessP.x <= 596 && nessP.y >= 516 && nessP.y <= 518) {
        guid = 13;
        hmtwb += 9;
        exdr = 0;
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 9;
          hmtwb = 255;
        }

        htwn.volume(hvul);
        hvul -= 0.03;
        if (hvul < 1 && hvul >= 1 - 0.03) {
          dopn.play();
        }
        if (hvul <= 0) {
          hvul = 0;
          htwn.stop();
          mu = 0;
        }
      }

      // returning from home two
      if (hmtwb > 0 && exdr == 4) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 4) {
        hmtwb = 0;
      }

      // transition to hotel
      if (nessP.x >= 137 && nessP.x <= 148 && nessP.y >= 613 && nessP.y <= 615) {
        guid = 14;
        hmtwb += 9;
        exdr = 0;
        rvul = 1;
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 10;
          hmtwb = 255;
        }

        htwn.volume(hvul);
        hvul -= 0.03;
        if (hvul < 1 && hvul >= 1 - 0.03) {
          dopn.play();
        }
        if (hvul <= 0) {
          hvul = 0;
          htwn.stop();
          mu = 0;
        }
      }

      // returning from hotel
      if (hmtwb > 0 && exdr == 5) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 5) {
        hmtwb = 0;
      }

      // transition to chrono secret
      if (nessP.x >= 229 && nessP.x <= 231 && nessP.y >= 654 && nessP.y <= 656) {
        guid = 15;
        hmtwb += 9;
        exdr = 0;
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 11;
          hmtwb = 255;
        }

        htwn.volume(hvul);
        hvul -= 0.03;
        if (hvul < 1 && hvul >= 1 - 0.03) {
          stai.play();
        }
        if (hvul <= 0) {
          hvul = 0;
          htwn.stop();
          mu = 0;
        }
      }

      // returning from chrono secret
      if (hmtwb > 0 && exdr == 6) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 6) {
        hmtwb = 0;
      }

      // transition to kirby secret
      if (nessP.x >= 693 && nessP.x <= 702 && nessP.y >= 517 && nessP.y <= 519) {
        guid = 16;
        hmtwb += 9;
        exdr = 0;
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 12;
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

      // returning from kirby secret
      if (hmtwb > 0 && exdr == 7) {
        hmtwb -= 9;
        hvul = 1;
      }
      if (hmtwb <= 0 && exdr == 7) {
        hmtwb = 0;
      }

      // school door knock
      if (nessP.y <= 110 && nessP.x >= 99 && nessP.x <= 163 && sddp == 0) {
        guid = 99;
        dknm += 1;

        if (dknm >= 1 && dknm < 2) {
          dkno.play();
        }
        if (dknm >= 2) {
          dknm = 2;
        }
      }

      if (nessP.y > 110 && nessP.x >= 99 && nessP.x <= 163 && sddp == 1) {
        sddp = 0;
      }

      // diagonal collisions
      fenceCollide1();
      fenceCollide2();
      fenceCollide3();
      fenceCollide4();
      fenceCollide5();
      fenceCollide6();
      fenceCollide7();
      cavesCollide();

      // map boundaries
      houseCollisions();
      topleftCollisions();
      bottomrightCollisions();
      treeCollisions();
      signEggsBoard();
      fenceHorizontal();

      // camera follows ness
      cameraMove();

      // map background
      imageMode(CORNER);
      image(hmtn, -202, -50);

      // freezes sprite during spawn pause
      if (hmtm < 7) {
        if (exdr == 0) // overworld
        {
          imageMode(CENTER);
          kd = 0;
          wt = 0;
          tt = 0;
          image(downs[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 131;
          nessP.y = 120;
          ghmu = 0;
          mord = 0;
          //nessP.x = 131; nessP.y = 120;
        }

        if (exdr == 1) // zelda secret
        {
          imageMode(CENTER);
          kd = 2;
          image(rights[frameCount % 1], nessP.x, nessP.y);
          nessP.x = -17;
          nessP.y = 647;
        }

        if (exdr == 2) // home one
        {
          imageMode(CENTER);
          kd = 0;
          image(downs[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 16;
          nessP.y = 465;
        }

        if (exdr == 3) // tomb
        {
          imageMode(CENTER);
          kd = 3;
          image(lefts[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 663;
          nessP.y = 218;
        }

        if (exdr == 4) // home two
        {
          imageMode(CENTER);
          kd = 0;
          image(downs[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 595;
          nessP.y = 530;
        }

        if (exdr == 5) // hotel
        {
          imageMode(CENTER);
          kd = 0;
          image(downs[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 150;
          nessP.y = 626;
        }

        if (exdr == 6) // chrono secret
        {
          imageMode(CENTER);
          kd = 0;
          image(downs[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 200;
          nessP.y = 671;
        }

        if (exdr == 7) // kirby secret
        {
          imageMode(CENTER);
          kd = 3;
          image(lefts[frameCount % 1], nessP.x, nessP.y);
          nessP.x = 641;
          nessP.y = 515;
        }
      }

      // stops movement when menu is open
      if (guid > 0 && guid < 3 || guid >= 10) {
        moveStop();
      }

      // sprite animation after spawn pause
      else if (hmtm >= 7) {
        imageMode(CENTER);
        nessP.body();
      } // kd = 0;

      // top layers
      imageMode(CORNER);
      treesOne();
      treesTwo();
      treesThree();
      cliffsRight();
      houseLayer();
      miscLayer();
      fenceLayer();

      pop();



      // http://higherorderfun.com/blog/2012/05/20/the-guide-to-implementing-2d-platformers/
      // https://www.reddit.com/r/pygame/comments/8cxvqw/topdown_diagonal_collision_zelda_alttplike/
      // https://troygilbert.com/deconstructing-zelda/movement-mechanics/


      //_______________________________________________________________________\\

      // border + hearts
      imageMode(CORNER);
      image(border, 0, 0);
      hearts(246, 231);

      // notes
      textFont(apple, 4);
      fill(255);
      textAlign(LEFT);
      text('This area is unfinished, but feel free to explore!', 7, 232.3);

      // menu
      if (hmtm >= 7) {
        gui();
      }

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      // opening white
      if (hmtm <= 2 && whm == 0) {
        background(255);
      }
      if (hmtm > 2) {
        whm = 1;
      }

      // 10 frames after comma. 24 frames after period. 10 frames before ending.

      // school door dialogue
      if (nessP.y <= 110 && nessP.x >= 99 && nessP.x <= 163 && sddp == 0) {
        fill(255);
        textAlign(LEFT);
        stroke(0);
        textFont(apple, 6);

        wt += 1;

        if (wt >= 0 + spu) {
          imageMode(CORNER);
          image(dlg0, 15, 164);
          word = sdd[0];
          text(word, 31, 186);
        }

        if (wt < 129 + spu) {
          schooldoorDialogue();
        }

        if (wt >= 2 + spu && wt <= 30 + spu || wt >= 40 + spu && wt <= 50 + spu ||
          wt >= 74 + spu && wt <= 128 + spu) {
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

        if (wt >= 129 + spu) {
          text('* School\'s over, Ness!', 31, 186);
          text('  Welcome to the real world.', 31, 198);
        }

        if (wt >= 138 + spu && keyIsDown(90)) {
          kd = 0;
          wt = 0;
          dknm = 0;
          guid = 0;
          sddp = 1;
        }
      }

      // top shack knock
      // if (nessP.y <= 190 && nessP.y >= 188 && nessP.x >= 241 && nessP.x <= 252)
      // { noStroke(); fill(0,255,0); square(6,14,40); }

      // big hall knock
      // if (nessP.y <= 390 && nessP.y >= 388 && nessP.x >= 304 && nessP.x <= 316)
      // { noStroke(); fill(0,255,0); square(6,14,40); }

      // top cave knock
      // if (nessP.y <= 101 && nessP.y >= 99 && nessP.x >= 498 && nessP.x <= 507)
      // { noStroke(); fill(0,255,0); square(6,14,40); }

      // tall house knock
      // if (nessP.y <= 102 && nessP.y >= 100 && nessP.x >= 585 && nessP.x <= 596)
      // { noStroke(); fill(0,255,0); square(6,14,40); }

      // red house knock
      // if (nessP.y <= 737 && nessP.y >= 735 && nessP.x >= 504 && nessP.x <= 515)
      // { noStroke(); fill(0,255,0); square(6,14,40); }

      break;
    case 6: // zelda secret

      push();
      rectMode(CORNER);
      secretOne();
      pop();

      break;
    case 7: // tomb x 152 y 130

      push();
      imageMode(CORNER);
      image(tomb, 0, 0);
      pop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0) {
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
        nessP.x = 64;
        nessP.y = 127;
        kd = 2;
        imageMode(CENTER);
        image(rights[frameCount % 1], nessP.x, nessP.y);
      }

      // exit to overworld
      if (nessP.x <= 46 && nessP.y <= 134) {
        exdr = 3;
      }

      if (exdr == 3) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // map boundaries
      tombCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 0) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 3) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers

      if (nessP.y <= 135) {
        push();
        imageMode(CORNER);
        image(ombt, 33, 72);
        pop();
      }
      push();
      imageMode(CORNER);
      image(tomf, 0, 0);
      pop();

      // menu
      if (hmtm >= 7 && exdr == 0) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 8: // home one

      push();

      imageMode(CORNER);
      image(hom1, 0, 0);

      if (mord == 5) {
        image(gspa, 0, -10);
        jl -= 1;
        nabl += 1;

        if (nati >= 0 && nati < 40) {
          naa = 92;
        }
        if (nati >= 40 && nati < 60) {
          naa = 93;
        }
        if (nati >= 60 && nati < 100) {
          naa = 94;
        }
        if (nati >= 100 && nati < 120) {
          naa = 93;
        }

        if (nati > 120) {
          nati = 0;
        }

        fill(0, 0, 0, jl);
        rectMode(CORNER);
        square(0, 0, 300);
        if (jl <= 0) {
          jl = 0;
        }

        if (nabl >= 50 + 120 && nabl <= 58 + 120 ||
          nabl >= 66 + 120 && nabl <= 74 + 120 ||
          nabl >= 82 + 120)

        {
          image(naps, 185, naa);
        }

        if (nabl > 120 + 120) {
          nabl = 120 + 120;
          nati += 1;
        }
      }

      image(homt, 0, 0);

      pop();

      if (ghmu == 0) {
        phou.volume(rvul);
        phou.loop();
      }
      if (ghmu == 1) {
        phou.stop();
        ghou.stop();
        spkt.stop();
        chil.volume(rvul);
        chil.loop();
      }
      if (ghmu == 2) {
        phou.stop();
        ghou.stop();
        chil.stop();
        spkt.volume(rvul);
        if (mpau == 0) {
          spkt.loop();
        }
      }
      if (ghmu == 3) {
        phou.stop();
        spkt.stop();
        chil.stop();
        ghou.volume(rvul);
        ghou.loop();
      }

      if (mord == 0 && ghmu == 2) {
        mord++;
      }
      if (mord == 1 && ghmu == 3) {
        mord++;
      }
      if (mord == 2 && ghmu == 1) {
        mord++;
      }
      if (mord == 3 && ghmu == 3) {
        mord++;
      }
      if (mord == 4 && ghmu == 2) {
        mord++;
      }
      if (mord == 5 && mpau == 0) {
        spkt.stop();
        wt += 1;

        if (wt >= 1 && wt < 2) {
          dopn.play();
          ghmu = 4;
          mpau = 1;
        }
        if (wt >= 2) {
          wt = 2;
        }

        galx.volume(rvul);
        galx.loop();
      }

      if (mord == 1 && ghmu == 1) {
        mord = 0;
      }
      if (mord == 2 && ghmu == 2) {
        mord = 0;
      }
      if (mord == 3 && ghmu == 2) {
        mord = 0;
      }
      if (mord == 4 && ghmu == 1) {
        mord = 0;
      }

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0) {
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
        nessP.x = 59;
        nessP.y = 200;
        kd = 1;
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      // cd interact
      if (mpau == 0) {
        if (nessP.y >= 153 && nessP.y <= 154 && nessP.x <= 122 &&
          nessP.x >= 99 && keyIsDown(90) || nessP.y >= 155 &&
          nessP.y <= 167 && nessP.x <= 124 && nessP.x >= 123 &&
          keyIsDown(90) || nessP.y >= 155 && nessP.y <= 167 &&
          nessP.x <= 98 && nessP.x >= 97 && keyIsDown(90))

        {
          ghmu = 1;
        }

        if (nessP.y >= 153 && nessP.y <= 154 && nessP.x <= 122 + 35 &&
          nessP.x >= 99 + 35 && keyIsDown(90) || nessP.y >= 155 &&
          nessP.y <= 167 && nessP.x <= 124 + 35 && nessP.x >= 123 + 35 &&
          keyIsDown(90) || nessP.y >= 155 && nessP.y <= 167 &&
          nessP.x <= 98 + 35 && nessP.x >= 97 + 35 && keyIsDown(90))

        {
          ghmu = 2;
        }

        if (nessP.y >= 153 && nessP.y <= 154 && nessP.x <= 122 + 70 &&
          nessP.x >= 99 + 70 && keyIsDown(90) || nessP.y >= 155 &&
          nessP.y <= 167 && nessP.x <= 124 + 70 && nessP.x >= 123 + 70 &&
          keyIsDown(90) || nessP.y >= 155 && nessP.y <= 167 &&
          nessP.x <= 98 + 70 && nessP.x >= 97 + 70 && keyIsDown(90))

        {
          ghmu = 3;
        }
      }

      // exit to overworld
      if (nessP.y >= 210) {
        exdr = 2;
        dcls.play();

        spkt.volume(rvul);
        ghou.volume(rvul);
        chil.volume(rvul);
        phou.volume(rvul);
        galx.volume(rvul);
        rvul -= 0.03;

        if (rvul <= 0) {
          rvul = 0;
          spkt.stop();
          ghou.stop();
          chil.stop();
          phou.stop();
          galx.stop();
        }
      }

      if (exdr == 2) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // map boundaries
      houseOneCollisions();

      if (mord == 5 && mpau <= 1) {
        if (nessP.y >= 178) {
          nessP.y -= 1;
        }

        if (nessP.x >= 178 && nessP.x <= 180 &&
          nessP.y >= 112 && nessP.y <= 123) {
          nessP.x -= 1;
        }

        if (nessP.x <= 209 && nessP.x >= 207 &&
          nessP.y >= 112 && nessP.y <= 123) {
          nessP.x += 1;
        }

        if (nessP.y <= 124 && nessP.y >= 122 &&
          nessP.x >= 179 && nessP.x <= 208) {
          nessP.y += 1;
        }

        if (nessP.y >= 111 && nessP.y <= 113 &&
          nessP.x >= 179 && nessP.x <= 208) {
          nessP.y -= 1;
        }
      }

      // spawn settings
      if (hmtwb <= 0 && exdr == 0) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 2) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers
      if (nessP.y <= 117 && mord == 5) {
        if (nabl >= 50 + 120 && nabl <= 58 + 120 ||
          nabl >= 66 + 120 && nabl <= 74 + 120 ||
          nabl >= 82 + 120) {
          push();
          imageMode(CORNER);
          image(naps, 185, naa);
          pop();
        }
      }

      // menu
      if (hmtm >= 7 && exdr == 0) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // border
      push();
      imageMode(CORNER);
      image(border, 0, 0);
      pop();

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 9: // home two

      push();
      imageMode(CORNER);
      image(hom2, 0, 0);
      pop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0) {
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
        nessP.y = 203;
        kd = 1;
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      // exit to overworld
      if (nessP.y >= 211) {
        exdr = 4;
        dcls.play();
      }

      if (exdr == 4) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // map boundaries
      houseTwoCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 0) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 4) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers
      if (nessP.y <= 166) {
        push();
        imageMode(CORNER);
        image(hmm1, 171, 166);
        pop();
      }
      if (nessP.y <= 116) {
        push();
        imageMode(CORNER);
        image(hmm2, 31, 98);
        pop();
      }
      if (nessP.y <= 122) {
        push();
        imageMode(CORNER);
        image(hmm3, 146, 113);
        pop();
      }
      if (nessP.y <= 126) {
        push();
        imageMode(CORNER);
        image(hmm4, 230, 85);
        pop();
      }

      // menu
      if (hmtm >= 7 && exdr == 0) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      hearts(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 10: // hotel

      push();
      imageMode(CORNER);
      image(hot1, 0, 0);
      pop();

      hote.volume(rvul);
      hote.loop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0 ||
        hmtm >= 7 && guid == 0 && exdr == 91 || hmtm >= 7 && guid == 3 && exdr == 91) {
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
        if (exdr == 0) // overworld
        {
          nessP.x = 139;
          nessP.y = 188;
          kd = 1;
          imageMode(CENTER);
          image(ups[frameCount % 1], nessP.x, nessP.y);
        }

        if (exdr == 91) // h room
        {
          nessP.x = 59;
          nessP.y = 70;
          kd = 0;
          imageMode(CENTER);
          image(downs[frameCount % 1], nessP.x, nessP.y);
        }
      }

      // exit to overworld
      if (nessP.y >= 208) {
        exdr = 5;
        dcls.play();

        hote.volume(rvul);
        rvul -= 0.03;
        if (rvul <= 0) {
          rvul = 0;
          hote.stop();
        }
      }

      if (exdr == 5) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // transition to h room
      if (nessP.y <= 54 && nessP.x <= 70) {
        guid = 90;
        hmtwb += 9;
        exdr = 90;
        stai.play();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 90;
          hmtwb = 255;
        }
      }

      // map boundaries
      hotelOneCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 0 || hmtwb <= 0 && exdr == 91) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0 || hmtwb > 0 && exdr == 91) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 5 || exdr == 90) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers
      if (nessP.y <= 80) {
        push();
        imageMode(CORNER);
        image(htt1, 79, 69);
        pop();
      }
      if (nessP.y <= 119) {
        push();
        imageMode(CORNER);
        image(hoo1, 201, 110);
        pop();
      }
      if (nessP.y <= 166) {
        push();
        imageMode(CORNER);
        image(hto1, 201, 160);
        pop();
      }
      if (nessP.y <= 52) {
        push();
        imageMode(CORNER);
        image(hdo1, 72, 48);
        pop();
      }

      // menu
      if (hmtm >= 7 && exdr == 0 || hmtm >= 7 && exdr == 91) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 90: // h room

      push();
      imageMode(CORNER);
      image(hot2, 0, 0);
      pop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 90 || hmtm >= 7 && guid == 3 && exdr == 90) {
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
        nessP.x = 120;
        nessP.y = 192;
        kd = 1;
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      // transition to hotel
      if (nessP.y >= 198) {
        exdr = 91;
        stai.play();
      }

      if (exdr == 91) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 10;
          guid = 0;
        }
      }

      // map boundaries
      hRoomCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 90) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 90) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 0 || exdr == 91) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers
      if (nessP.y <= 116) {
        push();
        imageMode(CORNER);
        image(horb, 115, 116);
        pop();
      }

      // menu
      if (hmtm >= 7 && exdr == 90) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 11: // chrono secret

      push();
      imageMode(CORNER);
      image(chro, 0, 0);
      pop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0) {
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
        nessP.x = 74;
        nessP.y = 182;
        kd = 1;
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      // exit to overworld
      if (nessP.y >= 162 && nessP.x >= 90) {
        exdr = 6;
        stai.play();
      }

      if (exdr == 6) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // map boundaries
      chronoSecretCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 0) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 6) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // top layers
      if (nessP.y <= 192) {
        push();
        imageMode(CORNER);
        image(coh1, 89, 196);
        pop();
      }
      if (nessP.y <= 160) {
        push();
        imageMode(CORNER);
        image(coh2, 89, 148);
        pop();
      }
      if (nessP.y <= 112) {
        push();
        imageMode(CORNER);
        image(coh3, 98, 102);
        pop();
      }
      if (nessP.y <= 108) {
        push();
        imageMode(CORNER);
        image(coh4, 161, 101);
        pop();
      }

      // menu
      if (hmtm >= 7 && exdr == 0) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
    case 12: // kirby secret

      push();
      imageMode(CORNER);
      image(kiry, 0, 0);
      pop();

      // allows movement
      if (hmtm >= 7 && guid == 0 && exdr == 0 || hmtm >= 7 && guid == 3 && exdr == 0) {
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
        nessP.y = 207;
        kd = 1;
        imageMode(CENTER);
        image(ups[frameCount % 1], nessP.x, nessP.y);
      }

      // exit to overworld
      if (nessP.y >= 210) {
        exdr = 7;
      }

      if (exdr == 7) {
        hmtwb += 9;
        moveStop();
        if (hmtwb >= 360) {
          hmtm = 0;
          scene = 5;
          guid = 0;
        }
      }

      // map boundaries
      kirbySecretCollisions();

      // spawn settings
      if (hmtwb <= 0 && exdr == 0) {
        hmtwb = 0;
        hmtm += 1;
      }
      if (hmtwb > 0 && exdr == 0) {
        hmtwb -= 9;
        guid = 0;
      }

      if (guid > 0 && guid < 3 || exdr == 7) {
        moveStop();
      } else if (hmtm >= 7) {
        nessP.body();
      }

      // menu
      if (hmtm >= 7 && exdr == 0) {
        push();
        textAlign(LEFT);
        gui();
        pop();
      }

      // hearts
      heartso(246, 231);

      // black fade in + fade out
      background(0, 0, 0, hmtwb);

      break;
  }

  // stats('x:',nessP.x + ' y:' + nessP.y + ' mord:' + mord + ' ghmu:'+ ghmu + ' wt:' + wt);

}

class tree2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  body() {
    rect(this.x, this.y, 27, 10);
  }

  collide() {
    if (nessP.x <= this.x + 33 && nessP.x >= this.x + 31 &&
      nessP.y >= this.y - 9 && nessP.y <= this.y + 0) {
      nessP.x += 1;
    }

    if (nessP.x <= this.x - 3 && nessP.x >= this.x - 5 &&
      nessP.y >= this.y - 9 && nessP.y <= this.y + 0) {
      nessP.x -= 1;
    }

    if (nessP.y <= this.y + 1 && nessP.y >= this.y - 1 &&
      nessP.x >= this.x - 4 && nessP.x <= this.x + 32) {
      nessP.y += 1;
    }

    if (nessP.y <= this.y - 8 && nessP.y >= this.y - 10 &&
      nessP.x >= this.x - 4 && nessP.x <= this.x + 32) {
      nessP.y -= 1;
    }
  }
}

class ness {
  constructor() {
    this.x = 203;
    this.y = 92;
  }

  body() {
    switch (kd) {
      case 0:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(downs[frameCount % 1], this.x, this.y);
        }

        break;
      case 1:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(ups[frameCount % 1], this.x, this.y);
        }

        break;
      case 2:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(rights[frameCount % 1], this.x, this.y);
        }

        break;
      case 3:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(lefts[frameCount % 1], this.x, this.y);
        }

        break;
      case 4:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(up_rights[frameCount % 1], this.x, this.y);
        }

        break;
      case 5:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(up_lefts[frameCount % 1], this.x, this.y);
        }

        break;
      case 6:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(down_rights[frameCount % 1], this.x, this.y);
        }

        break;
      case 7:

        if (keyIsDown(UP_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(up_rights[frameCount % 20], this.x, this.y);
            kd = 4;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(up_lefts[frameCount % 20], this.x, this.y);
            kd = 5;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          } else if (keyIsDown(UP_ARROW)) {
            imageMode(CENTER);
            image(ups[frameCount % 20], this.x, this.y);
            kd = 1;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (keyIsDown(RIGHT_ARROW)) {
            imageMode(CENTER);
            image(down_rights[frameCount % 20], this.x, this.y);
            kd = 6;
          } else if (keyIsDown(LEFT_ARROW)) {
            imageMode(CENTER);
            image(down_lefts[frameCount % 20], this.x, this.y);
            kd = 7;
          } else if (keyIsDown(DOWN_ARROW)) {
            imageMode(CENTER);
            image(downs[frameCount % 20], this.x, this.y);
            kd = 0;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          imageMode(CENTER);
          image(rights[frameCount % 20], this.x, this.y);
          kd = 2;
        } else if (keyIsDown(LEFT_ARROW)) {
          imageMode(CENTER);
          image(lefts[frameCount % 20], this.x, this.y);
          kd = 3;
        } else {
          imageMode(CENTER);
          image(down_lefts[frameCount % 1], this.x, this.y);
        }

        break;
    }
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 1;
      if (this.y - 11 <= 53) {
        this.y += 1;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 1;
      if (this.y + 11 >= 218) {
        this.y -= 1;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 1;
      if (this.x - 7 <= 5) {
        this.x += 1;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 1;
      if (this.x + 6 >= 251) {
        this.x -= 1;
      }
    }
  }

  move2() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 1;
      if (this.y - 11 <= 97) {
        this.y += 1;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 1;
      if (this.y + 11 >= 186) {
        this.y -= 1;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 1;
      if (this.x - 7 <= 5) {
        this.x += 1;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 1;
      if (this.x + 6 >= 412) {
        this.x -= 1;
      }
    }
  }

  move3() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 1;
      if (this.y - 11 <= 53) {
        this.y += 1;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 1;
      if (this.y + 11 >= 218) {
        this.y -= 1;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 1;
      if (this.x - 7 <= 5) {
        this.x += 1;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 1;
      if (this.x + 6 >= 251) {
        this.x -= 1;
      }
    }
  }

  collision() {
    if (this.x - 6 <= box1.x + 39 && this.x - 5 >= box1.x + 39 &&
      this.y - 11 <= box1.y + 6 && this.y + 11 >= box1.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box1.x - 0 && this.x + 5 <= box1.x - 0 &&
      this.y - 11 <= box1.y + 6 && this.y + 11 >= box1.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box1.y + 6 && this.y - 10 >= box1.y + 6 &&
      this.x - 6 <= box1.x + 39 && this.x + 5 >= box1.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box1.y - 0 && this.y + 4 <= box1.y - 0 &&
      this.x - 6 <= box1.x + 39 && this.x + 5 >= box1.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box2.x + 39 && this.x - 5 >= box2.x + 39 &&
      this.y - 11 <= box2.y + 6 && this.y + 11 >= box2.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box2.x - 0 && this.x + 5 <= box2.x - 0 &&
      this.y - 11 <= box2.y + 6 && this.y + 11 >= box2.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box2.y + 6 && this.y - 10 >= box2.y + 6 &&
      this.x - 6 <= box2.x + 39 && this.x + 5 >= box2.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box2.y - 0 && this.y + 4 <= box2.y - 0 &&
      this.x - 6 <= box2.x + 39 && this.x + 5 >= box2.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box3.x + 39 && this.x - 5 >= box3.x + 39 &&
      this.y - 11 <= box3.y + 6 && this.y + 11 >= box3.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box3.x - 0 && this.x + 5 <= box3.x - 0 &&
      this.y - 11 <= box3.y + 6 && this.y + 11 >= box3.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box3.y + 6 && this.y - 10 >= box3.y + 6 &&
      this.x - 6 <= box3.x + 39 && this.x + 5 >= box3.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box3.y - 0 && this.y + 4 <= box3.y - 0 &&
      this.x - 6 <= box3.x + 39 && this.x + 5 >= box3.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box4.x + 39 && this.x - 5 >= box4.x + 39 &&
      this.y - 11 <= box4.y + 6 && this.y + 11 >= box4.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box4.x - 0 && this.x + 5 <= box4.x - 0 &&
      this.y - 11 <= box4.y + 6 && this.y + 11 >= box4.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box4.y + 6 && this.y - 10 >= box4.y + 6 &&
      this.x - 6 <= box4.x + 39 && this.x + 5 >= box4.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box4.y - 0 && this.y + 4 <= box4.y - 0 &&
      this.x - 6 <= box4.x + 39 && this.x + 5 >= box4.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box5.x + 39 && this.x - 5 >= box5.x + 39 &&
      this.y - 11 <= box5.y + 6 && this.y + 11 >= box5.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box5.x - 0 && this.x + 5 <= box5.x - 0 &&
      this.y - 11 <= box5.y + 6 && this.y + 11 >= box5.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box5.y + 6 && this.y - 10 >= box5.y + 6 &&
      this.x - 6 <= box5.x + 39 && this.x + 5 >= box5.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box5.y - 0 && this.y + 4 <= box5.y - 0 &&
      this.x - 6 <= box5.x + 39 && this.x + 5 >= box5.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box6.x + 39 && this.x - 5 >= box6.x + 39 &&
      this.y - 11 <= box6.y + 6 && this.y + 11 >= box6.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box6.x - 0 && this.x + 5 <= box6.x - 0 &&
      this.y - 11 <= box6.y + 6 && this.y + 11 >= box6.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box6.y + 6 && this.y - 10 >= box6.y + 6 &&
      this.x - 6 <= box6.x + 39 && this.x + 5 >= box6.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box6.y - 0 && this.y + 4 <= box6.y - 0 &&
      this.x - 6 <= box6.x + 39 && this.x + 5 >= box6.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box7.x + 39 && this.x - 5 >= box7.x + 39 &&
      this.y - 11 <= box7.y + 6 && this.y + 11 >= box7.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box7.x - 0 && this.x + 5 <= box7.x - 0 &&
      this.y - 11 <= box7.y + 6 && this.y + 11 >= box7.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box7.y + 6 && this.y - 10 >= box7.y + 6 &&
      this.x - 6 <= box7.x + 39 && this.x + 5 >= box7.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box7.y - 0 && this.y + 4 <= box7.y - 0 &&
      this.x - 6 <= box7.x + 39 && this.x + 5 >= box7.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box8.x + 39 && this.x - 5 >= box8.x + 39 &&
      this.y - 11 <= box8.y + 6 && this.y + 11 >= box8.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box8.x - 0 && this.x + 5 <= box8.x - 0 &&
      this.y - 11 <= box8.y + 6 && this.y + 11 >= box8.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box8.y + 6 && this.y - 10 >= box8.y + 6 &&
      this.x - 6 <= box8.x + 39 && this.x + 5 >= box8.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box8.y - 0 && this.y + 4 <= box8.y - 0 &&
      this.x - 6 <= box8.x + 39 && this.x + 5 >= box8.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= box9.x + 39 && this.x - 5 >= box9.x + 39 &&
      this.y - 11 <= box9.y + 6 && this.y + 11 >= box9.y + 7) {
      this.x += 1;
    }

    if (this.x + 6 >= box9.x - 0 && this.x + 5 <= box9.x - 0 &&
      this.y - 11 <= box9.y + 6 && this.y + 11 >= box9.y + 7) {
      this.x -= 1;
    }

    if (this.y - 11 <= box9.y + 6 && this.y - 10 >= box9.y + 6 &&
      this.x - 6 <= box9.x + 39 && this.x + 5 >= box9.x - 0) {
      this.y += 1;
    }

    if (this.y + 5 >= box9.y - 0 && this.y + 4 <= box9.y - 0 &&
      this.x - 6 <= box9.x + 39 && this.x + 5 >= box9.x - 0) {
      this.y -= 1;
    }


    if (this.x - 6 <= desk.x + 94 && this.x - 5 >= desk.x + 94 &&
      this.y - 10 <= desk.y + 13 && this.y + 10 >= desk.y + 14) {
      this.x += 1;
    }

    if (this.x + 6 >= desk.x - 0 && this.x + 5 <= desk.x - 0 &&
      this.y - 10 <= desk.y + 13 && this.y + 10 >= desk.y + 14) {
      this.x -= 1;
    }

    if (this.y - 11 <= desk.y + 14 && this.y - 10 >= desk.y + 14 &&
      this.x - 6 <= desk.x + 94 && this.x + 5 >= desk.x - 0) {
      this.y += 1;
    }

    if (this.y - 3 >= desk.y - 0 && this.y - 4 <= desk.y - 0 &&
      this.x - 6 <= desk.x + 94 && this.x + 5 >= desk.x - 0) {
      this.y -= 1;
    }
  }
}

function hearts(x, y) {
  for (let i = 0; i < health; i++) {
    imageMode(CENTER);
    image(heart, x - i * 10, y);
  }
}

function heartso(x, y) {
  for (let i = 0; i < health; i++) {
    imageMode(CENTER);
    image(heart2, x - i * 10, y);
  }
}

function hearts3(x, y) {
  for (let i = 0; i < health; i++) {
    imageMode(CENTER);
    image(heart3, x - i * 10, y);
  }
}

function hearts4(x, y) {
  for (let i = 0; i < health; i++) {
    imageMode(CENTER);
    image(heart4, x - i * 10, y);
  }
}