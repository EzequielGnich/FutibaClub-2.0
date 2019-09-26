const Guess = require("./GuessModel");
const Game = require("../game/GameModel");

module.exports = {
  async store(req, res) {
    const { guess_teamA, guess_teamB, game_id, group_id } = req.body;
    const { user_id } = req.headers;

    const guess = await Guess.create({
      guess_teamA,
      guess_teamB,
      game_id,
      group_id,
      user_id
    });

    if (!guess) {
      return res
        .status(400)
        .json({ error: "Não foi possivel salvar o palpite" });
    }

    res.status(200).send(guess);
  },

  async delete(req, res) {
    const { _id } = req.body;
  }
};
