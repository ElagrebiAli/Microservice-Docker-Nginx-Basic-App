const mongoose = require("mongoose");
const {Schema} = mongoose;

const ShoesSchema = new Schema({
  name: String,
  type: { type: String, default: "shoes" },
  createdAt: { type: Date, default: Date.now }
});
const Shoes=mongoose.model("Shoes", ShoesSchema);

module.exports = {Shoes}