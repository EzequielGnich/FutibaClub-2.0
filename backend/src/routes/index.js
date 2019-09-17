const express = require("express");
const routes = express.Router();

const Account = require("../controllers/Users/account");

routes.get("/user", Account.index);
routes.post("/user/newAccount", Account.store);

module.exports = routes;
