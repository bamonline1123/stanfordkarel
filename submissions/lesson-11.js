function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function recall(k) {
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
}

function rowCount(k) {
  let left = 0;
  let right = 0;
  for (let x = 0; x < 3; x++) {
    if (k.beepersPresent()) {
      left++
    }
    k.move();
  }
  k.move();
  for (let x = 4; x < 7; x++) {
    if (k.beepersPresent()) {
      right++
    }
    k.move();
  }
  k.move();
  for (let total = left + right; total > 0; total--) {
    k.putBeeper();
    k.move();
  }
  recall(k);
}

function main(k) {
  for (i = 0; i < 4; i++) {
    rowCount(k);
    turnRight(k);
    k.move();
    turnRight(k);
  }
}
