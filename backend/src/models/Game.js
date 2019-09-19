const { Schema, model } = require("mongoose");

const Game = new Schema(
  {},
  {
    timestamps: true
  }
);

module.exports = model("Games", Game);
