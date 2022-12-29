**Configure the `logger` middleware to log the following data on every single request on the server:**

- Method
- Status
- Content-Length
- Time taken
- Date
- HTTP version
- URL accessed

>Method
```
res.on('finish', () => {
  console.log('Method: ', req.method);
});
```

> Status
```
res.on('finish', () => {
  console.log('Status: ', res.statusCode);
});
```

> Content-Length
```
res.on('finish', () => {
  console.log('Content-Length: ', res.get('Content-Length'));
});
```

> Time taken
```
res.on('finish', () => {
  console.log('Time taken: ', Date.now() - req.start);
});
```

> Date
```
res.on('finish', () => {
  console.log('Date: ', new Date().toLocaleDateString("en-US", { timeZone: "Asia/Kolkata"}));
});
```

> HTTP version
```
res.on('finish', () => {
  console.log('HTTP version: ', req.httpVersion);
});
```

> URL accessed
```
res.on('finish', () => {
  console.log('URL accessed: ', req.url);
});
```

**Output: Sample**
```
Method:  GET
Status:  200
Content-Length:  10
Time taken:  2 ms
Date: 12/29/2022
HTTP version:  1.1
URL accessed:  /
```

---
The `res.on` method takes two arguments: the event name and the listener function. The event name is a string that specifies the name of the event that you want to listen for, and the listener function is a callback function that gets called when the event is emitted.

By adding a listener for an event emitted by the response object, you can perform some action after the response has been sent to the client. This can be useful for logging information about the request, or for performing other tasks that need to be done after the response has been sent.

For more information about the `response` object and the events it emits, you can refer to the [Express documentation](https://expressjs.com/en/4x/api.html#res).