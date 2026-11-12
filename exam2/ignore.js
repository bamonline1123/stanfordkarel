// assignment: exam-2
// student: Brandon Kelly
// downloaded: 11/9/2026, 8:03:57 PM

// ===== Problem 1: Word Swap (2/6 worlds matched at last run) =====
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
  k.move();
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
    code = code + count(k);
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

function colorCheck(k) {
  if (k.cornerColorIs("Red")) {
    color = "Red";
  } else {
    if (k.cornerColorIs("Blue")) {
      color = "Blue";
    } else {
      if (k.cornerColorIs("Green")) {
        color = "Green";
      } else {
        if (k.cornerColorIs("Yellow")) {
          color = "Yellow";
        } else {
          if (k.cornerColorIs("Magenta")) {
            color = "Magenta";
          }
        }
      }
    }
  }
  return color;
}

function main(k) {
  let take = "";
  let return = "";
  let KEY = [];
  while (k.frontIsClear()) {
    k.walk();
    take = colorCheck(k);
    k.walk();
    return = colorCheck(k);
    KEY.push(take + return);
    }
  }
  return main;
}
// ===== end Problem 2 =====
