const mongoose = require("mongoose");

const UserSchema = require("./user");
const StrainSchema = require("./strain");
const VariantSchema = require("./variant");
const StockSchema = require("./stock");
const DistributorSchema = require("./distributor");
const CompanySchema = require("./company");
const AttributeSchema = require("./attribute");
const ReviewSchema = require("./review");
const LocationSchema = require("./location");

const User = mongoose.model("User", UserSchema);
const Strain = mongoose.model("Strain", StrainSchema);
const Variant = mongoose.model("Variant", VariantSchema);
const Stock = mongoose.model("Stock", StockSchema);
const Distributor = mongoose.model("Distributor", DistributorSchema);
const Company = mongoose.model("Company", CompanySchema);
const Attribute = mongoose.model("Attribute", AttributeSchema);
const Review = mongoose.model("Review", ReviewSchema);
const Location = mongoose.model("Location", LocationSchema);

exports.User = User;
exports.Strain = Strain;
exports.Variant = Variant;
exports.Stock = Stock;
exports.Distributor = Distributor;
exports.Company = Company;
exports.Attribute = Attribute;
exports.Review = Review;
exports.Location = Location;
