class bullets {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 1;

    this.hs = 1;
    this.hv = 0;
  }

  drop() {
    imageMode(CENTER);
    image(drops, this.x, this.y);
  }

  lkn() {
    imageMode(CENTER);
    image(lknife, this.x, this.y);
  }

  rkn() {
    imageMode(CENTER);
    image(rknife, this.x, this.y);
  }

  orb() {
    imageMode(CENTER);
    image(orbs, this.x, this.y);
  }

  head() {
    push();
    translate(hmx, hmy);

    if (hmyx <= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyx > 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  head1() {
    push();
    translate(hmx1, hmy1);

    if (hmyx1 >= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyx1 < 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  head2() {
    push();
    translate(hmx2, hmy2);

    if (hmyx2 >= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyx2 < 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  head3() {
    push();
    translate(hmx3, hmy3);

    if (hmyx3 <= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyx3 > 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  head4() {
    push();
    translate(hmx4, hmy4);

    if (hmyv4 >= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyv4 < 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  head5() {
    push();
    translate(hmx5, hmy5);

    if (hmyv5 <= 0) {
      rotate(radians(frameCount * 5));
    } else if (hmyv5 > 0) {
      rotate(radians(-frameCount * 5));
    }

    imageMode(CENTER);
    image(heads, this.x, this.y);

    pop();
  }

  oHealth() {
    if (nessP.x <= this.x + 4 && nessP.x >= this.x - 4 &&
      nessP.y <= this.y + 0 && nessP.y >= this.y - 9 &&
      ntimer >= 76 && health > 1)

    {
      ntimer = 0;
      health--;
    }

    if (nessP.x <= this.x + 4 && nessP.x >= this.x - 4 &&
      nessP.y <= this.y + 0 && nessP.y >= this.y - 9 &&
      ntimer >= 76 && health <= 1)

    {
      cswt = 1;
    }
  }

  dHealth() {
    if (nessP.x <= this.x + 6.5 && nessP.x >= this.x - 6.5 &&
      nessP.y <= this.y + 2.5 && nessP.y >= this.y - 8 &&
      ntimer >= 76 && health > 1)

    {
      ntimer = 0;
      health--;
    }

    if (nessP.x <= this.x + 6.5 && nessP.x >= this.x - 6.5 &&
      nessP.y <= this.y + 2.5 && nessP.y >= this.y - 8 &&
      ntimer >= 76 && health <= 1)

    {
      cswt = 1;
    }
  }

  kHealth() {
    if (nessP.x <= this.x + 16 && nessP.x >= this.x - 16 &&
      nessP.y <= this.y + 0 && nessP.y >= this.y - 9 &&
      ntimer >= 76 && health > 1)

    {
      ntimer = 0;
      health--;
    }

    if (nessP.x <= this.x + 16 && nessP.x >= this.x - 16 &&
      nessP.y <= this.y + 0 && nessP.y >= this.y - 9 &&
      ntimer >= 76 && health <= 1)

    {
      cswt = 1;
    }
  }
}

class npc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  hit() {
    if (bgm > 0) {
      if (nht >= 76) {
        if (nessP.x + 5 >= this.x && nessP.y - 9 >= this.y &&
          nessP.x - 20 <= this.x && nessP.y - 15 <= this.y) {
          health--;
          nht = 0;
        }
      }
    }
  }

  blondie() {
    if (bngtm > 0 && bngtm <= 15) {
      imageMode(CORNER);
      image(bagr01, this.x, this.y);
    }
    if (bngtm > 15 && bngtm <= 30) {
      imageMode(CORNER);
      image(bagr02, this.x, this.y);
    }
  }

  gabbie() {
    if (nessP.x >= 80 && nessP.y >= 133) {
      imageMode(CORNER);
      image(agg04, this.x, this.y);
    } else if (nessP.x >= 100 && nessP.y > 98 && nessP.y < 133) {
      imageMode(CORNER);
      image(agg04, this.x, this.y);
    } else if (nessP.x >= 140 && nessP.y <= 98) {
      imageMode(CORNER);
      image(agg04, this.x, this.y);
    } else if (nessP.y - 1 <= this.y) {
      imageMode(CORNER);
      image(agg02, this.x, this.y);
    } else if (nessP.y - 15 >= this.y) {
      imageMode(CORNER);
      image(agg01, this.x, this.y);
    } else if (nessP.x - 18 >= this.x) {
      imageMode(CORNER);
      image(agg04, this.x, this.y);
    } else if (nessP.x + 3 <= this.x) {
      imageMode(CORNER);
      image(agg03, this.x, this.y);
    } else {
      image(agg02, this.x, this.y);
    }
  }

  reddie() {
    imageMode(CORNER);
    image(pkd01, this.x, this.y);
  }
  oldie() {
    imageMode(CORNER);
    image(olmn01, this.x, this.y);
  }

  starman() {
    image(stm, this.x, this.y);
  }

  nurse() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(n02, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(n04, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(n01, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(n03, this.x, this.y);
    }

    if (nessP.x + 3 >= 150 && bgt < 350 + 50) {
      image(n04, this.x, this.y);
    } else if (nessP.x + 3 <= this.x && bgt < 350 + 50) {
      image(n03, this.x, this.y);
    } else if (nessP.y - 14 >= this.y && bgt < 350 + 50) {
      image(n01, this.x, this.y);
    } else if (nessP.x - 18 >= this.x && bgt < 350 + 50) {
      image(n04, this.x, this.y);
    } else if (nessP.y - 11 <= this.y && bgt < 350 + 50) {
      image(n02, this.x, this.y);
    } else if (bgt < 350 + 50) {
      image(n03, this.x, this.y);
    }
  }

  lady() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(l04, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(l01, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(l03, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(l02, this.x, this.y);
    }

    if (nessP.x - 19 >= this.x && bgt < 350 + 50) {
      image(l04, this.x, this.y);
    }

    if (nessP.x + 3 <= this.x && bgt < 350 + 50) {
      image(l03, this.x, this.y);
    }

    if (nessP.y - 11 <= this.y && nessP.x - 19 < this.x &&
      nessP.x + 3 > this.x && bgt < 350 + 50) {
      image(l02, this.x, this.y);
    }

    if (nessP.y - 14 >= this.y && nessP.x - 19 < this.x &&
      nessP.x + 3 > this.x && bgt < 350 + 50) {
      image(l01, this.x, this.y);
    }
  }

  applek() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(a01, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(a03, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(a02, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(a04, this.x, this.y);
    }

    if (bgt > 0 && bgt < 350 + 50) {
      image(a04, this.x, this.y);
    } else if (bgt < 350 + 50) {
      image(a01, this.x, this.y);
    }
  }

  orange() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(o03, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(o02, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(o04, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(o01, this.x, this.y);
    }

    if (bgt > 0 && bgt < 350 + 50) {
      image(o04, this.x, this.y);
    } else if (bgt < 350 + 50) {
      image(o01, this.x, this.y);
    }
  }

  granny() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(g01, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(g03, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(g02, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(g04, this.x, this.y);
    } else if (bgt < 350 + 50) {
      image(g04, this.x, this.y);
    }
  }

  business() {
    if (bgt >= 350 + 50 && bgt < 365 + 50) {
      image(bss03, this.x, this.y);
    }

    if (bgt >= 365 + 50 && bgt < 380 + 50) {
      image(bss02, this.x, this.y);
    }

    if (bgt >= 380 + 50 && bgt < 395 + 50) {
      image(bss04, this.x, this.y);
    }

    if (bgt >= 395 + 50) {
      image(bss01, this.x, this.y);
    }

    if (nessP.x + 3 >= 250 && bgt < 350 + 50) {
      image(bss04, this.x, this.y);
    } else if (nessP.x + 3 <= this.x && bgt < 350 + 50) {
      image(bss03, this.x, this.y);
    } else if (nessP.y - 14 >= this.y && bgt < 350 + 50) {
      image(bss01, this.x, this.y);
    } else if (nessP.x - 18 >= this.x && bgt < 350 + 50) {
      image(bss04, this.x, this.y);
    } else if (nessP.y - 11 <= this.y && bgt < 350 + 50) {
      image(bss02, this.x, this.y);
    } else if (bgt < 350 + 50) {
      image(bss01, this.x, this.y);
    }
  }

  collision() {
    if (nessP.x + 6 >= this.x && nessP.x + 3 <= this.x &&
      nessP.y - 14 - 2 <= this.y && nessP.y - 8 >= this.y) {
      nessP.x -= 1;
    }

    if (nessP.x - 21 <= this.x && nessP.x - 18 >= this.x &&
      nessP.y - 14 - 2 <= this.y && nessP.y - 8 >= this.y) {
      nessP.x += 1;
    }

    if (nessP.y - 15 - 2 <= this.y && nessP.y - 13 - 2 >= this.y &&
      nessP.x - 20 <= this.x && nessP.x + 5 >= this.x) {
      nessP.y += 1;
    }

    if (nessP.y - 9 <= this.y && nessP.y - 7 >= this.y &&
      nessP.x - 20 <= this.x && nessP.x + 5 >= this.x) {
      nessP.y -= 1;
    }
  }
}

class bananas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  body() {
    image(bn[frameCount % 70], this.x, this.y);
  }
  body1() {
    image(bn1[frameCount % 70], this.x, this.y);
  }
  body2() {
    image(bn2[frameCount % 70], this.x, this.y);
  }
  body3() {
    image(bn3[frameCount % 70], this.x, this.y);
  }
  body4() {
    image(bn4[frameCount % 70], this.x, this.y);
  }
  body5() {
    image(bn5[frameCount % 70], this.x, this.y);
  }
  body6() {
    image(bn6[frameCount % 70], this.x, this.y);
  }
  body7() {
    image(bn7[frameCount % 70], this.x, this.y);
  }

  body_0() {
    imageMode(CORNER);
    image(bt0[frameCount % 70], this.x, this.y);
  }
  body_1() {
    imageMode(CORNER);
    image(bt1[frameCount % 70], this.x, this.y);
  }
  body_2() {
    imageMode(CORNER);
    image(bt2[frameCount % 70], this.x, this.y);
  }
  body_3() {
    imageMode(CORNER);
    image(bt3[frameCount % 70], this.x, this.y);
  }
  body_4() {
    imageMode(CORNER);
    image(bt4[frameCount % 70], this.x, this.y);
  }
  body_5() {
    imageMode(CORNER);
    image(bt5[frameCount % 70], this.x, this.y);
  }
  body_6() {
    imageMode(CORNER);
    image(bt6[frameCount % 70], this.x, this.y);
  }
  body_7() {
    imageMode(CORNER);
    image(bt7[frameCount % 70], this.x, this.y);
  }

  collision() {
    if (swtch0 == 0) {
      if (nessP.y - 13 <= box1.y + 6 && nessP.y - 10 >= box1.y + 6 &&
        nessP.x + 9 <= box1.x + 39 && nessP.x - 10 >= box1.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob = 1;
          if (gnob <= 1 && gnob > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana0 = 1;
          swtch0 = 1;
          b1.x = 300;
          b1.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box1.y - 0 && nessP.y + 4 <= box1.y - 0 &&
        nessP.x + 9 <= box1.x + 39 && nessP.x - 10 >= box1.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob = 1;
          if (gnob <= 1 && gnob > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana0 = 1;
          swtch0 = 1;
          b1.x = 300;
          b1.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch1 == 0) {
      if (nessP.y - 13 <= box2.y + 6 && nessP.y - 10 >= box2.y + 6 &&
        nessP.x + 9 <= box2.x + 39 && nessP.x - 10 >= box2.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob1 = 1;
          if (gnob1 <= 1 && gnob1 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana1 = 1;
          swtch1 = 1;
          b2.x = 300;
          b2.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box2.y - 0 && nessP.y + 4 <= box2.y - 0 &&
        nessP.x + 9 <= box2.x + 39 && nessP.x - 10 >= box2.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob1 = 1;
          if (gnob1 <= 1 && gnob1 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana1 = 1;
          swtch1 = 1;
          b2.x = 300;
          b2.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch2 == 0) {
      if (nessP.y - 13 <= box3.y + 6 && nessP.y - 10 >= box3.y + 6 &&
        nessP.x + 9 <= box3.x + 39 && nessP.x - 10 >= box3.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob2 = 1;
          if (gnob2 <= 1 && gnob2 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana2 = 1;
          swtch2 = 1;
          b3.x = 300;
          b3.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box3.y - 0 && nessP.y + 4 <= box3.y - 0 &&
        nessP.x + 9 <= box3.x + 39 && nessP.x - 10 >= box3.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob2 = 1;
          if (gnob2 <= 1 && gnob2 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana2 = 1;
          swtch2 = 1;
          b3.x = 300;
          b3.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch3 == 0) {
      if (nessP.y - 13 <= box4.y + 6 && nessP.y - 10 >= box4.y + 6 &&
        nessP.x + 9 <= box4.x + 39 && nessP.x - 10 >= box4.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob3 = 1;
          if (gnob3 <= 1 && gnob3 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana3 = 1;
          swtch3 = 1;
          b4.x = 300;
          b4.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box4.y - 0 && nessP.y + 4 <= box4.y - 0 &&
        nessP.x + 9 <= box4.x + 39 && nessP.x - 10 >= box4.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob3 = 1;
          if (gnob3 <= 1 && gnob3 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana3 = 1;
          swtch3 = 1;
          b4.x = 300;
          b4.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch4 == 0) {
      if (nessP.y - 13 <= box5.y + 6 && nessP.y - 10 >= box5.y + 6 &&
        nessP.x + 9 <= box5.x + 39 && nessP.x - 10 >= box5.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob4 = 1;
          if (gnob4 <= 1 && gnob4 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana4 = 1;
          swtch4 = 1;
          b5.x = 300;
          b5.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box5.y - 0 && nessP.y + 4 <= box5.y - 0 &&
        nessP.x + 9 <= box5.x + 39 && nessP.x - 10 >= box5.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob4 = 1;
          if (gnob4 <= 1 && gnob4 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana4 = 1;
          swtch4 = 1;
          b5.x = 300;
          b5.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch5 == 0) {
      if (nessP.y - 13 <= box6.y + 6 && nessP.y - 10 >= box6.y + 6 &&
        nessP.x + 9 <= box6.x + 39 && nessP.x - 10 >= box6.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob5 = 1;
          if (gnob5 <= 1 && gnob5 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana5 = 1;
          swtch5 = 1;
          b6.x = 300;
          b6.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box6.y - 0 && nessP.y + 4 <= box6.y - 0 &&
        nessP.x + 9 <= box6.x + 39 && nessP.x - 10 >= box6.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob5 = 1;
          if (gnob5 <= 1 && gnob5 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana5 = 1;
          swtch5 = 1;
          b6.x = 300;
          b6.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch6 == 0) {
      if (nessP.y - 13 <= box7.y + 6 && nessP.y - 10 >= box7.y + 6 &&
        nessP.x + 9 <= box7.x + 39 && nessP.x - 10 >= box7.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob6 = 1;
          if (gnob6 <= 1 && gnob6 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana6 = 1;
          swtch6 = 1;
          b7.x = 300;
          b7.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box7.y - 0 && nessP.y + 4 <= box7.y - 0 &&
        nessP.x + 9 <= box7.x + 39 && nessP.x - 10 >= box7.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob6 = 1;
          if (gnob6 <= 1 && gnob6 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana6 = 1;
          swtch6 = 1;
          b7.x = 300;
          b7.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch7 == 0) {
      if (nessP.y - 13 <= box8.y + 6 && nessP.y - 10 >= box8.y + 6 &&
        nessP.x + 9 <= box8.x + 39 && nessP.x - 10 >= box8.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob7 = 1;
          if (gnob7 <= 1 && gnob7 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana7 = 1;
          swtch7 = 1;
          b8.x = 300;
          b8.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box8.y - 0 && nessP.y + 4 <= box8.y - 0 &&
        nessP.x + 9 <= box8.x + 39 && nessP.x - 10 >= box8.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob7 = 1;
          if (gnob7 <= 1 && gnob7 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana7 = 1;
          swtch7 = 1;
          b8.x = 300;
          b8.y = 300;
          zzec = 1;
        }
      }
    }

    if (swtch8 == 0) {
      if (nessP.y - 13 <= box9.y + 6 && nessP.y - 10 >= box9.y + 6 &&
        nessP.x + 9 <= box9.x + 39 && nessP.x - 10 >= box9.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob8 = 1;
          if (gnob8 <= 1 && gnob8 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana8 = 1;
          swtch8 = 1;
          b9.x = 300;
          b9.y = 300;
          zzec = 1;
        }
      }

      if (nessP.y + 7 >= box9.y - 0 && nessP.y + 4 <= box9.y - 0 &&
        nessP.x + 9 <= box9.x + 39 && nessP.x - 10 >= box9.x - 0) {
        if (zzec == 0 && health > 0) {
          push();
          imageMode(CORNER);
          image(zze, nessP.x + 12, nessP.y - 7);
          textFont(apple, 7);
          text('z', nessP.x + 12 + 8.6, nessP.y - 7 + 10.7);
          pop();
        }

        if (keyCode === 90) {
          gnob8 = 1;
          if (gnob8 <= 1 && gnob8 > 0) {
            if (counter > 1) {
              getb.play();
            }
          }
          counter -= 1;
          banana8 = 1;
          swtch8 = 1;
          b9.x = 300;
          b9.y = 300;
          zzec = 1;
        }
      }
    }
  }
}

class critters {
  constructor(x, y, s, ss) {
    this.x = x;
    this.y = y;
    dxx = s;
    dyy = ss;
  }

  body() {
    if (dxx < 0) {
      image(dl[frameCount % 10], this.x, this.y);
    }
    if (dxx > 0) {
      image(dr[frameCount % 10], this.x, this.y);
    }
  }

  move() {
    this.x += dxx;
    this.y += dyy;

    if (this.y - 11 <= 45) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 11 >= 212) {
      this.y -= 1;
      dyy *= -1
    }

    if (this.x - 4 <= 0) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 11 >= 248) {
      this.x -= 1;
      dxx *= -1
    }


    if (this.x - 6 <= box1.x + 31 && this.x - 0 >= box1.x + 31 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box1.x - 0 && this.x + 8 <= box1.x - 0 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box1.y + 6 && this.y + 2 >= box1.y + 6 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box1.y - 1 && this.y + 6 <= box1.y - 0 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box2.x + 31 && this.x - 0 >= box2.x + 31 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box2.x - 0 && this.x + 8 <= box2.x - 0 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box2.y + 6 && this.y + 2 >= box2.y + 6 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box2.y - 1 && this.y + 6 <= box2.y - 0 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box3.x + 31 && this.x - 0 >= box3.x + 31 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box3.x - 0 && this.x + 8 <= box3.x - 0 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box3.y + 6 && this.y + 2 >= box3.y + 6 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box3.y - 1 && this.y + 6 <= box3.y - 0 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box4.x + 31 && this.x - 0 >= box4.x + 31 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box4.x - 0 && this.x + 8 <= box4.x - 0 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box4.y + 6 && this.y + 2 >= box4.y + 6 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box4.y - 1 && this.y + 6 <= box4.y - 0 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box5.x + 31 && this.x - 0 >= box5.x + 31 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box5.x - 0 && this.x + 8 <= box5.x - 0 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box5.y + 6 && this.y + 2 >= box5.y + 6 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box5.y - 1 && this.y + 6 <= box5.y - 0 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box6.x + 31 && this.x - 0 >= box6.x + 31 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box6.x - 0 && this.x + 8 <= box6.x - 0 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box6.y + 6 && this.y + 2 >= box6.y + 6 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box6.y - 1 && this.y + 6 <= box6.y - 0 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box7.x + 31 && this.x - 0 >= box7.x + 31 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box7.x - 0 && this.x + 8 <= box7.x - 0 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box7.y + 6 && this.y + 2 >= box7.y + 6 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box7.y - 1 && this.y + 6 <= box7.y - 0 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box8.x + 31 && this.x - 0 >= box8.x + 31 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box8.x - 0 && this.x + 8 <= box8.x - 0 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box8.y + 6 && this.y + 2 >= box8.y + 6 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box8.y - 1 && this.y + 6 <= box8.y - 0 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 6 <= box9.x + 31 && this.x - 0 >= box9.x + 31 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= box9.x - 0 && this.x + 8 <= box9.x - 0 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 4 <= box9.y + 6 && this.y + 2 >= box9.y + 6 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 12 >= box9.y - 1 && this.y + 6 <= box9.y - 0 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y -= 1;
      dyy *= -1
    }


    if (this.x - 2 <= desk.x + 90 && this.x + 4 >= desk.x + 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x += 1;
      dxx *= -1
    }

    if (this.x + 14 >= desk.x - 0 && this.x + 8 <= desk.x - 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x -= 1;
      dxx *= -1
    }

    if (this.y - 3 <= desk.y + 14 && this.y + 3 >= desk.y + 14 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y += 1;
      dyy *= -1
    }

    if (this.y + 4 >= desk.y - 1 && this.y - 2 <= desk.y - 0 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y -= 1;
      dyy *= -1
    }
  }
}

class critters1 {
  constructor(x, y, s, ss) {
    this.x = x;
    this.y = y;
    dxx1 = s;
    dyy1 = ss;
  }

  body() {
    if (dxx1 < 0) {
      image(dl[frameCount % 10], this.x, this.y);
    }
    if (dxx1 > 0) {
      image(dr[frameCount % 10], this.x, this.y);
    }
  }

  move() {
    this.x += dxx1;
    this.y += dyy1;

    if (this.y - 11 <= 45) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 11 >= 212) {
      this.y -= 1;
      dyy1 *= -1
    }

    if (this.x - 4 <= 0) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 11 >= 248) {
      this.x -= 1;
      dxx1 *= -1
    }


    if (this.x - 6 <= box1.x + 31 && this.x - 0 >= box1.x + 31 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box1.x - 0 && this.x + 8 <= box1.x - 0 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box1.y + 6 && this.y + 2 >= box1.y + 6 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box1.y - 1 && this.y + 6 <= box1.y - 0 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box2.x + 31 && this.x - 0 >= box2.x + 31 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box2.x - 0 && this.x + 8 <= box2.x - 0 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box2.y + 6 && this.y + 2 >= box2.y + 6 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box2.y - 1 && this.y + 6 <= box2.y - 0 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box3.x + 31 && this.x - 0 >= box3.x + 31 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box3.x - 0 && this.x + 8 <= box3.x - 0 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box3.y + 6 && this.y + 2 >= box3.y + 6 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box3.y - 1 && this.y + 6 <= box3.y - 0 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box4.x + 31 && this.x - 0 >= box4.x + 31 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box4.x - 0 && this.x + 8 <= box4.x - 0 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box4.y + 6 && this.y + 2 >= box4.y + 6 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box4.y - 1 && this.y + 6 <= box4.y - 0 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box5.x + 31 && this.x - 0 >= box5.x + 31 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box5.x - 0 && this.x + 8 <= box5.x - 0 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box5.y + 6 && this.y + 2 >= box5.y + 6 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box5.y - 1 && this.y + 6 <= box5.y - 0 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box6.x + 31 && this.x - 0 >= box6.x + 31 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box6.x - 0 && this.x + 8 <= box6.x - 0 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box6.y + 6 && this.y + 2 >= box6.y + 6 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box6.y - 1 && this.y + 6 <= box6.y - 0 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box7.x + 31 && this.x - 0 >= box7.x + 31 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box7.x - 0 && this.x + 8 <= box7.x - 0 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box7.y + 6 && this.y + 2 >= box7.y + 6 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box7.y - 1 && this.y + 6 <= box7.y - 0 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box8.x + 31 && this.x - 0 >= box8.x + 31 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box8.x - 0 && this.x + 8 <= box8.x - 0 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box8.y + 6 && this.y + 2 >= box8.y + 6 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box8.y - 1 && this.y + 6 <= box8.y - 0 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 6 <= box9.x + 31 && this.x - 0 >= box9.x + 31 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= box9.x - 0 && this.x + 8 <= box9.x - 0 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 4 <= box9.y + 6 && this.y + 2 >= box9.y + 6 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 12 >= box9.y - 1 && this.y + 6 <= box9.y - 0 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }


    if (this.x - 2 <= desk.x + 90 && this.x + 4 >= desk.x + 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x += 1;
      dxx1 *= -1
    }

    if (this.x + 14 >= desk.x - 0 && this.x + 8 <= desk.x - 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x -= 1;
      dxx1 *= -1
    }

    if (this.y - 3 <= desk.y + 14 && this.y + 3 >= desk.y + 14 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y += 1;
      dyy1 *= -1
    }

    if (this.y + 4 >= desk.y - 1 && this.y - 2 <= desk.y - 0 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y -= 1;
      dyy1 *= -1
    }
  }
}

class critters2 {
  constructor(x, y, s, ss) {
    this.x = x;
    this.y = y;
    dxx2 = s;
    dyy2 = ss;
  }

  body() {
    if (dxx2 < 0) {
      image(dl[frameCount % 10], this.x, this.y);
    }
    if (dxx2 > 0) {
      image(dr[frameCount % 10], this.x, this.y);
    }
  }

  move() {
    this.x += dxx2;
    this.y += dyy2;

    if (this.y - 11 <= 45) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 11 >= 212) {
      this.y -= 1;
      dyy2 *= -1
    }

    if (this.x - 4 <= 0) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 11 >= 248) {
      this.x -= 1;
      dxx2 *= -1
    }


    if (this.x - 6 <= box1.x + 31 && this.x - 0 >= box1.x + 31 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box1.x - 0 && this.x + 8 <= box1.x - 0 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box1.y + 6 && this.y + 2 >= box1.y + 6 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box1.y - 1 && this.y + 6 <= box1.y - 0 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box2.x + 31 && this.x - 0 >= box2.x + 31 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box2.x - 0 && this.x + 8 <= box2.x - 0 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box2.y + 6 && this.y + 2 >= box2.y + 6 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box2.y - 1 && this.y + 6 <= box2.y - 0 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box3.x + 31 && this.x - 0 >= box3.x + 31 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box3.x - 0 && this.x + 8 <= box3.x - 0 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box3.y + 6 && this.y + 2 >= box3.y + 6 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box3.y - 1 && this.y + 6 <= box3.y - 0 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box4.x + 31 && this.x - 0 >= box4.x + 31 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box4.x - 0 && this.x + 8 <= box4.x - 0 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box4.y + 6 && this.y + 2 >= box4.y + 6 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box4.y - 1 && this.y + 6 <= box4.y - 0 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box5.x + 31 && this.x - 0 >= box5.x + 31 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box5.x - 0 && this.x + 8 <= box5.x - 0 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box5.y + 6 && this.y + 2 >= box5.y + 6 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box5.y - 1 && this.y + 6 <= box5.y - 0 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box6.x + 31 && this.x - 0 >= box6.x + 31 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box6.x - 0 && this.x + 8 <= box6.x - 0 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box6.y + 6 && this.y + 2 >= box6.y + 6 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box6.y - 1 && this.y + 6 <= box6.y - 0 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box7.x + 31 && this.x - 0 >= box7.x + 31 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box7.x - 0 && this.x + 8 <= box7.x - 0 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box7.y + 6 && this.y + 2 >= box7.y + 6 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box7.y - 1 && this.y + 6 <= box7.y - 0 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box8.x + 31 && this.x - 0 >= box8.x + 31 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box8.x - 0 && this.x + 8 <= box8.x - 0 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box8.y + 6 && this.y + 2 >= box8.y + 6 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box8.y - 1 && this.y + 6 <= box8.y - 0 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 6 <= box9.x + 31 && this.x - 0 >= box9.x + 31 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= box9.x - 0 && this.x + 8 <= box9.x - 0 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 4 <= box9.y + 6 && this.y + 2 >= box9.y + 6 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 12 >= box9.y - 1 && this.y + 6 <= box9.y - 0 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }


    if (this.x - 2 <= desk.x + 90 && this.x + 4 >= desk.x + 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x += 1;
      dxx2 *= -1
    }

    if (this.x + 14 >= desk.x - 0 && this.x + 8 <= desk.x - 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x -= 1;
      dxx2 *= -1
    }

    if (this.y - 3 <= desk.y + 14 && this.y + 3 >= desk.y + 14 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y += 1;
      dyy2 *= -1
    }

    if (this.y + 4 >= desk.y - 1 && this.y - 2 <= desk.y - 0 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y -= 1;
      dyy2 *= -1
    }
  }
}

class critters3 {
  constructor(x, y, s, ss) {
    this.x = x;
    this.y = y;
    dxx3 = s;
    dyy3 = ss;
  }

  body() {
    if (dxx3 < 0) {
      image(dl[frameCount % 10], this.x, this.y);
    }
    if (dxx3 > 0) {
      image(dr[frameCount % 10], this.x, this.y);
    }
  }

  move() {
    this.x += dxx3;
    this.y += dyy3;

    if (this.y - 11 <= 45) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 11 >= 212) {
      this.y -= 1;
      dyy3 *= -1
    }

    if (this.x - 4 <= 0) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 11 >= 248) {
      this.x -= 1;
      dxx3 *= -1
    }


    if (this.x - 6 <= box1.x + 31 && this.x - 0 >= box1.x + 31 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box1.x - 0 && this.x + 8 <= box1.x - 0 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box1.y + 6 && this.y + 2 >= box1.y + 6 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box1.y - 1 && this.y + 6 <= box1.y - 0 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box2.x + 31 && this.x - 0 >= box2.x + 31 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box2.x - 0 && this.x + 8 <= box2.x - 0 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box2.y + 6 && this.y + 2 >= box2.y + 6 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box2.y - 1 && this.y + 6 <= box2.y - 0 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box3.x + 31 && this.x - 0 >= box3.x + 31 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box3.x - 0 && this.x + 8 <= box3.x - 0 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box3.y + 6 && this.y + 2 >= box3.y + 6 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box3.y - 1 && this.y + 6 <= box3.y - 0 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box4.x + 31 && this.x - 0 >= box4.x + 31 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box4.x - 0 && this.x + 8 <= box4.x - 0 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box4.y + 6 && this.y + 2 >= box4.y + 6 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box4.y - 1 && this.y + 6 <= box4.y - 0 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box5.x + 31 && this.x - 0 >= box5.x + 31 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box5.x - 0 && this.x + 8 <= box5.x - 0 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box5.y + 6 && this.y + 2 >= box5.y + 6 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box5.y - 1 && this.y + 6 <= box5.y - 0 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box6.x + 31 && this.x - 0 >= box6.x + 31 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box6.x - 0 && this.x + 8 <= box6.x - 0 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box6.y + 6 && this.y + 2 >= box6.y + 6 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box6.y - 1 && this.y + 6 <= box6.y - 0 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box7.x + 31 && this.x - 0 >= box7.x + 31 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box7.x - 0 && this.x + 8 <= box7.x - 0 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box7.y + 6 && this.y + 2 >= box7.y + 6 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box7.y - 1 && this.y + 6 <= box7.y - 0 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box8.x + 31 && this.x - 0 >= box8.x + 31 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box8.x - 0 && this.x + 8 <= box8.x - 0 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box8.y + 6 && this.y + 2 >= box8.y + 6 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box8.y - 1 && this.y + 6 <= box8.y - 0 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 6 <= box9.x + 31 && this.x - 0 >= box9.x + 31 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= box9.x - 0 && this.x + 8 <= box9.x - 0 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 4 <= box9.y + 6 && this.y + 2 >= box9.y + 6 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 12 >= box9.y - 1 && this.y + 6 <= box9.y - 0 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }


    if (this.x - 2 <= desk.x + 90 && this.x + 4 >= desk.x + 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x += 1;
      dxx3 *= -1
    }

    if (this.x + 14 >= desk.x - 0 && this.x + 8 <= desk.x - 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x -= 1;
      dxx3 *= -1
    }

    if (this.y - 3 <= desk.y + 14 && this.y + 3 >= desk.y + 14 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y += 1;
      dyy3 *= -1
    }

    if (this.y + 4 >= desk.y - 1 && this.y - 2 <= desk.y - 0 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y -= 1;
      dyy3 *= -1
    }
  }
}

class critters4 {
  constructor(x, y, s, ss) {
    this.x = x;
    this.y = y;
    dxx4 = s;
    dyy4 = ss;
  }

  body() {
    if (dxx4 < 0) {
      image(dl[frameCount % 10], this.x, this.y);
    }
    if (dxx4 > 0) {
      image(dr[frameCount % 10], this.x, this.y);
    }
  }

  move() {
    this.x += dxx4;
    this.y += dyy4;

    if (this.y - 11 <= 45) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 11 >= 212) {
      this.y -= 1;
      dyy4 *= -1
    }

    if (this.x - 4 <= 0) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 11 >= 248) {
      this.x -= 1;
      dxx4 *= -1
    }


    if (this.x - 6 <= box1.x + 31 && this.x - 0 >= box1.x + 31 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box1.x - 0 && this.x + 8 <= box1.x - 0 &&
      this.y - 3 <= box1.y + 6 && this.y + 11 >= box1.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box1.y + 6 && this.y + 2 >= box1.y + 6 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box1.y - 1 && this.y + 6 <= box1.y - 0 &&
      this.x - 36 <= box1.x + 0 && this.x + 13 >= box1.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box2.x + 31 && this.x - 0 >= box2.x + 31 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box2.x - 0 && this.x + 8 <= box2.x - 0 &&
      this.y - 3 <= box2.y + 6 && this.y + 11 >= box2.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box2.y + 6 && this.y + 2 >= box2.y + 6 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box2.y - 1 && this.y + 6 <= box2.y - 0 &&
      this.x - 36 <= box2.x + 0 && this.x + 13 >= box2.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box3.x + 31 && this.x - 0 >= box3.x + 31 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box3.x - 0 && this.x + 8 <= box3.x - 0 &&
      this.y - 3 <= box3.y + 6 && this.y + 11 >= box3.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box3.y + 6 && this.y + 2 >= box3.y + 6 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box3.y - 1 && this.y + 6 <= box3.y - 0 &&
      this.x - 36 <= box3.x + 0 && this.x + 13 >= box3.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box4.x + 31 && this.x - 0 >= box4.x + 31 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box4.x - 0 && this.x + 8 <= box4.x - 0 &&
      this.y - 3 <= box4.y + 6 && this.y + 11 >= box4.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box4.y + 6 && this.y + 2 >= box4.y + 6 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box4.y - 1 && this.y + 6 <= box4.y - 0 &&
      this.x - 36 <= box4.x + 0 && this.x + 13 >= box4.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box5.x + 31 && this.x - 0 >= box5.x + 31 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box5.x - 0 && this.x + 8 <= box5.x - 0 &&
      this.y - 3 <= box5.y + 6 && this.y + 11 >= box5.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box5.y + 6 && this.y + 2 >= box5.y + 6 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box5.y - 1 && this.y + 6 <= box5.y - 0 &&
      this.x - 36 <= box5.x + 0 && this.x + 13 >= box5.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box6.x + 31 && this.x - 0 >= box6.x + 31 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box6.x - 0 && this.x + 8 <= box6.x - 0 &&
      this.y - 3 <= box6.y + 6 && this.y + 11 >= box6.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box6.y + 6 && this.y + 2 >= box6.y + 6 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box6.y - 1 && this.y + 6 <= box6.y - 0 &&
      this.x - 36 <= box6.x + 0 && this.x + 13 >= box6.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box7.x + 31 && this.x - 0 >= box7.x + 31 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box7.x - 0 && this.x + 8 <= box7.x - 0 &&
      this.y - 3 <= box7.y + 6 && this.y + 11 >= box7.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box7.y + 6 && this.y + 2 >= box7.y + 6 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box7.y - 1 && this.y + 6 <= box7.y - 0 &&
      this.x - 36 <= box7.x + 0 && this.x + 13 >= box7.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box8.x + 31 && this.x - 0 >= box8.x + 31 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box8.x - 0 && this.x + 8 <= box8.x - 0 &&
      this.y - 3 <= box8.y + 6 && this.y + 11 >= box8.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box8.y + 6 && this.y + 2 >= box8.y + 6 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box8.y - 1 && this.y + 6 <= box8.y - 0 &&
      this.x - 36 <= box8.x + 0 && this.x + 13 >= box8.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 6 <= box9.x + 31 && this.x - 0 >= box9.x + 31 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= box9.x - 0 && this.x + 8 <= box9.x - 0 &&
      this.y - 3 <= box9.y + 6 && this.y + 11 >= box9.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 4 <= box9.y + 6 && this.y + 2 >= box9.y + 6 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 12 >= box9.y - 1 && this.y + 6 <= box9.y - 0 &&
      this.x - 36 <= box9.x + 0 && this.x + 13 >= box9.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }


    if (this.x - 2 <= desk.x + 90 && this.x + 4 >= desk.x + 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x += 1;
      dxx4 *= -1
    }

    if (this.x + 14 >= desk.x - 0 && this.x + 8 <= desk.x - 0 &&
      this.y - 3 <= desk.y + 13 && this.y + 3 >= desk.y + cde) {
      this.x -= 1;
      dxx4 *= -1
    }

    if (this.y - 3 <= desk.y + 14 && this.y + 3 >= desk.y + 14 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y += 1;
      dyy4 *= -1
    }

    if (this.y + 4 >= desk.y - 1 && this.y - 2 <= desk.y - 0 &&
      this.x + 3 <= desk.x + 94 && this.x + 13 >= desk.x - 0) {
      this.y -= 1;
      dyy4 *= -1
    }
  }
}

class boxes {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}