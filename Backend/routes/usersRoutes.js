const Users = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Router = require("express").Router();

//======================================================================================================//
//	Route for Registering User
//======================================================================================================//
Router.post("/register", async (req, res) => {
	try {
		const data = req.body;

		if (!data.email || !data.password || !data.passwordCheck) {
			return res.status(400).json({ msg: "Not all fields are there" });
		}
		if (data.password.length < 5) {
			return res.status(400).json({ msg: "Enter password of 5 letters" });
		}
		if (data.password !== data.passwordCheck) {
			return res.status(400).json({ msg: "Password did not match" });
		}

		Users.findOne({ email: data.email }, async (err, res_data) => {
			if (res_data) {
				return res.status(400).json({ msg: "Account already exists" });
			} else {
				const salt = await bcrypt.genSalt();
				const PassWordHash = await bcrypt.hash(data.password, salt);
				console.log(PassWordHash);

				const newUser = new Users({
					email: data.email,
					password: PassWordHash,
					username: data.username,
				});

				newUser.save((err, ndata) => {
					console.log(ndata);
					res.json(ndata);
				});
			}
		});
	} catch (err) {
		return res.status(500).json({ err });
	}
});

//======================================================================================================//
//	Route for Login
//======================================================================================================//
Router.post("/login", (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ msg: "Not all fields are there" });
		}

		Users.findOne({ email: email }, async (err, user) => {
			if (user) {
				const isMatch = await bcrypt.compare(password, user.password);
				if (!isMatch) {
					return res.status(400).json({
						msg: "No account with this email has been registered.",
					});
				} else {
					const token = jwt.sign(
						{ id: user._id },
						process.env.JWT_SECRET
					);

					return res.json({
						token: token,
						user: {
							id: user._id,
							username: user.username,
							email: user.email,
						},
					});
				}
			} else {
				return res.status(400).json({
					msg: "No account with this email has been registered.",
				});
			}
		});
	} catch (err) {}
});

module.exports = Router;
