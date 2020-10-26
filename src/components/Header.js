import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className=" text-center">
				<header>
					<nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
						<a className="navbar-brand" href="https://www.office.com/">
							Correo Institucional <i className="far fa-envelope"></i>
						</a>

						<div className="collapse navbar-collapse">
							{/*start menu */}
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link waves-effect waves-light" href="./">
										<span className="sr-only">(current)</span>
									</a>
								</li>
							</ul>
							{/* end menu */}
							{/*start socialmedia */}
							<ul className="navbar-nav ml-auto nav-flex-icons">
								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="http://www.twitter.com/munibarva"
									>
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="https://www.facebook.com/pages/Municipadivdad-de-Barva/1565214213707381?fref=ts"
									>
										<i className="fab fa-facebook"></i>
									</a>
								</li>

								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="https://plus.google.com/u/0/b/103743821005257143011/103743821005257143011/posts"
									>
										<i className="fab fa-google-plus-g"></i>
									</a>
								</li>

								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="skype:munibarva?call"
									>
										<i className="fab fa-skype"></i>
									</a>
								</li>

								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="https://www.youtube.com/channel/UCYa55zSGnjWN208pETfTgcQ"
									>
										<i className="fab fa-youtube"></i>
									</a>
								</li>
							</ul>
							{/* end socialmedia */}
						</div>
					</nav>
					<div>
						<img
							src="./images/logoHeader.png"
							alt="Municipalidad de Barva"
							height="64px"
							width="256x"
						/>
					</div>

					<nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent-3"
							aria-controls="navbarSupportedContent-3"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent-3"
						>
							{/*start menu */}
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a
										className="nav-link waves-effect waves-light"
										href="https://munibarva.go.cr/"
									>
										<span className="sr-only">(current)</span>Inicio
									</a>
								</li>

								<li className="nav-item">
									<a
										className="nav-link waves-effect waves-light"
										href="https://munibarva.go.cr/tramites-en-linea/"
									>
										<span className="sr-only">(current)</span>Municipalidad
									</a>
								</li>
							</ul>
							{/* end menu */}
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
