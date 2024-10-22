const http = require("http");

// console.log(http);

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    res.end("Welcome to our home page");
    return;
  } else if (req.url == "/about") {
    res.end("here is our short history");
    return;
  } else {
    res.end(`
    <h1>Oops!</h>

    <p>We can't find what you looking for</p>

    <a href='/'>Return to Home</a>
    `);
  }
});

server.listen(5000);
