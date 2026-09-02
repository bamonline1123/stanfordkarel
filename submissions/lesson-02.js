// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-02
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

function main(k) {
  turnRight(k);
  k.move();
  }
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
   k.move();
    k.move();
  turnAround(k);
  k.move();
  k.move();
  k.move();
  k.move();
  }
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function dropAndMove(k) {
  k.putBeeper();
  k.move();
}

function main(k) {
  dropAndMove(k);
  dropAndMove(k);
  dropAndMove(k);
  }
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
  }

function SweepAndReturn(k) {
  while (k.frontIsClear()) {
    if (k.beepersPresent()) {
      k.pickBeeper(); }
      else {
        k.move(); }
  }
  turnAround(k);
  while (k.frontIsClear()) {
    k.move(); }
  }
  k.turnLeft();
  k.move();
  k.move();
  for (i = 0; i < 3; i++) {
    turnRight(k);
    SweepAndReturn(k);
    turnRight(k);
    if (i < 2) {    
    k.move();
    k.move();
    }
  }
}
  return main;
}
