// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-06
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
  } else {
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function swapBeeper(k) {
  if (k.beepersPresent()) {
    k.pickBeeper();
    } else {
      k.putBeeper();
    }
  } 
  
function main(k) {
  swapBeeper(k);
  while (k.frontIsClear()) {
    k.move();
    swapBeeper(k);
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  while (k.cornerColorIs("")) {
    if (k.beepersPresent()) {
      k.paintCorner("Blue");
      } else {
        k.paintCorner("Red");
      }
      if (k.frontIsClear()) {
        k.move();
    }
  }
}
  return main;
}
