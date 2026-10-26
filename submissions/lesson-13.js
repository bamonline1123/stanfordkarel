// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-13
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function recall(k) {
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
  k.turnLeft();
}
function main(k) {
  let heights = [2, 4, 1, 3, 2];
  let colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
  let pillar = 0;
  
  while (pillar < 5) {
    k.turnLeft();
    for (let i = 0; i < heights[pillar]; i++) {
      k.paintCorner(colors[pillar]);
      if (i+1 < heights[pillar]) {
        k.move();
      }
    }
    recall(k);
    walk(k);
    pillar++
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function recall(k) {
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  let totals = new Array(5).fill(0);
  let x = 0;
  while (k.frontIsClear()) {
    x = 0;
    for (i = 0; i < totals.length; i++) {
      while (k.beepersPresent()) {
        k.pickBeeper();
        totals[x]++;
      }
      walk(k);
      x++
    }
    recall(k);
    turnRight(k);
    if (k.frontIsClear()) {
      k.move();
      turnRight(k);
    }
  }
  recall(k);
  k.turnLeft();
  x = 0;
  for (let o = 0; o < totals.length; o++) {
    for (let count = 0; count < totals[x]; count++) {
      k.putBeeper();
    }
    walk(k);
    x++
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function recall(k) {
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  let word = [];
  let length = 1;
  let count = 0;
  let beeped = 0;
  while (k.frontIsClear()) {
    k.move();
    length++
  }
  recall(k);
  turnAround(k);
  while (k.frontIsClear()) {
    for (let i = 0; i < length; i++) {
      count = 0;
      while (k.beepersPresent()) {
        k.pickBeeper();
        count++;
      }
      if (count > 0) {
        word.push(count);
      }
      walk(k);
    }
    turnAround(k);
    for (let i = 0; i < length; i++) {
      beeped = word.pop();
      for (let beeps = 0; beeps < beeped; beeps++) {
      k.putBeeper();
      }
      walk(k);
    }
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
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  for (let i = 0; i < 3; i++) {
    k.turnLeft();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  } else {
    k.turnLeft();
  }
}

function recall(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}

function countBeepers(k) {
  let b = 0;
  while (k.beepersPresent()) {
    k.pickBeeper();
    b++;
  }
  return b;
}

function main(k) {
  let grid = [];
  let row = 0;
  grid.push([]);
  while (k.frontIsClear()) {
    grid[row].push(countBeepers(k));
    while (k.frontIsClear()) {
      k.move();
      grid[row].push(countBeepers(k));
    } 
    turnAround(k);
    recall(k);
    if (k.rightIsClear()) {
      turnRight(k);
      k.move();
      turnRight(k);
      row++;
      grid.push([]);
    }
  }
  k.turnLeft();
  recall(k);
  k.turnLeft();
  let rowReset = row;
  let x = row;
  
  
  while (x > 1) {
    while (k.frontIsClear()) {
      row = rowReset;
      for (let beeps = 0; beeps < grid[x][row]; beeps++) {
      k.putBeeper();
    }
    row--;
    walk(k);
    }
    x--;
  }
}

// Grid should be this
// [3, 1, 0, 2]
// [0, 2, 0, 0]
// [1, 0, 3, 0]
// [0, 2, 0, 1]

//1 2 3 4
//5 6 7 8
//9 10 11 12
//13 14 15 16

// End result
// [2, 0, 0, 1]
// [0, 0, 3, 0]
// [1, 2, 0, 2]
// [3, 0, 1, 0]

//4 8 12 16
//3 7 11 15
//2 6 10 14
//1 5 9 13
  return main;
}
