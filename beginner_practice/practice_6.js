// HTTP Server: Create a basic HTTP server using the built-in HTTP
// module in Node.js. The server should respond with a "Hello,
// World!" message when a client makes a request to it.
const http = require("http");
// const url = require("url");

//create a server object:
const server = http.createServer(function (req, res) {
  res.write("Hello World!");
  res.end();
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server live on port 8000");
  console.log("Hello word");
});
