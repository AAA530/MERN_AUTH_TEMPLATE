import React from "react";
import { useHistory } from "react-router-dom";

function AuthOption() {
	const history = useHistory();

	const register = () => history.push("/register");
	const login = () => history.push("/login");

	return (
		<div className="auth-options">
			<button onClick={register}>Register</button>
			<button onClick={login}>Login</button>
		</div>
	);
}

export default AuthOption;
