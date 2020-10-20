import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";

import {BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import FormSolPatCom from "./components/FormSolPatCom";
import Body from "./components/BodyIndex";
import Login from "./components/Login";
import AdmSolPatCom from "./components/AdmSolPatCom";
import NuevoAdm from "./components/NuevoAdm";
import PageListSolPatNueva from "./components/PageAdmin/PageListSolPatNueva";
import RevSolPatCom from "./components/RevSolPatCom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route
				exact
				path="/"
				render={() => {
					return <Body />;
				}}
			></Route>
			<Route
				path="/FormSolPatCom"
				render={() => {
					return <FormSolPatCom />;
				}}
			></Route>
			<Route
				path="/Login"
				render={() => {
					return <Login />;
				}}
			></Route>
			<Route
				path="/AdmSolPatCom"
				render={() => {
					return <AdmSolPatCom />;
				}}
			></Route>
			<Route
				path="/NuevoAdm"
				render={() => {
					return <NuevoAdm />;
				}}
			></Route>
			<Route
				path="/PageListSolPatNueva"
				render={() => {
					return <PageListSolPatNueva />;
				}}
			></Route>
			<Route
				path="/RevSolPatCom"
				render={() => {
					return <RevSolPatCom />;
				}}
			></Route>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*script*/
