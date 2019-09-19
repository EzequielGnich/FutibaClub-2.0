const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ["OWNER", "USER"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Users", User);
