// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-11
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

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function recall(k) {
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
}

function rowCount(k) {
  let left = 0;
  let right = 0;
  for (let x = 0; x < 3; x++) {
    if (k.beepersPresent()) {
      left++
    }
    k.move();
  }
  k.move();
  for (let x = 4; x < 7; x++) {
    if (k.beepersPresent()) {
      right++
    }
    k.move();
  }
  k.move();
  for (let total = left + right; total > 0; total--) {
    k.putBeeper();
    k.move();
  }
  recall(k);
}

function main(k) {
  for (i = 0; i < 4; i++) {
    rowCount(k);
    turnRight(k);
    k.move();
    turnRight(k);
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  let total = 17
  let tile = 5
  let full = Math.floor(total / tile)
  let remain = Math.floor(total % tile)
  
  for (let x = 0; x < full; x++) {
    for (let beeps = 0; beeps < tile; beeps++) {
      k.putBeeper();
    }
    k.move();
  }
  for (let r = 0; r < remain; r++) {
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  let avenue = 0
  let street = 0
  for (let i = 0; i < 6; i++) {
    street = 0;
    avenue++
    street++
    
}
  return main;
}
