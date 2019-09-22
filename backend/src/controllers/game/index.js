const Game = require("../../models/Game");

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
  }
};
