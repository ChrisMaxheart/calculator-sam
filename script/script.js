let lst = document.getElementsByClassName("button");

Array.from(lst).forEach(
  function(x) {
    x.onclick = function () {buttonPress(x.textContent)};
  }
);

let statement = "";

function buttonPress(symbol) {
  statement += symbol;
  document.getElementById("display").innerHTML = statement;
}

// need to add: eval, try except, undo, clear, keyboard support