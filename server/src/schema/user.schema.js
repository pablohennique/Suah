const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: [true, "Email already exists"],
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please add a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password with a minimum of 6 characters"],
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
