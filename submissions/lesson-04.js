// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-04
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  for (let i = 0; i < 5; i++) {
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
  k.putBeeper();
  for (let i = 0; i < 3; i++) {
    k.move();
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
  k.putBeeper();
  for (let i = 0; i < 4; i++) {
    k.move();
    k.putBeeper();
  }
  k.turnLeft();
  k.turnLeft();
  for (let i = 0; i < 4; i++) {
    k.move();
  }
}
  return main;
}
