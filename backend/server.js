require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./src/config/database");

const routes = require("./src/routes/index");

server.use(cors());
server.use(bodyParser.json());

server.use(routes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
