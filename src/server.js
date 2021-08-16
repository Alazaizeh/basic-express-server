const express = require("express");

const server = express();
const loggerHnadler = require("./middleware/logger");
const validatorHnadler = require("./middleware/validator");

server.use(express.json());
server.use(loggerHnadler);

server.get("/", (req, res) => {
  res.send("Welcome Home");
});

server.get("/person", validatorHnadler, (req, res, next) => {});

server.use("*", require("./error-handlers/404"));
server.use(require("./error-handlers/500"));
const start = (port) => {
  server.listen(port, () => console.log(`Working on Port ${port}`));
};

module.exports = { start, server };
