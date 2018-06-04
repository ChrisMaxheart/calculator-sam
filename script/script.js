let lst = document.getElementsByClassName("button");

Array.from(lst).forEach(
  function(x) {
    x.onclick = function () {buttonPress(x.innerHTML)};
    // console.log(x.innerHTML);
  }
);

let statement = "";

function buttonPress(symbol) {
  statement += symbol;
  document.getElementById("display").innerHTML = statement;
}

function calcResult() {
  // console.log(statement);
  try {
    if (statement == "") {
      throw(err);
    }
    statement = eval(statement);
    if (statement == "Infinity") {
      throw(err);
    } 
  } catch(err) {
    if (statement == "Infinity") {
      statement = "Zero Div ERROR";
    } else {
      statement = "ERROR";
    }
  }
  document.getElementById("display").innerHTML = statement;
  statement = "";
}

Array.from(document.getElementsByClassName("equal")).forEach(
  function(x) {
    x.onclick = function() {
      calcResult();
    }
  })

$(".clear").click(function() {
  erase();
});

$(".undo").click(function() {
  undo();
});

function erase() {
  statement = "";
  $("#display").html(statement);
}

function undo() {
  if(statement.length != 0) {
    statement = statement.slice(0,statement.length-1);
    $("#display").html(statement);
  }
}

$("body").keypress(function(x) {
  if (x.which >= 48 && x.which <=57)  {
    buttonPress(x.which-48);
  } else if (x.which == 47) {
    buttonPress('/');
  } else if (x.which == 46) {
    buttonPress('.');
  } else if (x.which == 43) {
    buttonPress('+');
  } else if (x.which == 45) {
    buttonPress('-');
  } else if (x.which == 42) {
    buttonPress('*');
  } else if (x.which == 61 || x.which == 13) {
    calcResult();
  } else if (x.which == 127) {
    erase();
  }
});

$("body").keydown(function(x) {
  if (x.which == 8) {
    undo();
  }
});