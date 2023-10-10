const mongoose = require("mongoose");

const todo1Schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  nickName: {
    type: String,
  },

  rollNo: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

const Todo1 = mongoose.model("User1", todo1Schema);
module.exports = Todo1;
