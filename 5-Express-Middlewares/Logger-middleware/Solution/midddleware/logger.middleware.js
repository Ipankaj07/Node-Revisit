const fs = require("fs");

const logger = (req, res, next) => {
    const start = new Date().getTime();

    res.on("finish", () => {
    const method = req.method;
    const status = res.statusCode;
    const statusMessage = res.statusMessage;
    const contentLength = res.get("Content-Length");
    const timeTaken = new Date().getTime() - start;
    const date =
        new Date().toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", })
        + " " +
        new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" });
    const httpVersion = req.httpVersion;
    const url = req.url;

    let log = `
    Method: ${method}
    Status: ${status} ${statusMessage}
    Content-Length: ${contentLength}
    Time Taken: ${timeTaken} ms
    Date: ${date}
    HTTP Version: ${httpVersion}
    URL: ${url}
    ----------------------------------
    `;

        fs.appendFile("log.txt", log, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    next();
};

module.exports = logger;
