import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
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
