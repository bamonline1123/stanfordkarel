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
function main(k) {
  for (i = 0; i < 5; i++) {
    if (k.beepersPresent()) {
    k.pickBeeper();
    } else {
      k.putBeeper();
    }
  if (i < 4) {
      k.move(); }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  for (let i = 0; i < 4; i++) {
    if (k.beepersPresent()) {
      k.paintCorner("Blue");
      } else {
        k.paintCorner("Red");
      }
      if (i < 3) {
        k.move(); }
    }
}
  return main;
}
