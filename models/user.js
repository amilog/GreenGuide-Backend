const { default: mongoose } = require("mongoose");
const { use } = require("../routes/checkRoutes");

const userSchema = new mongoose.Schema({
  password: String,
  temperature: Number,
  humidity: Number,
  isActive: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
