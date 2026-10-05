// assignment: exam-1
// student: Brandon Kelly
// downloaded: 10/5/2026, 7:15:25 PM

// ===== Problem 1: Hallway Lights (5/5 worlds matched at last run) =====
function problem_1() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function scanCorner(k) {
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
  if (k.cornerColorIs("Red")) {
    k.paintCorner("Yellow");
  }
}

function main(k) {
  scanCorner(k);
  while (k.frontIsClear()) {
    while (k.frontIsClear()) {
      k.move();
      scanCorner(k);
    }
    if (k.leftIsClear()) {
      k.turnLeft();
      k.move();
      scanCorner(k);
      k.turnLeft();
    } else {
      if (k.rightIsClear()) {
        turnRight(k);
        k.move();
        scanCorner(k);
        turnRight(k);
      }
    }
  }
  if (k.beepersInBag()) {
    k.putBeeper();
  }
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Sorting Stones (6/6 worlds matched at last run) =====
function problem_2() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function faceNorth(k) {
 while (k.notFacingNorth()) {
    k.turnLeft();
  }
}

function faceEast(k) {
  while (k.notFacingEast()) {
    k.turnLeft();
  }
}

function moveAcross(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function nextPipe(k) {
  turnAround(k);
  moveAcross(k);
  faceEast(k);
  k.move();
  k.move();
  faceNorth(k);
}

function coloredBeeper(k) {
  k.move();
  k.putBeeper();
}

function main(k) {
  let redCount = 0
  let greenCount = 0
  let blueCount = 0
  while (k.frontIsClear()) {
    k.move();
    if (k.cornerColorIs("Red") && k.beepersPresent()) {
      k.pickBeeper();
      redCount++
    }
    if (k.cornerColorIs("Green") && k.beepersPresent()) {
      k.pickBeeper();
      greenCount++
    }
    if (k.cornerColorIs("Blue") && k.beepersPresent()) {
      k.pickBeeper();
      blueCount++
    }
  }
  nextPipe(k);
  for (let r = 0; r < redCount; r++) {
    coloredBeeper(k);
  }
  nextPipe(k);
  for (let g = 0; g < greenCount; g++) {
    coloredBeeper(k);
  }
  nextPipe(k);
  for (let b = 0; b < blueCount; b++) {
    coloredBeeper(k);
  }
}
  return main;
}
// ===== end Problem 2 =====

// ===== Problem 3: Treasure Map (7/7 worlds matched at last run) =====
function problem_3() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function faceEast(k) {
  while (k.notFacingEast()) {
    k.turnLeft();
  }
}

function faceNorth(k) {
 while (k.notFacingNorth()) {
    k.turnLeft();
  }
}

function cord(k) {
  let count = 0;
  while (k.beepersPresent()) {
    k.pickBeeper();
    count++
  }
  return count;
}

function main(k) {
  let x = cord(k);
  k.move();
  let y = cord(k);
  turnAround(k);
  k.move();
  faceEast(k);
    for (let i = 1; i < x; i++) {
    k.move();
  }
  faceNorth(k);
  for (let i = 1; i < y; i++) {
    k.move();
  }
  if (x < y) {
    k.paintCorner("Blue");
  } else {
    if (y < x) {
      k.paintCorner("Red");
    } else {
      k.paintCorner("Green");
    }
  }
  let total = x + y;
  for (let i = 0; i < total; i++) {
    k.putBeeper();
  }
}
  return main;
}
// ===== end Problem 3 =====
