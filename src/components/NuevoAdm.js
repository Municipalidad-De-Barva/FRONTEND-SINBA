import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "./Header";
import Footer from "./Footer";

export default class NuevoAdm extends Component {
	render() {
		return (
			<div>
				<Header />
				<PagNAdmin />
				<Footer />
			</div>
		);
	}
}

class PagNAdmin extends Component {
	constructor(props) {
		super();
		this.state = {
			user: "",
			pass: "",
			name: "",
			rol: "",
			email: "",
		};

		this.onClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const {value, name} = e.target;
		console.log(value, name);

		this.setState({
			[name]: value,
		});
	}

	handleClick() {
		console.log(
			"Preparando datos para enviar al servidor, mostrar datos:",
			this.state
		);

		fetch("http://localhost:3001/api/newEmp", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				/*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
			},
			body: JSON.stringify(this.state),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("respuesta del servidor: ", data);
			});
	}

	render() {
		const {user, pass} = this.state;
		return (
			<div
				className="image-container set-full-height"
				style={{
					backgroundImage:
						"url(" +
						"https://images.pexels.com/photos/4476623/pexels-photo-4476623.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4476623.jpg&fm=jpg" +
						")",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="container">
					<br />
					<br />
					<div className="row">
						<div className="col-sm-12 col-sm-offset-12">
							<div className="card text-center">
								<form
									className="text-center border border-light p-5"
									action="#!"
								>
									<p className="h4 mb-4">Registrar usuario</p>

									<input
										type="text"
										id="user"
										name="user"
										className="form-control mb-4"
										placeholder="Ingrese el numero de cédula"
										value={user}
										onChange={this.handleInputChange}
									/>

									<input
										type="text"
										id="pass"
										name="pass"
										className="form-control mb-4"
										placeholder="Ingrese la contraseña temporal"
										value={pass}
										onChange={this.handleInputChange}
									/>

									<input
										type="text"
										id="name"
										name="name"
										className="form-control mb-4"
										placeholder="Ingrese el nombre"
										value={pass}
										onChange={this.handleInputChange}
									/>

									<select
										className="custom-select mr-sm-2 mb-4"
										id="rol"
										name="rol"
									>
										<option value="0" defaultValue>
											Choose...
										</option>
										<option value="1">Jefa/e patentes</option>
										<option value="2">Informática</option>
										<option value="3">Inspector</option>
									</select>

									<input
										type="text"
										id="email"
										name="email"
										className="form-control mb-4"
										placeholder="Ingrese el correo"
										value={pass}
										onChange={this.handleInputChange}
									/>
									<div className="d-flex justify-content-around">
										{/*}
										<div>
											<div className="custom-control custom-checkbox">
												<input
													value={remember}
													onChange={this.handleInputChange}
													type="checkbox"
													className="custom-control-input"
													id="remember"
												/>
												<label className="custom-control-label" htmlFor="remember">
													Recordarme
												</label>
											</div>
										</div>
										*/}
									</div>

									<button
										className="btn btn-info btn-block my-4 col-sm-2"
										type="submit"
										onClick={this.onClick}
									>
										Registrar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}
}