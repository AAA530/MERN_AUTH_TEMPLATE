import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import axios from "axios";

import "./Styles.css";
// import UserContext from "./Context/UserContext";
import UserContext from "./Context/UserContext";
// const UserContext = createContext();

function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	useEffect(() => {
		const checkLoggedin = async () => {
			const token = localStorage.getItem("auth-token");
			const tokenRes = await axios.post();
		};

		checkLoggedin();
	}, []);

	return (
		<>
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Header />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
