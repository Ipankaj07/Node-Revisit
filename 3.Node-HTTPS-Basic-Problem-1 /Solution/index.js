const http = require("http");
const fs = require("fs");
const cowsay = require("cowsay");
const dns = require("dns");

const args = process.argv.slice(2);
const url = args[0];

const server = http.createServer((req, res) => {
  const path = req.url;

  // a) "/"

  if (path == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1 style = 'color:blue'>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>"
    );

    // b) "/writeinfile"

  } else if (path == "/writeinfile") {
    fs.writeFile("employee.txt", "Employee names are as follows:", (err) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          "<h1 style = 'color:green'>Data has been written in the file</h1>"
        );
        res.end();
      }
    });

    // c) "/enternames"

  } else if (path == "/enternames") {
    let arr = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
    for (let i = 0; i < arr.length; i++) {
      fs.appendFile("employee.txt", "\n" + arr[i], (err) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(
            "<h1 style='color:green' >All the names added in the file</h1>"
          );
          res.end();
        }
      });
    }

    // d) "/alldetails"

  } else if (path == "/alldetails") {
    fs.readFile("employee.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(cowsay.say({ text: data }));
        res.end();
      }
    });

    // e) "/address"

  } else if (path == "/address") {
    dns.lookup(url, (err, address, family) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          `<p>The IP Address is of <span style='color:blue'> ${url} </span> is ${address}</p>`
        );
        res.end();
      }
    });

    // f) "/delete"

  } else if (path == "/delete") {
    fs.unlink("employee.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>File has been deleted</h1>");
        res.end();
      }
    });

    // g) Invalid Endpoint

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});