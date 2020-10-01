import React, { useState, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";

import "./Styles.css";
// import UserContext from "./Context/UserContext";
import UserContext from "./Context/UserContext";
// const UserContext = createContext();

function App() {
	const [userData, setUserData] = useState({
		token: 12,
		user: 12,
	});

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
