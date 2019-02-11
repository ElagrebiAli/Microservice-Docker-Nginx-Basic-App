const mongoose = require("mongoose");
const {Schema} = mongoose;

const TshirtSchema = new Schema({
  name: String,
  type: { type: String, default: "t-shirt" },
  createdAt: { type: Date, default: Date.now }
});
const Tshirt=mongoose.model("Tshirt", TshirtSchema);

module.exports = {Tshirt}