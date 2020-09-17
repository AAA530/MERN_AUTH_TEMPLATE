import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";

import UserContext from "./Context/userContext";

import "./Styles.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
