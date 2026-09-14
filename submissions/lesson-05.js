// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-05
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  while (k.beepersPresent()) {
    k.pickBeeper();
    if (k.frontIsClear()) {
     k.move(); 
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function cleanAll(k) {
  while (k.beepersPresent()) {
    k.pickBeeper();
  }
}
function dropAll(k) {
  while (k.beepersInBag()) {
    k.putBeeper();
  }
}

function moveAcross(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  while (k.frontIsClear()) {
    cleanAll(k);
    moveAcross(k);
    dropAll(k);
    if (k.leftIsClear()) {
      k.turnLeft();
      k.move();
      k.turnLeft();
      moveAcross(k);
      k.turnLeft();
      k.turnLeft();
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function moveAcross(k) {
  while (k.frontIsClear()) {
    k.move();
    if (k.beepersPresent()) {
      k.pickBeeper();
    }
  }
}

function main(k) {
  while (k.cornerColorIs("")) {
    if (k.leftIsClear()) {
      k.turnLeft();
      moveAcross(k);
    }
    if (k.rightIsClear()) {
      turnRight(k);
      moveAcross(k);
    }
  }
}
  return main;
}
