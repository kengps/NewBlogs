const prompt = require("prompt-sync")();
function pyramid(n) {
  
  for (let i = 1; i < n - 1; i++) {
    str = "";

    for (let j = 0; j < n; j++) {
      if (i + j === n - 2 || i === j - 1) {
        str += "X";
      } else {
        str += "-";
      }
    }
    console.log(str);
  }
  for (let k = 0; k < n - 3; k++) {
    str = "";
    for (let l = 0; l < n; l++) {
      if (k + l === 3 || k === l - 1) {
        str += "X";
      } else {
        str += "-";
      }
    }

    console.log(str);
  }
}
pyramid(Number(prompt('enter number : ')));




// const prompt = require("prompt-sync")();
// function pyramid(n) {
//   let result = ''

//   for (let i = 1; i < n - 1; i++) {
//     str = "";

//     for (let j = 0; j < n; j++) {
//       if (i + j === n - 2 || i === j - 1) {
//         str += "X";
//       } else {
//         str += "-";
//       }
//     }
//     result += str + '\n';
//   }
//   for (let k = 0; k < n - 3; k++) {
//     str = "";
//     for (let l = 0; l < n; l++) {
//       if (k + l === 3 || k === l - 1) {
//         str += "X";
//       } else {
//         str += "-";
//       }
//     }

//     result += str + '\n';
//   }
//   return result;
// }
// pyramid(Number(prompt('enter number : ')));
