const { Schema, model } = require("mongoose");

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports = model("Users", User);
