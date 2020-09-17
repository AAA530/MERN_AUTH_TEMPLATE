import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";

import UserContext from "./Context/UserContext";

import "./Styles.css";

function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	return (
		<>
			<BrowserRouter>
				<UserContext.provider value={{ userData, setUserData }}>
					<Header />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
					</Switch>
				</UserContext.provider>
			</BrowserRouter>
		</>
	);
}

export default App;
