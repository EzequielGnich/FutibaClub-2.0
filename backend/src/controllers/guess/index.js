const Guess = require("../../models/Guess");

module.exports = {
  async store(req, res) {
    const { guess_teamA, guess_teamB, game_id, group_id } = req.body;
    const { user_id } = req.headers;

    const game = await Guess.create({
      guess_teamA,
      guess_teamB,
      game_id,
      group_id,
      user_id
    });

    res.status(200).send(game);
  },

  async delete(req, res) {
    const { _id } = req.body;
  }
};
