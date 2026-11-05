//Movement//

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
  turnAround(k);
  while (k.frontIsClear()) {
    k.move();
  }
  turnAround(k);
}

function goHome(k) {
  faceSouth(k);
  runAcross(k);
  faceWest(k);
  runAcross(k);
  turnAround(k);
}

//Face Direction//

function faceNorth(k) {
  while (k.notFacingNorth()) {
    k.turnLeft();
  }
}

function faceWest(k) {
  while (k.notFacingWest()) {
    k.turnLeft();
  }
}

function faceSouth(k) {
  while (k.notFacingSouth()) {
    k.turnLeft();
  }
}

function faceEast(k) {
  while (k.notFacingEast()) {
    k.turnLeft();
  }
}

function cornerColor(k) {
  if (k.cornerColorIs("Red")) {
    color = "Red";
  } else {
    if (k.cornerColorIs("Blue")) {
      color = "Blue";
    } else {
      if (k.cornerColorIs("Green")) {
        color = "Green";
      } else {
        if (k.cornerColorIs("Yellow")) {
          color = "Yellow";
        } else {
          if (k.cornerColorIs("Magenta")) {
            color = "Magenta";
          }
        }
      }
    }
  }
}
