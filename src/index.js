const app = require("./app");
const http = require("http");
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`server running on ${PORT}`);
  }
});
