import React, {Component} from "react";

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer class="page-footer font-small mdb-color lighten-3 pt-4">
				<div class="container text-center text-md-left">
					<div class="row">
						<div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
							<h5 class="font-weight-bold text-uppercase mb-4">
								Footer Content
							</h5>
							<p>
								Here you can use rows and columns to organize your footer
								content.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
								amet numquam iure provident voluptate esse quasi, veritatis
								totam voluptas nostrum.
							</p>
						</div>

						<hr class="clearfix w-100 d-md-none" />

						<div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
							<h5 class="font-weight-bold text-uppercase mb-4">About</h5>

							<ul class="list-unstyled">
								<li>
									<p>
										<a href="#!">PROJECTS</a>
									</p>
								</li>
								<li>
									<p>
										<a href="#!">ABOUT US</a>
									</p>
								</li>
								<li>
									<p>
										<a href="#!">BLOG</a>
									</p>
								</li>
								<li>
									<p>
										<a href="#!">AWARDS</a>
									</p>
								</li>
							</ul>
						</div>

						<hr class="clearfix w-100 d-md-none" />

						<div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
							<h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

							<ul class="list-unstyled">
								<li>
									<p>
										<i class="fas fa-home mr-3"></i> New York, NY 10012, US
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-envelope mr-3"></i> info@example.com
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-phone mr-3"></i> + 01 234 567 88
									</p>
								</li>
								<li>
									<p>
										<i class="fas fa-print mr-3"></i> + 01 234 567 89
									</p>
								</li>
							</ul>
						</div>
					</div>

					<div class="row d-flex align-items-center">
						<div class="col-md-7 col-lg-8">
							<p class="text-center text-md-left">
								© 2020 Copyright:
								<a href="https://mdbootstrap.com/">
									<strong> MDBootstrap.com</strong>
								</a>
							</p>
						</div>

						<div class="col-md-5 col-lg-4 ml-lg-0">
							<div class="text-center text-md-right">
								<ul class="list-unstyled list-inline">
									<li class="list-inline-item">
										<a class="btn-floating btn-sm rgba-white-slight mx-1">
											<i class="fab fa-facebook-f"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a class="btn-floating btn-sm rgba-white-slight mx-1">
											<i class="fab fa-twitter"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a class="btn-floating btn-sm rgba-white-slight mx-1">
											<i class="fab fa-google-plus-g"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a class="btn-floating btn-sm rgba-white-slight mx-1">
											<i class="fab fa-linkedin-in"></i>
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
