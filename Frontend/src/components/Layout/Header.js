import React from "react";
import { Link } from "react-router-dom";
import AuthOption from "../Auth/AuthOption";

function Header() {
	return (
		<>
			<header id="header">
				<Link className="title" to="/">
					<h1>Template</h1>
				</Link>
				<AuthOption />
			</header>
		</>
	);
}

export default Header;
