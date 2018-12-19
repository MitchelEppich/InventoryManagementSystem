const mongoose = require("mongoose");

const UserSchema = require("./user");

const User = mongoose.model("User", UserSchema);

exports.User = User;
