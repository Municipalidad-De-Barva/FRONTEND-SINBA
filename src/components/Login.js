import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "./Header";
import Footer from "./Footer";

export default class Login extends Component {
	render() {
		return (
			<div>
				<Header />
				<PaginaLogin />
				<Footer />
			</div>
		);
	}
}

class PaginaLogin extends Component {
	constructor(props) {
		super();
		this.state = {
			user: "",
			pass: "",
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

		fetch("http://localhost:3001/api/admLogIn", {
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
								<form class="text-center border border-light p-5" action="#!">
									<p class="h4 mb-4">Iniciar Sección</p>

									<input
										type="text"
										id="user"
										name="user"
										class="form-control mb-4"
										placeholder="Ingrese su numero de cedúla"
										value={user}
										onChange={this.handleInputChange}
									/>

									<input
										type="password"
										id="pass"
										name="pass"
										class="form-control mb-4"
										placeholder="Ingrese su contraseña"
										value={pass}
										onChange={this.handleInputChange}
									/>

									<div class="d-flex justify-content-around">
										{/*}
										<div>
											<div class="custom-control custom-checkbox">
												<input
													value={remember}
													onChange={this.handleInputChange}
													type="checkbox"
													class="custom-control-input"
													id="remember"
												/>
												<label class="custom-control-label" htmlFor="remember">
													Recordarme
												</label>
											</div>
										</div>
										*/}
										<div>
											<a href="./">Olvido la contraseña?</a>
										</div>
									</div>

									<button
										class="btn btn-info btn-block my-4 col-sm-2"
										type="submit"
										onClick={this.onClick}
									>
										Entrar
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
