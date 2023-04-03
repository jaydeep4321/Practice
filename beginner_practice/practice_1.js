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
