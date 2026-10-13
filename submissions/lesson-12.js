// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-12
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function main(k) {
  let first = "Kar";
  let second = "el";
  let word = (first + second);
  let beeps = word.length;
  
  for (let i = 0; i < beeps; i++) {
    k.putBeeper();
    walk(k);
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  let word = "beeper";
  let beeps = 0;
  for (let l = 0; l < word.length; l++) {
    if (word[l] === "e") beeps++
  }
  for (let placed = 0; placed < beeps; placed++) {
    k.putBeeper();
  }
  let distance = 0;
  while (word[distance] !== "p") {
    distance++
  }
  for (let x = 0; x < distance; x++) {
    k.move();
  }
  k.putBeeper();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function key(k, act, count) {
}

function collect(k, code, mod) {
  let list = "";
  let inc = 2;
  for (let i = 0; i < code.length; i++) {
    i++;
    mod = mod + i;
    list = (list + code[mod]);
  }
  return list;
} 
    
function main(k) {
  let cmds = "m4l1M3L1m2";
  let actions = collect(k, cmds, 0);
  let amounts = collect(k, cmds, 1);
  for (let movements = 0; movements < actions.length; movements++) {
    k.putBeeper();
  }
  k.move();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function walk(k) {
  if (k.frontIsClear()) {
    k.move();
  }
}

function recall(k) {
  while (k.frontIsClear()) {
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

function reset(k) {
  turnAround(k);
  recall(k);
  turnRight(k);
  walk(k);
  turnRight(k);
}

function paint(k, code) {
  if (code === "R") k.paintCorner("Red");
  if (code === "G") k.paintCorner("Green");
  if (code === "B") k.paintCorner("Blue");
  if (code === "Y") k.paintCorner("Yellow");
  if (code === "C") k.paintCorner("Cyan");
}

function indexPaint(k,script) {
  for (let i = 0; i < script.length; i++) {
    paint(k, script[i]);
    walk(k);
  }
}
  
function main(k) {
  let plan = "RGBYC";
  for (let i = 0; i < plan.length; i++) {
    paint(k, plan[i]);
    walk(k);
  }
  reset(k);
  for (let i = (plan.length - 1); i > -1; i--) {
    paint(k, plan[i]);
    walk(k);
  }
  reset(k);
  indexPaint(k, plan.slice(1, 5));
  paint(k, plan[0]);
}
  return main;
}
