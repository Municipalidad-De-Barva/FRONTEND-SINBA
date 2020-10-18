import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormSolPatCom from "./components/FormSolPatCom";

import Body from "./components/BodyIndex";
ReactDOM.render(
	<React.StrictMode>
		{/*<Header />
		<FormSolPatCom />
	<Footer />*/}
	<Router>
		<Route exact path="/" render={()=>{return <Body />}}>
		</Route>

		<Route path="/FormSolPatCom" render={()=>{return <FormSolPatCom />}}>
		</Route>
	</Router>
		
		
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*script*/
