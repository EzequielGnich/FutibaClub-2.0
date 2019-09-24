const express = require("express");
const routes = express.Router();

const User = require("../controllers/user/index");
const Game = require("../controllers/game/index");
const Guess = require("../controllers/guess/index");
const Group = require("../controllers/group/index");

// Rota para a criação de novos usuarios
routes.post("/user", User.store);

// Rota para a busca de usuários da aplicação
routes.get("/user", User.index);

// Rotas que se referem aos jogos
routes.get("/game", Game.index);
routes.post("/game", Game.store);
routes.delete("/game");
routes.post("/game/results");

// Rotas que se referem a login e logout
routes.get("/login");
routes.get("/logout");

// Rotas que busca a classificação
routes.get("classification");

// Rotas de controle de grupos
routes.get("/:id/pending/:idGU/:op"); //Aceitar ou negar a entrada de uma pessoa no grupo no qual eu sou owner
routes.delete("/group/:id");
routes.post("/group", Group.store);
routes.post("/group/:id", Group.addUser);
routes.get("/group", Group.index);

// Inserção de palpites
routes.post("/guess", Guess.store);

module.exports = routes;
