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
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
  k.move();
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
  k.move();
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
  if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
  if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
  if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
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
function tileBlu(k) {
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
}
function tileOra(k) {
  k.putBeeper();
  k.putBeeper();
}
function tileRed(k) {
  k.putBeeper();
}

for (i=0; i < 8; i++) {
  for (l=0; l < 7; l++) {
    if (k.cornerColorIs("Blue")) {
      tileBlu(k); }
      if (k.cornerColorIs("Orange")) {
      tileOra(k); }
      if (k.cornerColorIs("Red")) {
      tileRed(k); }
      k.move();
    }
    if (k.facingEast()) {
      k.turnLeft();
      k.move();
      k.turnLeft();
    } else {
      if (i < 7) {
        turnRight(k);
        k.move();
        turnRight(k);
      }
    }
  }
}
  return main;
}
