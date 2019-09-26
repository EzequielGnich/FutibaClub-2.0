const { Schema, model } = require("mongoose");

const Group = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Groups", Group);
