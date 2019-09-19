const { Schema, model } = require("mongoose");

const Group = new Schema(
  {},
  {
    timestamps: true
  }
);

module.exports = model("Groups", Group);
