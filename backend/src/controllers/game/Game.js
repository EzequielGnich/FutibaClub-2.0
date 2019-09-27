const Game = require("./GameModel");
const Guess = require("../guess/GuessModel");

module.exports = {
  async store(req, res) {
    const { teamA, teamB, schedule } = req.body;
    const { createdBy } = req.headers;

    const game = await Game.create({
      teamA,
      teamB,
      schedule,
      createdBy
    });

    res.status(200).send(game);
  },

  async delete(req, res) {
    const { _id } = req.body;

    const gameExists = await Game.findById({ _id });

    if (!gameExists) {
      return res
        .status(400)
        .json({ error: "Jogo não existe em nosso banco de dados" });
    }

    await Game.findByIdAndDelete(gameExists._id);

    return res.status(200).json({ error: "Jogo apagado com sucesso" });
  }
};
