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
  let current = "";
  while (k.beepersPresent()) {
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
    id = 0;
    while (k.beepersPresent()) {
      k.pickBeeper();
      id++
    }
    current = decode[color][id];
    code = code + current
    walk(k);
  }
  recall(k);
  let position = code.length;
  for (let step = 0; step < position; step++) {
    if (code[step] === "m") {
      k.move();
    } else {
      if (code[step] === "l") {
        k.turnLeft();
      } else {
        if (code[step] === "r") {
          turnRight(k);
        } else {
          if (code[step] === "b") {
            k.putBeeper();
          } else {
            if (code[step] === "R") {
              k.paintCorner("Red")
            } else {
              if (code[step] === "G") {
                k.paintCorner("Green")
              } else {
                if (code[step] === "B") {
                  k.paintCorner("Blue")
                }
              }
            }
          }
        }
      }
    }
  }
}

function main(k) {
  k.move();
  translate(k);
}

//
//
//
//
//

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
  return color;
}

function towerColors(k) {
  let colors = "";
  turnNorth(k);
  while (k.frontIsClear()) {
    let c = CornerColor(k);
    colors = colors + c;
    k.move();
  }
  c = CornerColor(k);
  colors = colors + c;
  recall(k);
  return colors;
}

function main(k) {
  let allTower = [];
  while (k.frontIsClear()) {
    if (k.beepersPresent()) {
      let colors = towerColors(k);
      allTowers.append(colors);
      k.move();
    }
  }
  if (k.beepersPresent()) {
    let colors = towerColors(k);
    allTowers.append(colors);
  }
  goHome(k);
  turnEast(k);
  while (k.frontIsClear()) {
    if (k.beepersPresent()) {
      let colors = towerColors(k);
      let twins = hasTwin(k,allTowers,color);
      if (twins == false) {
        destroy(k);
      }
    }
    k.move();
  }
}

//
//
//
//
//

// Get references to the two divs by id, then copy the border.
const source = document.getElementById("source");
const target = document.getElementById("target");

// Get the source's border style
const sourceStyle = window.getComputedStyle(source);

// Apply the same border to the target
target.style.border = sourceStyle.border;

//
//
//
//html
<p id="status" class="banner">Ready</p>
//java
function setStatus(text, ok) {
const status = document.getElementById("status");
status.textContent = text;

if (ok) {
        status.classList.add("ok");
        status.classList.remove("error");
    } else {
        status.classList.add("error");
        status.classList.remove("ok");
    }
}

//
//
//

//html
<style>.mark { background: yellow; } .warn { color: crimson; }</style>
<ul id="words">
  <li class="noun">dog</li>
  <li class="verb">run</li>
  <li class="noun">cat</li>
  <li class="adj noun">blue</li>
</ul>
<p class="note">A note.</p>
//java
function highlight(selector, cls) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.classList.add(cls);
    });

    return elements.length;
}

function clearHighlight(cls) {
    const elements = document.querySelectorAll("." + cls);

    elements.forEach(element => {
        element.classList.remove(cls);
    });

    return elements.length;
}
