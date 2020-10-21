import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header";
import Footer from "../Footer";
import RevSolPatCom from "../RevSolPatCom";
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
			idSolicitud: "",
		};

		this.pedirFormularioNuevos();
	}

	pedirFormularioNuevos() {
		fetch("http://localhost:3001/api/allNForms/nuevas", {
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
		//console.log("respuesta del servidor: ", this.state.todos);
	}

	render() {
		const todos = this.state.todos.map((todo, i) => {
			return (
				<div className="col-md-6" key={i}>
					<div className="card mt-4">
						<div className="card-header text-center">
							<h3>N° {todo.PK_Codigo}</h3>
						</div>
						<div className="card-title text-center">
							<span className="badge badge-pill badge-info ml-2">Nuevo</span>
						</div>
						<div className="card-body">
							<p>
								<strong>Nombre Del Local: </strong>
								{todo.Nombre_Comercial_Negocio}
							</p>
							<p>
								<strong>Nombre Del Contribuyente: </strong>
								{todo.Nombre_Representante_Legal_Contribuyente}
							</p>
						</div>
						<div className="card-footer text-center">
							<a href={`?id=${todo.PK_Codigo}`}>
								<button className="btn btn-success">Revisar</button>
							</a>
						</div>
					</div>
				</div>
			);
		});

		const url = new URL(document.location);
		const hasId = url.searchParams.has("id");

		if (hasId) {
			return <RevSolPatCom id={url.searchParams.get("id")} />;
		}
		return (
			<div className="container-fluid">
				<div className="row mt-3">
					<nav className="col-md-3 d-none d-md-block bg-light sidebar">
						<div className="sidebar-sticky">
							<ul className="nav flex-column">
								<li className="nav-item">
									<a
										href="./PageListSolPatNueva"
										className="nav-link sidebar-heading 
                         d-flex justify-content-between align-items-center"
									>
										<i className="fas fa-book-open"></i>
										Patentes Nuevas
										<span className="badge badge-primary badge-pill">
											{this.state.todos.length}
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										href="./PageListSolPatNueva"
										className="nav-link  sidebar-heading 
                         d-flex justify-content-between align-items-center"
									>
										<i className="fas fa-tasks"></i>
										Patentes Pendientes
										<span className="badge badge-primary badge-pill">
											{this.state.todos.length}
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										href="./PageListSolPatNueva"
										className="nav-link  sidebar-heading 
                         d-flex justify-content-between align-items-center"
									>
										<i className="fas fa-check"></i>
										Patentes Aprobadas
										<span className="badge badge-primary badge-pill">
											{this.state.todos.length}
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										href="./PageListSolPatNueva"
										className="nav-link sidebar-heading 
                         d-flex justify-content-between align-items-center"
									>
										<i className="fas fa-trash"></i>
										Patentes Rechazadas
										<span className="badge badge-primary badge-pill">
											{this.state.todos.length}
										</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="col-md-7">
						<div className="row">{todos}</div>
					</div>
				</div>
			</div>
		);
	}
}
