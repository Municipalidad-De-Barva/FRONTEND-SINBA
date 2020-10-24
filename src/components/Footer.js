import React, {Component} from "react";

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer className="page-footer font-small mdb-color dark-3 pt-4" >
				<div className="container text-center text-md-left">
					<div className="row">
						<div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
							<h5 className="font-weight-bold text-uppercase mb-4">
								<h5>Municipalidad de Barva</h5>
							</h5>
							
						</div>

						<hr className="clearfix w-100 d-md-none" />

						<div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
							<h5 className="font-weight-bold text-uppercase mb-4"><img src="logo512.png" width="150" height="150"></img></h5>

							<ul className="list-unstyled">
								<li>
									<p>
										<a href="#!"></a>
									</p>
								</li>
							</ul>
						</div>

						<hr className="clearfix w-100 d-md-none" />

						<div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
							<h5 className="font-weight-bold text-uppercase mb-4">Contacto</h5>

							<ul className="list-unstyled">
								<li>
									<p>
										<i className="fas fa-home mr-3"></i> Heredia, Barva	
									</p>
								</li>
						
								<li>
									<p>
										<i className="fas fa-phone mr-3"></i> 2260-3292
									</p>
								</li>
								<li>
									<p>
										<i className="fas fa-print mr-3"></i> 2260-3120
									</p>
								</li>
							</ul>
						</div>
					</div>

					<div className="row d-flex align-items-center">
						<div className="col-md-7 col-lg-8">
							<p className="text-center text-md-left">
								© 2020 Copyright:
								<a href="https://munibarva.go.cr/">
									<strong> Municipalidad de Barva</strong>
								</a>
							</p>
						</div>

						<div className="col-md-5 col-lg-4 ml-lg-0">
							<div className="text-center text-md-right">
								<ul className="list-unstyled list-inline">
									<li className="list-inline-item">
										<a
											className="btn-floating btn-sm rgba-white-slight mx-1"
											href="http://www.twitter.com/munibarva"
										>
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="btn-floating btn-sm rgba-white-slight mx-1"
											href="https://www.facebook.com/pages/Municipadivdad-de-Barva/1565214213707381?fref=ts"
										>
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>

									<li className="list-inline-item">
										<a
											className="btn-floating btn-sm rgba-white-slight mx-1"
											href="https://plus.google.com/u/0/b/103743821005257143011/103743821005257143011/posts"
										>
											<i className="fab fa-google-plus-g"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="btn-floating btn-sm rgba-white-slight mx-1"
											href="skype:munibarva?call"
										>
											<i className="fab fa-skype"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="btn-floating btn-sm rgba-white-slight mx-1"
											href="https://www.youtube.com/channel/UCYa55zSGnjWN208pETfTgcQ"
										>
											<i className="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
