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
	render() {
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
										type="email"
										id="defaultLoginFormEmail"
										class="form-control mb-4"
										placeholder="E-mail"
									/>

									<input
										type="password"
										id="defaultLoginFormPassword"
										class="form-control mb-4"
										placeholder="Password"
									/>

									<div class="d-flex justify-content-around">
										<div>
											<div class="custom-control custom-checkbox">
												<input
													type="checkbox"
													class="custom-control-input"
													id="defaultLoginFormRemember"
												/>
												<label
													class="custom-control-label"
													for="defaultLoginFormRemember"
												>
													Recordarme
												</label>
											</div>
										</div>
										<div>
											<a href="./">Olvido la contraseña?</a>
										</div>
									</div>

									<button
										class="btn btn-info btn-block my-4 col-sm-2"
										type="submit"
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
