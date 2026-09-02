// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-03
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
function scan(k) {
  if (k.beepersPresent()) {
    k.pickBeeper()
  }
  if (k.frontIsClear()) {
    k.move();
  }
}
  scan(k);
  scan(k);
  scan(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
function scan(k) {
  if (k.beepersPresent()) {
    k.paintCorner("Red")
  }
  if (k.frontIsClear()) {
    k.move();
  }
}
  scan(k);
  scan(k);
  scan(k);
  scan(k);
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
function scan(k) {
  if (k.cornerColorIs("Blue")) {
    k.putBeeper();
    k.putBeeper();
    k.putBeeper();
  }
  if (k.cornerColorIs("Orange")) {
    k.putBeeper();
    k.putBeeper();
  } 
  if (k.cornerColorIs("Red")) {
    k.putBeeper();
  }
  if (k.frontIsClear()) {
    k.move()
  }
}

function RowAcross(k) {
  scan(k);
  scan(k);
  scan(k);
  scan(k);
  scan(k);
  scan(k);
  scan(k);
  scan(k);
}

function HeadRight(k) {
  RowAcross(k);
  k.turnLeft();
  if (k.frontIsClear()) {
    k.move(); 
  }
  k.turnLeft();
}
function HeadLeft(k) {
  RowAcross(k);
  turnRight(k);
  if (k.frontIsClear()) {
    k.move();
  }
  turnRight(k);
}
HeadRight(k);
HeadLeft(k);
HeadRight(k);
HeadLeft(k);
HeadRight(k);
HeadLeft(k);
HeadRight(k);
HeadLeft(k);
}
  return main;
}
