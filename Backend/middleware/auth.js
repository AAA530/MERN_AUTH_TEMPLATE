const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	try {
		const token = req.header("x-auth-token");
		if (!token) {
			return res.status(401).json({
				msg: "No Auth token found, access denied",
			});
		}

		const verified = jwt.verify(token, process.env.JWT_SECRET);

		if (!verified) {
			return res.status(401).json({
				msg: "Token verification failed, access denied",
			});
		}

		// console.log(verified);
		req.user = verified.id;
		next();
	} catch (error) {
		return res.status(500).json({ err });
	}
};

module.exports = auth;
