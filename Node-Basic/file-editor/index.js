const fs = require("fs");
const args = process.argv.slice(2);
const operation = args[0];
const fileName = args[1];
const content = args[2];

switch (operation) {
  case "read":
    console.log(fs.readFileSync(fileName, "utf-8"));
    break;
  case "append":
    fs.appendFileSync(fileName, content);
    console.log("File Appended");
    break;
  case "delete":
    fs.unlinkSync(fileName);
    console.log("File Deleted");
    break;
  case "create":
    fs.writeFileSync(fileName, "");
    console.log("File Created");
    break;
  case "rename":
    fs.renameSync(fileName, content);
    console.log("File Renamed");
    break;
  case "list":
    console.log(fs.readdirSync(fileName));
    break;
  default:
    console.log("Invalid operation");
    break;
}