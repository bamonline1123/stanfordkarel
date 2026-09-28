// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-09
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function isTreasure(k) {
  if (k.cornerColorIs("Blue") && k.beepersPresent()) {
    k.pickBeeper();
  }
}

function scanMove(k) {
  while (k.frontIsClear()) {
    isTreasure(k);
    k.move();
  }
  isTreasure(k);
}

function main(k) {
  while (k.frontIsClear()) {
    scanMove(k);
    if (k.leftIsClear()) {
      k.turnLeft();
      k.move();
      k.turnLeft();
    }
    scanMove(k);
    if (k.rightIsClear()) {
      turnRight(k);
      k.move();
      turnRight(k);
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function countGreen(k) {
  let count = 0;
  let finished = 0;
  while (k.frontIsClear()) {
    while (k.frontIsClear()) {
      if (k.cornerColorIs("Green")) {
        count++
        k.move();
      } else {
        k.move();
      }
    }
    if(k.cornerColorIs("Green")) {
      count++
    }
    if (k.leftIsClear()) {
      k.turnLeft();
      k.move();
      k.turnLeft();
    } 
    while (k.frontIsClear()) {
      if (k.cornerColorIs("Green")) {
        count++
        k.move();
      } else {
        k.move();
      }
    }
    if(k.cornerColorIs("Green")) {
      count++
    }
    if (k.rightIsClear() && k.leftIsClear()) {
      turnRight(k);
      k.move();
      turnRight(k);
    }
  }
  return count;
}

function main(k) {
  let count = countGreen(k);
  for (let i = 1; i < count; i++) {
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function beepersInLargerPile(k) {
  let leftCount = 0;
  let rightCount = 0;
  
}

function markWinner(k, winner) {
  
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  k.move();
  markWinner(k, beepersInLargerPile(k));

  for (let i = 0; i < 3; i++) k.move();
  k.turnLeft();
  k.move();
  k.move();
  turnRight(k);
  markWinner(k, beepersInLargerPile(k));

  k.turnLeft();
  k.move();
  k.move();
  k.turnLeft();
  for (let i = 0; i < 4; i++) k.move();
  turnRight(k);
  turnRight(k);
  markWinner(k, beepersInLargerPile(k));

  k.turnLeft();
  k.move();
  k.move();
  turnRight(k);
  for (let i = 0; i < 5; i++) k.move();
  markWinner(k, beepersInLargerPile(k));
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function isMarked(k) {
  
}

function collectMarked(k) {
  let count = 0;
  
  return count;
}

function main(k) {
  let total = 0;
  
}
  return main;
}
