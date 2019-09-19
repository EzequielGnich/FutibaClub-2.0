const express = require("express");
const routes = express.Router();

const Account = require("../controllers/user/account");

// Rotas que se referem a usuarios
routes.get("/user", Account.index);
routes.post("/user/newAccount", Account.store);

// Rotas que se referem a login e logout
routes.get("/login");
routes.get("/logout");

// Rotas que se referem aos jogos
routes.get("/game");
routes.post("/game");
routes.delete("/game");
routes.post("/game/results");

// Rotas que busca a classificação
routes.get("classification");

// Rotas de controle de grupos
routes.get("/:id/pending/:idGU/:op"); //Aceitar ou negar a entrada de uma pessoa no grupo no qual eu sou owner
routes.delete("/group/:id");

// Inserção de palpites
routes.post("/guess");

module.exports = routes;
