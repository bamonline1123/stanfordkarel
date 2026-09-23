// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-08
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Easy)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  let steps = 1;
  while (k.frontIsClear()) {
  k.putBeeper();
  k.move();
  steps = steps + 1;
  }
  k.turnLeft();
  for (let i = 0; steps > 0; steps--) {
   k.putBeeper(); 
   if (steps > 1) {
     k.move();
   }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Medium)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function beeperSweep(k) {
  let inventory = 0;
  while (k.frontIsClear()) {
    if (k.beepersPresent()) {
      k.pickBeeper();
      inventory = inventory + 1;
    } else {
      k.move();
    }
    while (k.beepersPresent()) {
      k.pickBeeper();
      inventory = inventory + 1;
    }
  }
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
  for (let i = 0; i < inventory; i++) {
    k.putBeeper();
  }
  turnRight(k);
}

function main(k) {
  while (k.frontIsClear()) {
    beeperSweep(k);
    if (k.facingNorth()) {
      if (k.frontIsClear()) {
        k.move();
        turnRight(k);
      }
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

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function colorCheck(k) {
  let red = 0;
  let grn = 0;
  let reset = 1;
  while (k.frontIsClear()) {
    if (k.cornerColorIs("Red")) {
      red = red + 1;
    } else {
      if (k.cornerColorIs("Green")) {
        grn = grn + 1;
      } else {
        if (k.cornerColorIs("")) {
        }
      }
    }
    k.move();
    reset = reset + 1
  }
  if (k.cornerColorIs("Red")) {
    red = red + 1;
  } else {
    if (k.cornerColorIs("Green")) {
      grn = grn + 1;
    } else {
      if (k.cornerColorIs("")) {
      }
    }
  }
  turnAround(k);
  let winner = "hi";
  if (red > grn) {
    winner = "Red";
  } else {
    if (grn > red) {
      winner = "Green";
    } else {
      winner = "Yellow";
    }
  }
  for (let i = 0; i < reset; i++) {
    if (k.cornerColorIs("")) {
      k.paintCorner(winner);
    }
    if (k.frontIsClear()) {
      k.move();
    }
  }
}

      

function main(k) {
  while (k.frontIsClear()) {
    colorCheck(k);
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
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
}
  return main;
}
