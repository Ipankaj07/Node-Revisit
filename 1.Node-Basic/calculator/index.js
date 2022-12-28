const crypto = require("crypto");
const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseInt(args[1]);
const num2 = parseInt(args[2]);

switch (operation) {
  case "add":
    console.log(num1 + num2);
    break;
  case "sub":
    console.log(num1 - num2);
    break;
  case "mult":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "sin":
    console.log(Math.sin(num1));
    break;
  case "cos":
    console.log(Math.cos(num1));
    break;
  case "tan":
    console.log(Math.tan(num1));
    break;
  case "random":
    console.log(parseInt(crypto.randomBytes(4).toString("hex"), 16));
    break;
  default:
    console.log("Invalid operation");
    break;
}