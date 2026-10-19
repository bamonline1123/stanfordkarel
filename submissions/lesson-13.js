// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-13
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function recall(k) {
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
  k.turnLeft();
}
function main(k) {
  let heights = [2, 4, 1, 3, 2];
  let colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
  let pillar = 0;
  
  while (pillar < 5) {
    k.turnLeft();
    for (let i = 0; i < heights[pillar]; i++) {
      k.paintCorner(colors[pillar]);
      if (i+1 < heights[pillar]) {
        k.move();
      }
    }
    recall(k);
    walk(k);
    pillar++
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
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
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  let totals = new Array(5).fill(0);
  let x = 0;
  while (k.frontIsClear()) {
    x = 0;
    for (i = 0; i < totals.length; i++) {
      while (k.beepersPresent()) {
        k.pickBeeper();
        totals[x]++;
      }
      walk(k);
      x++
    }
    recall(k);
    turnRight(k);
    if (k.frontIsClear()) {
      k.move();
      turnRight(k);
    }
  }
  recall(k);
  k.turnLeft();
  x = 0;
  for (let o = 0; o < totals.length; o++) {
    for (let count = 0; count < totals[x]; count++) {
      k.putBeeper();
    }
    walk(k);
    x++
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
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
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  let word = [];
  let length = 0;
  let x = 0;
  let count = 0;
  while (k.frontIsClear()) {
    k.move();
    length++
  }
  recall(k);
  turnAround(k);
  for (let i = 0; i < length; i++) {
    count = 0;
    while (k.beepersPresent()) {
      k.pickBeeper();
      count++;
    }
    word.push(count);
    x++
    walk(k);
  }
  for (let i = 0; i < length; i++) {
    for (let beeps = 0; beeps < 
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
}
  return main;
}
