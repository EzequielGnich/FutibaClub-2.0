const { format } = require("date-fns");
const { Schema, model } = require("mongoose");

const Game = new Schema(
  {
    teamA: {
      type: String,
      required: true
    },
    teamB: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: format(new Date(), "dd/MM/yyyy")
    },
    schedule: {
      type: String
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    guessings: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Games", Game);
