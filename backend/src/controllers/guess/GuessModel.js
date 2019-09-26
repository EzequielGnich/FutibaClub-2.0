const { Schema, model } = require("mongoose");

const Guess = new Schema(
  {
    guess_teamA: {
      type: Number,
      required: true
    },
    guess_teamB: {
      type: Number,
      required: true
    },
    game_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Games",
        required: true
      }
    ],
    group_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Groups",
        required: true
      }
    ],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Guess", Guess);
