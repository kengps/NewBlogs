const prompt = require("prompt-sync")();

function pyramid(n) {
  let result = "";
  for (let i = 0; i < n - 3; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
      if (i + j === 2 || i === j - 3) {
        str += "X";
      } else {
        str += "-";
      }
    }
    result += str + "\n";
  }
  for (let i = 1; i < n - 3; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === 5) {
        str += "X";
      } else {
        str += "-";
      }
    }
    result += str + "\n";
  }
  return result;
}

console.log(pyramid(Number(prompt("enter number : "))));
