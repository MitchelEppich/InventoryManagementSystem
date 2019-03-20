const mongoose = require("mongoose");

const UserSchema = require("./user");
const StrainSchema = require("./strain");

const User = mongoose.model("User", UserSchema);
const Strain = mongoose.model("Strain", StrainSchema);

exports.User = User;
exports.Strain = Strain;
