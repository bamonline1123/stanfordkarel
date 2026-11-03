// The decoder: decode[color][count] is the command string for one tile.
const decode = {
  Red:     ["", "m",  "mm",  "mmm"],
  Blue:    ["", "l",  "r",   "ll"],
  Green:   ["", "b",  "mb",  "bmb"],
  Yellow:  ["", "R",  "G",   "B"],
  Magenta: ["", "mR", "mG",  "mB"],
};

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

function translate(k) {
  let code = "";
  let color = 0;
  let id = 0;
  let position = 0;
  while (k.beepersPresent()) {
    if (k.cornerColorIs("Red")) {
      color = 0;
    } else {
      if (k.cornerColorIs("Blue")) {
        color = 1;
      } else {
        if (k.cornerColorIs("Green")) {
          color = 2;
        } else {
          if (k.cornerColorIs("Yellow")) {
            color = 3;
          } else {
            if (k.cornerColorIs("Magenta")) {
              color = 4;
            }
          }
        }
      }
    }
    id = 0;
    while (k.beepersPresent()) {
      k.pickBeeper();
      id++
    }
    code = code + color + id;
    walk(k);
  }
  recall(k);
  communicate(code);
}

function communicate(k) {
}

function main(k) {
  k.move();
  translate(k);
}
