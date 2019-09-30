const Guess = require("./GuessModel");
const Game = require("../game/GameModel");

module.exports = {
  async store(req, res, next) {
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

    const gameExists = await Game.findById(game_id);

    if (!gameExists)
      return res
        .status(400)
        .json({ error: "Jogo não existe na nossa base de dados" });

    const guessExistsInGame = await gameExists.guessings.includes(guess._id);

    if (!guessExistsInGame) {
      gameExists.guessings.push(guess._id);

      await gameExists.save();
    } else {
      return res.status(400).json({ error: "Palpite já cadastrado" });
    }

    res.status(200).send(guess);
  },

  async delete(req, res) {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ error: "Palpite não encontrado" });
    }

    await Guess.findByIdAndDelete({ _id });

    return res.status(200).json({ error: "Palpite apagado com sucesso" });
  }
};
