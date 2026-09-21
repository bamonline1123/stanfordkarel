// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-07
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Easy)
// ──────────────────────────────────────────────────────────
function problem_1() {
function moveN(k, n) {
  for (let i = 0; i < n; i++) {
    k.move();
  }
}

function main(k) {
  moveN(k, 4);
  k.turnLeft();
  moveN(k, 3);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Medium)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnRight(k) {
  for (let i = 0; i < 3; i++) {
    k.turnLeft();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function moveN(k, n) {
  for (let bombs = 0; bombs < n; bombs++) {
    k.putBeeper();
    if (bombs+1 < n) {
      k.move();
    }
  }
  turnAround(k);
  for (let height = 1; height < n; height++) {
    k.move();
  }
}

function nextLine(k) {
  k.turnLeft();
  k.move();
  k.turnLeft();
}

function main(k) {
  k.turnLeft();
  moveN(k, 2);
  nextLine(k);
  moveN(k, 4);
  nextLine(k);
  moveN(k, 3);
  nextLine(k);
  moveN(k, 1);
  nextLine(k);
  moveN(k, 5);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Difficult)
// ──────────────────────────────────────────────────────────
function problem_3() {
function turnRight(k) {
  for (let i = 0; i < 3; i++) {
    k.turnLeft();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function paintN(k, c, n) {
  for (let i = 0; i < n; i++) {
     k.paintCorner(c);
     k.move();
   }
  
}

function main(k) {
  paintN(k, "Red", 4);
  k.turnLeft();
  paintN(k, "Blue", 3);
  k.turnLeft();
  paintN(k, "Green", 4);
  k.turnLeft();
  paintN(k, "Yellow", 3);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function moveN(k, n) {
  for (let i = 0; i < n; i++) {
    k.move();
  }
}

function drawBar(k, mountain) {
  for (let bombs = 0; bombs < mountain; bombs++) {
    k.putBeeper();
    if (bombs+1 < mountain) {
      k.move();
    }
  }
  turnAround(k);
  for (let height = 1; height < mountain; height++) {
    k.move();
  }
  k.turnLeft();
  k.move();
  k.turnLeft();
}

function main(k) {
  k.turnLeft();
  for (let mountain = 1; mountain < 5; mountain++) {
    drawBar(k, mountain);
  }
  for (let mountain = 3; mountain > 0; mountain--) {
    drawBar(k, mountain);
  }
  k.turnLeft();
  moveN(k, 7);
  turnAround(k);
}
  return main;
}
