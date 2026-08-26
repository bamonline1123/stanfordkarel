// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-01
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade all three.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  k.move()
  k.move()
  k.move()
  k.move()
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  k.putBeeper()
  k.move()
  k.move()
  k.move()
  k.putBeeper()
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  k.move();
  k.move();
  k.turnLeft();
  k.move();
  k.move();
  k.putBeeper();
}
  return main;
}
