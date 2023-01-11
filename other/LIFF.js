
const prompt = require("prompt-sync")();

function sum(rows) {
  
  let result = '';
  for (let i = 0; i < rows; i++) {
    str = "";
    for (let j = 0; j < rows; j++) {
      if (i === j || i + j === rows - 1) {
        str += "X";
      } else {
        str += "-";
      }
    }
    result += str + '\n';
  }
  return result;
}
console.log(sum(Number(prompt("Please number : "))));


