const fs = require("fs");

const logger = (req, res, next) => {
  let method = req.method;
  let route = req.url;
  let userAgent = req.headers["user-agent"];

  let log = `Method: ${method}, Route: ${route}, user-agent: ${userAgent}`;

  fs.appendFile("logs.txt", log + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });

  next();
};

module.exports = logger;
