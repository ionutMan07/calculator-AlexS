var buttons = document.querySelectorAll("button");
var operations = {
  plus: {
    symbol: "+",
    handler: function (a, b) {
      return a + b;
    }
  },
  minus: {
    symbol: "-",
    handler: function (a, b) {
      return a - b;
    }
  },
  multiply: {
    symbol: "x",
    handler: function (a, b) {
      return a * b;
    }
  },
  divide: {
    symbol: "/",
    handler: function (a, b) {
      return (a / b).toFixed(3);
    }
  },
  mod: {
    symbol: "%",
    handler: function (a, b) {
      return a % b;
    }
  }
};

var getNumberValue = function (id) {
  return Number(document.querySelector(id).value);
};

var displayResult = function (a, b, result, operation) {
  document.querySelector("#displayResult").style.display = "block";
  document.querySelector("#a").innerText = a;
  document.querySelector("#b").innerText = b;
  document.querySelector("#formula").innerText = operation;
  document.querySelector("#result").innerText = result;
};

var handleOperation = function (event) {
  var command = event.target.dataset.operation;

  var numA = getNumberValue("#firstInput");
  var numB = getNumberValue("#secondInput");
  var result = operations[command].handler(numA, numB);

  displayResult(numA, numB, result, operations[command].symbol);
};

buttons.forEach(function (btn) {
  btn.addEventListener("click", handleOperation);
});
