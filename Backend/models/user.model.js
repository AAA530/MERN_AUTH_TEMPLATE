const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true, minlength: 5 },
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
