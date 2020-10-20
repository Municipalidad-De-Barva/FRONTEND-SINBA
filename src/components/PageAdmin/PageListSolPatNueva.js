import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header";
import Footer from "../Footer";

export default class PageListSolPatNueva extends Component {
	render() {
		return (
			<div>
				<Header />

				<PageList />

				<Footer />
			</div>
		);
	}
}

class PageList extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
		};
		this.pedirFormularioNuevos();
	}

	pedirFormularioNuevos() {
		fetch("http://localhost:3001/api/allNForms", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				/*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
			},
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({todos: data});
			});
		console.log("respuesta del servidor: ", this.state.todos);
	}

	render() {
		const todos = this.state.todos.map((todo, i) => {
			return (
				<div className="col-md-4" key={i}>
					<div className="card mt-4">
						<div className="card-title text-center">
							<h3>{todo.PK_Codigo}</h3>
							<span className="badge badge-pill badge-danger ml-2">
								{todo.Estado}
							</span>
						</div>
						<div className="card-body">{todo.description}</div>
						<div className="card-footer">
							<button className="btn btn-danger">Entrar</button>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-8">
						<div className="row">{todos}</div>
					</div>
				</div>
			</div>
		);
	}
}
