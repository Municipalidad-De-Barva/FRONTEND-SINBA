import React, {Component} from "react";
import "@fortawesome/fontawesome-free";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col">
							<a href="https://www.office.com/">
								Correo Institucional <i className="far fa-envelope"></i>
							</a>
						</div>
						<div className="col-md-auto"></div>
						<div className="col col-lg-2">
							<ul>
								<li className="social-twitter">
									<a
										href="http://www.twitter.com/munibarva"
										data-original-title="Twitter"
									>
										Twitter <i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="social-facebook">
									<a
										href="https://www.facebook.com/pages/Municipadivdad-de-Barva/1565214213707381?fref=ts"
										data-original-title="Facebook"
									>
										Facebook <i className="fab fa-facebook-square"></i>
									</a>
								</li>
								<li className="social-skype">
									<a href="skype:munibarva?call" data-original-title="Skype">
										Skype <i className="fab fa-skype"></i>
									</a>
								</li>
								<li className="social-google">
									<a
										href="https://plus.google.com/u/0/b/103743821005257143011/103743821005257143011/posts"
										data-original-title="Google"
									>
										Google+ <i className="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li className="social-youtube">
									<a
										href="https://www.youtube.com/channel/UCYa55zSGnjWN208pETfTgcQ"
										data-original-title="YouTube"
									>
										YouTube <i className="fab fa-youtube"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<header>
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<a
							class="navbar-brand"
							href="https://getbootstrap.com/docs/4.5/components/navbar/"
						>
							Navbar
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<a
										class="nav-link"
										href="https://getbootstrap.com/docs/4.5/components/navbar/"
									>
										Home <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://getbootstrap.com/docs/4.5/components/navbar/"
									>
										Features
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://getbootstrap.com/docs/4.5/components/navbar/"
									>
										Pricing
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link disabled"
										href="https://getbootstrap.com/docs/4.5/components/navbar/"
										tabindex="-1"
										aria-disabled="true"
									>
										Disabled
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
