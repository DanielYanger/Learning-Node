const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request made");
});

server.listen(9000, "localhost", () => {
  console.log("Listening for requests");
});
