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
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col">
							<a href="https://www.office.com/">
								Correo Institucional <i className="far fa-envelope"></i>
							</a>
						</div>
						<div class="col-md-auto"></div>
						<div class="col col-lg-2">
							<div>
								<div class="social-twitter">
									<a
										href="http://www.twitter.com/munibarva"
										data-original-title="Twitter"
									>
										Twitter <i class="fab fa-twitter"></i>
									</a>
								</div>
								<div class="social-facebook">
									<a
										href="https://www.facebook.com/pages/Municipadivdad-de-Barva/1565214213707381?fref=ts"
										data-original-title="Facebook"
									>
										Facebook <i class="fab fa-facebook-square"></i>
									</a>
								</div>
								<div class="social-skype">
									<a href="skype:munibarva?call" data-original-title="Skype">
										Skype <i class="fab fa-skype"></i>
									</a>
								</div>
								<div class="social-google">
									<a
										href="https://plus.google.com/u/0/b/103743821005257143011/103743821005257143011/posts"
										data-original-title="Google"
									>
										Google+ <i class="fab fa-google-plus-g"></i>
									</a>
								</div>
								<div class="social-youtube">
									<a
										href="https://www.youtube.com/channel/UCYa55zSGnjWN208pETfTgcQ"
										data-original-title="YouTube"
									>
										YouTube <i class="fab fa-youtube"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<header></header>
			</div>
		);
	}
}
