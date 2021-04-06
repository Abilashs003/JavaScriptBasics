// 3 div elements
while (true) {
  setTimeout(loop, 5000);
}

function loop() {
  for (let index = 0; index < 2; index++) {
    colorChange(index);
  }
}

function colorChange(index) {
  if (index == 0) {
    document.getElementById("red").innerHTML = "triggered";
    document.getElementById("yellow").innerHTML = "";
    document.getElementById("green").innerHTML = "";
  } else if (index == 1) {
    document.getElementById("red").innerHTML = "";
    document.getElementById("yellow").innerHTML = "triggered";
    document.getElementById("green").innerHTML = "";
  } else if (index == 1) {
    document.getElementById("red").innerHTML = "";
    document.getElementById("green").innerHTML = "triggered";
    document.getElementById("yellow").innerHTML = "";
  }
}
