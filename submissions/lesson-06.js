// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-06
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

function moveAcross(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}

function beeperScan(k) {
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
  else {
    k.putBeeper();
  }
}

function main(k) {
  moveAcross(k);
  beeperScan(k);
  turnRight(k);
  moveAcross(k);
  beeperScan(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  for (let i = 0; i < 13; i++) {
    if (k.frontIsClear()) {
      k.move();
      k.putBeeper();
    }
    else {
      k.turnLeft();
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function paint(k) {
  if (k.beepersPresent()) {
    k.paintCorner("Blue") 
    }
    else { 
    k.paintCorner("Red")
  }
}
      
function sweepRow(k) {
  paint(k)
  while (k.frontIsClear()) {
    k.move()
    paint(k)
  }
}

function climbRow(k) {
  if (k.facingEast()) {
    k.turnLeft();
    k.move();
    k.turnLeft();
  }
  else {
    turnRight(k);
    k.move();
    turnRight(k);
  }
}

function main(k) {
  for (let row = 0; row < 3; row++) {
    sweepRow(k);
    climbRow(k);
  }
  sweepRow(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: advanced (Advanced)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function onwards(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function cornerScan(k) {
  if (k.beepersPresent()) {
    onwards(k);
  } else {
    if (k.cornerColorIs("Red")) {
      for (r = 0; r < 4; r++) {
        k.putBeeper();
      }
      onwards(k);
    } else {
      if (k.cornerColorIs("Green")) {
        for (g = 0; g < 2; g++) {
          k.putBeeper();
        }
        onwards(k);
      } else {
        if (k.cornerColorIs("Blue")) {
          k.putBeeper();
          onwards(k);
        } else {
          onwards(k);
        }
      }
    }
  }
}

function sweepRow(k) {
  cornerScan(k);
  while (k.frontIsClear()) {
    cornerScan(k);
  }
}
     
function climbRow(k) {
  if (k.facingEast()) {
    cornerScan(k);
    k.turnLeft();
    k.move();
    k.turnLeft();
  }
  else {
    cornerScan(k);
    turnRight(k);
    k.move();
    turnRight(k);
  }
}

function main(k) {
  for (let row = 0; row < 3; row++) {
    sweepRow(k);
    climbRow(k);
  }
  sweepRow(k);
  cornerScan(k);
}
  return main;
}
