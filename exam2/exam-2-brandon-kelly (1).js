// assignment: exam-2
// student: Brandon Kelly
// downloaded: 11/11/2026, 7:54:14 PM

// ===== Problem 1: Word Swap (6/6 worlds matched at last run) =====
function problem_1() {
// The letter code: a pile of n beepers stands for LETTERS[n].
// Slot 0 is a space and is never used, so "A" is 1, "B" is 2, … "Z" is 26.
const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The swap list: a word found on the left is replaced by its partner on the right.
const SWAP = {
  HOT: "COLD",  UP: "DOWN",   YES: "NO",   FAST: "SLOW",
  I: "YOU",     GOOD: "BAD",  ON: "OFF",   WET: "DRY",
  BIG: "TINY",  CAT: "DOG",   SUN: "MOON", NEW: "OLD",
};

function count(k) {
  let num = 0;
  while (k.beepersPresent()) {
    num++
    k.pickBeeper();
  }
  return LETTERS[num];
}

function decipher(letter) {
  let word = 0;
  while (letter != LETTERS[word]) {
    word++
  }
  if (word === 27) {
    return 0;
  } else {
  return word;
}
}
  
function main(k) {
  let code = "";
  let end = "";
  let current = "";
  for (let i = 0; i < 4; i++) {
    k.move();
    if (k.beepersPresent()) {
      code = code + count(k);
    }
  }
  end = SWAP[code];
  for (let o = -1; o < 4; o++) {
    k.move();
    current = decipher(end[o]);
    for (let beeps = 0; beeps < current; beeps++) {
      k.putBeeper();
    }
  }
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Color Swap (0/5 worlds matched at last run) =====
function problem_2() {
// The colors that appear in these worlds.
const COLORS = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Pink"];

function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function recall(k) {
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
  turnAround(k);
}

function colorID(k) {
  let color = "";
  if (k.cornerColorIs("Red")) {
    color = 0;
  } else {
    if (k.cornerColorIs("Orange")) {
      color = 1;
    } else {
      if (k.cornerColorIs("Yellow")) {
        color = 2;
      } else {
        if (k.cornerColorIs("Green")) {
          color = 3;
        } else {
          if (k.cornerColorIs("Cyan")) {
            color = 4;
          } else {
            if (k.cornerColorIs("Blue")) {
              color = 5;
            } else {
              if (k.cornerColorIs("Magenta")) {
                color = 6;
              } else {
                if (k.cornerColorIs("Pink")) {
                  color = 7;
                } else {
                  color = 9;
                }
              }
            }
          }
        }
      }
    }
  }
  return color;
}

function colorCheck(k) {
  let color = "";
  if (k.cornerColorIs("Red")) {
    color = "Red";
  } else {
    if (k.cornerColorIs("Orange")) {
      color = "Orange";
    } else {
      if (k.cornerColorIs("Yellow")) {
        color = "Yellow";
      } else {
        if (k.cornerColorIs("Green")) {
          color = "Green";
        } else {
          if (k.cornerColorIs("Cyan")) {
            color = "Cyan";
          } else {
            if (k.cornerColorIs("Blue")) {
              color = "Blue";
            } else {
              if (k.cornerColorIs("Magenta")) {
                color = "Magenta";
              } else {
                if (k.cornerColorIs("Pink")) {
                  color = "Pink";
                }
              }
            }
          }
        }
      }
    }
  }
  return color;
}

function main(k) {
  let take = "";
  let takes = "";
  let key = new Array(8).fill();
  walk(k);
  while (k.frontIsClear()) {
    if (k.cornerColorIs("")) {
    } else {
      take = colorID(k);
    }
    walk(k);
    if (k.cornerColorIs("")) {
    } else {
      takes = colorCheck(k);
    }
    walk(k);
    key[take] = takes;
  }
  recall(k);
  while (k.frontIsClear()) {
    k.turnLeft();
    walk(k);
    turnRight(k);
    while (k.frontIsClear()) {
      if (k.cornerColorIs("")) {
      } else {
        take = colorID(k);
        k.paintCorner(key[take]);
      }
      walk(k);
    }
  }
}
  return main;
}
// ===== end Problem 2 =====
